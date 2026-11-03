import { expect, test, type APIRequestContext } from "@playwright/test";

/**
 * Each production domain is simulated with `x-forwarded-host`, which the proxy reads
 * before `host`. Pages are prerendered, so the HTML must be right for its domain without
 * knowing the request: canonical, hreflang, Organization origin and internal links.
 */
test.skip(({ browserName, isMobile }) => browserName !== "chromium" || isMobile, "HTTP-level checks");

const PRO = "https://pro.nordoravital.com";
const HOME = "https://homeuse.nordoravital.com";
const ROOT = "https://www.nordoravital.com";
const LOCALES = ["de", "en", "lv", "ru"] as const;

async function get(request: APIRequestContext, host: string, path: string) {
  const res = await request.get(path, { headers: { "x-forwarded-host": host }, maxRedirects: 0 });
  return { res, html: res.status() === 200 ? await res.text() : "" };
}

function attr(html: string, pattern: RegExp) {
  return html.match(pattern)?.[1] ?? null;
}

function hreflangs(html: string) {
  const out: Record<string, string> = {};
  for (const m of html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/g)) out[m[1]] = m[2];
  return out;
}

function organizationUrl(html: string) {
  for (const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) {
    const data = JSON.parse(m[1]);
    for (const item of Array.isArray(data) ? data : [data]) {
      if (item["@type"] === "Organization") return item.url as string;
    }
  }
  return null;
}

function expectPage(html: string, origin: string, locale: string, path: string) {
  const url = path ? `${origin}/${locale}/${path}` : `${origin}/${locale}`;
  expect(attr(html, /<link rel="canonical" href="([^"]+)"/)).toBe(url);
  expect(attr(html, /<meta property="og:url" content="([^"]+)"/)).toBe(url);
  const langs = hreflangs(html);
  for (const l of LOCALES) expect(langs[l]).toBe(path ? `${origin}/${l}/${path}` : `${origin}/${l}`);
  expect(langs["x-default"]).toBe(path ? `${origin}/en/${path}` : `${origin}/en`);
  expect(langs.tr).toBeUndefined();
  expect(organizationUrl(html)).toBe(origin);
  expect(html).toContain(`<html lang="${locale}"`);
}

const PRO_PAGES = ["", "offers", "contact", "how-it-works", "professionals/physiotherapists", "compare/pemf-systems", "spa-viesnicas", "privacy"];
const HOME_PAGES = ["", "faq", "programs", "how-it-works", "experience", "privacy"];

for (const locale of LOCALES) {
  test(`pro.nordoravital.com /${locale}: prerendered pages with pro canonicals`, async ({ request }) => {
    for (const path of PRO_PAGES) {
      const { res, html } = await get(request, "pro.nordoravital.com", `/${locale}${path ? `/${path}` : ""}`);
      expect(res.status(), path).toBe(200);
      expect(res.headers()["x-nextjs-cache"], path).toBe("HIT");
      expectPage(html, PRO, locale, path);
    }
  });

  test(`homeuse.nordoravital.com /${locale}: prerendered pages with homeuse canonicals and links`, async ({ request }) => {
    for (const path of HOME_PAGES) {
      const { res, html } = await get(request, "homeuse.nordoravital.com", `/${locale}${path ? `/${path}` : ""}`);
      expect(res.status(), path).toBe(200);
      expect(res.headers()["x-nextjs-cache"], path).toBe("HIT");
      expectPage(html, HOME, locale, path);
      // Internal links use the public homeuse paths, never the internal /home prefix.
      expect(html, path).not.toMatch(new RegExp(`href="/${locale}/home[/"]`));
      expect(html, path).toContain(`href="/${locale}/programs"`);
    }
  });
}

test("www.nordoravital.com serves the gateway, linking to both sites", async ({ request }) => {
  const { res, html } = await get(request, "www.nordoravital.com", "/");
  expect(res.status()).toBe(200);
  expect(attr(html, /<link rel="canonical" href="([^"]+)"/)).toBe(ROOT);
  expect(organizationUrl(html)).toBe(ROOT);
  expect(html).toContain(`href="${PRO}/`);
  expect(html).toContain(`href="${HOME}/`);
  const gateway = await get(request, "www.nordoravital.com", "/lv/gateway");
  expect(gateway.res.status()).toBe(301);
});

test("cross-domain redirects still apply", async ({ request }) => {
  const cases: [string, string, string][] = [
    ["www.nordoravital.com", "/en/offers", `${PRO}/en/offers`],
    ["home.nordoravital.com", "/en/faq", `${HOME}/en/faq`],
    ["pro.nordoravital.com", "/home/faq", `${HOME}/faq`],
    ["pro.nordoravital.com", "/en/home", "/en"],
    ["homeuse.nordoravital.com", "/en/home/faq", "/en/faq"],
  ];
  for (const [host, path, target] of cases) {
    const { res } = await get(request, host, path);
    expect(res.status(), `${host}${path}`).toBe(301);
    expect(new URL(res.headers().location, "http://x").href.replace("http://x", ""), `${host}${path}`).toBe(target);
  }
});

test("the pro footer links to homeuse on its own domain", async ({ request }) => {
  const { html } = await get(request, "pro.nordoravital.com", "/en/offers");
  expect(html).toContain(`href="${HOME}/en`);
});
