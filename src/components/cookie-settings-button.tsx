"use client";

import { COOKIE_SETTINGS_EVENT } from "@/lib/cookie-consent";

/** Footer link that reopens the cookie banner so visitors can withdraw or change consent. */
export function CookieSettingsButton({ label, className }: { label: string; className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))}
    >
      {label}
    </button>
  );
}
