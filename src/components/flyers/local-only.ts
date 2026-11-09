import { notFound } from "next/navigation";

/**
 * Flyer screens are working copies for local editing and later languages.
 * A production build must not serve them.
 */
export function assertLocalFlyerPreview() {
  if (process.env.NODE_ENV === "production") notFound();
}
