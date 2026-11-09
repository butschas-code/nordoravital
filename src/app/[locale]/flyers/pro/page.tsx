import type { Metadata } from "next";
import { assertLocalFlyerPreview } from "@/components/flyers/local-only";
import { proFlyerCopy } from "@/components/flyers/sanza-flyer-copy";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  assertLocalFlyerPreview();
  const { locale } = await params;
  const t = proFlyerCopy(locale);
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    robots: { index: false, follow: false },
  };
}

export default async function SanzaProFlyerPreview({ params }: Props) {
  assertLocalFlyerPreview();
  const { locale } = await params;
  const { SanzaProFlyer } = await import("@/components/flyers/sanza-pro-flyer");
  return <SanzaProFlyer locale={locale} />;
}
