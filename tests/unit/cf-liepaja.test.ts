import { describe, expect, it } from "vitest";
import {
  DEMO_SUBJECT,
  demoMailto,
  illustrativeGrossRevenue,
} from "@/lib/proposals/cf-liepaja";

describe("CF Liepāja proposal", () => {
  it("calculates the stated illustrative gross revenue", () => {
    expect(illustrativeGrossRevenue(10, 5, 22)).toEqual({ monthly: 1100, yearly: 13200 });
  });

  it("scales linearly and stays gross, not a margin", () => {
    expect(illustrativeGrossRevenue(0, 5, 22).monthly).toBe(0);
    expect(illustrativeGrossRevenue(15, 4, 20)).toEqual({ monthly: 1200, yearly: 14400 });
  });

  it("opens a prefilled demonstration email with the exact subject", () => {
    const href = demoMailto();
    expect(href.startsWith("mailto:sascha@nordoravital.com?")).toBe(true);
    expect(decodeURIComponent(href)).toContain(DEMO_SUBJECT);
    expect(href).not.toContain("newsletter");
  });
});
