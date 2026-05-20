import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import {
  getOriginForSurface,
  getSiteSurface,
  type SiteSurface,
} from "@/lib/domains";
import { CAMPAIGN_SLUGS } from "@/lib/campaign-slugs";
import { SECTOR_SLUGS } from "@/lib/sector-slugs";
import { HOME_SITE_SLUGS } from "@/lib/home-site-content";

const PRO_PATHS = [
  "",
  "how-it-works",
  "offers",
  "professionals",
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
  "home",
  "how-it-works",
  "programs",
  "sanza-experiences",
  "faq",
  "privacy",
  "terms",
  "cookie-policy",
  "imprint",
  ...HOME_SITE_SLUGS,
] as const;

function entriesFor(origin: string, paths: readonly string[]): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: path ? `${origin}/${path}` : origin,
    lastModified: new Date(),
    changeFrequency: path ? "monthly" : "weekly",
    priority: path ? 0.7 : 1,
  }));
}

function originFor(surface: SiteSurface) {
  if (surface === "home") return getOriginForSurface("home");
  if (surface === "pro") return getOriginForSurface("pro");
  return getOriginForSurface("root");
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

  return entriesFor(originFor("root"), [""]);
}
