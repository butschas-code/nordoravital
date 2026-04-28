/**
 * Per-photo `object-position` for outcome-style bento images (`object-fit: cover`).
 * Tunes crop so faces stay visible; index aligns with `IMAGE_PATHS.home.outcomePhotos`.
 */
export const OUTCOME_PHOTO_OBJECT_POSITION = [
  "50% 34%", // calmer arrivals — faces visible without tight left crop
  "center 28%", // softer landing
  "center center", // less wired
  "center 32%", // focus and presence
  "center 30%", // comfort routines
] as const;

export function outcomePhotoCoverPosition(index: number): string {
  return OUTCOME_PHOTO_OBJECT_POSITION[index] ?? "center center";
}
