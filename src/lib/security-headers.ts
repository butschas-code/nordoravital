/**
 * Response headers applied to every route from `next.config.ts`.
 *
 * CSP style: no nonce. A nonce forces every page to render per request; this is a
 * marketing site, so we keep `'unsafe-inline'` for the inline JSON-LD and Next's
 * bootstrap scripts and lock everything else down to the origins the site loads.
 * `'unsafe-eval'` is only allowed in development (React Refresh needs it).
 */

/** PostHog ingests at `<region>.i.posthog.com` and serves its scripts from `<region>-assets.i.posthog.com`. */
export function posthogOrigins(host: string | undefined): string[] {
  if (!host) return [];
  const { origin, hostname } = new URL(host);
  const match = hostname.match(/^([a-z]+)\.i\.posthog\.com$/);
  return match ? [origin, `https://${match[1]}-assets.i.posthog.com`] : [origin];
}

export function contentSecurityPolicy(
  isDev: boolean,
  posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST,
): string {
  const posthog = posthogOrigins(posthogHost);
  const scriptSrc = ["'self'", "'unsafe-inline'", ...posthog];
  // Vercel Analytics serves its script from the CDN outside a Vercel deployment.
  if (isDev) scriptSrc.push("'unsafe-eval'", "https://va.vercel-scripts.com");

  const connectSrc = ["'self'", ...posthog];
  if (isDev) connectSrc.push("ws:", "https://va.vercel-scripts.com");

  const directives: Record<string, string[]> = {
    "default-src": ["'self'"],
    "script-src": scriptSrc,
    "style-src": ["'self'", "'unsafe-inline'"],
    "img-src": ["'self'", "data:", "blob:"],
    "font-src": ["'self'", "data:"],
    "media-src": ["'self'"],
    "connect-src": connectSrc,
    "worker-src": ["'self'", "blob:"],
    "frame-src": ["'none'"],
    "frame-ancestors": ["'none'"],
    "object-src": ["'none'"],
    "base-uri": ["'self'"],
    "form-action": ["'self'"],
  };
  const policy = Object.entries(directives)
    .map(([name, values]) => `${name} ${values.join(" ")}`)
    .join("; ");
  // No `upgrade-insecure-requests`: HSTS already forces HTTPS in production, and the
  // directive makes WebKit rewrite http://localhost assets to https during local tests.
  return policy;
}

export function securityHeaders(isDev: boolean) {
  return [
    { key: "Content-Security-Policy", value: contentSecurityPolicy(isDev) },
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
    },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
      key: "Permissions-Policy",
      value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
    },
  ];
}

/** Stable-name files in `public/` can be replaced, so they get a bounded cache, not `immutable`. */
export const PUBLIC_ASSET_CACHE = "public, max-age=604800, stale-while-revalidate=86400";
