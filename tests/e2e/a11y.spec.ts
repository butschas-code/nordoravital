import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { dismissCookieBanner, TEMPLATE_PAGES } from "./helpers";

test.describe("accessibility", () => {
  for (const path of TEMPLATE_PAGES) {
    test(`${path} has no critical or serious axe violations`, async ({ page }) => {
      await dismissCookieBanner(page);
      await page.goto(path, { waitUntil: "load" });
      const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
      const serious = results.violations
        .filter((v) => v.impact === "critical" || v.impact === "serious")
        .map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).slice(0, 5).join(" | ")}`);
      expect(serious).toEqual([]);
    });
  }

  test("skip link is the first focusable element and moves focus to main", async ({ page, browserName, isMobile }) => {
    test.skip(browserName !== "chromium" || isMobile, "WebKit only tabs to links with Option+Tab");
    await dismissCookieBanner(page);
    for (const path of ["/en/offers", "/en/home"]) {
      await page.goto(path);
      await page.keyboard.press("Tab");
      const skip = page.getByRole("link", { name: "Skip to main content" });
      await expect(skip).toBeFocused();
      await page.keyboard.press("Enter");
      await expect(page.locator("main").first()).toBeFocused();
    }
  });
});
