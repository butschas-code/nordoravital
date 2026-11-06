/** Illustrative gross revenue for the CF Liepāja proposal. Not a forecast and not profit. */
export function illustrativeGrossRevenue(
  priceEur: number,
  sessionsPerDay: number,
  daysPerMonth: number,
) {
  const monthly = priceEur * sessionsPerDay * daysPerMonth;
  return { monthly, yearly: monthly * 12 };
}

export const DEMO_EMAIL = "sascha@nordoravital.com";
export const DEMO_PHONE = "+371 20727915";
export const DEMO_SUBJECT = "CF Liepāja — demonstrācija un saruna par izmēģinājumu";
export const TRIAL_SUBJECT = "CF Liepāja — vienas nedēļas izmēģinājums (noteikumi zvanā)";
export const DEMO_SUBJECT_EN = "CF Liepāja — sanza demonstration and trial discussion";
export const TRIAL_SUBJECT_EN = "CF Liepāja — one-week trial (terms on a call)";

function mailto(subject: string, body: string) {
  return `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function demoMailto(locale: "lv" | "en" = "lv") {
  if (locale === "en") {
    return mailto(
      DEMO_SUBJECT_EN,
      "Hello,\n\nWe would like to arrange a sanza demonstration for CF Liepāja and explore how a one-week trial could work at your facility. Please suggest a time for a call.\n\n",
    );
  }
  return mailto(
    DEMO_SUBJECT,
    "Labdien,\n\nvēlamies vienoties par sanza demonstrāciju CF Liepāja un pārrunāt, kā vienas nedēļas izmēģinājums varētu darboties jūsu klubā. Lūdzam ierosināt laiku zvanam.\n\n",
  );
}

export function trialMailto(locale: "lv" | "en" = "lv") {
  if (locale === "en") {
    return mailto(
      TRIAL_SUBJECT_EN,
      "Hello,\n\nWe would like to discuss a one-week sanza trial at CF Liepāja. Please outline the commercial terms on a call.\n\n",
    );
  }
  return mailto(
    TRIAL_SUBJECT,
    "Labdien,\n\nvēlamies pārrunāt vienas nedēļas sanza izmēģinājumu CF Liepāja. Lūdzam komerciālos noteikumus izklāstīt zvanā.\n\n",
  );
}

export function formatEuro(value: number, locale: "lv" | "en" = "lv") {
  return new Intl.NumberFormat(locale === "en" ? "en-GB" : "lv-LV", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}
