import type { Metadata } from "next";
import { OffersHero } from "@/components/offers/offers-hero";
import { OffersSections } from "@/components/offers/offers-sections";
import { routing, type Locale } from "@/i18n/routing";
import { stripRichTags } from "@/lib/i18n-rich";
import { setRequestLocale } from "next-intl/server";
import { proPageMetadata } from "@/lib/page-metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) return {};
  const m = (await import(`../../../../../messages/${locale}.json`)).default as {
    Offers: { title: string; lead: string };
  };
  return proPageMetadata(locale, "offers", `${m.Offers.title} | Nordora Vital`, stripRichTags(m.Offers.lead).slice(0, 160));
}

export default async function OffersPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="site-marketing-root flex flex-col gap-0">
      <OffersHero />
      <OffersSections />
    </div>
  );
}
