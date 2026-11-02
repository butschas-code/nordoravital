import { describe, expect, it } from "vitest";
import { clientIp, createRateLimiter } from "@/lib/server/rate-limit";

describe("createRateLimiter", () => {
  it("allows up to the limit, then blocks with a retry time", () => {
    const limiter = createRateLimiter({ limit: 2, windowMs: 60_000 });
    expect(limiter.check("a", 0).ok).toBe(true);
    expect(limiter.check("a", 1).ok).toBe(true);
    const blocked = limiter.check("a", 1_000);
    expect(blocked.ok).toBe(false);
    expect(blocked.retryAfterSeconds).toBe(59);
  });

  it("resets after the window", () => {
    const limiter = createRateLimiter({ limit: 1, windowMs: 1_000 });
    limiter.check("a", 0);
    expect(limiter.check("a", 500).ok).toBe(false);
    expect(limiter.check("a", 1_000).ok).toBe(true);
  });

  it("counts clients separately", () => {
    const limiter = createRateLimiter({ limit: 1, windowMs: 1_000 });
    expect(limiter.check("a", 0).ok).toBe(true);
    expect(limiter.check("b", 0).ok).toBe(true);
    expect(limiter.check("a", 1).ok).toBe(false);
  });

  it("keeps memory bounded", () => {
    const limiter = createRateLimiter({ limit: 1, windowMs: 60_000, maxKeys: 3 });
    for (let i = 0; i < 10; i++) limiter.check(`ip-${i}`, i);
    expect(limiter.size()).toBeLessThanOrEqual(3);
  });
});

describe("clientIp", () => {
  it("uses the first x-forwarded-for entry", () => {
    expect(clientIp(new Headers({ "x-forwarded-for": "203.0.113.5, 10.0.0.1" }))).toBe("203.0.113.5");
  });
  it("falls back to x-real-ip, then unknown", () => {
    expect(clientIp(new Headers({ "x-real-ip": "198.51.100.2" }))).toBe("198.51.100.2");
    expect(clientIp(new Headers())).toBe("unknown");
  });
});
