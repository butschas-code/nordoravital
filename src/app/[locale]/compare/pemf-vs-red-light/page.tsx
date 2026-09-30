import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ComparisonPageView } from "@/components/compare/comparison-page-view";
import { routing, type Locale } from "@/i18n/routing";
import { COMPARISONS_DATA } from "@/lib/comparison-content";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = (
    locale === "de" || locale === "lv" || locale === "ru" ? locale : "en"
  ) as "en" | "de" | "lv" | "ru";
  const content = COMPARISONS_DATA["pemf-vs-red-light"][safeLocale];

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://pro.nordoravital.com/${locale}/compare/pemf-vs-red-light`,
      languages: {
        en: "https://pro.nordoravital.com/en/compare/pemf-vs-red-light",
        de: "https://pro.nordoravital.com/de/compare/pemf-vs-red-light",
        lv: "https://pro.nordoravital.com/lv/compare/pemf-vs-red-light",
        ru: "https://pro.nordoravital.com/ru/compare/pemf-vs-red-light",
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://pro.nordoravital.com/${locale}/compare/pemf-vs-red-light`,
      siteName: "Nordora Vital",
      type: "article",
      images: [
        {
          url: "/images/02_sanza_twinc_700.jpg",
          width: 1200,
          height: 630,
          alt: content.heroHeadline,
        },
      ],
    },
  };
}

export default async function PemfVsRedLightComparisonPage({ params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const safeLocale = (
    locale === "de" || locale === "lv" || locale === "ru" ? locale : "en"
  ) as "en" | "de" | "lv" | "ru";
  const content = COMPARISONS_DATA["pemf-vs-red-light"][safeLocale];

  return <ComparisonPageView content={content} locale={locale} />;
}
