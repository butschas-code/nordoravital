import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import {
  LOCALE_COOKIE_MAX_AGE_SECONDS,
  LOCALE_COOKIE_NAME,
} from "./lib/locale-cookie-constants";
import { resolveDefaultLocale } from "./lib/locale-from-request";

const intlMiddleware = createMiddleware(routing);

function pathnameHasLocale(pathname: string): boolean {
  return /^\/(de|en|lv)(\/|$)/.test(pathname);
}

/** Avoid redirecting public files (e.g. /favicon.ico) to /en/favicon.ico */
const PUBLIC_FILE =
  /\.(ico|png|jpg|jpeg|svg|webp|gif|txt|xml|webmanifest|woff2?)$/i;

function isPublicAsset(pathname: string): boolean {
  return PUBLIC_FILE.test(pathname);
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/_vercel")
  ) {
    return NextResponse.next();
  }

  if (isPublicAsset(pathname)) {
    return NextResponse.next();
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

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/",
    "/(de|en|lv)/:path*",
    "/((?!_next|_vercel|api|.*\\..*).*)",
  ],
};
