/**
 * Latvia outreach campaign — 15 segment-specific landing pages.
 * Slugs come from the campaign brief and are used verbatim across all locales
 * (Latvian-rooted slugs serve as the single canonical URL per segment).
 */
export const CAMPAIGN_SLUGS = [
  "fizioterapija",
  "sporta-medicina",
  "hiropraktika",
  "joga-meditacija",
  "sporta-zales",
  "veterinarija",
  "jahsanas",
  "vecu-cilveku-aprupe",
  "spa-viesnicas",
  "golfa-klubi",
  "tenisa-klubi",
  "gimenes-arti",
  "fizioterapeiti",
  "poliklinika",
  "spa-wellness",
] as const;

export type CampaignSlug = (typeof CAMPAIGN_SLUGS)[number];

export function isCampaignSlug(value: string): value is CampaignSlug {
  return (CAMPAIGN_SLUGS as readonly string[]).includes(value);
}
