"use client";

import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
import {
  useContactDrawer,
  type ContactDrawerOptions,
} from "@/components/contact/contact-drawer-context";

type Props = {
  className?: string;
  label?: string;
  options?: ContactDrawerOptions;
  children?: ReactNode;
};

export function ContactDrawerTrigger({ className, label, options, children }: Props) {
  const t = useTranslations("Nav");
  const { openDrawer } = useContactDrawer();
  const defaultClassName = "btn-primary inline-flex text-sm";

  return (
    <button
      type="button"
      onClick={() => openDrawer(options)}
      className={className ?? defaultClassName}
      style={
        className
          ? undefined
          : { padding: "0.5rem 1.125rem", borderRadius: "var(--radius-btn)" }
      }
    >
      {children ?? label ?? t("contactUs")}
    </button>
  );
}
