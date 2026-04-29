import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import {
  LOCALE_COOKIE_MAX_AGE_SECONDS,
  LOCALE_COOKIE_NAME,
} from "./lib/locale-cookie-constants";
import { resolveDefaultLocale } from "./lib/locale-from-request";

const intlMiddleware = createMiddleware(routing);

const LOCALE_PATH_PREFIX = routing.locales.join("|");

function pathnameHasLocale(pathname: string): boolean {
  return new RegExp(`^\\/(${LOCALE_PATH_PREFIX})(\\/|$)`).test(pathname);
}

/** Avoid redirecting public files (e.g. /favicon.ico) to /en/favicon.ico */
const PUBLIC_FILE =
  /\.(ico|png|jpg|jpeg|svg|webp|gif|txt|xml|webmanifest|woff2?)$/i;

function isPublicAsset(pathname: string): boolean {
  return PUBLIC_FILE.test(pathname);
}

function withPathnameHeader(request: NextRequest): NextResponse {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nordora-pathname", request.nextUrl.pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /** Legacy /deck → canonical localized URL */
  if (pathname === "/deck" || pathname === "/deck/") {
    const url = request.nextUrl.clone();
    url.pathname = "/en/deck";
    return NextResponse.redirect(url);
  }

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

  if (!pathnameHasLocale(pathname)) {
    const locale = resolveDefaultLocale(request);
    const url = request.nextUrl.clone();
    const suffix = pathname === "/" ? "" : pathname;
    url.pathname = `/${locale}${suffix}`;
    const response = NextResponse.redirect(url);
    response.cookies.set(LOCALE_COOKIE_NAME, locale, {
      path: "/",
      maxAge: LOCALE_COOKIE_MAX_AGE_SECONDS,
      sameSite: "lax",
    });
    return response;
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nordora-pathname", pathname);
  return intlMiddleware(new NextRequest(request.url, { headers: requestHeaders }));
}

export const config = {
  matcher: [
    "/",
    "/(de|en|lv|ru|tr)/:path*",
    "/((?!_next|_vercel|api|.*\\..*).*)",
  ],
};
