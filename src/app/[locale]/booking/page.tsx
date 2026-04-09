import { getTranslations } from "next-intl/server";
import { BookingForm } from "@/components/booking-form";

export default async function BookingPage() {
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
