"use client";

import { useTranslations } from "next-intl";

/**
 * First focusable element on every page. Surfaces render their own `<main>`,
 * so the click handler focuses whichever one the page has.
 */
export function SkipLink() {
  const t = useTranslations("Nav");

  return (
    <a
      href="#main-content"
      onClick={(event) => {
        const main = document.getElementById("main-content") ?? document.querySelector("main");
        if (!main) return;
        event.preventDefault();
        if (!main.hasAttribute("tabindex")) main.setAttribute("tabindex", "-1");
        main.focus({ preventScroll: true });
        main.scrollIntoView();
      }}
      className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-lg bg-[var(--brand-primary)] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform focus:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {t("skipToContent")}
    </a>
  );
}
