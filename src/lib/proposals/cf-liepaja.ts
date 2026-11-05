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

export function demoMailto() {
  const body = "Labdien,\n\nvēlamies vienoties par īsu Sanza demonstrāciju CF Liepāja.\n\n";
  return `mailto:${DEMO_EMAIL}?subject=${encodeURIComponent(DEMO_SUBJECT)}&body=${encodeURIComponent(body)}`;
}

export function formatEuro(value: number) {
  return new Intl.NumberFormat("lv-LV", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}
