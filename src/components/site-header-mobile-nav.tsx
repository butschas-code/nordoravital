"use client";

import { useEffect, useId, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useContactDrawer } from "@/components/contact/contact-drawer-context";

export type MobileNavLink = { href: string; label: string; external?: boolean };

export function SiteHeaderMobileNav({ links }: { links: MobileNavLink[] }) {
  const t = useTranslations("Nav");
  const tLang = useTranslations("Language");
  const { openDrawer } = useContactDrawer();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="flex items-center lg:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--panel)] text-[var(--text)] shadow-sm transition hover:border-[var(--brand)] hover:bg-[var(--panel-deep)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? t("closeMenu") : t("openMenu")}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="relative block h-[14px] w-[18px]">
          <span
            className={`absolute left-0 top-0 block h-0.5 w-[18px] rounded-full bg-current transition-transform duration-200 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[6px] block h-0.5 w-[18px] rounded-full bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-[12px] block h-0.5 w-[18px] rounded-full bg-current transition-transform duration-200 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[90] bg-[#082721]/45 backdrop-blur-[2px]"
            aria-label={t("closeMenu")}
            onClick={() => setOpen(false)}
          />
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label={t("mobileMenuTitle")}
            className="fixed inset-y-0 right-0 z-[100] flex w-[min(100vw,20rem)] flex-col border-l border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-raised)]"
          >
            <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
              <span className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                {t("mobileMenuTitle")}
              </span>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--muted)] transition hover:bg-[var(--panel)] hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
                aria-label={t("closeMenu")}
                onClick={() => setOpen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Main">
              <ul className="flex flex-col gap-1">
                {links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-xl px-3 py-3 text-base font-medium text-[var(--text)] transition hover:bg-[var(--panel)]"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="block rounded-xl px-3 py-3 text-base font-medium text-[var(--text)] transition hover:bg-[var(--panel)]"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-[var(--border)] px-4 py-4">
              <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                {tLang("label")}
              </p>
              <LanguageSwitcher variant="stacked" onLocaleChange={() => setOpen(false)} />
            </div>

            <div className="border-t border-[var(--border)] p-4">
              <button
                type="button"
                className="btn-primary inline-flex w-full justify-center text-sm"
                style={{ padding: "0.5rem 1.125rem", borderRadius: "var(--radius-btn)" }}
                onClick={() => {
                  setOpen(false);
                  openDrawer();
                }}
              >
                {t("contactUs")}
              </button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
