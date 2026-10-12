import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { CAMPAIGN_SLUGS } from "@/lib/campaign-slugs";
import { getSiteSurface, type SiteSurface } from "@/lib/domains";
import { HOME_SITE_SLUGS } from "@/lib/home-site-content";
import {
  INDEXABLE_LOCALES,
  ROOT_INDEXABLE_ORIGIN,
  getIndexableOrigin,
  languageAlternates,
  localizedUrl,
} from "@/lib/seo";
import { SECTOR_SLUGS } from "@/lib/sector-slugs";

const PRO_PATHS = [
  "",
  "how-it-works",
  "offers",
  "professionals",
  "professionals/sectors",
  "compare",
  "compare/pemf-systems",
  "compare/pemf-vs-red-light",
  "compare/frequency-vs-cold-plunge",
  "contact",
  "booking",
  "pilot",
  "pilot-program",
  "fizioterapija",
  "privacy",
  "terms",
  "cookie-policy",
  "imprint",
  ...CAMPAIGN_SLUGS.filter((slug) => slug !== "fizioterapija"),
  ...SECTOR_SLUGS.map((slug) => `professionals/${slug}`),
];

const HOME_PATHS = [
  "",
  "how-it-works",
  "programs",
  "sanza-experiences",
  "recovery",
  "sleep",
  "stress-reset",
  "faq",
  "privacy",
  "terms",
  "cookie-policy",
  "imprint",
  ...HOME_SITE_SLUGS,
] as const;

const LOW_PRIORITY = new Set(["privacy", "terms", "cookie-policy", "imprint"]);

function entriesFor(origin: string, paths: readonly string[]): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const path of paths) {
    const languages = languageAlternates(origin, path);
    for (const locale of INDEXABLE_LOCALES) {
      entries.push({
        url: localizedUrl(origin, locale, path),
        changeFrequency: path ? "monthly" : "weekly",
        priority: path ? (LOW_PRIORITY.has(path) ? 0.3 : 0.7) : 1,
        alternates: { languages },
      });
    }
  }
  return entries;
}

function originFor(surface: SiteSurface) {
  return getIndexableOrigin(surface);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const heads = await headers();
  const surface = getSiteSurface(
    heads.get("x-forwarded-host") ?? heads.get("host"),
  );

  if (surface === "home") {
    return entriesFor(originFor("home"), HOME_PATHS);
  }

  if (surface === "pro") {
    return entriesFor(originFor("pro"), PRO_PATHS);
  }

  return [
    {
      url: ROOT_INDEXABLE_ORIGIN,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
