#!/usr/bin/env node
/**
 * Deck-only translation sheet (same keys as `src/lib/deck-message-keys.ts`, slide order).
 *
 * Columns: A = Website value (key), B = English, C = German, D = Latvian
 *
 * Run: npm run deck:export-xlsx
 * Output: deck-messages-all-languages.xlsx (project root)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as XLSX from "xlsx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const keysFile = fs.readFileSync(path.join(root, "src/lib/deck-message-keys.ts"), "utf8");
const block = keysFile.match(/export const DECK_MESSAGE_KEYS = \[([\s\S]*?)\] as const/);
if (!block) {
  throw new Error("Could not parse DECK_MESSAGE_KEYS from deck-message-keys.ts");
}
/** @type {string[]} */
const keys = [...block[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);

function loadJson(locale) {
  return JSON.parse(fs.readFileSync(path.join(root, "messages", `${locale}.json`), "utf8"));
}

function getByPath(obj, fullKey) {
  return fullKey.split(".").reduce((cur, part) => {
    if (cur == null || typeof cur !== "object") return undefined;
    return cur[part];
  }, obj);
}

function pick(messages, fullKey) {
  const v = getByPath(messages, fullKey);
  if (v === undefined || v === null) return "";
  if (typeof v === "object") return JSON.stringify(v);
  return String(v);
}

const en = loadJson("en");
const de = loadJson("de");
const lv = loadJson("lv");

const dataRows = keys.map((k) => [k, pick(en, k), pick(de, k), pick(lv, k)]);
const ws = XLSX.utils.aoa_to_sheet([
  ["Website value", "English", "German", "Latvian"],
  ...dataRows,
]);
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "Deck");

const outFile = path.join(root, "deck-messages-all-languages.xlsx");
XLSX.writeFile(wb, outFile);
console.log(`Wrote ${outFile} (${keys.length} deck keys, slide order)`);
