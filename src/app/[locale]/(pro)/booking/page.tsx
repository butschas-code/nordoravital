import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BookingForm } from "@/components/booking-form";
import { proPageMetadata } from "@/lib/page-metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Booking" });
  return proPageMetadata(locale, "booking", `${t("title")} | Nordora Vital`, t("description"));
}

export default async function BookingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Booking");

  return (
    <div className="space-y-8 pt-8 md:pt-10">
      <header className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--brand-heading)] sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-[var(--brand-muted)]">
          {t("description")}
        </p>
      </header>
      <BookingForm />
    </div>
  );
}
