import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { assertEnv } from "./src/lib/env";
import { PUBLIC_ASSET_CACHE, securityHeaders } from "./src/lib/security-headers";

assertEnv();

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "192.168.0.242"],
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders(isDev) },
      {
        source: "/:dir(images|downloads)/:path*",
        headers: [{ key: "Cache-Control", value: PUBLIC_ASSET_CACHE }],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
