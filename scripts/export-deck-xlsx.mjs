/**
 * Export deck-only translation review spreadsheet.
 * Rows follow slide order as defined in src/lib/deck-message-keys.ts.
 *
 * Run: node scripts/export-deck-xlsx.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as XLSX from "xlsx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const messagesDir = path.join(root, "messages");

/** Deck slide labels matching DECK_MESSAGE_KEYS order */
const SLIDE_LABELS = {
  // Slide 1
  "Home.heroKicker":           "Slide 1 — Hero",
  "Home.heroHeadline":         "Slide 1 — Hero",
  "Home.heroSubheadline":      "Slide 1 — Hero",
  // Slide 2
  "Home.welcomeP1":            "Slide 2 — Welcome",
  "Home.deckWelcomeP2":        "Slide 2 — Welcome",
  "Home.welcomeP3":            "Slide 2 — Welcome",
  "Home.outcome2ImageAlt":     "Slide 2 — Welcome",
  // Slide 3
  "Home.twoPathsTitle":              "Slide 3 — Two paths",
  "Home.twoPathsCard1Tag":           "Slide 3 — Two paths",
  "Home.twoPathsCard1Title":         "Slide 3 — Two paths",
  "Home.twoPathsCard1ForPractice":   "Slide 3 — Two paths",
  "Home.twoPathsCard1ForClients":    "Slide 3 — Two paths",
  "Home.twoPathsCard2Tag":           "Slide 3 — Two paths",
  "Home.twoPathsCard2Title":         "Slide 3 — Two paths",
  "Home.twoPathsCard2ForPractice":   "Slide 3 — Two paths",
  "Home.twoPathsCard2ForClients":    "Slide 3 — Two paths",
  "Home.twoPathsMicroPracticeLabel": "Slide 3 — Two paths",
  "Home.twoPathsMicroPatientsLabel": "Slide 3 — Two paths",
  // Slide 4
  "HowItWorks.block2Title":      "Slide 4 — Three technologies",
  "HowItWorks.block2Lead":       "Slide 4 — Three technologies",
  "HowItWorks.block3Item1Title": "Slide 4 — Three technologies",
  "HowItWorks.block3Item1Body":  "Slide 4 — Three technologies",
  "HowItWorks.block3Item2Title": "Slide 4 — Three technologies",
  "HowItWorks.block3Item2Body":  "Slide 4 — Three technologies",
  "HowItWorks.block3Item3Title": "Slide 4 — Three technologies",
  "HowItWorks.block3Item3Body":  "Slide 4 — Three technologies",
  // Slide 5
  "Home.systemTitle":            "Slide 5 — System",
  "Home.systemLead":             "Slide 5 — System",
  "Home.systemBullet1Title":     "Slide 5 — System",
  "Home.systemBullet1Body":      "Slide 5 — System",
  "Home.systemBullet2Title":     "Slide 5 — System",
  "Home.systemBullet2Body":      "Slide 5 — System",
  "Home.systemBullet3Title":     "Slide 5 — System",
  "Home.systemBullet3Body":      "Slide 5 — System",
  "Home.systemBullet4Title":     "Slide 5 — System",
  "Home.systemBullet4Body":      "Slide 5 — System",
  "Home.systemImageAlt":         "Slide 5 — System",
  "Home.systemProductLabelGen":  "Slide 5 — System",
  "Home.systemProductLabelMat":  "Slide 5 — System",
  "Home.systemProductLabelPad":  "Slide 5 — System",
  "Home.systemProductLabelPen":  "Slide 5 — System",
  // Slide 6
  "Home.outcomesTitle":          "Slide 6 — Outcomes",
  "Home.outcomesLead":           "Slide 6 — Outcomes",
  "Home.outcome1Title":          "Slide 6 — Outcomes",
  "Home.outcome1ForClients":     "Slide 6 — Outcomes",
  "Home.outcome1ImageAlt":       "Slide 6 — Outcomes",
  "Home.outcome2Title":          "Slide 6 — Outcomes",
  "Home.outcome2ForClients":     "Slide 6 — Outcomes",
  "Home.outcome3Title":          "Slide 6 — Outcomes",
  "Home.outcome3ForClients":     "Slide 6 — Outcomes",
  "Home.outcome3ImageAlt":       "Slide 6 — Outcomes",
  "Home.outcome4Title":          "Slide 6 — Outcomes",
  "Home.outcome4ForClients":     "Slide 6 — Outcomes",
  "Home.outcome4ImageAlt":       "Slide 6 — Outcomes",
  // Slides 7–9
  "HowItWorks.tech1Kicker":       "Slide 7 — Tech: PEMF",
  "HowItWorks.tech1Title":        "Slide 7 — Tech: PEMF",
  "HowItWorks.tech1WhatIsLabel":  "Slide 7 — Tech: PEMF",
  "HowItWorks.tech1WhatIs":       "Slide 7 — Tech: PEMF",
  "HowItWorks.tech1ScienceLabel": "Slide 7 — Tech: PEMF",
  "HowItWorks.tech1Science":      "Slide 7 — Tech: PEMF",
  "HowItWorks.tech2Kicker":       "Slide 8 — Tech: Biofrequency",
  "HowItWorks.tech2Title":        "Slide 8 — Tech: Biofrequency",
  "HowItWorks.tech2WhatIsLabel":  "Slide 8 — Tech: Biofrequency",
  "HowItWorks.tech2WhatIs":       "Slide 8 — Tech: Biofrequency",
  "HowItWorks.tech2ScienceLabel": "Slide 8 — Tech: Biofrequency",
  "HowItWorks.tech2Science":      "Slide 8 — Tech: Biofrequency",
  "HowItWorks.tech3Kicker":       "Slide 9 — Tech: Cold Laser",
  "HowItWorks.tech3Title":        "Slide 9 — Tech: Cold Laser",
  "HowItWorks.tech3WhatIsLabel":  "Slide 9 — Tech: Cold Laser",
  "HowItWorks.tech3WhatIs":       "Slide 9 — Tech: Cold Laser",
  "HowItWorks.tech3ScienceLabel": "Slide 9 — Tech: Cold Laser",
  "HowItWorks.tech3Science":      "Slide 9 — Tech: Cold Laser",
  // Slide 10
  "Home.rolloutTitle":       "Slide 10 — Rollout",
  "Home.rolloutLead":        "Slide 10 — Rollout",
  "Home.rolloutWeeksIntro":  "Slide 10 — Rollout",
  "Home.rolloutStep1Title":  "Slide 10 — Rollout",
  "Home.rolloutStep1Detail": "Slide 10 — Rollout",
  "Home.rolloutStep2Title":  "Slide 10 — Rollout",
  "Home.rolloutStep2Detail": "Slide 10 — Rollout",
  "Home.rolloutStep3Title":  "Slide 10 — Rollout",
  "Home.rolloutStep3Detail": "Slide 10 — Rollout",
  "Home.rolloutStep4Title":  "Slide 10 — Rollout",
  "Home.rolloutStep4Detail": "Slide 10 — Rollout",
  // Slide 11
  "Home.deckClosingKicker":        "Slide 11 — Closing",
  "Home.deckYourContactLabel":     "Slide 11 — Closing",
  "HowItWorks.ctaTitle":           "Slide 11 — Closing",
  "HowItWorks.ctaBody":            "Slide 11 — Closing",
  "HowItWorks.closingWebsiteLabel":   "Slide 11 — Closing",
  "HowItWorks.closingWebsiteDisplay": "Slide 11 — Closing",
  "Contact.email":        "Slide 11 — Closing",
  "Contact.companyEmail": "Slide 11 — Closing",
  "Contact.phone":        "Slide 11 — Closing",
  "Contact.companyPhone": "Slide 11 — Closing",
};

