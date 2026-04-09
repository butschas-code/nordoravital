import { defineRouting } from "next-intl/routing";
import {
  LOCALE_COOKIE_MAX_AGE_SECONDS,
  LOCALE_COOKIE_NAME,
} from "@/lib/locale-cookie-constants";

export const routing = defineRouting({
  locales: ["de", "en", "lv"],
  defaultLocale: "en",
  localePrefix: "always",
  /** Persists manual language choice; aligns with middleware geo redirect cookie. */
  localeCookie: {
    name: LOCALE_COOKIE_NAME,
    maxAge: LOCALE_COOKIE_MAX_AGE_SECONDS,
    sameSite: "lax",
  },
  localeDetection: true,
});

export type Locale = (typeof routing.locales)[number];
