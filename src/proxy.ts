import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing, isDeckOnlyLocale, type Locale } from "./i18n/routing";
import {
  LOCALE_COOKIE_MAX_AGE_SECONDS,
  LOCALE_COOKIE_NAME,
} from "./lib/locale-cookie-constants";
import { resolveDefaultLocale } from "./lib/locale-from-request";
import {
  getDomainForSurface,
  getSiteSurface,
  type SiteSurface,
} from "./lib/domains";

const intlMiddleware = createMiddleware(routing);

const LOCALE_PATH_PREFIX = routing.locales.join("|");

function pathnameHasLocale(pathname: string): boolean {
  return new RegExp(`^\\/(${LOCALE_PATH_PREFIX})(\\/|$)`).test(pathname);
}

function pathnameWithoutLocalePrefix(pathname: string): { locale: string; rest: string } | null {
  const m = pathname.match(/^\/([^/]+)(\/.*)?$/);
  if (!m) return null;
  return { locale: m[1], rest: m[2] ?? "" };
}

/** RU/TR URLs are only valid for `/deck`; otherwise send users to the same path under English. */
function redirectDeckOnlyLocaleFromNonDeck(pathname: string): string | null {
  const parsed = pathnameWithoutLocalePrefix(pathname);
  if (!parsed || !isDeckOnlyLocale(parsed.locale)) return null;
  if (parsed.rest === "" || parsed.rest === "/") {
    return "/en";
  }
  const segments = parsed.rest.split("/").filter(Boolean);
  if (segments[0] === "deck") {
    return null;
  }
  return `/en/${segments.join("/")}`;
}

const PUBLIC_FILE =
  /\.(ico|png|jpg|jpeg|svg|webp|gif|txt|xml|webmanifest|woff2?)$/i;

function isPublicAsset(pathname: string): boolean {
  return PUBLIC_FILE.test(pathname);
}

function withPathnameHeader(request: NextRequest): NextResponse {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nordora-pathname", request.nextUrl.pathname);
  requestHeaders.set(
    "x-nordora-surface",
    getSiteSurface(request.headers.get("x-forwarded-host") ?? request.headers.get("host")),
  );
  return NextResponse.next({ request: { headers: requestHeaders } });
}

function withNordoraHeaders(
  request: NextRequest,
  pathname: string,
  surface: SiteSurface,
) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nordora-pathname", pathname);
  requestHeaders.set("x-nordora-surface", surface);
  return requestHeaders;
}

function setLocaleCookie(response: NextResponse, locale: string) {
  response.cookies.set(LOCALE_COOKIE_NAME, locale, {
    path: "/",
    maxAge: LOCALE_COOKIE_MAX_AGE_SECONDS,
    sameSite: "lax",
  });
  return response;
}

function rewriteToLocalePath(
  request: NextRequest,
  pathname: string,
  surface: SiteSurface,
  locale = resolveDefaultLocale(request),
  displayPathname = pathname,
) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  const response = NextResponse.rewrite(url, {
    request: {
      headers: withNordoraHeaders(request, displayPathname, surface),
    },
  });
  return setLocaleCookie(response, locale);
}

function redirectToSurface(
  request: NextRequest,
  surface: "pro" | "home",
  pathname = request.nextUrl.pathname,
  status = 301,
) {
  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = getDomainForSurface(surface);
  url.port = "";
  url.pathname = pathname;
  return NextResponse.redirect(url, status);
}

function homeInternalPath(pathname: string, locale: string) {
  const cleanPathname = pathnameHasLocale(pathname)
    ? pathnameWithoutLocalePrefix(pathname)?.rest || "/"
    : pathname;
  if (cleanPathname === "/" || cleanPathname === "") {
    return `/${locale}/home`;
  }
  if (cleanPathname === "/home" || cleanPathname.startsWith("/home/")) {
    return `/${locale}${cleanPathname}`;
  }
  return `/${locale}/home${cleanPathname}`;
}

function isRootGatewayInternalPath(pathname: string): boolean {
  const parsed = pathnameWithoutLocalePrefix(pathname);
  return Boolean(
    parsed &&
      routing.locales.includes(parsed.locale as Locale) &&
      parsed.rest === "/gateway",
  );
}

function isHomeInternalPath(pathname: string): boolean {
  const parsed = pathnameWithoutLocalePrefix(pathname);
  return Boolean(
    parsed &&
      routing.locales.includes(parsed.locale as Locale) &&
      (parsed.rest === "/home" || parsed.rest.startsWith("/home/")),
  );
}

function isProHomePath(pathname: string): pathname is `/${Locale}/home` {
  const parsed = pathnameWithoutLocalePrefix(pathname);
  return Boolean(
    parsed &&
      routing.locales.includes(parsed.locale as Locale) &&
      parsed.rest === "/home",
  );
}

