#!/usr/bin/env node
/**
 * Deck copy spreadsheet: A = value (key), B = English, C = German, D = LV
 * Run: node scripts/generate-deck-copy-xlsx.mjs
 * Output: public/downloads/sanza-deck-copy.xlsx
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as XLSX from "xlsx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const keysFile = fs.readFileSync(path.join(root, "src/lib/deck-message-keys.ts"), "utf8");
const keyMatches = [...keysFile.matchAll(/"((?:Home|Offers|HowItWorks)\.[^"]+)"/g)];
const keys = [...new Set(keyMatches.map((m) => m[1]))];

function loadJson(locale) {
  return JSON.parse(fs.readFileSync(path.join(root, "messages", `${locale}.json`), "utf8"));
}

function getByPath(obj, fullKey) {
  return fullKey.split(".").reduce((cur, part) => {
    if (cur == null || typeof cur !== "object") return undefined;
    return cur[part];
  }, obj);
}

function stripTags(s) {
  if (typeof s !== "string") return "";
  return s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function pick(messages, fullKey) {
  const v = getByPath(messages, fullKey);
  if (v === undefined || v === null) return "";
  if (typeof v === "object") return JSON.stringify(v);
  return stripTags(String(v));
}

const en = loadJson("en");
const de = loadJson("de");
const lv = loadJson("lv");

const dataRows = keys.map((k) => [k, pick(en, k), pick(de, k), pick(lv, k)]);
const ws = XLSX.utils.aoa_to_sheet([["value", "English", "German", "LV"], ...dataRows]);
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "Deck copy");

const outDir = path.join(root, "public", "downloads");
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "sanza-deck-copy.xlsx");
XLSX.writeFile(wb, outFile);
console.log("Wrote", outFile, `(${keys.length} keys)`);
