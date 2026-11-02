import { describe, expect, it } from "vitest";
import { assertEnv, envWarnings, parseEnv } from "@/lib/env";

describe("environment schema", () => {
  it("accepts an empty environment", () => {
    expect(parseEnv({}).success).toBe(true);
  });
  it("accepts the documented production values", () => {
    const env = assertEnv({
      RESEND_API_KEY: "re_123",
      CONTACT_EMAIL_TO: "info@nordoravital.com",
      CONTACT_EMAIL_FROM: "Nordora Vital <hello@nordoravital.com>",
      NEXT_PUBLIC_POSTHOG_HOST: "https://eu.i.posthog.com",
      NEXT_PUBLIC_CAL_DISCOVERY_URL: "https://cal.eu/nordoravital/discovery-call",
    });
    expect(env.CONTACT_EMAIL_TO).toBe("info@nordoravital.com");
  });
  it.each([
    ["RESEND_API_KEY", "sk_123"],
    ["CONTACT_EMAIL_TO", "not-an-email"],
    ["CONTACT_EMAIL_FROM", "Nordora"],
    ["NEXT_PUBLIC_POSTHOG_HOST", "http://eu.i.posthog.com"],
    ["NEXT_PUBLIC_CAL_DISCOVERY_URL", "cal.eu/x"],
  ])("rejects a malformed %s", (key, value) => {
    expect(() => assertEnv({ [key]: value })).toThrow(key);
  });
  it("warns when production has no email key", () => {
    const env = parseEnv({ VERCEL_ENV: "production" });
    expect(env.success && envWarnings(env.data)).toHaveLength(1);
  });
});
