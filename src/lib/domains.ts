export const ROOT_DOMAIN = "nordoravital.com";
export const PRO_DOMAIN = "pro.nordoravital.com";
export const HOME_DOMAIN = "homeuse.nordoravital.com";
export const LEGACY_HOME_DOMAIN = "home.nordoravital.com";

/**
 * Build-time switch for internal links. `next dev` and Vercel preview deployments serve
 * every surface from one host (pro at /en, homeuse at /en/home, gateway at /), so links
 * stay on that host. Production builds link to the real domains. Being a build-time
 * constant, it keeps pages static, unlike reading the request's host.
 */
export const LINKS_STAY_ON_HOST =
  process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview";

/** The surface whose link style pages should use (see LINKS_STAY_ON_HOST). */
export const LINK_SURFACE: "local" | "home" = LINKS_STAY_ON_HOST ? "local" : "home";

export type SiteSurface = "root" | "pro" | "home" | "legacyHome" | "local";

export function normalizeHost(host: string | null): string {
  return (host ?? "").split(",")[0]?.trim().split(":")[0]?.toLowerCase() ?? "";
}

export function getSiteSurface(host: string | null): SiteSurface {
  const normalized = normalizeHost(host);
  if (normalized === ROOT_DOMAIN || normalized === `www.${ROOT_DOMAIN}`) {
    return "root";
  }
  if (normalized === PRO_DOMAIN) {
    return "pro";
  }
  if (normalized === HOME_DOMAIN) {
    return "home";
  }
  if (normalized === LEGACY_HOME_DOMAIN) {
    return "legacyHome";
  }
  return "local";
}

export function getDomainForSurface(surface: "root" | "pro" | "home") {
  if (surface === "home") return HOME_DOMAIN;
  if (surface === "pro") return PRO_DOMAIN;
  return ROOT_DOMAIN;
}

export function getOriginForSurface(surface: "root" | "pro" | "home") {
  return `https://${getDomainForSurface(surface)}`;
}
