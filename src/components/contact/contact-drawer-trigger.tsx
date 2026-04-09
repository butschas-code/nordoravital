"use client";

import { useTranslations } from "next-intl";
import { useContactDrawer } from "@/components/contact/contact-drawer-context";

type Props = {
  className?: string;
};

export function ContactDrawerTrigger({ className }: Props) {
  const t = useTranslations("Nav");
  const { openDrawer } = useContactDrawer();

  return (
    <button
      type="button"
      onClick={openDrawer}
      className={
        className ??
        "btn-primary inline-flex text-sm"
      }
      style={{ padding: "0.5rem 1.125rem", borderRadius: "var(--radius-btn)" }}
    >
      {t("contactUs")}
    </button>
  );
}
