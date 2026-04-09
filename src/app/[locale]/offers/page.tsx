import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { OffersHero } from "@/components/offers/offers-hero";
import { OffersSections } from "@/components/offers/offers-sections";
import { stripRichTags } from "@/lib/i18n-rich";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = (await import(`../../../../messages/${locale}.json`)).default as {
    Offers: { title: string; lead: string };
  };
  return {
    title: `${m.Offers.title} | Nordora Vital`,
    description: stripRichTags(m.Offers.lead).slice(0, 160),
  };
}

export default async function OffersPage() {
  return (
    <div className="flex flex-col gap-0">
      <OffersHero />
      <OffersSections />
    </div>
  );
}
