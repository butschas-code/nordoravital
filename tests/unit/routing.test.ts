import { describe, expect, it } from "vitest";
import { getSiteSurface } from "@/lib/domains";
import { languageAlternates, localizedUrl, pageAlternates, splitPublicPath } from "@/lib/seo";

describe("getSiteSurface", () => {
  it.each([
    ["nordoravital.com", "root"],
    ["www.nordoravital.com", "root"],
    ["pro.nordoravital.com", "pro"],
    ["PRO.nordoravital.com:443", "pro"],
    ["homeuse.nordoravital.com", "home"],
    ["home.nordoravital.com", "legacyHome"],
    ["localhost:3000", "local"],
    [null, "local"],
  ])("%s → %s", (host, surface) => {
    expect(getSiteSurface(host)).toBe(surface);
  });
  it("uses the first host of a forwarded list", () => {
    expect(getSiteSurface("pro.nordoravital.com, proxy.internal")).toBe("pro");
  });
});

describe("SEO URL helpers", () => {
  const origin = "https://pro.nordoravital.com";
  it("builds localized URLs without trailing slashes", () => {
    expect(localizedUrl(origin, "en")).toBe(`${origin}/en`);
    expect(localizedUrl(origin, "lv", "/offers/")).toBe(`${origin}/lv/offers`);
  });
  it("lists every indexable locale plus x-default, never Turkish", () => {
    const langs = languageAlternates(origin, "contact");
    expect(Object.keys(langs).sort()).toEqual(["de", "en", "lv", "ru", "x-default"]);
    expect(langs["x-default"]).toBe(`${origin}/en/contact`);
  });
  it("gives each language its own canonical", () => {
    expect(pageAlternates(origin, "de", "offers").canonical).toBe(`${origin}/de/offers`);
  });
  it("splits locale from path", () => {
    expect(splitPublicPath("/ru/compare/pemf-systems")).toEqual({ locale: "ru", path: "compare/pemf-systems" });
    expect(splitPublicPath("/")).toEqual({ locale: null, path: "" });
  });
});
