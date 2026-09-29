import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { HomeSiteLayout } from "@/components/home-site/home-site-shell";
import { HomeSeoLanding } from "@/components/home/home-seo-landing";
import { routing, SITE_LOCALES, type Locale } from "@/i18n/routing";
import { getOriginForSurface } from "@/lib/domains";
import { getHomeSeoPageContent } from "@/lib/home-seo-pages-content";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = getHomeSeoPageContent("stress-reset", locale);
  const homeOrigin = getOriginForSurface("home");

  const languages: Record<string, string> = {};
  for (const loc of SITE_LOCALES) {
    languages[loc] = `${homeOrigin}/${loc}/stress-reset`;
  }

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    metadataBase: new URL(homeOrigin),
    alternates: {
      canonical: `/${locale}/stress-reset`,
      languages,
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `${homeOrigin}/${locale}/stress-reset`,
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

export default async function HomeStressResetPage({ params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const content = getHomeSeoPageContent("stress-reset", locale);

  return (
    <HomeSiteLayout locale={locale}>
      <HomeSeoLanding content={content} locale={locale} />
    </HomeSiteLayout>
  );
}
