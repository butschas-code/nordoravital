import { DeckPresentation } from "@/components/deck/deck-presentation";
import { setRequestLocale } from "next-intl/server";

export default async function DeckPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <DeckPresentation />;
}