const DECK_KEYS = Object.keys(SLIDE_LABELS);

function flattenToMap(obj, prefix = "", map = new Map()) {
  if (obj === null || typeof obj !== "object") { map.set(prefix, obj); return map; }
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => flattenToMap(v, `${prefix}[${i}]`, map));
    return map;
  }
  for (const k of Object.keys(obj)) {
    flattenToMap(obj[k], prefix ? `${prefix}.${k}` : k, map);
  }
  return map;
}

function main() {
  const en = JSON.parse(fs.readFileSync(path.join(messagesDir, "en.json"), "utf8"));
  const de = JSON.parse(fs.readFileSync(path.join(messagesDir, "de.json"), "utf8"));
  const lv = JSON.parse(fs.readFileSync(path.join(messagesDir, "lv.json"), "utf8"));
  const ru = JSON.parse(fs.readFileSync(path.join(messagesDir, "ru.json"), "utf8"));
  const tr = JSON.parse(fs.readFileSync(path.join(messagesDir, "tr.json"), "utf8"));

  const enMap = flattenToMap(en);
  const deMap = flattenToMap(de);
  const lvMap = flattenToMap(lv);
  const ruMap = flattenToMap(ru);
  const trMap = flattenToMap(tr);

  const rows = [["Slide", "Message key", "English", "German", "Latvian", "Russian", "Turkish"]];

  for (const key of DECK_KEYS) {
    rows.push([
      SLIDE_LABELS[key],
      key,
      enMap.get(key) ?? "",
      deMap.get(key) ?? "",
      lvMap.get(key) ?? "",
      ruMap.get(key) ?? "",
      trMap.get(key) ?? "",
    ]);
  }

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws["!cols"] = [
    { wch: 32 },
    { wch: 42 },
    { wch: 64 },
    { wch: 64 },
    { wch: 64 },
    { wch: 64 },
    { wch: 64 },
  ];
  XLSX.utils.book_append_sheet(wb, ws, "Deck translations");

  const outPath = path.join(root, "deck-translations.xlsx");
  XLSX.writeFile(wb, outPath);
  console.log(outPath);
}

main();
