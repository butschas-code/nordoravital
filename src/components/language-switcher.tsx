"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useId, useRef, useState } from "react";
import {
  LOCALE_COOKIE_MAX_AGE_SECONDS,
  LOCALE_COOKIE_NAME,
} from "@/lib/locale-cookie-constants";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const locales: Locale[] = [...routing.locales];

function setLocaleCookie(loc: Locale) {
  document.cookie = `${LOCALE_COOKIE_NAME}=${loc};path=/;max-age=${LOCALE_COOKIE_MAX_AGE_SECONDS};SameSite=Lax`;
}

type LanguageSwitcherProps = {
  /** Light controls for dark green / dark section backgrounds */
  appearance?: "default" | "onDark";
  /** Vertical link list for mobile drawer (no dropdown) */
  variant?: "dropdown" | "stacked";
  /** Called after choosing a locale (e.g. close mobile menu) */
  onLocaleChange?: () => void;
};

export function LanguageSwitcher({
  appearance = "default",
  variant = "dropdown",
  onLocaleChange,
}: LanguageSwitcherProps) {
  const t = useTranslations("Language");
  const onDark = appearance === "onDark";
  const pathname = usePathname();
  const locale = useLocale() as Locale;
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const uid = useId();
  const triggerId = `language-switcher-trigger${uid}`;
  const menuId = `language-switcher-menu${uid}`;

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (variant === "stacked") {
    return (
      <ul className="flex flex-col gap-0.5" role="list">
        {locales.map((loc) => {
          const active = loc === locale;
          return (
            <li key={loc}>
              <Link
                href={pathname}
                locale={loc}
                prefetch={false}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition ${
                  onDark
                    ? active
                      ? "bg-white/12 font-semibold text-[var(--brand-secondary)]"
                      : "text-white/90 hover:bg-white/10"
                    : active
                      ? "bg-[var(--panel)] font-semibold text-[var(--brand)]"
                      : "text-[var(--text)] hover:bg-[var(--panel)]"
                }`}
                onClick={() => {
                  setLocaleCookie(loc);
                  onLocaleChange?.();
                }}
              >
                <span>{t(loc)}</span>
                <span
                  className={`text-xs tabular-nums ${
                    onDark
                      ? active
                        ? "text-[var(--brand-secondary)]"
                        : "text-white/55"
                      : `text-[var(--muted)] ${active ? "text-[var(--brand)]" : ""}`
                  }`}
                >
                  {loc.toUpperCase()}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        className={
          onDark
            ? "inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-2.5 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur-sm transition hover:border-white/35 hover:bg-white/[0.14] sm:px-3 sm:py-2 sm:text-sm"
            : "inline-flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-2.5 py-1.5 text-xs font-semibold text-[var(--text)] shadow-sm transition hover:border-[var(--brand)] hover:bg-[var(--panel-deep)] sm:px-3 sm:py-2 sm:text-sm"
        }
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        id={triggerId}
        onClick={() => setOpen((o) => !o)}
      >
        <span aria-hidden>{locale.toUpperCase()}</span>
        <span className="sr-only">
          {t("label")}: {t(locale)}
        </span>
        <svg
          aria-hidden
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`shrink-0 transition-transform duration-200 ${
            onDark ? "text-white/65" : "text-[var(--muted)]"
          } ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M2.5 4.5L6 8l3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open ? (
        <ul
          id={menuId}
          role="menu"
          aria-labelledby={triggerId}
          className={
            onDark
              ? "absolute right-0 top-[calc(100%+6px)] z-[60] min-w-[11.5rem] overflow-hidden rounded-xl border border-white/15 bg-[#0a2f28] py-1 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
              : "absolute right-0 top-[calc(100%+6px)] z-[60] min-w-[11.5rem] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] py-1 shadow-[var(--shadow-raised)]"
          }
        >
          {locales.map((loc) => {
            const active = loc === locale;
            return (
              <li key={loc} role="none">
                <Link
                  href={pathname}
                  locale={loc}
                  role="menuitem"
                  title={t(loc)}
                  prefetch={false}
                  className={`flex w-full items-center justify-between gap-3 px-3 py-2.5 text-sm transition ${
                    onDark
                      ? active
                        ? "bg-white/12 font-semibold text-[var(--brand-secondary)]"
                        : "text-white/90 hover:bg-white/10"
                      : active
                        ? "bg-[var(--panel)] font-semibold text-[var(--brand)]"
                        : "text-[var(--text)] hover:bg-[var(--panel)]"
                  }`}
                  onClick={() => {
                    setLocaleCookie(loc);
                    setOpen(false);
                  }}
                >
                  <span>{t(loc)}</span>
                  <span
                    className={`text-xs tabular-nums ${
                      onDark
                        ? active
                          ? "text-[var(--brand-secondary)]"
                          : "text-white/55"
                        : `text-[var(--muted)] ${active ? "text-[var(--brand)]" : ""}`
                    }`}
                  >
                    {loc.toUpperCase()}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
