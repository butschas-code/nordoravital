import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { CampaignLanding } from "@/components/campaign/campaign-landing";
import { SITE_LOCALES, routing, type Locale } from "@/i18n/routing";
import { getCampaignPageContent } from "@/lib/campaign-page-content";
import {
  getCampaignStaticPathsForLocale,
  resolveCampaignSlugForLocale,
  type CampaignSlug,
} from "@/lib/campaign-slugs";

type Props = { params: Promise<{ locale: string; campaign: string }> };

const HANDCRAFTED_STATIC_CAMPAIGNS: CampaignSlug[] = ["fizioterapija"];

function getContent(slug: string, locale: Locale) {
  const campaignSlug = resolveCampaignSlugForLocale(slug, locale);
  if (!campaignSlug) return null;
  return getCampaignPageContent(campaignSlug, locale);
}

export function generateStaticParams() {
  return SITE_LOCALES.flatMap((locale) =>
    getCampaignStaticPathsForLocale(locale)
      .filter(
        (slug) => !HANDCRAFTED_STATIC_CAMPAIGNS.includes(slug as CampaignSlug),
      )
      .map((campaign) => ({ locale, campaign })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { campaign, locale } = await params;
  const content = routing.locales.includes(locale as Locale)
    ? getContent(campaign, locale as Locale)
    : null;
  if (!content) return {};
  return {
    title: content.metaTitle,
    description: content.metaDescription,
  };
}

export default async function CampaignPage({ params }: Props) {
  const { locale, campaign } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);

  const content = getContent(campaign, locale as Locale);
  if (!content) notFound();

  return <CampaignLanding content={content} />;
}
