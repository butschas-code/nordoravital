import { expect, test } from "@playwright/test";

test.describe("security headers and 404", () => {
  test.skip(({ browserName, isMobile }) => browserName !== "chromium" || isMobile, "HTTP-level checks");

  test("pages send the security headers without unsafe-eval or X-Powered-By", async ({ request }) => {
    const res = await request.get("/en");
    const h = res.headers();
    expect(h["content-security-policy"]).toContain("frame-ancestors 'none'");
    expect(h["content-security-policy"]).not.toContain("unsafe-eval");
    expect(h["strict-transport-security"]).toContain("max-age=63072000");
    expect(h["x-content-type-options"]).toBe("nosniff");
    expect(h["x-frame-options"]).toBe("DENY");
    expect(h["referrer-policy"]).toBe("strict-origin-when-cross-origin");
    expect(h["permissions-policy"]).toContain("camera=()");
    expect(h["x-powered-by"]).toBeUndefined();
  });

  test("public images get a bounded cache, not immutable", async ({ request }) => {
    const res = await request.get("/images/professionals-hero.jpg");
    expect(res.headers()["cache-control"]).toContain("max-age=604800");
  });

  test("health check is live and uncached", async ({ request }) => {
    const res = await request.get("/api/health");
    expect(res.status()).toBe(200);
    expect((await res.json()).status).toBe("ok");
    expect(res.headers()["cache-control"]).toContain("no-store");
  });

  test("unknown pages return 404 with noindex", async ({ page }) => {
    const res = await page.goto("/en/this-page-does-not-exist");
    expect(res?.status()).toBe(404);
    await expect(page.locator('meta[name="robots"][content*="noindex"]')).toHaveCount(1);
    await expect(page.locator("h1")).toHaveText("Page not found");
  });

  test("local flyer previews are not served in production", async ({ request }) => {
    expect((await request.get("/en/flyers/home")).status()).toBe(404);
  });
});
