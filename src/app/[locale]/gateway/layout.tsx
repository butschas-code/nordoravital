import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { CookieBanner } from "@/components/cookie-banner";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { ROOT_INDEXABLE_ORIGIN } from "@/lib/seo";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  metadataBase: new URL(ROOT_INDEXABLE_ORIGIN),
};

/** Gateway on nordoravital.com: the page renders its own full-screen chooser. */
export default async function GatewayLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <OrganizationJsonLd locale={locale} surface="root" />
      {children}
      <CookieBanner />
    </>
  );
}
