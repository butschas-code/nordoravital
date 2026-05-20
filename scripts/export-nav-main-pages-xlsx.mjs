/**
 * Excel export: main marketing pages linked from the site header (/)
 * plus shared chrome (meta, header, footer, cookie banner, contact drawer form).
 * Columns: A = page/context (English), B = English, C = German, D = Latvian.
 *
 * Excludes: campaign/sales landing routes, /professionals/[sector], deck, pilot, etc.
 *
 * Run: node scripts/export-nav-main-pages-xlsx.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as XLSX from "xlsx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const messagesDir = path.join(root, "messages");

/** @param {Map<string,string>} map @param {string} key */
function cell(map, key) {
  const v = map.get(key);
  return v == null ? "" : String(v);
}

/** Flatten JSON to dot paths; arrays use [i] segments (matches next-intl nested keys). */
function flattenToMap(obj, prefix = "", out = new Map()) {
  if (obj === null || typeof obj !== "object") {
    out.set(prefix, obj == null ? "" : String(obj));
    return out;
  }
  if (Array.isArray(obj)) {
    obj.forEach((item, i) => {
      const p = `${prefix}[${i}]`;
      if (item !== null && typeof item === "object" && !Array.isArray(item)) {
        flattenToMap(item, p, out);
      } else {
        out.set(p, item == null ? "" : String(item));
      }
    });
    return out;
  }
  for (const k of Object.keys(obj)) {
    const p = prefix ? `${prefix}.${k}` : k;
    const v = obj[k];
    if (v !== null && typeof v === "object" && !Array.isArray(v)) {
      flattenToMap(v, p, out);
    } else if (Array.isArray(v)) {
      v.forEach((item, i) => {
        const pi = `${p}[${i}]`;
        if (item !== null && typeof item === "object" && !Array.isArray(item)) {
          flattenToMap(item, pi, out);
        } else {
          out.set(pi, item == null ? "" : String(item));
        }
      });
    } else {
      out.set(p, v == null ? "" : String(v));
    }
  }
  return out;
}

/**
 * @returns { { page: string, key: string }[] }
 * @param {Record<string, unknown>} en
 */
