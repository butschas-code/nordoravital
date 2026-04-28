/**
 * Full site (all namespaces): one row per key — not deck-only.
 * For presentation deck copy use: npm run deck:export-xlsx
 *
 * Columns: A = key path, B = English, C = German, D = Latvian
 *
 * Run: npm run messages:export-xlsx
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as XLSX from "xlsx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const messagesDir = path.join(root, "messages");
const outFile = path.join(root, "messages-full-site-all-languages.xlsx");

/**
 * @param {Record<string, unknown>} obj
 * @param {string} prefix
 * @returns {Record<string, string>}
 */
function flattenMessages(obj, prefix = "") {
  /** @type {Record<string, string>} */
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    const pathKey = prefix ? `${prefix}.${k}` : k;
    if (v === null || v === undefined) {
      out[pathKey] = "";
    } else if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") {
      out[pathKey] = String(v);
    } else if (Array.isArray(v)) {
      v.forEach((item, i) => {
        const ip = `${pathKey}.${i}`;
        if (typeof item === "object" && item !== null && !Array.isArray(item)) {
          Object.assign(out, flattenMessages(item, ip));
        } else {
          out[ip] = typeof item === "string" ? item : JSON.stringify(item);
        }
      });
    } else if (typeof v === "object") {
      Object.assign(out, flattenMessages(/** @type {Record<string, unknown>} */ (v), pathKey));
    }
  }
  return out;
}

function readJson(name) {
  const p = path.join(messagesDir, name);
  const raw = fs.readFileSync(p, "utf8");
  return JSON.parse(raw);
}

const en = readJson("en.json");
const de = readJson("de.json");
const lv = readJson("lv.json");

const flatEn = flattenMessages(en);
const flatDe = flattenMessages(de);
const flatLv = flattenMessages(lv);

const allKeys = new Set([...Object.keys(flatEn), ...Object.keys(flatDe), ...Object.keys(flatLv)]);
const sortedKeys = [...allKeys].sort((a, b) => a.localeCompare(b, "en"));

const rows = [
  ["Website value", "English", "German", "Latvian"],
  ...sortedKeys.map((key) => [key, flatEn[key] ?? "", flatDe[key] ?? "", flatLv[key] ?? ""]),
];

const sheet = XLSX.utils.aoa_to_sheet(rows);
const book = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(book, sheet, "translations");
XLSX.writeFile(book, outFile);

console.log(`Wrote ${sortedKeys.length} keys → ${outFile}`);
