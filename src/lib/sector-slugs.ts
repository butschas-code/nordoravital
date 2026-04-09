export const SECTOR_SLUGS = [
  "therapists",
  "beauty-cosmetic",
  "sports-performance",
  "physiotherapists",
  "dentists",
  "clinics",
] as const;

export type SectorSlug = (typeof SECTOR_SLUGS)[number];
