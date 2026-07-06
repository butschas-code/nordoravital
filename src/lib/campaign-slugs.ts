/**
 * Latvia outreach campaign — segment-specific landing pages.
 * Slugs come from the campaign brief and are used verbatim across all locales
 * (Latvian-rooted slugs serve as the single canonical URL per segment).
 */
export const CAMPAIGN_SLUGS = [
  "fizioterapija",
  "sporta-medicina",
  "hiropraktika",
  "alternativie-terapeiti",
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
  "masaza",
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
    "alternativie-terapeiti": "heilpraktiker-homoeopathie-naturheilkunde",
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
    masaza: "massage",
  },
  en: {
    fizioterapija: "physiotherapy",
    "sporta-medicina": "sports-medicine",
    hiropraktika: "chiropractic",
    "alternativie-terapeiti": "alternative-therapists-homeopaths-naturopaths",
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
    masaza: "massage",
  },
};

export const CAMPAIGN_SECONDARY_SHARE_ALIASES: Record<
  CampaignAliasLocale,
  Partial<Record<CampaignSlug, string[]>>
> = {
  de: {
    "alternativie-terapeiti": ["heilpraxis", "heilpraktiker"],
  },
  en: {
    "alternativie-terapeiti": ["heilpraxis", "heilpraktiker"],
    zobarstnieciba: ["dentists"],
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

  if (locale === "de" || locale === "en") {
    const localeAliasEntries = Object.entries(CAMPAIGN_SHARE_ALIASES[locale]) as [
      CampaignSlug,
      string,
    ][];
    const localeMatch = localeAliasEntries.find(([, alias]) => alias === value)?.[0];
    if (localeMatch) return localeMatch;

    const localeSecondaryAliasEntries = Object.entries(
      CAMPAIGN_SECONDARY_SHARE_ALIASES[locale],
    ) as [CampaignSlug, string[]][];
    const localeSecondaryMatch = localeSecondaryAliasEntries.find(([, aliases]) =>
      aliases.includes(value),
    )?.[0];
    if (localeSecondaryMatch) return localeSecondaryMatch;
  }

  for (const aliases of Object.values(CAMPAIGN_SHARE_ALIASES)) {
    const aliasEntries = Object.entries(aliases) as [
      CampaignSlug,
      string,
    ][];
    const match = aliasEntries.find(([, alias]) => alias === value)?.[0];
    if (match) return match;
  }

  for (const aliases of Object.values(CAMPAIGN_SECONDARY_SHARE_ALIASES)) {
    const aliasEntries = Object.entries(aliases) as [
      CampaignSlug,
      string[],
    ][];
    const match = aliasEntries.find(([, aliasList]) =>
      aliasList.includes(value),
    )?.[0];
    if (match) return match;
  }

  return null;
}

export function getCampaignStaticPathsForLocale(locale: string): string[] {
  const aliases =
    locale === "de" || locale === "en"
      ? Object.values(CAMPAIGN_SHARE_ALIASES[locale])
      : [];
  const secondaryAliases =
    locale === "de" || locale === "en"
      ? Object.values(CAMPAIGN_SECONDARY_SHARE_ALIASES[locale]).flat()
      : [];
  return [...CAMPAIGN_SLUGS, ...aliases, ...secondaryAliases];
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