function localeFromPrefixedPath(pathname: string, request: NextRequest): Locale {
  const parsed = pathnameWithoutLocalePrefix(pathname);
  if (parsed && routing.locales.includes(parsed.locale as Locale)) {
    return parsed.locale as Locale;
  }
  return resolveDefaultLocale(request);
}

function redirectLegacyHomeExperiencePath(request: NextRequest, surface: SiteSurface) {
  const parsed = pathnameWithoutLocalePrefix(request.nextUrl.pathname);
  if (!parsed || !routing.locales.includes(parsed.locale as Locale)) return null;

  const nextPath =
    parsed.rest === "/the-sanza-experience"
      ? `/${parsed.locale}/how-it-works`
      : parsed.rest === "/home/the-sanza-experience"
        ? `/${parsed.locale}/home/how-it-works`
        : null;
  if (!nextPath) return null;

  const url = request.nextUrl.clone();
  url.pathname = nextPath;
  const response = NextResponse.redirect(url, 301);
  response.headers.set("x-nordora-surface", surface);
  return setLocaleCookie(response, parsed.locale);
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const surface = getSiteSurface(
    request.headers.get("x-forwarded-host") ?? request.headers.get("host"),
  );

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/_vercel")
  ) {
    return withPathnameHeader(request);
  }

  if (isPublicAsset(pathname)) {
    return withPathnameHeader(request);
  }

  if (surface === "legacyHome") {
    return redirectToSurface(request, "home");
  }

  const legacyHomeExperienceRedirect = redirectLegacyHomeExperiencePath(request, surface);
  if (legacyHomeExperienceRedirect) {
    return legacyHomeExperienceRedirect;
  }

  if (surface === "root") {
    if (pathname === "/" || pathname === "") {
      const locale = resolveDefaultLocale(request);
      return rewriteToLocalePath(request, `/${locale}/gateway`, "root", locale, "/");
    }
    if (isRootGatewayInternalPath(pathname)) {
      return intlMiddleware(
        new NextRequest(request.url, {
          headers: withNordoraHeaders(request, "/", "root"),
        }),
      );
    }
    return redirectToSurface(request, "pro");
  }

  if (surface === "local" && (pathname === "/" || pathname === "")) {
    const locale = resolveDefaultLocale(request);
    return rewriteToLocalePath(request, `/${locale}/gateway`, "root", locale, "/");
  }

  if (surface === "home") {
    if (isHomeInternalPath(pathname)) {
      return intlMiddleware(
        new NextRequest(request.url, {
          headers: withNordoraHeaders(request, pathname, "home"),
        }),
      );
    }
    const locale = pathnameHasLocale(pathname)
      ? localeFromPrefixedPath(pathname, request)
      : resolveDefaultLocale(request);
    if (pathnameHasLocale(pathname)) {
      return rewriteToLocalePath(
        request,
        homeInternalPath(pathname, locale),
        "home",
        locale,
        pathname,
      );
    }
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? `/${locale}/home` : `/${locale}${pathname}`;
    const response = NextResponse.redirect(url);
    return setLocaleCookie(response, locale);
  }

  if (surface === "pro") {
    if (isProHomePath(pathname)) {
      const locale = localeFromPrefixedPath(pathname, request);
      return rewriteToLocalePath(request, `/${locale}`, "pro", locale, pathname);
    }

    if (pathname === "/home" || pathname.startsWith("/home/")) {
      return redirectToSurface(
        request,
        "home",
        pathname.replace(/^\/home/, "") || "/",
        301,
      );
    }

    if (!pathnameHasLocale(pathname)) {
      const locale = resolveDefaultLocale(request);
      const url = request.nextUrl.clone();
      url.pathname = pathname === "/" ? `/${locale}/home` : `/${locale}${pathname}`;
      const response = NextResponse.redirect(url);
      return setLocaleCookie(response, locale);
    }
  }

  /** Legacy /deck → canonical localized URL */
  if (pathname === "/deck" || pathname === "/deck/") {
    const locale = resolveDefaultLocale(request);
    return rewriteToLocalePath(request, `/${locale}/deck`, surface, locale, `/${locale}/deck`);
  }

  if (!pathnameHasLocale(pathname)) {
    const locale = resolveDefaultLocale(request);
    const url = request.nextUrl.clone();
    const suffix = pathname === "/" ? "" : pathname;
    url.pathname = `/${locale}${suffix}`;
    const response = NextResponse.redirect(url);
    return setLocaleCookie(response, locale);
  }

  const deckOnlyRedirect = redirectDeckOnlyLocaleFromNonDeck(pathname);
  if (deckOnlyRedirect) {
    const url = request.nextUrl.clone();
    url.pathname = deckOnlyRedirect;
    return NextResponse.redirect(url);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nordora-pathname", pathname);
  requestHeaders.set("x-nordora-surface", surface);
  return intlMiddleware(new NextRequest(request.url, { headers: requestHeaders }));
}

export const config = {
  matcher: [
    "/",
    "/(de|en|lv|ru|tr)/:path*",
    "/((?!_next|_vercel|api|.*\\..*).*)",
  ],
};
