import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { CookieBanner } from "@/components/cookie-banner";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { siteNameFor } from "@/lib/page-metadata";
import { HOME_SHARE_IMAGE, getIndexableOrigin } from "@/lib/seo";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  metadataBase: new URL(getIndexableOrigin("home")),
  openGraph: { siteName: siteNameFor("home"), type: "website", images: [HOME_SHARE_IMAGE] },
  twitter: { card: "summary_large_image", images: [HOME_SHARE_IMAGE.url] },
};

/** Home-use site (homeuse.nordoravital.com). Pages render their own chrome via HomeSiteLayout. */
export default async function HomeSurfaceLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <OrganizationJsonLd locale={locale} surface="home" />
      {children}
      <CookieBanner />
    </>
  );
}
