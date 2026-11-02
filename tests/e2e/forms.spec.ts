import { expect, test } from "@playwright/test";
import { dismissCookieBanner } from "./helpers";

test.describe("forms", () => {
  test.beforeEach(async ({ page }) => dismissCookieBanner(page));

  test("invalid fields are marked and linked to their error", async ({ page }) => {
    await page.goto("/en/booking");
    await page.getByRole("button", { name: /send|submit|book|request/i }).first().click();
    const name = page.locator("#name");
    await expect(name).toHaveAttribute("aria-invalid", "true");
    await expect(name).toHaveAttribute("aria-describedby", "name-error");
    await expect(page.locator("#name-error")).toBeVisible();
  });

  test("on a slow connection the form shows progress, then success (API stubbed)", async ({ page, browserName }) => {
    test.skip(browserName !== "chromium", "CDP throttling is Chromium-only");
    const cdp = await page.context().newCDPSession(page);
    await cdp.send("Network.enable");
    await cdp.send("Network.emulateNetworkConditions", {
      offline: false,
      latency: 400,
      downloadThroughput: 50 * 1024,
      uploadThroughput: 50 * 1024,
    });
    // Stubbed: no request reaches the real API, so no email can be sent.
    let release: () => void = () => {};
    await page.route("**/api/booking", async (route) => {
      await new Promise<void>((resolve) => (release = resolve));
      await route.fulfill({ status: 200, json: { ok: true } });
    });

    await page.goto("/en/booking", { timeout: 120_000 });
    await page.locator("#name").fill("Test Person");
    await page.locator("#email").fill("test@example.com");
    const submit = page.locator('form button[type="submit"]').first();
    await submit.click();
    await expect(submit).toBeDisabled();
    release();
    await expect(page.getByRole("status").or(page.getByRole("alert")).first()).toBeVisible();
    await expect(submit).toBeEnabled();
  });
});
