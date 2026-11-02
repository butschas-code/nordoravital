/**
 * Structured JSON log lines for server code. Callers pass an `event` name and
 * non-personal fields only: never names, emails, phone numbers or message text.
 */
type LogFields = Record<string, string | number | boolean | null | undefined>;

export function logEvent(level: "info" | "warn" | "error", event: string, fields: LogFields = {}) {
  const line = JSON.stringify({ level, event, ...fields });
  if (level === "error") console.error(line);
  else if (level === "warn") console.warn(line);
  else console.info(line);
}
