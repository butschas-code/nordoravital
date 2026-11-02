import { describe, expect, it, vi } from "vitest";
import { enquiryEmailHtml, escapeHtml, sendEmail, type EmailMessage } from "@/lib/server/send-email";

const message: EmailMessage = {
  from: "Nordora Vital <hello@example.com>",
  to: ["inbox@example.com"],
  replyTo: "visitor@example.com",
  subject: "Test",
  html: "<p>hi</p>",
  text: "hi",
};

function fakeFetch(impl: () => Promise<Response>) {
  return vi.fn(impl) as unknown as typeof fetch;
}

describe("sendEmail (no network: fetch is injected)", () => {
  it("returns the id on success and sends reply_to", async () => {
    const fetchImpl = fakeFetch(async () => Response.json({ id: "abc" }));
    expect(await sendEmail(message, { apiKey: "re_test", fetchImpl })).toEqual({ ok: true, id: "abc" });
    const [, init] = (fetchImpl as unknown as ReturnType<typeof vi.fn>).mock.calls[0];
    expect(JSON.parse(init.body).reply_to).toBe("visitor@example.com");
    expect(init.headers.Authorization).toBe("Bearer re_test");
  });
  it("treats a malformed response as a failure", async () => {
    const fetchImpl = fakeFetch(async () => new Response("not json", { status: 200 }));
    expect(await sendEmail(message, { apiKey: "re_test", fetchImpl })).toMatchObject({
      ok: false,
      reason: "bad_response",
    });
  });
  it.each([400, 422, 500, 503])("reports HTTP %i", async (status) => {
    const fetchImpl = fakeFetch(async () => Response.json({ message: "x" }, { status }));
    expect(await sendEmail(message, { apiKey: "re_test", fetchImpl })).toEqual({
      ok: false,
      reason: "http_error",
      status,
    });
  });
  it("reports a timeout", async () => {
    const fetchImpl = fakeFetch(async () => {
      throw new DOMException("timed out", "TimeoutError");
    });
    expect(await sendEmail(message, { apiKey: "re_test", fetchImpl })).toMatchObject({ reason: "timeout" });
  });
  it("reports a network error", async () => {
    const fetchImpl = fakeFetch(async () => {
      throw new TypeError("fetch failed");
    });
    expect(await sendEmail(message, { apiKey: "re_test", fetchImpl })).toMatchObject({ reason: "network" });
  });
});

describe("email HTML", () => {
  it("escapes user input", () => {
    expect(escapeHtml(`<script>"x" & 'y'</script>`)).toBe(
      "&lt;script&gt;&quot;x&quot; &amp; &#39;y&#39;&lt;/script&gt;",
    );
    const html = enquiryEmailHtml("T", [["Name", "<b>Eve</b>"]], "a@b.co");
    expect(html).not.toContain("<b>Eve</b>");
  });
});
