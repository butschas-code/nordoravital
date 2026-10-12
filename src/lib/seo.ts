import type { Metadata } from "next";
import { SITE_LOCALES } from "@/i18n/routing";
import { getOriginForSurface, type SiteSurface } from "@/lib/domains";

/** Locales that should be indexed. Turkish stays deck-only. */
export const INDEXABLE_LOCALES = SITE_LOCALES;

/**
 * Apex currently 307s to www at the Vercel edge, so Google should treat www
 * as the canonical host for the gateway. Pro and homeuse stay on their own hosts.
 */
export const ROOT_INDEXABLE_ORIGIN = "https://www.nordoravital.com";

const LOCALE_SEGMENT = /^(de|en|lv|ru|tr)$/;

export function getIndexableOrigin(
  surface: SiteSurface | "root" | "pro" | "home" | null | undefined,
) {
  if (surface === "home") return getOriginForSurface("home");
  if (surface === "pro") return getOriginForSurface("pro");
  return ROOT_INDEXABLE_ORIGIN;
}

export function splitPublicPath(pathname: string): { locale: string | null; path: string } {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return { locale: null, path: "" };
  if (LOCALE_SEGMENT.test(parts[0])) {
    return { locale: parts[0], path: parts.slice(1).join("/") };
  }
  return { locale: null, path: parts.join("/") };
}

export function localizedUrl(origin: string, locale: string, path = "") {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${origin}/${locale}/${clean}` : `${origin}/${locale}`;
}

export function languageAlternates(origin: string, path = ""): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of INDEXABLE_LOCALES) {
    languages[locale] = localizedUrl(origin, locale, path);
  }
  languages["x-default"] = localizedUrl(origin, "en", path);
  return languages;
}

export function pageAlternates(
  origin: string,
  locale: string,
  path = "",
): NonNullable<Metadata["alternates"]> {
  return {
    canonical: localizedUrl(origin, locale, path),
    languages: languageAlternates(origin, path),
  };
}

export function organizationJsonLd(origin: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nordora Vital SIA",
    url: origin,
    description,
    email: "info@nordoravital.com",
    telephone: "+37120727915",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vēja iela 4-2",
      addressLocality: "Ādaži",
      postalCode: "LV-2164",
      addressCountry: "LV",
    },
    areaServed: [
      { "@type": "Country", name: "Latvia" },
      { "@type": "Country", name: "Estonia" },
      { "@type": "Country", name: "Lithuania" },
    ],
  };
}
