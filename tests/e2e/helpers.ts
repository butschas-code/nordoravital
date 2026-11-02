import type { APIRequestContext, Page } from "@playwright/test";

/** One page per template. Paths work on localhost, where the proxy treats the host as "local". */
export const TEMPLATE_PAGES = [
  "/",
  "/en",
  "/en/how-it-works",
  "/en/offers",
  "/en/professionals",
  "/en/professionals/physiotherapists",
  "/en/compare/pemf-systems",
  "/en/contact",
  "/en/booking",
  "/en/pilot",
  "/en/spa-viesnicas",
  "/en/privacy",
  "/en/home",
  "/en/home/faq",
  "/en/home/experience",
  "/ru/contact",
  "/lv/home/how-it-works",
];

const PRO_HOST = "pro.nordoravital.com";
const HOME_HOST = "homeuse.nordoravital.com";

/**
 * Every URL in the pro and homeuse sitemaps, mapped to the local path that renders it.
 * Reading the sitemap means new pages are covered without editing this file.
 */
export async function sitemapPaths(request: APIRequestContext): Promise<string[]> {
  const paths = new Set<string>();
  for (const host of [PRO_HOST, HOME_HOST]) {
    const res = await request.get("/sitemap.xml", { headers: { "x-forwarded-host": host } });
    const xml = await res.text();
    for (const [, loc] of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const url = new URL(loc);
      if (host === HOME_HOST) {
        const [, locale, ...rest] = url.pathname.split("/");
        paths.add(["", locale, "home", ...rest].join("/").replace(/\/$/, ""));
      } else {
        paths.add(url.pathname);
      }
    }
  }
  return [...paths];
}

/**
 * Collects uncaught errors, console errors and failed same-origin requests.
 * Vercel Analytics' script only exists on Vercel, so it is stubbed locally.
 */
export async function trackErrors(page: Page) {
  await page.route("**/_vercel/insights/**", (route) =>
    route.fulfill({ status: 200, contentType: "application/javascript", body: "" }),
  );
  const errors: string[] = [];
  page.on("response", (res) => {
    if (res.status() >= 400) errors.push(`${res.status()} ${new URL(res.url()).pathname}`);
  });
  page.on("pageerror", (err) => errors.push(`pageerror: ${err.message}`));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(`console: ${msg.text()}`);
  });
  return errors;
}

/** Hides the cookie banner by recording a choice before the page loads. */
export async function dismissCookieBanner(page: Page) {
  await page.addInitScript(() => {
    try {
      window.localStorage.setItem("nv_cookie_consent", "essential");
    } catch {
      /* ignore */
    }
  });
}
