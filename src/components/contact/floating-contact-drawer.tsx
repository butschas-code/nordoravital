"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { ContactForm } from "@/components/contact/contact-form";
import { useContactDrawer } from "@/components/contact/contact-drawer-context";

export function FloatingContactDrawer() {
  const { open, closeDrawer } = useContactDrawer();
  const t = useTranslations("Contact");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, closeDrawer]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="floating-contact-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[var(--brand-deep)]/40 backdrop-blur-sm"
        aria-label={t("drawerClose")}
        onClick={closeDrawer}
      />
      <div className="relative flex h-full w-full max-w-md flex-col bg-[var(--bg)] shadow-[var(--shadow-raised)]">
        <div className="flex shrink-0 items-center justify-between border-b border-[var(--border)] px-4 py-3 sm:px-5">
          <h2
            id="floating-contact-title"
            className="font-heading text-lg text-[var(--text)]"
          >
            {t("drawerTitle")}
          </h2>
          <button
            type="button"
            onClick={closeDrawer}
            className="rounded-lg p-2 text-[var(--muted)] transition hover:bg-[var(--panel)] hover:text-[var(--text)]"
            aria-label={t("drawerClose")}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-6 pt-4 sm:px-5">
          <ContactForm
            variant="drawer"
            htmlIdPrefix="drawer-contact"
            onSuccess={() => {
              window.setTimeout(() => closeDrawer(), 2200);
            }}
            className="border-0 bg-transparent p-0 shadow-none"
          />
        </div>
      </div>
    </div>
  );
}
