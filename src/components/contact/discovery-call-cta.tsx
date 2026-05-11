"use client";

import { useTranslations } from "next-intl";

const DEFAULT_CAL_DISCOVERY_URL = "https://cal.eu/nordoravital/discovery-call";

type DiscoveryCallCtaProps = {
  className?: string;
};

export function DiscoveryCallCta({ className }: DiscoveryCallCtaProps) {
  const t = useTranslations("Contact");
  const calDiscoveryUrl =
    process.env.NEXT_PUBLIC_CAL_DISCOVERY_URL?.trim() || DEFAULT_CAL_DISCOVERY_URL;

  return (
    <div
      className={
        className ??
        "rounded-2xl border border-[var(--brand-primary)]/25 bg-[var(--panel)] p-4"
      }
    >
      <p className="text-sm font-semibold text-[var(--brand-heading)]">
        {t("bookingTitle")}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-[var(--brand-muted)]">
        {t("bookingLead")}
      </p>
      <a
        href={calDiscoveryUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-[var(--brand-primary)] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90 sm:w-auto"
      >
        {t("bookingCta")}
      </a>
    </div>
  );
}
