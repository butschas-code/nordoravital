import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "sanza — Nordora Vital (Präsentation)",
    en: "sanza — Nordora Vital (presentation)",
    lv: "sanza — Nordora Vital (prezentācija)",
    ru: "sanza — Nordora Vital (презентация)",
    tr: "sanza — Nordora Vital (sunum)",
  };
  return {
    title: titles[locale] ?? titles.en,
    robots: { index: false, follow: true },
  };
}

/** The marker lets globals.css give the body the deck's full-screen dark styling. */
export default function DeckSegmentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-deck-fullscreen className="contents">
      {children}
    </div>
  );
}
