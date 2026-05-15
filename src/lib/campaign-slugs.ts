/**
 * Latvia outreach campaign — segment-specific landing pages.
 * Slugs come from the campaign brief and are used verbatim across all locales
 * (Latvian-rooted slugs serve as the single canonical URL per segment).
 */
export const CAMPAIGN_SLUGS = [
  "fizioterapija",
  "sporta-medicina",
  "hiropraktika",
  "joga-meditacija",
  "sporta-zales",
  "vecu-cilveku-aprupe",
  "spa-viesnicas",
  "golfa-klubi",
  "tenisa-klubi",
  "gimenes-arsti",
  "zobarstnieciba",
  "poliklinika",
  "spa-wellness",
] as const;

export type CampaignSlug = (typeof CAMPAIGN_SLUGS)[number];

type CampaignAliasLocale = "de" | "en";

export const CAMPAIGN_SHARE_ALIASES: Record<
  CampaignAliasLocale,
  Partial<Record<CampaignSlug, string>>
> = {
  de: {
    fizioterapija: "physiotherapie",
    "sporta-medicina": "sportmedizin",
    hiropraktika: "chiropraktik",
    "joga-meditacija": "yoga-meditation",
    "sporta-zales": "fitnessstudios",
    "vecu-cilveku-aprupe": "seniorenpflege",
    "spa-viesnicas": "spa-hotels",
    "golfa-klubi": "golfclubs",
    "tenisa-klubi": "tennisclubs",
    "gimenes-arsti": "hausarztpraxen",
    zobarstnieciba: "zahnarztpraxen",
    poliklinika: "polikliniken",
    "spa-wellness": "spa-wellness",
  },
  en: {
    fizioterapija: "physiotherapy",
    "sporta-medicina": "sports-medicine",
    hiropraktika: "chiropractic",
    "joga-meditacija": "yoga-meditation",
    "sporta-zales": "gyms",
    "vecu-cilveku-aprupe": "senior-care",
    "spa-viesnicas": "spa-hotels",
    "golfa-klubi": "golf-clubs",
    "tenisa-klubi": "tennis-clubs",
    "gimenes-arsti": "gp-practices",
    zobarstnieciba: "dental-clinics",
    poliklinika: "polyclinics",
    "spa-wellness": "spa-wellness",
  },
};

export function isCampaignSlug(value: string): value is CampaignSlug {
  return (CAMPAIGN_SLUGS as readonly string[]).includes(value);
}

export function resolveCampaignSlugForLocale(
  value: string,
  locale: string,
): CampaignSlug | null {
  if (isCampaignSlug(value)) return value;
  if (locale !== "de" && locale !== "en") return null;

  const aliasEntries = Object.entries(CAMPAIGN_SHARE_ALIASES[locale]) as [
    CampaignSlug,
    string,
  ][];
  return aliasEntries.find(([, alias]) => alias === value)?.[0] ?? null;
}

export function getCampaignStaticPathsForLocale(locale: string): string[] {
  const aliases =
    locale === "de" || locale === "en"
      ? Object.values(CAMPAIGN_SHARE_ALIASES[locale])
      : [];
  return [...CAMPAIGN_SLUGS, ...aliases];
}

export function getCampaignPathnameForLocale(
  pathname: string,
  currentLocale: string,
  targetLocale: string,
): string | null {
  const [firstSegment, ...rest] = pathname.replace(/^\/+/, "").split("/");
  if (!firstSegment || rest.length > 0) return null;

  const campaignSlug = resolveCampaignSlugForLocale(firstSegment, currentLocale);
  if (!campaignSlug) return null;

  if (targetLocale === "de" || targetLocale === "en") {
    return `/${CAMPAIGN_SHARE_ALIASES[targetLocale][campaignSlug] ?? campaignSlug}`;
  }

  return `/${campaignSlug}`;
}
