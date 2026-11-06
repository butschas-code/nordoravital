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
export const DEMO_SUBJECT = "CF Liepāja — Sanza demonstrācija";
export const TRIAL_SUBJECT = "CF Liepāja — Sanza izmēģinājuma iespējas";
export const DEMO_SUBJECT_EN = "CF Liepāja — sanza demonstration";
export const TRIAL_SUBJECT_EN = "CF Liepāja — sanza trial options";

function mailto(subject: string, body: string) {
  return `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function demoMailto(locale: "lv" | "en" = "lv") {
  if (locale === "en") {
    return mailto(
      DEMO_SUBJECT_EN,
      "Hello,\n\nwe would like to arrange a sanza demonstration for CF Liepāja.\n\n",
    );
  }
  return mailto(
    DEMO_SUBJECT,
    "Labdien,\n\nvēlamies vienoties par sanza demonstrāciju CF Liepāja.\n\n",
  );
}

export function trialMailto(locale: "lv" | "en" = "lv") {
  if (locale === "en") {
    return mailto(
      TRIAL_SUBJECT_EN,
      "Hello,\n\nwe would like to know which rental or trial options are available for a sanza system at CF Liepāja. Please tell us what is possible.\n\n",
    );
  }
  return mailto(
    TRIAL_SUBJECT,
    "Labdien,\n\nvēlamies uzzināt, kādas nomas vai izmēģinājuma iespējas sanza sistēmai ir pieejamas CF Liepāja. Lūdzu, pastāstiet par iespējamiem variantiem.\n\n",
  );
}

export function formatEuro(value: number, locale: "lv" | "en" = "lv") {
  return new Intl.NumberFormat(locale === "en" ? "en-GB" : "lv-LV", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}
