import type { Locale } from "@/i18n/routing";
import type { SiteSurface } from "@/lib/domains";

export type HomeLocale = "de" | "en" | "lv";

export function homeLocale(locale: string | Locale): HomeLocale {
  if (locale === "de" || locale === "lv") return locale;
  return "en";
}

const shopUrl = "https://nordoravital.sanzanet.com/shop-en";

const shared = {
  shopUrl,
};

export const HOME_COPY = {
  "en": {
    "nav": {
      "home": "Home",
      "experience": "How sanza works",
      "programs": "Programs",
      "sanzaExperiences": "sanza Experiences",
      "faq": "FAQ",
      "contact": "Contact",
      "shop": "Shop",
    },
    "footer": {
      "note": "Nordora Vital home experiences are for private wellbeing rituals, comfort and relaxation. They are not medical treatment or a replacement for professional care.",
      "pro": "Professional site",
      "company": "Nordora Vital SIA",
      "imprint": "Imprint",
      "privacy": "Privacy",
      "terms": "Terms",
      "cookies": "Cookies",
    },
    "common": {
      "viewPrograms": "View Programs",
      "exploreShop": "Explore Shop",
      "viewShop": "View Shop",
      "explorePrograms": "Explore Programs",
      "exploreExperiences": "Explore Experiences",
      "bookIntro": "Book a Guided Introduction",
    },
  },
  "de": {
    "nav": {
      "home": "Startseite",
      "experience": "So funktioniert sanza",
      "programs": "Programme",
      "sanzaExperiences": "sanza-Erlebnisse",
      "faq": "FAQ",
      "contact": "Kontakt",
      "shop": "Shop",
    },
    "footer": {
      "note": "Die sanza-Erlebnisse für zu Hause dienen privaten Wellness-Ritualen, dem Wohlbefinden und der Entspannung. Sie stellen keine medizinische Behandlung dar und sind kein Ersatz für professionelle Betreuung.",
      "pro": "Professionelle Website",
      "company": "Nordora Vital SIA",
      "imprint": "Impressum",
      "privacy": "Datenschutz",
      "terms": "Nutzungsbedingungen",
      "cookies": "Cookies",
    },
    "common": {
      "viewPrograms": "Programme anzeigen",
      "exploreShop": "Entdecken Shop",
      "viewShop": "Shop anzeigen",
      "explorePrograms": "Programme entdecken",
      "exploreExperiences": "Erlebnisse entdecken",
      "bookIntro": "Geführte Einführung buchen",
    },
  },
  "lv": {
    "nav": {
      "home": "Sākums",
      "experience": "Kā darbojas sanza",
      "programs": "Programmas",
      "sanzaExperiences": "sanza pieredzes",
      "faq": "Bieži uzdotie jautājumi",
      "contact": "Kontakti",
      "shop": "Veikals",
    },
    "footer": {
      "note": "Nordora Vital mājas pieredzes ir paredzētas privātiem labsajūtas rituāliem, komfortam un relaksācijai. Tās nav medicīniska ārstēšana vai profesionālās aprūpes aizstājējs.",
      "pro": "Profesionālā vietne",
      "company": "Nordora Vital SIA",
      "imprint": "Izdevējs",
      "privacy": "Privātums",
      "terms": "Noteikumi",
      "cookies": "Sīkdatnes",
    },
    "common": {
      "viewPrograms": "Apskatīt programmas",
      "exploreShop": "Izpētīt Veikals",
      "viewShop": "Apskatīt veikalu",
      "explorePrograms": "Izpētīt programmas",
      "exploreExperiences": "Izpētīt pieredzes",
      "bookIntro": "Rezervēt ievadu ar gidu",
    },
  },
} as const;

export function getHomeSharedCopy(locale: string | Locale) {
  return {
    ...shared,
    ...HOME_COPY[homeLocale(locale)],
  };
}

export function getHomeDisplayPath(surface: SiteSurface, path = "") {
  const normalizedPath = path && path !== "/" ? (path.startsWith("/") ? path : `/${path}`) : "";
  if (surface === "local") return `/home${normalizedPath}`;
  return normalizedPath || "/";
}
