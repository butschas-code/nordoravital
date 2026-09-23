"use client";

import { useTranslations } from "next-intl";
import { FloatingCtaPill } from "@/components/floating-cta-pill";

export function FloatingDemoCta({ label, message }: { label?: string; message?: string } = {}) {
  const t = useTranslations("Home");

  return (
    <FloatingCtaPill
      label={label ?? t("ctaBookDemo")}
      options={message ? { message } : undefined}
      showAfter={480}
    />
  );
}
