/**
 * Apply Russian (column F) and Turkish (column G) from deck-translations.xlsx
 * onto full copies of messages/en.json → messages/ru.json and messages/tr.json.
 * Deck keys only differ from en; all other strings stay English until wider i18n.
 *
 * Run: node scripts/apply-deck-ru-tr-from-xlsx.mjs
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

function loadDeckKeysFromTs() {
  const tsPath = path.join(root, "src/lib/deck-message-keys.ts");
  const txt = fs.readFileSync(tsPath, "utf8");
  const keys = [];
  for (const m of txt.matchAll(/\"(Home\.\S+|HowItWorks\.\S+|Contact\.\S+)\"/g)) {
    keys.push(m[1]);
  }
  return keys;
}

function main() {
  const enPath = path.join(root, "messages/en.json");
  const en = JSON.parse(fs.readFileSync(enPath, "utf8"));
  const enFlat = new Map();
  for (const k of flattenKeys(en)) {
    enFlat.set(k, getAt(en, parsePath(k)));
  }

  const expectedDeckKeys = new Set(loadDeckKeysFromTs());
  const xlsxPath = path.join(root, "deck-translations.xlsx");
  const wb = XLSX.readFile(xlsxPath);
  const ws = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" });

  const fromSheetRu = new Map();
  const fromSheetTr = new Map();
  const seenKeys = new Set();

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    const keyPath = String(row[1] ?? "").trim();
    if (!keyPath || keyPath.startsWith("—")) continue;

    const ru = row[5] === null || row[5] === undefined ? "" : String(row[5]).replace(/\r\n/g, "\n").trim();
    const tr = row[6] === null || row[6] === undefined ? "" : String(row[6]).replace(/\r\n/g, "\n").trim();

    if (!enFlat.has(keyPath)) {
      console.warn(`SKIP unknown key (not in en.json): ${keyPath}`);
      continue;
    }

    if (!expectedDeckKeys.has(keyPath)) {
      console.warn(`SKIP key not in DECK_MESSAGE_KEYS: ${keyPath}`);
      continue;
    }

    seenKeys.add(keyPath);

    const enVal = enFlat.get(keyPath);
    if (typeof enVal === "string" && enVal !== "") {
      if (!ru) {
        console.error(`Empty Russian for ${keyPath} (row ${r + 1})`);
        process.exit(1);
      }
      if (!tr) {
        console.error(`Empty Turkish for ${keyPath} (row ${r + 1})`);
        process.exit(1);
      }
    }

    fromSheetRu.set(keyPath, ru);
    fromSheetTr.set(keyPath, tr);
  }

  for (const k of expectedDeckKeys) {
    if (!seenKeys.has(k)) {
      console.error(`Missing row in deck-translations.xlsx for deck key: ${k}`);
      process.exit(1);
    }
  }

  const outRu = deepClone(en);
  const outTr = deepClone(en);

  for (const keyPath of expectedDeckKeys) {
    const parts = parsePath(keyPath);
    const ru = fromSheetRu.get(keyPath);
    const tr = fromSheetTr.get(keyPath);
    if (ru !== undefined) setAt(outRu, parts, ru);
    if (tr !== undefined) setAt(outTr, parts, tr);
  }

  const ruPath = path.join(root, "messages/ru.json");
  const trPath = path.join(root, "messages/tr.json");
  fs.writeFileSync(ruPath, `${JSON.stringify(outRu, null, 2)}\n`);
  fs.writeFileSync(trPath, `${JSON.stringify(outTr, null, 2)}\n`);
  console.log(`Wrote ${ruPath}`);
  console.log(`Wrote ${trPath}`);
}

main();
