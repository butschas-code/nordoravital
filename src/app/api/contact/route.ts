import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string().min(2),
  professionalCategory: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  preferredContactMethod: z.enum(["email", "phone", "either"]),
  message: z.string().min(10),
  languages: z.array(z.enum(["de", "en", "lv"])).min(1),
  consentContact: z.literal(true),
  source: z.literal("contact").optional(),
});

const DEFAULT_TO = "butschas@gmail.com";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(data: z.infer<typeof bodySchema>) {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Professional category", data.professionalCategory],
    ["Preferred contact", data.preferredContactMethod],
    ["Languages", data.languages.join(", ")],
    ["Message", data.message],
  ];
  if (data.phone) rows.splice(3, 0, ["Phone", data.phone]);

  const bodyRows = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #D8CEC2;font-weight:600;background:#EFE9E2">${escapeHtml(k)}</td><td style="padding:8px 12px;border:1px solid #D8CEC2">${escapeHtml(v)}</td></tr>`,
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<body style="font-family:system-ui,sans-serif;color:#1E2A22;line-height:1.5">
  <h1 style="font-size:18px">Nordora Vital — contact enquiry</h1>
  <table style="border-collapse:collapse;max-width:560px;margin-top:12px">${bodyRows}</table>
  <p style="margin-top:16px;font-size:13px;color:#6D6158">Reply directly to this email to reach the sender (${escapeHtml(data.email)}).</p>
</body>
</html>`.trim();
}

/**
 * Sends enquiries to CONTACT_EMAIL_TO (default butschas@gmail.com).
 * Set RESEND_API_KEY and a verified CONTACT_EMAIL_FROM in production.
 */
export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = bodySchema.parse(json);

    const to = process.env.CONTACT_EMAIL_TO ?? DEFAULT_TO;
    const from =
      process.env.CONTACT_EMAIL_FROM ??
      "Nordora Vital <onboarding@resend.dev>";

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      if (process.env.NODE_ENV === "development") {
        console.info(
          "[contact] DEV: RESEND_API_KEY missing — email not sent. Payload:",
          JSON.stringify(data, null, 2),
        );
        return NextResponse.json({ ok: true, dev: true });
      }
      console.warn(
        "[contact] RESEND_API_KEY is not set — email not sent.",
        { name: data.name, email: data.email },
      );
      return NextResponse.json(
        {
          ok: false,
          error: "email_not_configured",
          hint: "Set RESEND_API_KEY and CONTACT_EMAIL_FROM in .env",
        },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `[Nordora] ${data.name} — contact`,
      html: buildEmailHtml(data),
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        data.phone ? `Phone: ${data.phone}` : null,
        `Category: ${data.professionalCategory}`,
        `Contact method: ${data.preferredContactMethod}`,
        `Languages: ${data.languages.join(", ")}`,
        "",
        data.message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error", error);
      return NextResponse.json(
        { ok: false, error: "email_failed" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.warn("[contact enquiry] validation or parse error", err);
    return NextResponse.json(
      { ok: false, error: "invalid_payload" },
      { status: 400 },
    );
  }
}
