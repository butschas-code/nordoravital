import type { NextRequest } from "next/server";
import { LOCALE_COOKIE_NAME } from "@/lib/locale-cookie-constants";
import { routing, type Locale } from "@/i18n/routing";

const SUPPORTED = new Set<string>(routing.locales);

/** ISO 3166-1 alpha-2 country from edge/CDN (see middleware). */
function getCountryCode(request: NextRequest): string | undefined {
  return (
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry") ??
    undefined
  );
}

/**
 * Map resolved country to locale: Latvia → Latvian, DACH+LI → German, everyone else → English.
 * Returns `null` only when the country is unknown (no geo header), so callers can fall back.
 */
function localeFromCountry(country: string | undefined): Locale | null {
  if (!country) return null;
  const c = country.toUpperCase();
  if (c === "LV") return "lv";
  if (c === "DE" || c === "AT" || c === "CH" || c === "LI") return "de";
  return "en";
}

function localeFromAcceptLanguage(header: string | null): Locale | null {
  if (!header) return null;
  const parts = header.split(",").map((p) => p.trim().split(";")[0]?.toLowerCase());
  for (const part of parts) {
    if (!part) continue;
    const base = part.split("-")[0];
    if (base === "de") return "de";
    if (base === "lv") return "lv";
    if (base === "en") return "en";
  }
  return null;
}

/**
 * Resolves locale for unprefixed URLs (e.g. `/`):
 * 1. Manual choice — `NEXT_LOCALE` cookie (set when the user picks a language).
 * 2. Geo — Latvia → `lv`, DACH+LI → `de`, any other country → `en`.
 * 3. No geo header (typical local dev / some proxies) — Accept-Language hint.
 * 4. Site default — `en`.
 */
export function resolveDefaultLocale(request: NextRequest): Locale {
  const fromCookie = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  if (fromCookie && SUPPORTED.has(fromCookie)) {
    return fromCookie as Locale;
  }

  const fromGeo = localeFromCountry(getCountryCode(request));
  if (fromGeo !== null) {
    return fromGeo;
  }

  const fromAl = localeFromAcceptLanguage(request.headers.get("accept-language"));
  if (fromAl) return fromAl;

  return routing.defaultLocale;
}

