import type { Metadata } from "next";
import {
  HOME_SHARE_IMAGE,
  PRO_SHARE_IMAGE,
  ROOT_INDEXABLE_ORIGIN,
  getIndexableOrigin,
  localizedUrl,
  pageAlternates,
} from "@/lib/seo";

export type IndexableSurface = "pro" | "home" | "root";

export const OG_LOCALE: Record<string, string> = {
  de: "de_DE",
  en: "en_US",
  lv: "lv_LV",
  ru: "ru_RU",
  tr: "tr_TR",
};

export function siteNameFor(surface: IndexableSurface) {
  return surface === "home" ? "Nordora Vital Home" : "Nordora Vital";
}

/**
 * Canonical, hreflang, Open Graph and Twitter metadata for one public page.
 * Pages are rendered at build time, so the URL comes from the route, not the request:
 * `path` is the public path after the locale ("" for the surface's start page).
 */
export function pageMetadata({
  surface,
  locale,
  path,
  title,
  description,
}: {
  surface: IndexableSurface;
  locale: string;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const origin = getIndexableOrigin(surface);
  const url = surface === "root" ? ROOT_INDEXABLE_ORIGIN : localizedUrl(origin, locale, path);
  const image = surface === "home" ? HOME_SHARE_IMAGE : PRO_SHARE_IMAGE;

  return {
    title,
    description,
    alternates: surface === "root" ? { canonical: url } : pageAlternates(origin, locale, path),
    openGraph: {
      title,
      description,
      url,
      siteName: siteNameFor(surface),
      locale: OG_LOCALE[locale] ?? "en_US",
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

/** Pro-surface shorthand used by the pages in `app/[locale]/(pro)`. */
export function proPageMetadata(locale: string, path: string, title: string, description: string) {
  return pageMetadata({ surface: "pro", locale, path, title, description });
}
