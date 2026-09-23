import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { HomePillars } from "@/components/home/home-pillars";
import { HomeClientOutcomes } from "@/components/home/home-client-outcomes";
import { HomeRollout } from "@/components/home/home-rollout";
import { HomeProfessionals } from "@/components/home/home-professionals";
import { FloatingDemoCta } from "@/components/home/floating-demo-cta";
import {
  DraftClosing,
  DraftHero,
  DraftManifesto,
  DraftScene,
  DraftTry,
} from "@/components/home-draft/draft-sections";

/** Review-only draft of the belief-led homepage. English only until the copy is approved. */
type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("HomeDraft");
  return { title: t("metaTitle"), robots: { index: false, follow: false } };
}

export default async function DraftHomePage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "en") notFound();
  const t = await getTranslations("HomeDraft");

  return (
    <div className="site-marketing-root flex flex-col gap-0">
      <DraftHero />
      <DraftManifesto />
      <DraftScene />
      <HomeClientOutcomes />
      <DraftTry />
      <HomePillars />
      <HomeRollout />
      <HomeProfessionals />
      <DraftClosing />
      <FloatingDemoCta label={t("ctaFeelShort")} message={t("tryMeetMessage")} />
    </div>
  );
}
