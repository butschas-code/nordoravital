/**
 * Sends one email through Resend's REST API. `fetch` is injectable so the logic
 * can be unit-tested without sending anything.
 */
export type EmailMessage = {
  from: string;
  to: string[];
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
};

export type SendEmailResult =
  | { ok: true; id: string }
  | { ok: false; reason: "http_error" | "bad_response" | "timeout" | "network"; status?: number };

const RESEND_URL = "https://api.resend.com/emails";

export async function sendEmail(
  message: EmailMessage,
  {
    apiKey,
    fetchImpl = fetch,
    timeoutMs = 10_000,
  }: { apiKey: string; fetchImpl?: typeof fetch; timeoutMs?: number },
): Promise<SendEmailResult> {
  let res: Response;
  try {
    res = await fetchImpl(RESEND_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: message.from,
        to: message.to,
        reply_to: message.replyTo,
        subject: message.subject,
        html: message.html,
        text: message.text,
      }),
      signal: AbortSignal.timeout(timeoutMs),
    });
  } catch (err) {
    const name = err instanceof Error ? err.name : "";
    return { ok: false, reason: name === "TimeoutError" || name === "AbortError" ? "timeout" : "network" };
  }

  if (!res.ok) return { ok: false, reason: "http_error", status: res.status };

  try {
    const body = (await res.json()) as unknown;
    if (body && typeof body === "object" && typeof (body as { id?: unknown }).id === "string") {
      return { ok: true, id: (body as { id: string }).id };
    }
  } catch {
    /* fall through */
  }
  return { ok: false, reason: "bad_response", status: res.status };
}

export function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Two-column HTML table email used for every enquiry type. */
export function enquiryEmailHtml(title: string, rows: [string, string][], replyTo: string) {
  const bodyRows = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #D8CEC2;font-weight:600;background:#EFE9E2">${escapeHtml(k)}</td><td style="padding:8px 12px;border:1px solid #D8CEC2;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<body style="font-family:system-ui,sans-serif;color:#1E2A22;line-height:1.5">
  <h1 style="font-size:18px">${escapeHtml(title)}</h1>
  <table style="border-collapse:collapse;max-width:560px;margin-top:12px">${bodyRows}</table>
  <p style="margin-top:16px;font-size:13px;color:#6D6158">Reply directly to this email to reach the sender (${escapeHtml(replyTo)}).</p>
</body>
</html>`.trim();
}
