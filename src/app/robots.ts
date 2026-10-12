import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getSiteSurface } from "@/lib/domains";
import { getIndexableOrigin } from "@/lib/seo";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const heads = await headers();
  const surface = getSiteSurface(
    heads.get("x-forwarded-host") ?? heads.get("host"),
  );
  const origin = getIndexableOrigin(surface);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/deck", "/*/deck"],
    },
    sitemap: `${origin}/sitemap.xml`,
  };
}
