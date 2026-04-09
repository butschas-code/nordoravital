import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PilotBookingForm } from "@/components/pilot/pilot-booking-form";
import { PilotTimeline } from "@/components/pilot/pilot-timeline";
import { richParts } from "@/lib/i18n-rich";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../../messages/${locale}.json`)).default as {
    Pilot: { metaTitle: string; metaDescription: string };
  };
  return {
    title: messages.Pilot.metaTitle,
    description: messages.Pilot.metaDescription,
  };
}

export default async function PilotPage() {
  const t = await getTranslations("Pilot");

  const steps = [
    { title: t("step1Title"), body: t("step1Body") },
    { title: t("step2Title"), body: t.rich("step2Body", richParts.default) },
    { title: t("step3Title"), body: t("step3Body") },
    { title: t("step4Title"), body: t("step4Body") },
  ];

  const included = [
    t.rich("included1", richParts.default),
    t("included2"),
    t("included3"),
    t("included4"),
    t("included5"),
  ];

  return (
    <div className="space-y-16 pt-8 md:space-y-20 md:pt-10">
      <header className="max-w-3xl space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--brand-heading)] sm:text-4xl md:text-5xl">
          {t("heroTitle")}
        </h1>
        <p className="text-lg leading-relaxed text-[var(--brand-muted)]">
          {t.rich("heroLead", richParts.default)}
        </p>
      </header>

      <PilotTimeline timelineTitle={t("timelineTitle")} steps={steps} />

      <section className="space-y-4" aria-labelledby="included-heading">
        <h2
          id="included-heading"
          className="text-2xl font-semibold tracking-tight text-[var(--brand-heading)] sm:text-3xl"
        >
          {t("includedTitle")}
        </h2>
        <ul className="max-w-3xl list-disc space-y-3 pl-5 text-[var(--brand-muted)]">
          {included.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>

      <PilotBookingForm />
    </div>
  );
}
