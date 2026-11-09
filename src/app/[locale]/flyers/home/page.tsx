import type { Metadata } from "next";
import { assertLocalFlyerPreview } from "@/components/flyers/local-only";
import { homeFlyerCopy } from "@/components/flyers/sanza-flyer-copy";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  assertLocalFlyerPreview();
  const { locale } = await params;
  const t = homeFlyerCopy(locale);
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    robots: { index: false, follow: false },
  };
}

export default async function SanzaHomeFlyerPreview({ params }: Props) {
  assertLocalFlyerPreview();
  const { locale } = await params;
  const { SanzaHomeFlyer } = await import("@/components/flyers/sanza-home-flyer");
  return <SanzaHomeFlyer locale={locale} />;
}
