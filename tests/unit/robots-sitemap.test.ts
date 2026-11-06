import { beforeEach, describe, expect, it, vi } from "vitest";

let host = "pro.nordoravital.com";
vi.mock("next/headers", () => ({
  headers: async () => new Headers({ host }),
}));

const { default: robots } = await import("@/app/robots");
const { default: sitemap } = await import("@/app/sitemap");

beforeEach(() => {
  host = "pro.nordoravital.com";
});

describe("robots.txt", () => {
  it("keeps private paths out and points at this host's sitemap", async () => {
    const result = await robots();
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    const agentsOf = (userAgent: string | string[] | undefined) =>
      userAgent === undefined ? [] : Array.isArray(userAgent) ? userAgent : [userAgent];
    const openai = rules.find((rule) => agentsOf(rule.userAgent).includes("ChatGPT-User"));
    const others = rules.filter((rule) => rule !== openai);
    expect(openai?.allow).toEqual(expect.arrayContaining(["/cf-liepaja", "/*/cf-liepaja"]));
    expect(openai?.disallow).not.toEqual(expect.arrayContaining(["/cf-liepaja", "/*/cf-liepaja"]));
    for (const rule of others) {
      expect(rule.disallow).toEqual(
        expect.arrayContaining(["/api/", "/deck", "/flyers", "/cf-liepaja", "/*/cf-liepaja"]),
      );
      expect(rule.allow).toBe("/");
    }
    const agents = rules.flatMap((r) => agentsOf(r.userAgent));
    expect(agents).toEqual(expect.arrayContaining(["*", "GPTBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Google-Extended"]));
    expect(result.sitemap).toBe("https://pro.nordoravital.com/sitemap.xml");
  });
});

describe("sitemap.xml", () => {
  it("lists every pro page in every indexable locale, on the pro host only", async () => {
    const entries = await sitemap();
    const urls = entries.map((e) => e.url);
    expect(new Set(urls).size).toBe(urls.length);
    for (const url of urls) expect(url.startsWith("https://pro.nordoravital.com/")).toBe(true);
    expect(urls).toContain("https://pro.nordoravital.com/ru/contact");
    expect(urls.some((u) => u.includes("/tr/") || u.includes("/deck") || u.includes("/flyers") || u.includes("cf-liepaja"))).toBe(false);
  });

  it("serves the homeuse pages on the homeuse host", async () => {
    host = "homeuse.nordoravital.com";
    const urls = (await sitemap()).map((e) => e.url);
    expect(urls).toContain("https://homeuse.nordoravital.com/lv/faq");
    for (const url of urls) expect(url.startsWith("https://homeuse.nordoravital.com/")).toBe(true);
  });
});
