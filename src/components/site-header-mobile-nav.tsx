"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import {
  useContactDrawer,
  type ContactDrawerOptions,
} from "@/components/contact/contact-drawer-context";

export type MobileNavLink = {
  href: string;
  label: string;
  external?: boolean;
  action?: "contact";
  drawerOptions?: ContactDrawerOptions;
};

export function SiteHeaderMobileNav({
  links,
  className = "flex items-center lg:hidden",
}: {
  links: MobileNavLink[];
  className?: string;
}) {
  const t = useTranslations("Nav");
  const tLang = useTranslations("Language");
  const pathname = usePathname();
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
    <div className={className}>
      <button
        type="button"
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--panel)] text-[var(--text)] shadow-sm transition-[border-color,background-color,color] duration-[var(--duration-ui)] ease-[var(--ease-brand)] hover:border-[var(--brand)] hover:bg-[var(--panel-deep)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? t("closeMenu") : t("openMenu")}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="relative block h-[14px] w-[18px]">
          <span
            className={`absolute left-0 top-0 block h-0.5 w-[18px] rounded-full bg-current transition-transform duration-[var(--duration-ui)] ease-[var(--ease-brand)] ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[6px] block h-0.5 w-[18px] rounded-full bg-current transition-opacity duration-[var(--duration-ui)] ease-[var(--ease-brand)] ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-[12px] block h-0.5 w-[18px] rounded-full bg-current transition-transform duration-[var(--duration-ui)] ease-[var(--ease-brand)] ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open && typeof document !== "undefined"
        ? createPortal(
            <>
          <button
            type="button"
            className="drawer-backdrop-enter fixed inset-0 z-[490] bg-[#082721]/45 backdrop-blur-[2px]"
            data-no-press
            aria-label={t("closeMenu")}
            onClick={() => setOpen(false)}
          />
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label={t("mobileMenuTitle")}
            className="drawer-panel-enter fixed inset-y-0 right-0 z-[500] flex w-[min(100vw,20rem)] flex-col border-l border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-raised)]"
          >
            <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
              <span className="text-[0.875rem] font-semibold uppercase tracking-wider text-[var(--muted)] sm:text-[0.9375rem]">
                {t("mobileMenuTitle")}
              </span>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[var(--muted)] transition hover:bg-[var(--panel)] hover:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
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
                {links.map((link) => {
                  const active = !link.external && pathname === link.href;
                  const rowClass = `block rounded-xl px-3 py-3 text-base transition-[background-color,color] duration-[var(--duration-ui)] ease-[var(--ease-brand)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)] ${
                    active
                      ? "bg-[var(--panel-deep)] font-semibold text-[var(--brand-strong)]"
                      : "font-medium text-[var(--text)] hover:bg-[var(--panel)]"
                  }`;
                  return (
                    <li key={link.href}>
                      {link.action === "contact" ? (
                        <button
                          type="button"
                          className={`${rowClass} w-full text-left`}
                          onClick={() => {
                            setOpen(false);
                            openDrawer(link.drawerOptions);
                          }}
                        >
                          {link.label}
                        </button>
                      ) : link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${rowClass} font-medium`}
                          onClick={() => setOpen(false)}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className={rowClass}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="border-t border-[var(--border)] px-4 py-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.11em] text-[var(--muted)] sm:text-sm">
                {tLang("label")}
              </p>
              <LanguageSwitcher variant="stacked" onLocaleChange={() => setOpen(false)} />
            </div>

            <div className="border-t border-[var(--border)] p-4">
              <button
                type="button"
                className="btn-primary inline-flex w-full justify-center text-base"
                style={{
                  minHeight: "2.75rem",
                  padding: "0.5rem 1.125rem",
                  borderRadius: "var(--radius-btn)",
                }}
                onClick={() => {
                  setOpen(false);
                  openDrawer();
                }}
              >
                {t("contactUs")}
              </button>
            </div>
          </div>
            </>,
            document.body,
          )
        : null}
    </div>
  );
}
