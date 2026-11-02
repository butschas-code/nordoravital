import { describe, expect, it } from "vitest";
import { readJsonBody } from "@/lib/server/read-json";

function req(body: string, headers: Record<string, string> = { "content-type": "application/json" }) {
  return new Request("http://localhost/api/x", { method: "POST", body, headers });
}

describe("readJsonBody", () => {
  it("parses valid JSON", async () => {
    expect(await readJsonBody(req('{"a":1}'))).toEqual({ ok: true, value: { a: 1 } });
  });
  it("rejects malformed JSON with 400", async () => {
    expect(await readJsonBody(req("{nope"))).toMatchObject({ ok: false, status: 400 });
  });
  it("rejects a non-JSON content type with 415", async () => {
    expect(await readJsonBody(req("a=1", { "content-type": "text/plain" }))).toMatchObject({
      ok: false,
      status: 415,
    });
  });
  it("rejects bodies over the limit with 413, even without Content-Length", async () => {
    const big = JSON.stringify({ a: "x".repeat(200) });
    expect(await readJsonBody(req(big), 100)).toMatchObject({ ok: false, status: 413 });
  });
  it("rejects a declared Content-Length over the limit before reading", async () => {
    const r = req("{}", { "content-type": "application/json", "content-length": "999999" });
    expect(await readJsonBody(r, 100)).toMatchObject({ ok: false, status: 413 });
  });
});
