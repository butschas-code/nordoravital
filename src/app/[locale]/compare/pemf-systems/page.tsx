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
  const content = COMPARISONS_DATA["pemf-systems"][safeLocale];

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://pro.nordoravital.com/${locale}/compare/pemf-systems`,
      languages: {
        en: "https://pro.nordoravital.com/en/compare/pemf-systems",
        de: "https://pro.nordoravital.com/de/compare/pemf-systems",
        lv: "https://pro.nordoravital.com/lv/compare/pemf-systems",
        ru: "https://pro.nordoravital.com/ru/compare/pemf-systems",
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://pro.nordoravital.com/${locale}/compare/pemf-systems`,
      siteName: "Nordora Vital",
      type: "article",
    },
  };
}

export default async function PemfSystemsComparisonPage({ params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const safeLocale = (
    locale === "de" || locale === "lv" || locale === "ru" ? locale : "en"
  ) as "en" | "de" | "lv" | "ru";
  const content = COMPARISONS_DATA["pemf-systems"][safeLocale];

  return <ComparisonPageView content={content} locale={locale} />;
}
