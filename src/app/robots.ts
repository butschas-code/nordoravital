import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getOriginForSurface, getSiteSurface } from "@/lib/domains";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const heads = await headers();
  const surface = getSiteSurface(
    heads.get("x-forwarded-host") ?? heads.get("host"),
  );

  const origin =
    surface === "home"
      ? getOriginForSurface("home")
      : surface === "pro"
        ? getOriginForSurface("pro")
        : getOriginForSurface("root");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${origin}/sitemap.xml`,
  };
}
