/**
 * Apply column E (Latvian) from translations-review.xlsx to messages/lv.json.
 * Sheet wins; keys missing from sheet fall back to current lv.json; must cover all en keys.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import XLSX from "xlsx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function parsePath(keyPath) {
  const parts = [];
  const re = /[^.\[\]]+|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(keyPath)) !== null) {
    if (m[1] !== undefined) parts.push(Number(m[1]));
    else if (m[0] !== ".") parts.push(m[0]);
  }
  return parts;
}

function getAt(obj, parts) {
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

function setAt(obj, parts, value) {
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    const next = parts[i + 1];
    if (cur[p] == null) {
      cur[p] = typeof next === "number" ? [] : {};
    }
    cur = cur[p];
  }
  const last = parts[parts.length - 1];
  cur[last] = value;
}

function flattenKeys(obj, prefix = "") {
  const keys = [];
  if (obj === null || typeof obj !== "object") {
    keys.push(prefix);
    return keys;
  }
  if (Array.isArray(obj)) {
    obj.forEach((item, i) => {
      const p = `${prefix}[${i}]`;
      if (item !== null && typeof item === "object" && !Array.isArray(item)) {
        keys.push(...flattenKeys(item, p));
      } else {
        keys.push(p);
      }
    });
    return keys;
  }
  for (const k of Object.keys(obj)) {
    const p = prefix ? `${prefix}.${k}` : k;
    const v = obj[k];
    if (v !== null && typeof v === "object" && !Array.isArray(v)) {
      keys.push(...flattenKeys(v, p));
    } else if (Array.isArray(v)) {
      keys.push(...flattenKeys(v, p));
    } else {
      keys.push(p);
    }
  }
  return keys;
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function main() {
  const en = JSON.parse(fs.readFileSync(path.join(root, "messages/en.json"), "utf8"));
  const lvPath = path.join(root, "messages/lv.json");
  const lvPrev = JSON.parse(fs.readFileSync(lvPath, "utf8"));

  const enFlat = new Map();
  for (const k of flattenKeys(en)) {
    const parts = parsePath(k);
    enFlat.set(k, getAt(en, parts));
  }

  const xlsxPath = path.join(root, "translations-review.xlsx");
  const wb = XLSX.readFile(xlsxPath);
  const ws = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" });

  /** @type {Map<string, string[]>} */
  const sheetValues = new Map();

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    const keyPath = String(row[1] ?? "").trim();
    const lvCell = row[4];
    const lv =
      lvCell === null || lvCell === undefined ? "" : String(lvCell).replace(/\r\n/g, "\n");

    if (!keyPath || keyPath.startsWith("—")) continue;

    if (!enFlat.has(keyPath)) {
      console.warn(`SKIP unknown key (not in en.json): ${keyPath}`);
      continue;
    }

    if (!sheetValues.has(keyPath)) sheetValues.set(keyPath, []);
    sheetValues.get(keyPath).push(lv);
  }

  /** Prefer last column E that differs from English (avoids later duplicate rows reverting to EN). */
  const fromSheet = new Map();
  for (const [keyPath, values] of sheetValues) {
    const enVal = enFlat.get(keyPath);
    let chosen = values[values.length - 1];
    if (typeof enVal === "string" && enVal !== "") {
      const translated = [...values].reverse().find((v) => v !== enVal);
      if (translated !== undefined) chosen = translated;
    }
    fromSheet.set(keyPath, chosen);
  }

  for (const [keyPath, values] of sheetValues) {
    const uniq = new Set(values);
    if (uniq.size > 1) {
      console.warn(`Merged duplicate rows for ${keyPath} (${uniq.size} variants) → kept best vs English`);
    }
  }

  const out = deepClone(en);
  const emptyLv = [];
  const missingFallback = [];

  for (const keyPath of enFlat.keys()) {
    const parts = parsePath(keyPath);
    const enVal = enFlat.get(keyPath);
    if (typeof enVal !== "string") continue;

    let v;
    if (fromSheet.has(keyPath)) {
      v = fromSheet.get(keyPath);
      if (v === "" && enVal !== "") {
        emptyLv.push(keyPath);
        continue;
      }
    } else {
      v = getAt(lvPrev, parts);
      if (v === undefined || typeof v !== "string") {
        missingFallback.push(keyPath);
        continue;
      }
    }

    setAt(out, parts, v);
  }

  if (emptyLv.length) {
    console.error("Empty Latvian in column E where English is non-empty:");
    console.error(emptyLv.join("\n"));
    process.exit(1);
  }

  if (missingFallback.length) {
    console.error("Keys not in spreadsheet and missing from previous lv.json:");
    console.error(missingFallback.join("\n"));
    process.exit(1);
  }

  for (const keyPath of enFlat.keys()) {
    const enVal = enFlat.get(keyPath);
    if (typeof enVal !== "string") continue;
    const got = getAt(out, parsePath(keyPath));
    if (got !== enVal) continue;
    if (enVal === "") continue;
    console.warn(`WARNING: LV equals EN (verify intentional): ${keyPath}`);
  }

  fs.writeFileSync(lvPath, `${JSON.stringify(out, null, 2)}\n`, "utf8");
  console.log(`Wrote ${lvPath}`);
  console.log(`Keys updated from sheet: ${fromSheet.size}`);
}

main();
