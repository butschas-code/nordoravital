import { expect, test } from "@playwright/test";
import { dismissCookieBanner, sitemapPaths, TEMPLATE_PAGES, trackErrors } from "./helpers";

test.describe("smoke", () => {
  test("every sitemap URL answers 200", async ({ request }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop-chrome", "HTTP-only check, one engine is enough");
    test.setTimeout(300_000);
    const paths = await sitemapPaths(request);
    expect(paths.length).toBeGreaterThan(100);
    const failures: string[] = [];
    for (const path of paths) {
      const res = await request.get(path, { maxRedirects: 0 });
      if (res.status() !== 200) failures.push(`${res.status()} ${path}`);
    }
    expect(failures).toEqual([]);
  });

  for (const path of TEMPLATE_PAGES) {
    test(`${path} renders without errors and without horizontal scroll`, async ({ page }) => {
      await dismissCookieBanner(page);
      const errors = await trackErrors(page);
      const res = await page.goto(path, { waitUntil: "load" });
      expect(res?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      const { scrollWidth, innerWidth } = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      }));
      expect(scrollWidth).toBeLessThanOrEqual(innerWidth);
      expect(errors).toEqual([]);
    });
  }
});