function buildRows(en) {
  const r = [];

  const push = (page, key) => r.push({ page, key });

  // ── Site-wide ───────────────────────────────────────────────────
  push("Site-wide › Browser default title", "Meta.title");
  push("Site-wide › Default meta description", "Meta.description");

  push("Site-wide › Header › Logo accessible name", "Nav.brandLabel");
  push("Site-wide › Header › Nav link: Home (logo)", "Nav.home");
  push("Site-wide › Main nav (header) & footer site column › Link: How it works", "Nav.howItWorks");
  push("Site-wide › Main nav (header) & footer site column › Link: Offers", "Nav.offers");
  push("Site-wide › Main nav (header) & footer site column › Link: Professionals", "Nav.professionals");
  push("Site-wide › Header › Nav link: Shop (external)", "Nav.visitShop");
  push("Site-wide › Header › Primary button: Contact us", "Nav.contactUs");
  push("Site-wide › Header › Mobile › Open menu", "Nav.openMenu");
  push("Site-wide › Header › Mobile › Close menu", "Nav.closeMenu");
  push("Site-wide › Header › Mobile › Dialog title", "Nav.mobileMenuTitle");

  push("Site-wide › Language switcher › Label", "Language.label");
  push("Site-wide › Language switcher › Option Deutsch", "Language.de");
  push("Site-wide › Language switcher › Option English", "Language.en");
  push("Site-wide › Language switcher › Option Latviešu", "Language.lv");

  push("Site-wide › Contact drawer › Title", "Contact.drawerTitle");
  push("Site-wide › Contact drawer › Close (accessible name)", "Contact.drawerClose");
  push("Site-wide › Contact drawer › Form › Title", "Contact.formTitle");
  push("Site-wide › Contact drawer › Form › Lead", "Contact.formLead");
  push("Site-wide › Contact drawer › Form › Name label", "Contact.name");
  push("Site-wide › Contact drawer › Form › Professional category", "Contact.professionalCategory");
  push("Site-wide › Contact drawer › Form › Category: Therapists", "Contact.categoryTherapists");
  push("Site-wide › Contact drawer › Form › Category: Beauty", "Contact.categoryBeauty");
  push("Site-wide › Contact drawer › Form › Category: Sports", "Contact.categorySports");
  push("Site-wide › Contact drawer › Form › Category: Physio", "Contact.categoryPhysio");
  push("Site-wide › Contact drawer › Form › Category: Dentists", "Contact.categoryDentists");
  push("Site-wide › Contact drawer › Form › Category: Clinics", "Contact.categoryClinics");
  push("Site-wide › Contact drawer › Form › Category: Other", "Contact.categoryOther");
  push("Site-wide › Contact drawer › Form › Email label", "Contact.email");
  push("Site-wide › Contact drawer › Form › Phone label", "Contact.phone");
  push("Site-wide › Contact drawer › Form › Preferred contact method", "Contact.preferredContactMethod");
  push("Site-wide › Contact drawer › Form › Method: Email", "Contact.contactMethodEmail");
  push("Site-wide › Contact drawer › Form › Method: Phone", "Contact.contactMethodPhone");
  push("Site-wide › Contact drawer › Form › Method: Either", "Contact.contactMethodEither");
  push("Site-wide › Contact drawer › Form › Message label", "Contact.message");
  push("Site-wide › Contact drawer › Form › Languages section title", "Contact.langPreferenceTitle");
  push("Site-wide › Contact drawer › Form › Language checkbox: DE", "Contact.langDe");
  push("Site-wide › Contact drawer › Form › Language checkbox: EN", "Contact.langEn");
  push("Site-wide › Contact drawer › Form › Language checkbox: LV", "Contact.langLv");
  push("Site-wide › Contact drawer › Form › Consent label", "Contact.consentLabel");
  push("Site-wide › Contact drawer › Form › Submit", "Contact.submit");
  push("Site-wide › Contact drawer › Form › Submitting", "Contact.submitting");
  push("Site-wide › Contact drawer › Form › Success", "Contact.success");
  push("Site-wide › Contact drawer › Form › Error", "Contact.error");
  push("Site-wide › Contact drawer › Form › Network error", "Contact.errorNetwork");
  push("Site-wide › Contact drawer › Form › Validation: Name", "Contact.validationName");
  push("Site-wide › Contact drawer › Form › Validation: Email", "Contact.validationEmail");
  push("Site-wide › Contact drawer › Form › Validation: Message", "Contact.validationMessage");
  push("Site-wide › Contact drawer › Form › Validation: Language", "Contact.validationLang");
  push("Site-wide › Contact drawer › Form › Validation: Consent", "Contact.validationConsent");

  push("Site-wide › Cookie banner › Title", "CookieBanner.title");
  push("Site-wide › Cookie banner › Body (before policy link)", "CookieBanner.body");
  push("Site-wide › Cookie banner › Policy link label", "CookieBanner.policyLink");
  push("Site-wide › Cookie banner › Reject button", "CookieBanner.reject");
  push("Site-wide › Cookie banner › Accept button", "CookieBanner.accept");

  push("Site-wide › Footer › Tagline", "Footer.tagline");
  push("Site-wide › Footer › Site links column heading", "Footer.sectionSite");
  push("Site-wide › Footer › Site link: Contact", "Nav.contact");
  push("Site-wide › Footer › Legal column heading", "Footer.sectionLegal");
  push("Site-wide › Footer › Legal link: Imprint", "Footer.linkImprint");
  push("Site-wide › Footer › Legal link: Privacy", "Footer.linkPrivacy");
  push("Site-wide › Footer › Legal link: Terms", "Footer.linkTerms");
  push("Site-wide › Footer › Legal link: Cookie policy", "Footer.linkCookiePolicy");
  push("Site-wide › Footer › Language heading", "Footer.sectionLanguage");
  push("Site-wide › Footer › Social heading", "Footer.sectionSocial");
  push("Site-wide › Footer › Social placeholder: LinkedIn", "Footer.socialLinkedIn");
  push("Site-wide › Footer › Social placeholder: Instagram", "Footer.socialInstagram");
  push("Site-wide › Footer › Social placeholder: Facebook", "Footer.socialFacebook");
  push("Site-wide › Footer › Social note", "Footer.socialNote");
  push("Site-wide › Footer › Copyright line (uses {year})", "Footer.rights");

  // ── Home `/` ─────────────────────────────────────────────────────
  const H = "Home";
  push("Home › Hero › Kicker", `${H}.heroKicker`);
  push("Home › Hero › Headline", `${H}.heroHeadline`);
  push("Home › Hero › Subhead", `${H}.heroSubheadline`);
  push("Home › Hero › Primary CTA (also sticky floating button)", `${H}.ctaBookDemo`);
  push("Home › Hero › Secondary CTA link", `${H}.heroSecondaryCta`);

  push("Home › Welcome › Paragraph 1", `${H}.welcomeP1`);
  push("Home › Welcome › Paragraph 2", `${H}.welcomeP2`);
  push("Home › Welcome › Paragraph 3", `${H}.welcomeP3`);
  push("Home › Welcome › Paragraph 4", `${H}.welcomeP4`);
  push("Home › Welcome › Image alt", `${H}.welcomeImageAlt`);

  push("Home › Two paths › Section title", `${H}.twoPathsTitle`);
  push("Home › Two paths › Lead", `${H}.twoPathsLead`);
  push("Home › Two paths › Card 1 tag", `${H}.twoPathsCard1Tag`);
  push("Home › Two paths › Card 1 title", `${H}.twoPathsCard1Title`);
  push("Home › Two paths › Card 1 column label (practice)", `${H}.twoPathsMicroPracticeLabel`);
  push("Home › Two paths › Card 1 practice copy", `${H}.twoPathsCard1ForPractice`);
  push("Home › Two paths › Card 1 column label (patients)", `${H}.twoPathsMicroPatientsLabel`);
  push("Home › Two paths › Card 1 patients copy", `${H}.twoPathsCard1ForClients`);
  push("Home › Two paths › Card 2 tag", `${H}.twoPathsCard2Tag`);
  push("Home › Two paths › Card 2 title", `${H}.twoPathsCard2Title`);
  push("Home › Two paths › Card 2 practice copy", `${H}.twoPathsCard2ForPractice`);
  push("Home › Two paths › Card 2 patients copy", `${H}.twoPathsCard2ForClients`);

  push("Home › Pillars › Section title", `${H}.pillarsSectionTitle`);
  push("Home › Pillars › Intro", `${H}.clientExperienceBody`);
  push("Home › Pillars › Card PEMF title", `${H}.pillarPemfTitle`);
  push("Home › Pillars › Card PEMF body", `${H}.pillarPemfBody`);
  push("Home › Pillars › Card PEMF link teaser", `${H}.pillarPemfTeaser`);
  push("Home › Pillars › Card Bio title", `${H}.pillarBioTitle`);
  push("Home › Pillars › Card Bio body", `${H}.pillarBioBody`);
  push("Home › Pillars › Card Bio link teaser", `${H}.pillarBioTeaser`);
  push("Home › Pillars › Card Light title", `${H}.pillarLightTitle`);
  push("Home › Pillars › Card Light body", `${H}.pillarLightBody`);
  push("Home › Pillars › Card Light link teaser", `${H}.pillarLightTeaser`);

  push("Home › System snapshot › Title", `${H}.systemTitle`);
  push("Home › System snapshot › Lead", `${H}.systemLead`);
  for (let i = 1; i <= 4; i++) {
    push(`Home › System snapshot › Bullet ${i} title`, `${H}.systemBullet${i}Title`);
    push(`Home › System snapshot › Bullet ${i} body`, `${H}.systemBullet${i}Body`);
  }
  push("Home › System snapshot › Hero image alt", `${H}.systemImageAlt`);
  push("Home › System snapshot › Product strip label: Generator", `${H}.systemProductLabelGen`);
  push("Home › System snapshot › Product strip label: MAT", `${H}.systemProductLabelMat`);
  push("Home › System snapshot › Product strip label: PAD", `${H}.systemProductLabelPad`);
  push("Home › System snapshot › Product strip label: PEN", `${H}.systemProductLabelPen`);

  push("Home › Outcomes › Title", `${H}.outcomesTitle`);
  push("Home › Outcomes › Lead", `${H}.outcomesLead`);
  push("Home › Outcomes › Featured eyebrow", `${H}.outcomeFeaturedEyebrow`);
  push("Home › Outcomes › Featured title", `${H}.outcome1Title`);
  push("Home › Outcomes › Label: Your clients", `${H}.benefitLabelClients`);
  push("Home › Outcomes › Featured clients copy", `${H}.outcome1ForClients`);
  push("Home › Outcomes › Label: Your practice", `${H}.benefitLabelPractice`);
  push("Home › Outcomes › Featured practice copy", `${H}.outcome1ForPractice`);
  push("Home › Outcomes › Featured image alt", `${H}.outcome1ImageAlt`);
  for (let n = 2; n <= 5; n++) {
    push(`Home › Outcomes › Card ${n} title`, `${H}.outcome${n}Title`);
    push(`Home › Outcomes › Card ${n} clients copy`, `${H}.outcome${n}ForClients`);
    push(`Home › Outcomes › Card ${n} practice line`, `${H}.outcome${n}ForPractice`);
    push(`Home › Outcomes › Card ${n} image alt`, `${H}.outcome${n}ImageAlt`);
  }
  push("Home › Outcomes › Small cards practice prefix", `${H}.outcomeForPracticePrefix`);

  push("Home › Rollout › Title", `${H}.rolloutTitle`);
  push("Home › Rollout › Lead", `${H}.rolloutLead`);
  push("Home › Rollout › Timeline intro", `${H}.rolloutWeeksIntro`);
  for (let s = 1; s <= 4; s++) {
    push(`Home › Rollout › Step ${s} title`, `${H}.rolloutStep${s}Title`);
    push(`Home › Rollout › Step ${s} detail`, `${H}.rolloutStep${s}Detail`);
  }
  push("Home › Rollout › CTA: Contact", `${H}.stepsCtaContact`);
  push("Home › Rollout › CTA: Pilot programme", `${H}.stepsCtaPilot`);
  push("Home › Rollout › Closing note", `${H}.rolloutCtaNote`);

  push("Home › Professionals band › Title", `${H}.professionalsTitle`);
  push("Home › Professionals band › Link: Explore applications", `${H}.professionalsExploreApplications`);
  const sectors = [
    ["Therapists", "sectorTherapistsTitle", "sectorTherapistsTeaser"],
    ["Beauty & cosmetic", "sectorBeautyTitle", "sectorBeautyTeaser"],
    ["Sports & performance", "sectorSportsTitle", "sectorSportsTeaser"],
    ["Physiotherapists", "sectorPhysioTitle", "sectorPhysioTeaser"],
    ["Dentists", "sectorDentistsTitle", "sectorDentistsTeaser"],
    ["Clinics", "sectorClinicsTitle", "sectorClinicsTeaser"],
  ];
  for (const [label, tk, sk] of sectors) {
    push(`Home › Professionals band › ${label} title`, `${H}.${tk}`);
    push(`Home › Professionals band › ${label} teaser`, `${H}.${sk}`);
  }

  // ── How it works ───────────────────────────────────────────────
  const W = "HowItWorks";
  push("How it works › SEO › Meta title", `${W}.metaTitle`);
  push("How it works › SEO › Meta description", `${W}.metaDescription`);
  push("How it works › Hero › Title", `${W}.heroTitle`);
  push("How it works › Hero › Subhead", `${W}.heroSubhead`);
  push("How it works › Hero › Primary CTA", `${W}.heroPrimaryCta`);

  push("How it works › Intro › Heading", `${W}.introP1Head`);
  push("How it works › Intro › Lead", `${W}.introP1Rest`);
  push("How it works › Intro › Paragraph", `${W}.introP2`);
  push("How it works › Intro › Paragraph", `${W}.introP3`);
  push("How it works › Intro › Paragraph", `${W}.introP4`);
  push("How it works › Intro › Paragraph", `${W}.introP5a`);
  push("How it works › Intro › Paragraph", `${W}.introP5b`);
  push("How it works › Intro › Paragraph", `${W}.introP6`);
  push("How it works › Intro › Image alt", `${W}.introImageAlt`);

  push("How it works › Difference band › Kicker", `${W}.block2Kicker`);
  push("How it works › Difference band › Title", `${W}.block2Title`);
  push("How it works › Difference band › Lead (rich text)", `${W}.block2Lead`);

  push("How it works › Three inputs › Title", `${W}.block3Title`);
  push("How it works › Three inputs › Lead", `${W}.block3Lead`);
  push("How it works › Three inputs › Item 1 title", `${W}.block3Item1Title`);
  push("How it works › Three inputs › Item 1 body", `${W}.block3Item1Body`);
  push("How it works › Three inputs › Item 2 title", `${W}.block3Item2Title`);
  push("How it works › Three inputs › Item 2 body", `${W}.block3Item2Body`);
  push("How it works › Three inputs › Item 3 title", `${W}.block3Item3Title`);
  push("How it works › Three inputs › Item 3 body", `${W}.block3Item3Body`);
  push("How it works › Three inputs › Closing line", `${W}.block3Closing`);

  push("How it works › Session walkthrough › Title", `${W}.block4Title`);
  push("How it works › Session walkthrough › Lead", `${W}.block4Lead`);
  for (let i = 1; i <= 3; i++) {
    push(`How it works › Technology ${i} › Step label`, `${W}.tech${i}StepLabel`);
    push(`How it works › Technology ${i} › Kicker`, `${W}.tech${i}Kicker`);
    push(`How it works › Technology ${i} › Title`, `${W}.tech${i}Title`);
    push(`How it works › Technology ${i} › “What it delivers” label`, `${W}.tech${i}WhatIsLabel`);
    push(`How it works › Technology ${i} › What it delivers`, `${W}.tech${i}WhatIs`);
    push(`How it works › Technology ${i} › “Operational clarity” label`, `${W}.tech${i}ScienceLabel`);
    push(`How it works › Technology ${i} › Operational clarity`, `${W}.tech${i}Science`);
  }
  push("How it works › Session walkthrough › Closing", `${W}.block4Closing`);

  push("How it works › Programmes band › Lead", `${W}.block5Lead`);
  push("How it works › Programmes band › Sub-lead", `${W}.block5SubLead`);
  push("How it works › Programmes band › List heading", `${W}.block5WhatNoticeTitle`);
  const b5 = en.HowItWorks && Array.isArray(en.HowItWorks.block5Items) ? en.HowItWorks.block5Items : [];
  b5.forEach((_, i) => {
    push(`How it works › Programmes band › Example ${i + 1}`, `${W}.block5Items[${i}]`);
  });

  push("How it works › Ecosystem band › Title", `${W}.block6Title`);
  push("How it works › Ecosystem band › List intro", `${W}.block6SetupLabel`);
  const b6 =
    en.HowItWorks && Array.isArray(en.HowItWorks.block6SetupItems) ? en.HowItWorks.block6SetupItems : [];
  b6.forEach((_, i) => {
    push(`How it works › Ecosystem band › Line ${i + 1}`, `${W}.block6SetupItems[${i}]`);
  });

  push("How it works › Bottom CTA › Kicker", `${W}.ctaKicker`);
  push("How it works › Bottom CTA › Title", `${W}.ctaTitle`);
  push("How it works › Bottom CTA › Body", `${W}.ctaBody`);
  push("How it works › Bottom CTA › Primary button", `${W}.ctaBookDemo`);
  push("How it works › Bottom CTA › Secondary link (Offers)", `${W}.ctaSecondaryOffers`);
  push("How it works › Bottom CTA › Website label", `${W}.closingWebsiteLabel`);
  push("How it works › Bottom CTA › Website display", `${W}.closingWebsiteDisplay`);

  // ── Offers ─────────────────────────────────────────────────────
  const O = "Offers";
  push("Offers › Hero headline (`<title>` uses this text + suffix)", `${O}.title`);
  push("Offers › Hero subhead", `${O}.heroSubhead`);
  push("Offers › Hero & closing CTA › Primary: Book demo button", `${O}.ctaBookDemo`);
  push("Offers › Hero › Secondary scroll link", `${O}.overviewKicker`);

  push("Offers › Intro › Title", `${O}.overviewTitle`);
  push("Offers › Intro › Lead", `${O}.overviewLead`);
  push("Offers › Intro › Second paragraph (source for meta description snippet)", `${O}.lead`);
  push("Offers › Intro › Generator image alt", `${O}.introGeneratorImageAlt`);

  push("Offers › Formats › Section title", `${O}.formatsTitle`);
  push("Offers › Formats › Section lead", `${O}.formatsLead`);
  push("Offers › Format cards › Shared label: What it is", `${O}.formatCardWhatIsLabel`);
  push("Offers › Format cards › Shared label: Positioning", `${O}.formatCardPositionLabel`);
  for (let f = 1; f <= 4; f++) {
    const n = String(f).padStart(2, "0");
    push(`Offers › Format card ${n} › Title`, `${O}.format${n}Title`);
    push(`Offers › Format card ${n} › What it is`, `${O}.format${n}WhatIs`);
    push(`Offers › Format card ${n} › Positioning`, `${O}.format${n}Position`);
  }

  push("Offers › ROI calculator › Title", `${O}.roiTitle`);
  push("Offers › ROI calculator › Lead", `${O}.roiLead`);
  push("Offers › ROI calculator › Currency code", `${O}.roiCurrency`);
  push("Offers › ROI calculator › Label: Clients per day", `${O}.roiLabelClientsPerDay`);
  push("Offers › ROI calculator › Label: Working days", `${O}.roiLabelWorkingDays`);
  push("Offers › ROI calculator › Label: Attach rate", `${O}.roiLabelAttachRate`);
  push("Offers › ROI calculator › Label: Add-on price", `${O}.roiLabelAddOnPrice`);
  push("Offers › ROI calculator › Label: Membership subscribers", `${O}.roiLabelMembershipSubscribers`);
  push("Offers › ROI calculator › Label: Membership price", `${O}.roiLabelMembershipPrice`);
  push("Offers › ROI calculator › Label: Equipment investment", `${O}.roiLabelEquipmentInvestment`);
  push("Offers › ROI calculator › Result: Monthly revenue line", `${O}.roiResultMonthly`);
  push("Offers › ROI calculator › Result: Payback never", `${O}.roiResultPaybackNever`);
  push("Offers › ROI calculator › Result: Need investment", `${O}.roiPaybackNeedInvestment`);
  push("Offers › ROI calculator › Result: Payback months", `${O}.roiResultPayback`);
  push("Offers › ROI calculator › Disclaimer", `${O}.roiDisclaimer`);

  push("Offers › Closing CTA › Title", `${O}.finalCtaTitle`);
  push("Offers › Closing CTA › Body", `${O}.finalCtaBody`);
  push("Offers › Closing CTA › Secondary (Contact page)", `${O}.finalCtaTalkToUs`);

  // ── Professionals index ────────────────────────────────────────
  const P = "ProfessionalsIndex";
  push("Professionals › SEO › Meta title", `${P}.metaTitle`);
  push("Professionals › SEO › Meta description", `${P}.metaDescription`);
  push("Professionals › Hero › Kicker", `${P}.heroKicker`);
  push("Professionals › Hero › Headline", `${P}.heroHeadline`);
  push("Professionals › Hero › Subhead", `${P}.heroSubhead`);
  push("Professionals › Explainer + gating › Body (may contain line breaks)", `${P}.explainerBody`);
  push("Professionals › Explainer + gating › Gating note", `${P}.gatingNote`);
  push("Professionals › Sector cards band › Section title", `${P}.cardsInstruction`);
  push("Professionals › Sector popup › Close button label", `${P}.popupClose`);
  push("Professionals › Card button › Learn more", "Home.learnMore");

  const sectorPairs = [
    ["Therapists", "sectorTherapistsTitle", "sectorTherapistsImageAlt", "proTeaserTherapists", "popupTherapistsBody"],
    ["Beauty", "sectorBeautyTitle", "sectorBeautyImageAlt", "proTeaserBeauty", "popupBeautyBody"],
    ["Sports", "sectorSportsTitle", "sectorSportsImageAlt", "proTeaserSports", "popupSportsBody"],
    ["Physio", "sectorPhysioTitle", "sectorPhysioImageAlt", "proTeaserPhysio", "popupPhysioBody"],
    ["Dentists", "sectorDentistsTitle", "sectorDentistsImageAlt", "proTeaserDentists", "popupDentistsBody"],
    ["Clinics", "sectorClinicsTitle", "sectorClinicsImageAlt", "proTeaserClinics", "popupClinicsBody"],
  ];
  for (const [label, ht, ha, pt, pk] of sectorPairs) {
    push(`Professionals › Sector card › ${label} title (Home)`, `Home.${ht}`);
    push(`Professionals › Sector card › ${label} teaser`, `${P}.${pt}`);
    push(`Professionals › Sector card › ${label} icon alt (Home)`, `Home.${ha}`);
    push(`Professionals › Sector popup › ${label} body`, `${P}.${pk}`);
  }

  push("Professionals › Bottom CTA › Title", `${P}.ctaHeadline`);
  push("Professionals › Bottom CTA › Subhead", `${P}.ctaSubhead`);
  push("Professionals › Bottom CTA › Primary button", `${P}.ctaCta`);
  push("Professionals › Bottom CTA › Secondary link (How it works)", `${P}.ctaSecondaryCta`);

  return r;
}

function main() {
  const enPath = path.join(messagesDir, "en.json");
  const dePath = path.join(messagesDir, "de.json");
  const lvPath = path.join(messagesDir, "lv.json");

  const en = JSON.parse(fs.readFileSync(enPath, "utf8"));
  const de = JSON.parse(fs.readFileSync(dePath, "utf8"));
  const lv = JSON.parse(fs.readFileSync(lvPath, "utf8"));

  const enMap = flattenToMap(en);
  const deMap = flattenToMap(de);
  const lvMap = flattenToMap(lv);

  const spec = buildRows(en);
  const aoa = [
    ["Page / context (English)", "English (en)", "German (de)", "Latvian (lv)"],
    ...spec.map(({ page, key }) => [page, cell(enMap, key), cell(deMap, key), cell(lvMap, key)]),
  ];

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws["!cols"] = [{ wch: 52 }, { wch: 72 }, { wch: 72 }, { wch: 72 }];
  XLSX.utils.book_append_sheet(wb, ws, "Nav main pages");

  const outDir = path.join(root, "outputs");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "nav-main-pages-translations.xlsx");
  XLSX.writeFile(wb, outPath);
  console.log(`Wrote ${outPath} (${spec.length} text rows + header)`);
}

main();
