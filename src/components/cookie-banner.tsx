"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

const CONSENT_KEY = "nv_cookie_consent";

type ConsentState =
  | "all"       // user accepted all cookies
  | "essential" // user chose essential-only
  | null;       // no decision yet (show banner)

/**
 * GDPR / Latvian Electronic Communications Law cookie consent banner.
 * Renders fixed at the bottom of the screen until the user makes a choice.
 * Stores the decision in localStorage under `nv_cookie_consent`.
 */
export function CookieBanner() {
  const t = useTranslations("CookieBanner");
  const locale = useLocale();

  // undefined = "not yet hydrated" (prevents SSR mismatch flash)
  const [consent, setConsent] = useState<ConsentState | undefined>(undefined);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY) as ConsentState | null;
      setConsent(stored);
    } catch {
      // Storage blocked (private browsing, etc.) — treat as no consent
      setConsent(null);
    }
  }, []);

  const handleConsent = (value: "all" | "essential") => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* ignore write errors */
    }
    setConsent(value);
  };

  // Don't render during SSR / before hydration, and hide once a choice is made
  if (consent === undefined || consent !== null) return null;

  // Build the cookie policy path with locale prefix
  const policyHref = `/${locale}/cookie-policy`;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("title")}
      className="fixed bottom-0 left-0 right-0 z-[400] px-3 pb-3 sm:px-4 sm:pb-4"
    >
      <div className="mx-auto max-w-2xl rounded-2xl border border-[var(--border)] bg-white/97 shadow-[0_-4px_32px_rgba(14,61,52,0.12),0_8px_24px_rgba(14,61,52,0.08)] backdrop-blur-xl">
        {/* Top accent line */}
        <div
          className="h-[3px] w-full rounded-t-2xl"
          style={{
            background: "linear-gradient(to right, var(--brand), var(--brand-secondary))",
          }}
          aria-hidden
        />

        <div className="p-4 sm:p-5">
          {/* Header row */}
          <div className="mb-2 flex items-center gap-2">
            {/* Cookie icon */}
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--panel)] text-[var(--brand)]" aria-hidden>
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3" />
                <circle cx="5.5" cy="6" r="1" fill="currentColor" />
                <circle cx="9.5" cy="5" r="0.75" fill="currentColor" />
                <circle cx="10" cy="9.5" r="1" fill="currentColor" />
                <circle cx="6.5" cy="10.5" r="0.75" fill="currentColor" />
              </svg>
            </span>
            <p className="text-sm font-semibold text-[var(--text)]">{t("title")}</p>
          </div>

          {/* Body + policy link */}
          <p className="text-[0.8125rem] leading-relaxed text-[var(--muted)]">
            {t("body")}{" "}
            <Link
              href="/cookie-policy"
              className="font-medium text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-strong)]"
            >
              {t("policyLink")}
            </Link>
          </p>

          {/* Action row */}
          <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              onClick={() => handleConsent("essential")}
              className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-transparent px-4 py-2.5 text-[0.8125rem] font-semibold text-[var(--muted)] transition hover:border-[var(--brand)]/40 hover:bg-[var(--panel)] hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-[var(--brand)] focus-visible:outline-offset-2"
            >
              {t("reject")}
            </button>
            <button
              onClick={() => handleConsent("all")}
              className="inline-flex items-center justify-center rounded-xl bg-[var(--brand)] px-5 py-2.5 text-[0.8125rem] font-semibold text-white shadow-sm transition hover:bg-[var(--brand-strong)] focus-visible:outline-2 focus-visible:outline-[var(--brand)] focus-visible:outline-offset-2"
            >
              {t("accept")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
