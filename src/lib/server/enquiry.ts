import { z } from "zod";
import { logEvent } from "./log";
import { clientIp, createRateLimiter, type RateLimiter } from "./rate-limit";
import { readJsonBody } from "./read-json";
import { enquiryEmailHtml, sendEmail, type EmailMessage } from "./send-email";

const name = z.string().trim().min(2).max(120);
const email = z.email().max(254);
const shortText = z.string().trim().max(200);
const longText = z.string().trim().max(5000);

export const contactSchema = z.object({
  name,
  professionalCategory: shortText.min(1),
  email,
  phone: z.string().trim().max(40).optional(),
  preferredContactMethod: z.enum(["email", "phone", "either"]),
  message: longText.min(10),
  languages: z.array(z.enum(["de", "en", "lv"])).min(1).max(3),
  consentContact: z.literal(true),
  source: z.literal("contact").optional(),
});

export const bookingSchema = z.object({
  name,
  email,
  phone: z.string().trim().max(40).optional(),
  date: shortText.optional(),
  message: longText.optional(),
  professionalCategory: shortText.optional(),
  sectorSlug: z.string().trim().max(80).optional(),
  sector: shortText.optional(),
  preferredStart: shortText.optional(),
  questions: longText.optional(),
  source: z.string().trim().max(80).optional(),
});

export type ContactEnquiry = z.infer<typeof contactSchema>;
export type BookingEnquiry = z.infer<typeof bookingSchema>;

export function contactEmail(data: ContactEnquiry, from: string, to: string): EmailMessage {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ...(data.phone ? ([["Phone", data.phone]] as [string, string][]) : []),
    ["Professional category", data.professionalCategory],
    ["Preferred contact", data.preferredContactMethod],
    ["Languages", data.languages.join(", ")],
    ["Message", data.message],
  ];
  return {
    from,
    to: [to],
    replyTo: data.email,
    subject: `[Nordora] ${data.name} — contact`,
    html: enquiryEmailHtml("Nordora Vital — contact enquiry", rows, data.email),
    text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
  };
}

const BOOKING_LABELS: [keyof BookingEnquiry, string][] = [
  ["name", "Name"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["professionalCategory", "Professional category"],
  ["sector", "Sector"],
  ["sectorSlug", "Sector page"],
  ["date", "Preferred date"],
  ["preferredStart", "Preferred start"],
  ["message", "Message"],
  ["questions", "Questions"],
  ["source", "Form"],
];

export function bookingEmail(data: BookingEnquiry, from: string, to: string): EmailMessage {
  const rows = BOOKING_LABELS.flatMap(([key, label]) => {
    const value = data[key];
    return value ? ([[label, value]] as [string, string][]) : [];
  });
  return {
    from,
    to: [to],
    replyTo: data.email,
    subject: `[Nordora] ${data.name} — ${data.source ?? "booking"}`,
    html: enquiryEmailHtml("Nordora Vital — booking enquiry", rows, data.email),
    text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
  };
}

export type EnquiryDeps = {
  env: Record<string, string | undefined>;
  fetchImpl?: typeof fetch;
  limiter: RateLimiter;
};

const NO_STORE = { "Cache-Control": "no-store, max-age=0" };

function json(body: unknown, status = 200, extra: Record<string, string> = {}) {
  return Response.json(body, { status, headers: { ...NO_STORE, ...extra } });
}

/** Rate limit → size limit → schema → email. Everything before the last step has no side effect. */
export async function handleEnquiry<T>(
  request: Request,
  {
    kind,
    schema,
    toEmail,
    deps,
  }: {
    kind: "contact" | "booking";
    schema: z.ZodType<T>;
    toEmail: (data: T, from: string, to: string) => EmailMessage;
    deps: EnquiryDeps;
  },
): Promise<Response> {
  const limited = deps.limiter.check(clientIp(request.headers));
  if (!limited.ok) {
    logEvent("warn", `${kind}.rate_limited`);
    return json({ ok: false, error: "rate_limited" }, 429, {
      "Retry-After": String(limited.retryAfterSeconds),
    });
  }

  const body = await readJsonBody(request);
  if (!body.ok) {
    logEvent("warn", `${kind}.rejected`, { reason: body.error });
    return json({ ok: false, error: body.error }, body.status);
  }

  const parsed = schema.safeParse(body.value);
  if (!parsed.success) {
    // Field paths only: issue messages never carry the submitted values.
    const fields = parsed.error.issues.map((i) => i.path.join(".")).join(",");
    logEvent("warn", `${kind}.invalid`, { fields });
    return json({ ok: false, error: "invalid_payload" }, 400);
  }

  const { env } = deps;
  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    if (env.NODE_ENV === "development") {
      logEvent("info", `${kind}.dev_not_sent`);
      return json({ ok: true, dev: true });
    }
    logEvent("error", `${kind}.email_not_configured`);
    return json({ ok: false, error: "email_not_configured" }, 503);
  }

  const to = env.CONTACT_EMAIL_TO || "info@nordoravital.com";
  const from = env.CONTACT_EMAIL_FROM || "Nordora Vital <onboarding@resend.dev>";
  const result = await sendEmail(toEmail(parsed.data, from, to), {
    apiKey,
    fetchImpl: deps.fetchImpl,
  });
  if (!result.ok) {
    logEvent("error", `${kind}.email_failed`, { reason: result.reason, status: result.status });
    return json({ ok: false, error: "email_failed" }, 502);
  }

  logEvent("info", `${kind}.sent`);
  return json({ ok: true });
}

/** 5 enquiries per IP per 10 minutes, per server instance. */
export function enquiryLimiter() {
  return createRateLimiter({ limit: 5, windowMs: 10 * 60 * 1000 });
}
