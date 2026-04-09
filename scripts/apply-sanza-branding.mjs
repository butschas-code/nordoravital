/**
 * Lowercase brand word "sanza" and wrap with <strong>sanza</strong> for on-screen copy.
 * Excludes Meta titles, descriptions, image alts, and metaDescription fields (plain sanza only).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, "..", "messages");

function shouldExcludePlainSanzaOnly(keyPath) {
  if (/^Meta\.(title|description)$/.test(keyPath)) return true;
  if (/ImageAlt$/i.test(keyPath)) return true;
  if (/metaDescription$/i.test(keyPath)) return true;
  if (/^Offers\.sectors\./i.test(keyPath) && /metaDescription$/i.test(keyPath))
    return true;
  return false;
}

function walk(obj, keyPath, fn) {
  if (typeof obj !== "object" || obj === null) return;
  for (const k of Object.keys(obj)) {
    const p = keyPath ? `${keyPath}.${k}` : k;
    if (typeof obj[k] === "string") fn(p, obj[k], obj, k);
    else walk(obj[k], p, fn);
  }
}

function processString(keyPath, val, plainOnly) {
  let s = val.replace(/SANZA/g, "sanza");
  if (plainOnly) return s;
  if (!s.includes("sanza")) return s;
  // Avoid double-wrapping existing brand marks
  s = s.replace(/<strong>sanza<\/strong>/gi, "__SANZA_BOLD__");
  s = s.replace(/\bsanza\b/gi, "<strong>sanza</strong>");
  s = s.replace(/__SANZA_BOLD__/g, "<strong>sanza</strong>");
  return s;
}

for (const f of ["en.json", "de.json", "lv.json"]) {
  const fp = path.join(messagesDir, f);
  const data = JSON.parse(fs.readFileSync(fp, "utf8"));
  walk(data, "", (p, val, parent, key) => {
    parent[key] = processString(p, val, shouldExcludePlainSanzaOnly(p));
  });
  fs.writeFileSync(fp, JSON.stringify(data, null, 2) + "\n");
}

console.log("Updated messages: sanza lowercase + <strong>sanza</strong> where applicable.");
