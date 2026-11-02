import { expect, test } from "@playwright/test";
import { TEMPLATE_PAGES } from "./helpers";

test.describe("SEO", () => {
  test.skip(({ browserName, isMobile }) => browserName !== "chromium" || isMobile, "markup is engine-independent");

  for (const path of TEMPLATE_PAGES.filter((p) => p !== "/")) {
    test(`${path} has title, description, canonical, hreflang and valid JSON-LD`, async ({ page }) => {
      await page.goto(path);
      expect((await page.title()).length).toBeGreaterThan(10);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.{40,}/);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
      expect(canonical).toMatch(/^https:\/\/[^/]+\/(de|en|lv|ru)(\/|$)/);
      expect(canonical).not.toMatch(/\/$/);
      await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveCount(1);
      await expect(page.locator('meta[property="og:image"]').first()).toHaveAttribute("content", /^https:\/\//);
      await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary_large_image");
      for (const block of await page.locator('script[type="application/ld+json"]').allTextContents()) {
        const data = JSON.parse(block);
        for (const item of Array.isArray(data) ? data : [data]) {
          expect(item["@context"]).toBe("https://schema.org");
          expect(item["@type"]).toBeTruthy();
          expect(item["@type"]).not.toBe("MedicalBusiness");
        }
      }
    });
  }

  test("robots.txt keeps private paths out and names the sitemap", async ({ request }) => {
    const res = await request.get("/robots.txt", { headers: { "x-forwarded-host": "pro.nordoravital.com" } });
    const body = await res.text();
    expect(body).toContain("Disallow: /api/");
    expect(body).toContain("User-Agent: GPTBot");
    expect(body).toContain("Sitemap: https://pro.nordoravital.com/sitemap.xml");
  });

  test("llms.txt and the manifest are served", async ({ request }) => {
    const llms = await request.get("/llms.txt");
    expect(llms.status()).toBe(200);
    expect(await llms.text()).toContain("# Nordora Vital");
    const manifest = await request.get("/manifest.webmanifest");
    expect((await manifest.json()).theme_color).toBe("#0E3D34");
  });
});
