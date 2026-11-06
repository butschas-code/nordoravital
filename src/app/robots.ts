import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getSiteSurface } from "@/lib/domains";
import { getIndexableOrigin } from "@/lib/seo";

const PRIVATE_PATHS = [
  "/api/",
  "/deck",
  "/*/deck",
  "/flyers",
  "/*/flyers",
  "/cf-liepaja",
  "/*/cf-liepaja",
];

/** OpenAI fetchers. ChatGPT refuses a URL when these agents are disallowed. */
const OPENAI_CRAWLERS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User"];

/** Other answer engines. The private proposal stays closed to them. */
const OTHER_AI_CRAWLERS = [
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
];

const OPENAI_PRIVATE_PATHS = PRIVATE_PATHS.filter(
  (path) => path !== "/cf-liepaja" && path !== "/*/cf-liepaja",
);

export default async function robots(): Promise<MetadataRoute.Robots> {
  const heads = await headers();
  const surface = getSiteSurface(
    heads.get("x-forwarded-host") ?? heads.get("host"),
  );
  const origin = getIndexableOrigin(surface);

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE_PATHS },
      {
        userAgent: OPENAI_CRAWLERS,
        allow: ["/", "/cf-liepaja", "/*/cf-liepaja"],
        disallow: OPENAI_PRIVATE_PATHS,
      },
      { userAgent: OTHER_AI_CRAWLERS, allow: "/", disallow: PRIVATE_PATHS },
    ],
    sitemap: `${origin}/sitemap.xml`,
  };
}
