/**
 * Fixed-window, in-memory rate limiter.
 *
 * On Vercel each serverless instance has its own memory, so this only caps bursts
 * per instance. The global limit is the Vercel Firewall rule documented in the README.
 */
export type RateLimiter = {
  check(key: string, now?: number): { ok: boolean; retryAfterSeconds: number };
  size(): number;
};

export function createRateLimiter({
  limit,
  windowMs,
  maxKeys = 5000,
}: {
  limit: number;
  windowMs: number;
  maxKeys?: number;
}): RateLimiter {
  const hits = new Map<string, { count: number; resetAt: number }>();

  return {
    check(key, now = Date.now()) {
      const entry = hits.get(key);
      if (!entry || entry.resetAt <= now) {
        if (hits.size >= maxKeys) {
          for (const [k, v] of hits) {
            if (v.resetAt <= now) hits.delete(k);
          }
          // Still full: drop the oldest key so memory stays bounded.
          if (hits.size >= maxKeys) {
            const oldest = hits.keys().next().value;
            if (oldest !== undefined) hits.delete(oldest);
          }
        }
        hits.set(key, { count: 1, resetAt: now + windowMs });
        return { ok: true, retryAfterSeconds: 0 };
      }
      entry.count += 1;
      if (entry.count > limit) {
        return { ok: false, retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000) };
      }
      return { ok: true, retryAfterSeconds: 0 };
    },
    size: () => hits.size,
  };
}

/** Vercel sets `x-forwarded-for`; its first entry is the client. */
export function clientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || headers.get("x-real-ip") || "unknown";
}
