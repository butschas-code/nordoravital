const PROPERTY_NAME_MAX = 80;

function readParam(value: unknown): string | null {
  const raw = Array.isArray(value) ? value[0] : value;
  return typeof raw === "string" ? raw : null;
}

function safeDecode(value: string): string {
  if (!/%[0-9A-Fa-f]{2}/.test(value)) return value;
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

/**
 * Outreach-only label from `?property=`.
 * Returns a short display name, or null when the value is empty or unsafe.
 */
export function sanitizePropertyName(value: unknown): string | null {
  const raw = readParam(value);
  if (!raw) return null;

  let text = safeDecode(raw.replace(/\+/g, " "));
  text = text.replace(/<[^>]*>/g, "");
  text = text.replace(/[\u0000-\u001F\u007F]/g, "");
  text = text.normalize("NFKC");
  text = text.replace(/[^\p{L}\p{M}\p{N}\s&'’.,\-]/gu, "");
  text = text.replace(/\s+/g, " ").trim();
  text = text.replace(/^[,.'’\-&\s]+|[,.'’\-&\s]+$/gu, "").trim();

  if (text.length < 2 || text.length > PROPERTY_NAME_MAX) return null;
  if (!/\p{L}/u.test(text)) return null;
  return text;
}
