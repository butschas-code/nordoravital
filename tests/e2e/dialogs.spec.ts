import { expect, test } from "@playwright/test";
import { dismissCookieBanner } from "./helpers";

test.describe("dialogs", () => {
  test.beforeEach(async ({ page }) => dismissCookieBanner(page));

  test("mobile menu is labelled, closes on Escape and returns focus", async ({ page }) => {
    await page.goto("/en/offers");
    const trigger = page.getByRole("button", { name: "Open menu" });
    test.skip(!(await trigger.isVisible()), "the menu button only shows on small screens");
    await trigger.click();
    const dialog = page.getByRole("dialog", { name: "Menu" });
    await expect(dialog).toBeVisible();
    await expect(dialog.locator(":focus")).toHaveCount(1);
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(page.getByRole("button", { name: "Open menu" })).toBeFocused();
  });

  test("contact drawer is labelled, closes on Escape and returns focus", async ({ page }) => {
    await page.goto("/en/offers");
    let trigger = page.locator("button", { hasText: /contact/i }).filter({ visible: true }).first();
    if ((await trigger.count()) === 0) {
      // Small screens reach the drawer through the menu; focus then returns to the menu button.
      await page.getByRole("button", { name: "Open menu" }).click();
      await page.getByRole("dialog", { name: "Menu" }).locator("button", { hasText: /contact/i }).first().click();
      trigger = page.getByRole("button", { name: "Open menu" });
    } else {
      await trigger.focus();
      await trigger.click();
    }
    const dialog = page.getByRole("dialog", { name: /contact|talk|question/i });
    await expect(dialog).toBeVisible();
    await expect(dialog.locator(":focus")).toHaveCount(1);
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test("cookie settings link reopens the banner", async ({ page }) => {
    await page.goto("/en/offers");
    await expect(page.getByRole("dialog", { name: "We use cookies" })).toHaveCount(0);
    await page.getByRole("button", { name: "Cookie settings" }).click();
    const banner = page.getByRole("dialog", { name: "We use cookies" });
    await expect(banner).toBeVisible();
    await banner.getByRole("button", { name: "Essential only" }).click();
    await expect(banner).toHaveCount(0);
    expect(await page.evaluate(() => localStorage.getItem("nv_cookie_consent"))).toBe("essential");
  });
});
