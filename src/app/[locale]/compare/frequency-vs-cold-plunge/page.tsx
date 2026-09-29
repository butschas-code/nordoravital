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
  const content = COMPARISONS_DATA["frequency-vs-cold-plunge"][safeLocale];

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://pro.nordoravital.com/${locale}/compare/frequency-vs-cold-plunge`,
      languages: {
        en: "https://pro.nordoravital.com/en/compare/frequency-vs-cold-plunge",
        de: "https://pro.nordoravital.com/de/compare/frequency-vs-cold-plunge",
        lv: "https://pro.nordoravital.com/lv/compare/frequency-vs-cold-plunge",
        ru: "https://pro.nordoravital.com/ru/compare/frequency-vs-cold-plunge",
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://pro.nordoravital.com/${locale}/compare/frequency-vs-cold-plunge`,
      siteName: "Nordora Vital",
      type: "article",
    },
  };
}

export default async function FrequencyVsColdPlungeComparisonPage({ params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const safeLocale = (
    locale === "de" || locale === "lv" || locale === "ru" ? locale : "en"
  ) as "en" | "de" | "lv" | "ru";
  const content = COMPARISONS_DATA["frequency-vs-cold-plunge"][safeLocale];

  return <ComparisonPageView content={content} locale={locale} />;
}
