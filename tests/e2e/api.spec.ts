import { expect, test } from "@playwright/test";

/**
 * Only payloads that are rejected before any email is sent. The test server also
 * runs with RESEND_API_KEY unset (playwright.config.ts), so nothing can be sent.
 */
test.describe("enquiry API validation", () => {
  test.skip(({ browserName, isMobile }) => browserName !== "chromium" || isMobile, "HTTP-level checks");

  for (const route of ["/api/contact", "/api/booking"]) {
    test(`${route} rejects bad input before sending`, async ({ request }) => {
      const ip = { "x-forwarded-for": `198.51.100.${route.length}` };
      const malformed = await request.post(route, {
        headers: { ...ip, "content-type": "application/json" },
        data: "{not json",
      });
      expect(malformed.status()).toBe(400);

      const missing = await request.post(route, { headers: ip, data: { name: "A" } });
      expect(missing.status()).toBe(400);
      expect(missing.headers()["cache-control"]).toContain("no-store");

      const oversized = await request.post(route, {
        headers: ip,
        data: { name: "Test", email: "t@example.com", message: "x".repeat(40_000) },
      });
      expect(oversized.status()).toBe(413);

      const wrongType = await request.post(route, {
        headers: { ...ip, "content-type": "text/plain" },
        data: "hello",
      });
      expect(wrongType.status()).toBe(415);
    });
  }

  test("enquiries are rate-limited per client", async ({ request }) => {
    const headers = { "x-forwarded-for": "203.0.113.77" };
    const statuses: number[] = [];
    for (let i = 0; i < 7; i++) {
      statuses.push((await request.post("/api/contact", { headers, data: {} })).status());
    }
    expect(statuses.slice(0, 5)).toEqual([400, 400, 400, 400, 400]);
    expect(statuses.at(-1)).toBe(429);
  });
});
