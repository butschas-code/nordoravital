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
export const DEMO_SUBJECT = "CF Liepāja — zvans par vienas nedēļas izmēģinājumu";
export const TRIAL_SUBJECT = "CF Liepāja — vienas nedēļas izmēģinājums";
export const DEMO_SUBJECT_EN = "CF Liepāja — call about a one-week trial";
export const TRIAL_SUBJECT_EN = "CF Liepāja — one-week trial";

function mailto(subject: string, body: string) {
  return `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function demoMailto(locale: "lv" | "en" = "lv") {
  if (locale === "en") {
    return mailto(
      DEMO_SUBJECT_EN,
      "Hello,\n\nwe would like a call about a one-week sanza trial at CF Liepāja. We want to discuss the terms.\n\n",
    );
  }
  return mailto(
    DEMO_SUBJECT,
    "Labdien,\n\nvēlamies zvanu par vienas nedēļas sanza izmēģinājumu CF Liepāja. Noteikumus gribam pārrunāt.\n\n",
  );
}

export function trialMailto(locale: "lv" | "en" = "lv") {
  if (locale === "en") {
    return mailto(
      TRIAL_SUBJECT_EN,
      "Hello,\n\nwe would like to discuss a one-week sanza trial at CF Liepāja. Please tell us the terms on a call.\n\n",
    );
  }
  return mailto(
    TRIAL_SUBJECT,
    "Labdien,\n\nvēlamies pārrunāt vienas nedēļas sanza izmēģinājumu CF Liepāja. Noteikumus lūdzam noskaidrot zvanā.\n\n",
  );
}

export function formatEuro(value: number, locale: "lv" | "en" = "lv") {
  return new Intl.NumberFormat(locale === "en" ? "en-GB" : "lv-LV", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}
