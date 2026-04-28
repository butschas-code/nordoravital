import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: "sanza — Nordora Vital (presentation)",
    de: "sanza — Nordora Vital (Präsentation)",
    lv: "sanza — Nordora Vital (prezentācija)",
  };
  return {
    title: titles[locale] ?? titles.en,
    robots: { index: false, follow: true },
  };
}

export default function DeckSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
