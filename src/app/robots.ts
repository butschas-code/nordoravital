import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getSiteSurface } from "@/lib/domains";
import { getIndexableOrigin } from "@/lib/seo";

const PRIVATE_PATHS = ["/api/", "/deck", "/*/deck", "/flyers", "/*/flyers"];

/** Search and answer engines we explicitly welcome, so a future blanket rule can't shut them out. */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default async function robots(): Promise<MetadataRoute.Robots> {
  const heads = await headers();
  const surface = getSiteSurface(
    heads.get("x-forwarded-host") ?? heads.get("host"),
  );
  const origin = getIndexableOrigin(surface);

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: PRIVATE_PATHS },
    ],
    sitemap: `${origin}/sitemap.xml`,
  };
}
