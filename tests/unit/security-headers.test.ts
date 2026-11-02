import { describe, expect, it } from "vitest";
import { contentSecurityPolicy, posthogOrigins, securityHeaders } from "@/lib/security-headers";

describe("security headers", () => {
  it("never allows unsafe-eval in production", () => {
    expect(contentSecurityPolicy(false, "https://eu.i.posthog.com")).not.toContain("unsafe-eval");
    expect(contentSecurityPolicy(true, undefined)).toContain("unsafe-eval");
  });
  it("allows the PostHog ingest and asset hosts", () => {
    expect(posthogOrigins("https://eu.i.posthog.com")).toEqual([
      "https://eu.i.posthog.com",
      "https://eu-assets.i.posthog.com",
    ]);
    const csp = contentSecurityPolicy(false, "https://eu.i.posthog.com");
    expect(csp).toMatch(/connect-src [^;]*https:\/\/eu\.i\.posthog\.com/);
    expect(csp).toMatch(/script-src [^;]*https:\/\/eu-assets\.i\.posthog\.com/);
  });
  it("blocks framing", () => {
    const csp = contentSecurityPolicy(false, undefined);
    expect(csp).toContain("frame-ancestors 'none'");
    const keys = securityHeaders(false).map((h) => h.key);
    expect(keys).toEqual(
      expect.arrayContaining([
        "Strict-Transport-Security",
        "X-Content-Type-Options",
        "X-Frame-Options",
        "Referrer-Policy",
        "Permissions-Policy",
      ]),
    );
  });
});
