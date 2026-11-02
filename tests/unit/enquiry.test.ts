import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  contactEmail,
  contactSchema,
  handleEnquiry,
  type ContactEnquiry,
} from "@/lib/server/enquiry";
import { createRateLimiter } from "@/lib/server/rate-limit";

const valid: ContactEnquiry = {
  name: "Test Person",
  professionalCategory: "Physiotherapist",
  email: "test@example.com",
  preferredContactMethod: "email",
  message: "Hello, I would like a demo.",
  languages: ["en"],
  consentContact: true,
};

function post(body: unknown, headers: Record<string, string> = {}) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": "203.0.113.9", ...headers },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

let fetchImpl: ReturnType<typeof vi.fn>;
let logs: string[];

function run(request: Request, env: Record<string, string | undefined>, limit = 5) {
  return handleEnquiry(request, {
    kind: "contact",
    schema: contactSchema,
    toEmail: contactEmail,
    deps: {
      env,
      fetchImpl: fetchImpl as unknown as typeof fetch,
      limiter: createRateLimiter({ limit, windowMs: 60_000 }),
    },
  });
}

const prodEnv = { NODE_ENV: "production", RESEND_API_KEY: "re_test" };

beforeEach(() => {
  fetchImpl = vi.fn(async () => Response.json({ id: "email_1" }));
  logs = [];
  for (const level of ["info", "warn", "error"] as const) {
    vi.spyOn(console, level).mockImplementation((line: string) => {
      logs.push(String(line));
    });
  }
});

describe("handleEnquiry", () => {
  it("sends a valid enquiry once, with no-store", async () => {
    const res = await run(post(valid), prodEnv);
    expect(res.status).toBe(200);
    expect(res.headers.get("cache-control")).toContain("no-store");
    expect(fetchImpl).toHaveBeenCalledTimes(1);
    const sent = JSON.parse(fetchImpl.mock.calls[0][1].body);
    expect(sent.to).toEqual(["info@nordoravital.com"]);
    expect(sent.reply_to).toBe(valid.email);
  });

  it("rejects missing fields with 400 before sending", async () => {
    const res = await run(post({ ...valid, email: "nope" }), prodEnv);
    expect(res.status).toBe(400);
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it("rejects a payload without consent", async () => {
    const res = await run(post({ ...valid, consentContact: false }), prodEnv);
    expect(res.status).toBe(400);
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it("rejects oversized fields and bodies", async () => {
    expect((await run(post({ ...valid, message: "x".repeat(6000) }), prodEnv)).status).toBe(400);
    expect((await run(post({ ...valid, pad: "x".repeat(40_000) }), prodEnv)).status).toBe(413);
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it("rate-limits per client before reading the body", async () => {
    const env = { NODE_ENV: "production" }; // no key: nothing could be sent anyway
    const limiter = createRateLimiter({ limit: 2, windowMs: 60_000 });
    const call = () =>
      handleEnquiry(post("{bad"), {
        kind: "contact",
        schema: contactSchema,
        toEmail: contactEmail,
        deps: { env, limiter },
      });
    expect((await call()).status).toBe(400);
    expect((await call()).status).toBe(400);
    const limited = await call();
    expect(limited.status).toBe(429);
    expect(limited.headers.get("retry-after")).toBeTruthy();
  });

  it("answers 503 in production when no email key is set", async () => {
    const res = await run(post(valid), { NODE_ENV: "production" });
    expect(res.status).toBe(503);
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it("does not send in development without a key", async () => {
    const res = await run(post(valid), { NODE_ENV: "development" });
    expect(await res.json()).toEqual({ ok: true, dev: true });
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it("answers 502 when the provider fails", async () => {
    fetchImpl = vi.fn(async () => Response.json({}, { status: 500 }));
    expect((await run(post(valid), prodEnv)).status).toBe(502);
  });

  it("never logs personal data", async () => {
    await run(post(valid), prodEnv);
    await run(post({ ...valid, email: "bad-address" }), prodEnv);
    const all = logs.join("\n");
    for (const value of [valid.name, valid.email, valid.message, "bad-address"]) {
      expect(all).not.toContain(value);
    }
    for (const line of logs) expect(JSON.parse(line)).toHaveProperty("event");
  });
});

describe("booking enquiries", () => {
  it("emails pilot and sector bookings to the contact inbox, skipping empty fields", async () => {
    const { bookingEmail, bookingSchema } = await import("@/lib/server/enquiry");
    const request = post({
      name: "Test Person",
      email: "test@example.com",
      phone: "",
      sector: "Physiotherapy",
      preferredStart: "Spring",
      source: "pilot",
    });
    const res = await handleEnquiry(request, {
      kind: "booking",
      schema: bookingSchema,
      toEmail: bookingEmail,
      deps: {
        env: { ...prodEnv, CONTACT_EMAIL_TO: "team@example.com" },
        fetchImpl: fetchImpl as unknown as typeof fetch,
        limiter: createRateLimiter({ limit: 5, windowMs: 60_000 }),
      },
    });
    expect(res.status).toBe(200);
    const sent = JSON.parse(fetchImpl.mock.calls[0][1].body);
    expect(sent.to).toEqual(["team@example.com"]);
    expect(sent.subject).toContain("pilot");
    expect(sent.text).toContain("Sector: Physiotherapy");
    expect(sent.text).not.toContain("Phone");
    expect(logs.join("\n")).not.toContain("test@example.com");
  });
});
