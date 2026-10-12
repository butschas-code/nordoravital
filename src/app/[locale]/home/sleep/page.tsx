import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { HomeSiteLayout } from "@/components/home-site/home-site-shell";
import { HomeSeoLanding } from "@/components/home/home-seo-landing";
import { routing, type Locale } from "@/i18n/routing";
import { getOriginForSurface } from "@/lib/domains";
import { pageAlternates } from "@/lib/seo";
import { getHomeSeoPageContent } from "@/lib/home-seo-pages-content";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getHomeSeoPageContent("sleep", locale);
  const homeOrigin = getOriginForSurface("home");

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    metadataBase: new URL(homeOrigin),
    alternates: pageAlternates(homeOrigin, locale, "sleep"),
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `${homeOrigin}/${locale}/sleep`,
      siteName: "Nordora Vital Home",
      type: "website",
      images: [
        {
          url: content.heroImage,
          width: 1200,
          height: 630,
          alt: content.headline,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.metaTitle,
      description: content.metaDescription,
      images: [content.heroImage],
    },
  };
}

export default async function HomeSleepPage({ params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const content = getHomeSeoPageContent("sleep", locale);

  return (
    <HomeSiteLayout locale={locale}>
      <HomeSeoLanding content={content} locale={locale} />
    </HomeSiteLayout>
  );
}
