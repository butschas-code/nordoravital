import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { routing } from "@/i18n/routing";

const dir = path.resolve(import.meta.dirname, "../../messages");

function flatten(obj: unknown, prefix = "", out: Record<string, unknown> = {}) {
  if (obj && typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      const key = prefix ? `${prefix}.${k}` : k;
      if (v && typeof v === "object") flatten(v, key, out);
      else out[key] = v;
    }
  }
  return out;
}

const load = (locale: string) =>
  flatten(JSON.parse(fs.readFileSync(path.join(dir, `${locale}.json`), "utf8")));

const en = load("en");
const enKeys = Object.keys(en);

describe("translation key parity", () => {
  it("has a messages file for every routed locale", () => {
    for (const locale of routing.locales) {
      expect(fs.existsSync(path.join(dir, `${locale}.json`)), locale).toBe(true);
    }
  });

  for (const locale of routing.locales.filter((l) => l !== "en")) {
    it(`${locale}.json has every English key and no extra ones`, () => {
      const messages = load(locale);
      const missing = enKeys.filter((k) => !(k in messages));
      const extra = Object.keys(messages).filter((k) => !(k in en));
      expect(missing, `missing in ${locale}`).toEqual([]);
      expect(extra, `only in ${locale}`).toEqual([]);
    });

    it(`${locale}.json has no empty strings where English has text`, () => {
      const messages = load(locale);
      const empty = enKeys.filter((k) => en[k] !== "" && messages[k] === "");
      expect(empty).toEqual([]);
    });
  }
});
