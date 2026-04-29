/**
 * Translation review spreadsheet: rows follow on-page reading order per route,
 * then any remaining message keys (not wired in the order map) at the end.
 *
 * Run: node scripts/export-translations-xlsx.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as XLSX from "xlsx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const messagesDir = path.join(root, "messages");

const SECTOR_SLUGS = [
  "therapists",
  "beauty-cosmetic",
  "sports-performance",
  "physiotherapists",
  "dentists",
  "clinics",
];

/** On-page order (hero → body → CTA); SEO meta last (browser `<title>` only). */
const PROFESSIONAL_SECTOR_KEY_ORDER = [
  "categoryLabel",
  "heroKicker",
  "heroTitle",
  "heroSubtitle",
  "workflowTitle",
  "workflowIntro",
  "workflow1",
  "workflow2",
  "workflow3",
  "testimonialsTitle",
  "quote1",
  "quote1Author",
  "quote2",
  "quote2Author",
  "quote3",
  "quote3Author",
  "ctaTitle",
  "ctaLead",
  "ctaBookDemo",
  "ctaPilot",
  "ctaFormBridge",
  "metaTitle",
  "metaDescription",
];

/** @param {string} p */
function pp(...parts) {
  return parts.join(" → ");
}

/**
 * @param {Record<string, unknown>} en
 * @returns {{ location: string, path: string }[]}
 */
function buildPageFlowOrder(en) {
  const out = [];

  const push = (location, path) => out.push({ location, path });

  // ── Site-wide metadata (browser tab — not in page body) ───────────
  push("Site-wide / Browser tab title (default)", "Meta.title");
  push("Site-wide / Meta description (search snippets)", "Meta.description");

  // ── Global chrome: header ─────────────────────────────────────────
  push(pp("Every page", "Header", "Logo link (accessible name)"), "Nav.brandLabel");
  push(pp("Every page", "Header", "Desktop nav", "Link 1"), "Nav.howItWorks");
  push(pp("Every page", "Header", "Desktop nav", "Link 2"), "Nav.offers");
  push(pp("Every page", "Header", "Desktop nav", "Link 3"), "Nav.professionals");
  push(pp("Every page", "Header", "Primary CTA button"), "Nav.contactUs");
  push(pp("Every page", "Header", "Mobile", "Open menu (aria-label)"), "Nav.openMenu");
  push(pp("Every page", "Header", "Mobile", "Close menu (aria-label)"), "Nav.closeMenu");
  push(pp("Every page", "Header", "Mobile", "Dialog title"), "Nav.mobileMenuTitle");
  push(pp("Every page", "Header", "Mobile", "Language block label"), "Language.label");
  push(pp("Every page", "Header", "Mobile", "Language option Deutsch"), "Language.de");
  push(pp("Every page", "Header", "Mobile", "Language option English"), "Language.en");
  push(pp("Every page", "Header", "Mobile", "Language option Latviešu"), "Language.lv");

  // ── Contact drawer (chrome only — form fields listed once below) ───
  push(pp("Every page", "Contact drawer", "Title"), "Contact.drawerTitle");
  push(pp("Every page", "Contact drawer", "Close (aria-label)"), "Contact.drawerClose");

  // ── Cookie banner ─────────────────────────────────────────────────
  push(pp("Every page", "Cookie banner (until dismissed)", "Title"), "CookieBanner.title");
  push(pp("Every page", "Cookie banner", "Body + policy link text"), "CookieBanner.body");
  push(pp("Every page", "Cookie banner", "Policy link label"), "CookieBanner.policyLink");
  push(pp("Every page", "Cookie banner", "Reject button"), "CookieBanner.reject");
  push(pp("Every page", "Cookie banner", "Accept button"), "CookieBanner.accept");

  // ── Footer ────────────────────────────────────────────────────────
  push(pp("Every page", "Footer", "Brand / tagline"), "Footer.tagline");
  push(pp("Every page", "Footer", "Site column heading"), "Footer.sectionSite");
  push(pp("Every page", "Footer", "Site link (same copy as nav)"), "Nav.howItWorks");
  push(pp("Every page", "Footer", "Site link"), "Nav.offers");
  push(pp("Every page", "Footer", "Site link"), "Nav.professionals");
  push(pp("Every page", "Footer", "Site link"), "Nav.contact");
  push(pp("Every page", "Footer", "Legal column heading"), "Footer.sectionLegal");
  push(pp("Every page", "Footer", "Legal link"), "Footer.linkImprint");
  push(pp("Every page", "Footer", "Legal link"), "Footer.linkPrivacy");
  push(pp("Every page", "Footer", "Legal link"), "Footer.linkTerms");
  push(pp("Every page", "Footer", "Legal link"), "Footer.linkCookiePolicy");
  push(pp("Every page", "Footer", "Language heading"), "Footer.sectionLanguage");
  push(pp("Every page", "Footer", "Social heading"), "Footer.sectionSocial");
  push(pp("Every page", "Footer", "Social placeholder"), "Footer.socialLinkedIn");
  push(pp("Every page", "Footer", "Social placeholder"), "Footer.socialInstagram");
  push(pp("Every page", "Footer", "Social placeholder"), "Footer.socialFacebook");
  push(pp("Every page", "Footer", "Social note"), "Footer.socialNote");
  push(pp("Every page", "Footer", "Copyright line"), "Footer.rights");

  // ── Home `/` ─────────────────────────────────────────────────────
  const H = "Home";
  push(pp("Page: Home `/`", "Hero", "Kicker"), `${H}.heroKicker`);
  push(pp("Page: Home `/`", "Hero", "Headline"), `${H}.heroHeadline`);
  push(pp("Page: Home `/`", "Hero", "Subhead"), `${H}.heroSubheadline`);
  push(pp("Page: Home `/`", "Hero", "Primary CTA"), `${H}.ctaBookDemo`);
  push(pp("Page: Home `/`", "Hero", "Secondary CTA"), `${H}.heroSecondaryCta`);

  push(pp("Page: Home `/`", "Welcome", "Heading (paragraph 1)"), `${H}.welcomeP1`);
  push(pp("Page: Home `/`", "Welcome", "Body"), `${H}.welcomeP2`);
  push(pp("Page: Deck `/deck`", "Slide 2 Welcome", "Body (distributor)"), `${H}.deckWelcomeP2`);
  push(pp("Page: Home `/`", "Welcome", "Body"), `${H}.welcomeP3`);
  push(pp("Page: Home `/`", "Welcome", "Body"), `${H}.welcomeP4`);
  push(pp("Page: Home `/`", "Welcome", "Image alt"), `${H}.welcomeImageAlt`);

  push(pp("Page: Home `/`", "Two paths", "Section title"), `${H}.twoPathsTitle`);
  push(pp("Page: Home `/`", "Two paths", "Lead"), `${H}.twoPathsLead`);
  push(pp("Page: Home `/`", "Two paths", "Card 1", "Tag"), `${H}.twoPathsCard1Tag`);
  push(pp("Page: Home `/`", "Two paths", "Card 1", "Title"), `${H}.twoPathsCard1Title`);
  push(pp("Page: Home `/`", "Two paths", "Card 1", "Micro label (practice)"), `${H}.twoPathsMicroPracticeLabel`);
  push(pp("Page: Home `/`", "Two paths", "Card 1", "Practice column"), `${H}.twoPathsCard1ForPractice`);
  push(pp("Page: Home `/`", "Two paths", "Card 1", "Micro label (patients)"), `${H}.twoPathsMicroPatientsLabel`);
  push(pp("Page: Home `/`", "Two paths", "Card 1", "Patients column"), `${H}.twoPathsCard1ForClients`);
  push(pp("Page: Home `/`", "Two paths", "Card 2", "Tag"), `${H}.twoPathsCard2Tag`);
  push(pp("Page: Home `/`", "Two paths", "Card 2", "Title"), `${H}.twoPathsCard2Title`);
  push(pp("Page: Home `/`", "Two paths", "Card 2", "Practice column"), `${H}.twoPathsCard2ForPractice`);
  push(pp("Page: Home `/`", "Two paths", "Card 2", "Patients column"), `${H}.twoPathsCard2ForClients`);

  push(pp("Page: Home `/`", "Pillars", "Section title"), `${H}.pillarsSectionTitle`);
  push(pp("Page: Home `/`", "Pillars", "Intro"), `${H}.clientExperienceBody`);
  push(pp("Page: Home `/`", "Pillars", "Card PEMF", "Title"), `${H}.pillarPemfTitle`);
  push(pp("Page: Home `/`", "Pillars", "Card PEMF", "Body"), `${H}.pillarPemfBody`);
  push(pp("Page: Home `/`", "Pillars", "Card PEMF", "Link teaser"), `${H}.pillarPemfTeaser`);
  push(pp("Page: Home `/`", "Pillars", "Card Bio", "Title"), `${H}.pillarBioTitle`);
  push(pp("Page: Home `/`", "Pillars", "Card Bio", "Body"), `${H}.pillarBioBody`);
  push(pp("Page: Home `/`", "Pillars", "Card Bio", "Link teaser"), `${H}.pillarBioTeaser`);
  push(pp("Page: Home `/`", "Pillars", "Card Light", "Title"), `${H}.pillarLightTitle`);
  push(pp("Page: Home `/`", "Pillars", "Card Light", "Body"), `${H}.pillarLightBody`);
  push(pp("Page: Home `/`", "Pillars", "Card Light", "Link teaser"), `${H}.pillarLightTeaser`);

  push(pp("Page: Home `/`", "System snapshot", "Title"), `${H}.systemTitle`);
  push(pp("Page: Home `/`", "System snapshot", "Lead"), `${H}.systemLead`);
  push(pp("Page: Home `/`", "System snapshot", "Bullet 1", "Title"), `${H}.systemBullet1Title`);
  push(pp("Page: Home `/`", "System snapshot", "Bullet 1", "Body"), `${H}.systemBullet1Body`);
  push(pp("Page: Home `/`", "System snapshot", "Bullet 2", "Title"), `${H}.systemBullet2Title`);
  push(pp("Page: Home `/`", "System snapshot", "Bullet 2", "Body"), `${H}.systemBullet2Body`);
  push(pp("Page: Home `/`", "System snapshot", "Bullet 3", "Title"), `${H}.systemBullet3Title`);
  push(pp("Page: Home `/`", "System snapshot", "Bullet 3", "Body"), `${H}.systemBullet3Body`);
  push(pp("Page: Home `/`", "System snapshot", "Bullet 4", "Title"), `${H}.systemBullet4Title`);
  push(pp("Page: Home `/`", "System snapshot", "Bullet 4", "Body"), `${H}.systemBullet4Body`);
  push(pp("Page: Home `/`", "System snapshot", "Hero image alt"), `${H}.systemImageAlt`);
  push(pp("Page: Home `/`", "System snapshot", "Product strip", "Label"), `${H}.systemProductLabelGen`);
  push(pp("Page: Home `/`", "System snapshot", "Product strip", "Label"), `${H}.systemProductLabelMat`);
  push(pp("Page: Home `/`", "System snapshot", "Product strip", "Label"), `${H}.systemProductLabelPad`);
  push(pp("Page: Home `/`", "System snapshot", "Product strip", "Label"), `${H}.systemProductLabelPen`);

  push(pp("Page: Home `/`", "Outcomes", "Title"), `${H}.outcomesTitle`);
  push(pp("Page: Home `/`", "Outcomes", "Lead"), `${H}.outcomesLead`);
  push(pp("Page: Home `/`", "Outcomes", "Featured card", "Eyebrow"), `${H}.outcomeFeaturedEyebrow`);
  push(pp("Page: Home `/`", "Outcomes", "Featured card", "Title"), `${H}.outcome1Title`);
  push(pp("Page: Home `/`", "Outcomes", "Featured card", "Label clients"), `${H}.benefitLabelClients`);
  push(pp("Page: Home `/`", "Outcomes", "Featured card", "Clients copy"), `${H}.outcome1ForClients`);
  push(pp("Page: Home `/`", "Outcomes", "Featured card", "Label practice"), `${H}.benefitLabelPractice`);
  push(pp("Page: Home `/`", "Outcomes", "Featured card", "Practice copy"), `${H}.outcome1ForPractice`);
  push(pp("Page: Home `/`", "Outcomes", "Featured card", "Image alt"), `${H}.outcome1ImageAlt`);

  for (let n = 2; n <= 5; n++) {
    push(pp("Page: Home `/`", "Outcomes", `Card ${n}`, "Title"), `${H}.outcome${n}Title`);
    push(pp("Page: Home `/`", "Outcomes", `Card ${n}`, "Clients copy"), `${H}.outcome${n}ForClients`);
    push(pp("Page: Home `/`", "Outcomes", `Card ${n}`, "For practice line"), `${H}.outcome${n}ForPractice`);
    push(pp("Page: Home `/`", "Outcomes", `Card ${n}`, "Image alt"), `${H}.outcome${n}ImageAlt`);
  }
  push(pp("Page: Home `/`", "Outcomes", "Small cards", "Practice prefix"), `${H}.outcomeForPracticePrefix`);

  push(pp("Page: Home `/`", "Rollout", "Title"), `${H}.rolloutTitle`);
  push(pp("Page: Home `/`", "Rollout", "Lead"), `${H}.rolloutLead`);
  push(pp("Page: Home `/`", "Rollout", "Timeline intro"), `${H}.rolloutWeeksIntro`);
  for (let s = 1; s <= 4; s++) {
    push(pp("Page: Home `/`", "Rollout", `Step ${s}`, "Title"), `${H}.rolloutStep${s}Title`);
    push(pp("Page: Home `/`", "Rollout", `Step ${s}`, "Detail"), `${H}.rolloutStep${s}Detail`);
  }
  push(pp("Page: Home `/`", "Rollout", "CTA contact"), `${H}.stepsCtaContact`);
  push(pp("Page: Home `/`", "Rollout", "CTA pilot"), `${H}.stepsCtaPilot`);
  push(pp("Page: Home `/`", "Rollout", "Closing note"), `${H}.rolloutCtaNote`);

  push(pp("Page: Home `/`", "Professionals band", "Title"), `${H}.professionalsTitle`);
  push(pp("Page: Home `/`", "Professionals band", "Explore link"), `${H}.professionalsExploreApplications`);
  const sectorHomeKeys = [
    ["Therapists", "sectorTherapistsTitle", "sectorTherapistsTeaser"],
    ["Beauty", "sectorBeautyTitle", "sectorBeautyTeaser"],
    ["Sports", "sectorSportsTitle", "sectorSportsTeaser"],
    ["Physio", "sectorPhysioTitle", "sectorPhysioTeaser"],
    ["Dentists", "sectorDentistsTitle", "sectorDentistsTeaser"],
    ["Clinics", "sectorClinicsTitle", "sectorClinicsTeaser"],
  ];
  for (const [label, tk, sk] of sectorHomeKeys) {
    push(pp("Page: Home `/`", "Professionals band", "Card", label, "Title"), `${H}.${tk}`);
    push(pp("Page: Home `/`", "Professionals band", "Card", label, "Teaser"), `${H}.${sk}`);
  }

  // ── How it works ───────────────────────────────────────────────────
  const W = "HowItWorks";
  push(pp("Page: How it works", "Hero", "Title (also in `<title>`)"), `${W}.title`);
  push(pp("Page: How it works", "Hero", "Subhead"), `${W}.heroSubhead`);
  push(pp("Page: How it works", "Hero", "CTA"), `${W}.ctaBookDemo`);

  push(pp("Page: How it works", "Intro", "Heading"), `${W}.introP1Head`);
  push(pp("Page: How it works", "Intro", "Lead paragraph"), `${W}.introP1Rest`);
  push(pp("Page: How it works", "Intro", "Body"), `${W}.introP2`);
  push(pp("Page: How it works", "Intro", "Image alt"), `${W}.introImageAlt`);

  push(pp("Page: How it works", "Three technologies band", "Kicker"), `${W}.block2Kicker`);
  push(pp("Page: How it works", "Three technologies band", "Title"), `${W}.block2Title`);
  push(pp("Page: How it works", "Three technologies band", "Lead"), `${W}.block2Lead`);

  push(pp("Page: How it works", "Quick overview", "Title"), `${W}.block3Title`);
  push(pp("Page: How it works", "Quick overview", "Lead"), `${W}.block3Lead`);
  push(pp("Page: How it works", "Quick overview", "Item 1", "Title"), `${W}.block3Item1Title`);
  push(pp("Page: How it works", "Quick overview", "Item 1", "Body"), `${W}.block3Item1Body`);
  push(pp("Page: How it works", "Quick overview", "Item 2", "Title"), `${W}.block3Item2Title`);
  push(pp("Page: How it works", "Quick overview", "Item 2", "Body"), `${W}.block3Item2Body`);
  push(pp("Page: How it works", "Quick overview", "Item 3", "Title"), `${W}.block3Item3Title`);
  push(pp("Page: How it works", "Quick overview", "Item 3", "Body"), `${W}.block3Item3Body`);

  const techBlock = (i) => [
    [`${W}.tech${i}Kicker`, "Kicker"],
    [`${W}.tech${i}Title`, "Title"],
    [`${W}.tech${i}WhatIsLabel`, `"What it is" label`],
    [`${W}.tech${i}WhatIs`, `"What it is" body`],
    [`${W}.tech${i}ScienceLabel`, `"Science" label`],
    [`${W}.tech${i}Science`, `"Science" body`],
  ];
  for (let i = 1; i <= 3; i++) {
    for (const [path, kind] of techBlock(i)) {
      push(pp("Page: How it works", "Technology detail", `Block ${i}`, kind), path);
    }
  }

  push(pp("Page: How it works", "Outcomes band", "Lead"), `${W}.block5Lead`);
  push(pp("Page: How it works", "Outcomes band", "Sub-lead"), `${W}.block5SubLead`);
  push(pp("Page: How it works", "Outcomes band", "Notice heading"), `${W}.block5WhatNoticeTitle`);
  const b5 = en.HowItWorks?.block5Items;
  if (Array.isArray(b5)) {
    b5.forEach((_, i) => {
      push(pp("Page: How it works", "Outcomes band", "Notice item", String(i + 1)), `${W}.block5Items[${i}]`);
    });
  }

  push(pp("Page: How it works", "Setup band", "Title"), `${W}.block6Title`);
  push(pp("Page: How it works", "Setup band", "List intro"), `${W}.block6SetupLabel`);
  const b6 = en.HowItWorks?.block6SetupItems;
  if (Array.isArray(b6)) {
    b6.forEach((_, i) => {
      push(pp("Page: How it works", "Setup band", "List item", String(i + 1)), `${W}.block6SetupItems[${i}]`);
    });
  }
  push(pp("Page: How it works", "Setup band", "Means title"), `${W}.block6MeansTitle`);
  push(pp("Page: How it works", "Setup band", "Means value"), `${W}.block6MeansValue`);
  push(pp("Page: How it works", "Setup band", "Disclaimer"), `${W}.block6Disclaimer`);

  push(pp("Page: How it works", "Bottom CTA", "Kicker"), `${W}.ctaKicker`);
  push(pp("Page: How it works", "Bottom CTA", "Title"), `${W}.ctaTitle`);
  push(pp("Page: How it works", "Bottom CTA", "Body"), `${W}.ctaBody`);
  push(pp("Page: How it works", "Bottom CTA", "Button"), `${W}.ctaBookDemo`);
  push(pp("Page: How it works", "SEO meta description (not visible on page)"), `${W}.metaDescription`);

  // ── Offers ────────────────────────────────────────────────────────
  const O = "Offers";
  push(pp("Page: Offers", "Hero", "Title"), `${O}.title`);
  push(pp("Page: Offers", "Hero", "Subhead"), `${O}.heroSubhead`);
  push(pp("Page: Offers", "Hero", "Primary CTA"), `${O}.ctaBookDemo`);
  push(pp("Page: Offers", "Hero", "Secondary (scroll)"), `${O}.overviewKicker`);

  push(pp("Page: Offers", "Intro", "Title"), `${O}.overviewTitle`);
  push(pp("Page: Offers", "Intro", "Lead"), `${O}.overviewLead`);
  push(pp("Page: Offers", "Intro", "Second paragraph"), `${O}.lead`);
  push(pp("Page: Offers", "Intro", "Image alt"), `${O}.introGeneratorImageAlt`);

  push(pp("Page: Offers", "Formats", "Title"), `${O}.formatsTitle`);
  push(pp("Page: Offers", "Formats", "Lead"), `${O}.formatsLead`);
  push(pp("Page: Offers", "Format cards", "Shared label"), `${O}.formatCardWhatIsLabel`);
  push(pp("Page: Offers", "Format cards", "Shared label"), `${O}.formatCardPositionLabel`);
  for (let f = 1; f <= 4; f++) {
    const n = String(f).padStart(2, "0");
    push(pp("Page: Offers", "Format card", n, "Title"), `${O}.format${n}Title`);
    push(pp("Page: Offers", "Format card", n, "What it is"), `${O}.format${n}WhatIs`);
    push(pp("Page: Offers", "Format card", n, "Positioning"), `${O}.format${n}Position`);
  }

  push(pp("Page: Offers", "ROI calculator", "Title"), `${O}.roiTitle`);
  push(pp("Page: Offers", "ROI calculator", "Lead"), `${O}.roiLead`);
  push(pp("Page: Offers", "ROI calculator", "Currency code"), `${O}.roiCurrency`);
  push(pp("Page: Offers", "ROI calculator", "Field label"), `${O}.roiLabelClientsPerDay`);
  push(pp("Page: Offers", "ROI calculator", "Field label"), `${O}.roiLabelWorkingDays`);
  push(pp("Page: Offers", "ROI calculator", "Field label"), `${O}.roiLabelAttachRate`);
  push(pp("Page: Offers", "ROI calculator", "Field label"), `${O}.roiLabelAddOnPrice`);
  push(pp("Page: Offers", "ROI calculator", "Field label"), `${O}.roiLabelMembershipSubscribers`);
  push(pp("Page: Offers", "ROI calculator", "Field label"), `${O}.roiLabelMembershipPrice`);
  push(pp("Page: Offers", "ROI calculator", "Field label"), `${O}.roiLabelEquipmentInvestment`);
  push(pp("Page: Offers", "ROI calculator", "Result line"), `${O}.roiResultMonthly`);
  push(pp("Page: Offers", "ROI calculator", "Payback (zero revenue)"), `${O}.roiResultPaybackNever`);
  push(pp("Page: Offers", "ROI calculator", "Payback (need investment)"), `${O}.roiPaybackNeedInvestment`);
  push(pp("Page: Offers", "ROI calculator", "Payback line"), `${O}.roiResultPayback`);
  push(pp("Page: Offers", "ROI calculator", "Disclaimer"), `${O}.roiDisclaimer`);

  push(pp("Page: Offers", "Closing CTA", "Title"), `${O}.finalCtaTitle`);
  push(pp("Page: Offers", "Closing CTA", "Body"), `${O}.finalCtaBody`);
  push(pp("Page: Offers", "Closing CTA", "Primary button"), `${O}.ctaBookDemo`);
  push(pp("Page: Offers", "Closing CTA", "Secondary button"), `${O}.finalCtaTalkToUs`);

  // ── Professionals index ─────────────────────────────────────────
  const P = "ProfessionalsIndex";
  push(pp("Page: Professionals index", "Hero", "Headline"), `${P}.heroHeadline`);
  push(pp("Page: Professionals index", "Hero", "Subhead"), `${P}.heroSubhead`);

  push(
    pp("Page: Professionals index", "Explainer band", "Full text (split into two paragraphs in UI)"),
    `${P}.explainerBody`,
  );
  push(pp("Page: Professionals index", "Gating note"), `${P}.gatingNote`);
  push(pp("Page: Professionals index", "Cards intro"), `${P}.cardsInstruction`);

  const sectorPairs = [
    ["Therapists", "sectorTherapistsTitle", "sectorTherapistsImageAlt", "proTeaserTherapists", "popupTherapistsBody"],
    ["Beauty", "sectorBeautyTitle", "sectorBeautyImageAlt", "proTeaserBeauty", "popupBeautyBody"],
    ["Sports", "sectorSportsTitle", "sectorSportsImageAlt", "proTeaserSports", "popupSportsBody"],
    ["Physio", "sectorPhysioTitle", "sectorPhysioImageAlt", "proTeaserPhysio", "popupPhysioBody"],
    ["Dentists", "sectorDentistsTitle", "sectorDentistsImageAlt", "proTeaserDentists", "popupDentistsBody"],
    ["Clinics", "sectorClinicsTitle", "sectorClinicsImageAlt", "proTeaserClinics", "popupClinicsBody"],
  ];
  for (const [label, ht, ha, pt, pk] of sectorPairs) {
    push(pp("Page: Professionals index", "Sector card", label, "Title (from Home.*)"), `Home.${ht}`);
    push(pp("Page: Professionals index", "Sector card", label, "Teaser"), `${P}.${pt}`);
    push(pp("Page: Professionals index", "Sector card", label, "Image alt (from Home.*)"), `Home.${ha}`);
    push(pp("Page: Professionals index", "Sector popup", label, "Body"), `${P}.${pk}`);
  }

  push(pp("Page: Professionals index", "Card button"), "Home.learnMore");
  push(pp("Page: Professionals index", "Popup close"), `${P}.popupClose`);

  push(pp("Page: Professionals index", "Bottom CTA", "Title"), `${P}.ctaHeadline`);
  push(pp("Page: Professionals index", "Bottom CTA", "Subhead"), `${P}.ctaSubhead`);
  push(pp("Page: Professionals index", "Bottom CTA", "Primary"), `${P}.ctaCta`);
  push(pp("Page: Professionals index", "Bottom CTA", "Secondary"), `${P}.ctaSecondaryCta`);
  push(pp("Page: Professionals index", "SEO meta title (browser tab)"), `${P}.metaTitle`);
  push(pp("Page: Professionals index", "SEO meta description"), `${P}.metaDescription`);

  // ── Shared: sector detail hero image alt ─────────────────────────
  push(pp("Page: Professionals / [sector]", "Hero background alt (shared)"), "Home.heroImageAlt");

  const PR = "ProfessionalProducts";
  const SB = "SectorBooking";

  function pushRecommendedProducts(locPrefix) {
    push(`${locPrefix} → Recommended products → Title`, `${PR}.title`);
    push(`${locPrefix} → Recommended products → Lead`, `${PR}.lead`);
    push(`${locPrefix} → Recommended products → MAT title`, `${PR}.matTitle`);
    push(`${locPrefix} → Recommended products → MAT desc`, `${PR}.matDesc`);
    push(`${locPrefix} → Recommended products → PAD title`, `${PR}.padTitle`);
    push(`${locPrefix} → Recommended products → PAD desc`, `${PR}.padDesc`);
    push(`${locPrefix} → Recommended products → TWINC title`, `${PR}.twincTitle`);
    push(`${locPrefix} → Recommended products → TWINC desc`, `${PR}.twincDesc`);
    push(`${locPrefix} → Recommended products → PEN title`, `${PR}.penTitle`);
    push(`${locPrefix} → Recommended products → PEN desc`, `${PR}.penDesc`);
    push(`${locPrefix} → Recommended products → Generator title`, `${PR}.generatorTitle`);
    push(`${locPrefix} → Recommended products → Generator desc`, `${PR}.generatorDesc`);
    push(`${locPrefix} → Recommended products → Details link`, `${PR}.detailsLink`);
    push(`${locPrefix} → Recommended products → Image alt pattern`, `${PR}.productImageAlt`);
  }

  function pushSectorBookingForm(locPrefix) {
    push(`${locPrefix} → Booking form → Title`, `${SB}.formTitle`);
    push(`${locPrefix} → Booking form → Lead`, `${SB}.formLead`);
    push(`${locPrefix} → Booking form → Category label`, `${SB}.categoryLabel`);
    push(`${locPrefix} → Booking form → Name`, `${SB}.name`);
    push(`${locPrefix} → Booking form → Email`, `${SB}.email`);
    push(`${locPrefix} → Booking form → Phone`, `${SB}.phone`);
    push(`${locPrefix} → Booking form → Message`, `${SB}.message`);
    push(`${locPrefix} → Booking form → Submit`, `${SB}.submit`);
    push(`${locPrefix} → Booking form → Success`, `${SB}.success`);
    push(`${locPrefix} → Booking form → Error`, `${SB}.error`);
  }

  for (const slug of SECTOR_SLUGS) {
    const base = pp("Page: Professionals", `\`${slug}\``);
    for (const key of PROFESSIONAL_SECTOR_KEY_ORDER) {
      push(`${base} → ${key}`, `ProfessionalPages.${slug}.${key}`);
    }
    pushRecommendedProducts(base);
    pushSectorBookingForm(base);
  }

  // ── Pilot ─────────────────────────────────────────────────────────
  const PI = "Pilot";
  push(pp("Page: Pilot `/pilot`", "Header", "Title"), `${PI}.heroTitle`);
  push(pp("Page: Pilot `/pilot`", "Header", "Lead"), `${PI}.heroLead`);
  push(pp("Page: Pilot `/pilot`", "Timeline", "Title"), `${PI}.timelineTitle`);
  for (let s = 1; s <= 4; s++) {
    push(pp("Page: Pilot `/pilot`", "Timeline", `Step ${s}`, "Title"), `${PI}.step${s}Title`);
    push(pp("Page: Pilot `/pilot`", "Timeline", `Step ${s}`, "Body"), `${PI}.step${s}Body`);
  }
  push(pp("Page: Pilot `/pilot`", "Included", "Title"), `${PI}.includedTitle`);
  for (let i = 1; i <= 5; i++) {
    push(pp("Page: Pilot `/pilot`", "Included", `Item ${i}`), `${PI}.included${i}`);
  }
  push(pp("Page: Pilot `/pilot`", "Form", "Title"), `${PI}.formTitle`);
  push(pp("Page: Pilot `/pilot`", "Form", "Lead"), `${PI}.formLead`);
  push(pp("Page: Pilot `/pilot`", "Form", "Name"), `${PI}.name`);
  push(pp("Page: Pilot `/pilot`", "Form", "Sector label"), `${PI}.sector`);
  push(pp("Page: Pilot `/pilot`", "Form", "Sector option"), `${PI}.sectorTherapists`);
  push(pp("Page: Pilot `/pilot`", "Form", "Sector option"), `${PI}.sectorBeauty`);
  push(pp("Page: Pilot `/pilot`", "Form", "Sector option"), `${PI}.sectorSports`);
  push(pp("Page: Pilot `/pilot`", "Form", "Sector option"), `${PI}.sectorPhysio`);
  push(pp("Page: Pilot `/pilot`", "Form", "Sector option"), `${PI}.sectorDentists`);
  push(pp("Page: Pilot `/pilot`", "Form", "Sector option"), `${PI}.sectorClinics`);
  push(pp("Page: Pilot `/pilot`", "Form", "Sector option"), `${PI}.sectorOther`);
  push(pp("Page: Pilot `/pilot`", "Form", "Email"), `${PI}.email`);
  push(pp("Page: Pilot `/pilot`", "Form", "Phone"), `${PI}.phone`);
  push(pp("Page: Pilot `/pilot`", "Form", "Preferred start"), `${PI}.preferredStart`);
  push(pp("Page: Pilot `/pilot`", "Form", "Questions"), `${PI}.questions`);
  push(pp("Page: Pilot `/pilot`", "Form", "Submit"), `${PI}.submit`);
  push(pp("Page: Pilot `/pilot`", "Form", "Success"), `${PI}.success`);
  push(pp("Page: Pilot `/pilot`", "Form", "Error"), `${PI}.error`);
  push(pp("Page: Pilot `/pilot`", "SEO meta title"), `${PI}.metaTitle`);
  push(pp("Page: Pilot `/pilot`", "SEO meta description"), `${PI}.metaDescription`);

  // ── Booking ───────────────────────────────────────────────────────
  const B = "Booking";
  push(pp("Page: Booking `/booking`", "Title"), `${B}.title`);
  push(pp("Page: Booking `/booking`", "Description"), `${B}.description`);
  push(pp("Page: Booking `/booking`", "Form", "Name"), `${B}.name`);
  push(pp("Page: Booking `/booking`", "Form", "Email"), `${B}.email`);
  push(pp("Page: Booking `/booking`", "Form", "Phone"), `${B}.phone`);
  push(pp("Page: Booking `/booking`", "Form", "Date"), `${B}.date`);
  push(pp("Page: Booking `/booking`", "Form", "Message"), `${B}.message`);
  push(pp("Page: Booking `/booking`", "Form", "Submit"), `${B}.submit`);
  push(pp("Page: Booking `/booking`", "Form", "Success"), `${B}.success`);
  push(pp("Page: Booking `/booking`", "Form", "Error"), `${B}.error`);

  const C = "Contact";
  push(pp("Page: Contact `/contact`", "Header", "Title"), `${C}.title`);
  push(pp("Page: Contact `/contact`", "Header", "Lead"), `${C}.lead`);
  push(pp("Page: Contact `/contact`", "Form intro", "Title (also drawer: no title)"), `${C}.formTitle`);
  push(pp("Page: Contact `/contact`", "Form intro", "Lead (drawer omits)"), `${C}.formLead`);

  push(pp("Page: Contact `/contact`", "Form", "Name label (drawer: same order)"), `${C}.name`);
  push(pp("Page: Contact `/contact`", "Form", "Professional category label"), `${C}.professionalCategory`);
  push(pp("Page: Contact `/contact`", "Form", "Category option"), `${C}.categoryTherapists`);
  push(pp("Page: Contact `/contact`", "Form", "Category option"), `${C}.categoryBeauty`);
  push(pp("Page: Contact `/contact`", "Form", "Category option"), `${C}.categorySports`);
  push(pp("Page: Contact `/contact`", "Form", "Category option"), `${C}.categoryPhysio`);
  push(pp("Page: Contact `/contact`", "Form", "Category option"), `${C}.categoryDentists`);
  push(pp("Page: Contact `/contact`", "Form", "Category option"), `${C}.categoryClinics`);
  push(pp("Page: Contact `/contact`", "Form", "Category option"), `${C}.categoryOther`);
  push(pp("Page: Contact `/contact`", "Form", "Email label"), `${C}.email`);
  push(pp("Page: Contact `/contact`", "Form", "Phone label"), `${C}.phone`);
  push(pp("Page: Contact `/contact`", "Form", "Preferred contact method"), `${C}.preferredContactMethod`);
  push(pp("Page: Contact `/contact`", "Form", "Method option"), `${C}.contactMethodEmail`);
  push(pp("Page: Contact `/contact`", "Form", "Method option"), `${C}.contactMethodPhone`);
  push(pp("Page: Contact `/contact`", "Form", "Method option"), `${C}.contactMethodEither`);
  push(pp("Page: Contact `/contact`", "Form", "Message"), `${C}.message`);
  push(pp("Page: Contact `/contact`", "Form", "Languages legend"), `${C}.langPreferenceTitle`);
  push(pp("Page: Contact `/contact`", "Form", "Language label"), `${C}.langDe`);
  push(pp("Page: Contact `/contact`", "Form", "Language label"), `${C}.langEn`);
  push(pp("Page: Contact `/contact`", "Form", "Language label"), `${C}.langLv`);
  push(pp("Page: Contact `/contact`", "Form", "Consent"), `${C}.consentLabel`);
  push(pp("Page: Contact `/contact`", "Form", "Submit"), `${C}.submit`);
  push(pp("Page: Contact `/contact`", "Form", "Submitting"), `${C}.submitting`);
  push(pp("Page: Contact `/contact`", "Form", "Success"), `${C}.success`);
  push(pp("Page: Contact `/contact`", "Form", "Error"), `${C}.error`);
  push(pp("Page: Contact `/contact`", "Form", "Network error"), `${C}.errorNetwork`);
  push(pp("Page: Contact `/contact`", "Form", "Validation"), `${C}.validationName`);
  push(pp("Page: Contact `/contact`", "Form", "Validation"), `${C}.validationEmail`);
  push(pp("Page: Contact `/contact`", "Form", "Validation"), `${C}.validationMessage`);
  push(pp("Page: Contact `/contact`", "Form", "Validation"), `${C}.validationLang`);
  push(pp("Page: Contact `/contact`", "Form", "Validation"), `${C}.validationConsent`);
  push(pp("Page: Contact `/contact`", "Aside", "Title"), `${C}.legalTitle`);
  push(pp("Page: Contact `/contact`", "Aside", "Company name"), `${C}.companyName`);
  push(pp("Page: Contact `/contact`", "Aside", "Address"), `${C}.address`);
  push(pp("Page: Contact `/contact`", "Aside", "VAT label"), `${C}.vatLabel`);
  push(pp("Page: Contact `/contact`", "Aside", "VAT value"), `${C}.vatNumber`);
  push(
    pp("Page: Contact `/contact`", "Aside", "Email value (label = form `Contact.email`)"),
    `${C}.companyEmail`,
  );
  push(
    pp("Page: Contact `/contact`", "Aside", "Phone value (label = form `Contact.phone`)"),
    `${C}.companyPhone`,
  );
  push(pp("Page: Contact `/contact`", "Aside", "Tel href"), `${C}.companyPhoneTel`);
  push(pp("Page: Contact `/contact`", "Aside", "Privacy link"), `${C}.privacyLink`);
  push(pp("Page: Contact `/contact`", "Aside", "Imprint link"), `${C}.imprintLink`);
  push(pp("Page: Contact `/contact`", "Aside", "Legal note"), `${C}.legalNote`);
  push(pp("Page: Contact `/contact`", "SEO meta title"), `${C}.metaTitle`);
  push(pp("Page: Contact `/contact`", "SEO meta description"), `${C}.metaDescription`);

  // ── Legal placeholder pages (messages only) ───────────────────────
  push(pp("Page: Imprint `/imprint`", "H1"), "Imprint.title");
  push(pp("Page: Imprint `/imprint`", "Body (placeholder)"), "Imprint.body");
  push(pp("Page: Imprint `/imprint`", "SEO meta title"), "Imprint.metaTitle");
  push(pp("Page: Imprint `/imprint`", "SEO meta description"), "Imprint.metaDescription");
  push(pp("Page: Privacy `/privacy`", "H1"), "Privacy.title");
  push(pp("Page: Privacy `/privacy`", "Body (placeholder)"), "Privacy.body");
  push(pp("Page: Privacy `/privacy`", "SEO meta title"), "Privacy.metaTitle");
  push(pp("Page: Privacy `/privacy`", "SEO meta description"), "Privacy.metaDescription");
  push(pp("Page: Terms `/terms`", "H1"), "Terms.title");
  push(pp("Page: Terms `/terms`", "Body (placeholder)"), "Terms.body");
  push(pp("Page: Terms `/terms`", "SEO meta title"), "Terms.metaTitle");
  push(pp("Page: Terms `/terms`", "SEO meta description"), "Terms.metaDescription");

  push(pp("Page: Cookie policy `/cookie-policy`", "SEO meta title (messages)"), "CookiePolicy.metaTitle");
  push(pp("Page: Cookie policy `/cookie-policy`", "SEO meta description (messages)"), "CookiePolicy.metaDescription");

  // ── 404 ───────────────────────────────────────────────────────────
  push(pp("Page: Not found", "Link home"), "Nav.home");

  // ── ProfessionalsIndex legacy / unused in current UI ───────────────
  push(pp("(Catalog) ProfessionalsIndex", "Possibly unused"), `${P}.title`);
  push(pp("(Catalog) ProfessionalsIndex", "Possibly unused"), `${P}.lead`);
  push(pp("(Catalog) ProfessionalsIndex", "Possibly unused"), `${P}.heroKicker`);
  push(pp("(Catalog) ProfessionalsIndex", "Possibly unused"), `${P}.heroCta`);
  push(pp("(Catalog) ProfessionalsIndex", "Possibly unused"), `${P}.heroSecondaryCta`);
  push(pp("(Catalog) ProfessionalsIndex", "Possibly unused"), `${P}.sectionKicker`);
  push(pp("(Catalog) ProfessionalsIndex", "Possibly unused"), `${P}.sectionTitle`);
  push(pp("(Catalog) ProfessionalsIndex", "Possibly unused"), `${P}.sectionLead`);
  push(pp("(Catalog) ProfessionalsIndex", "Possibly unused"), `${P}.popupCta`);

  return out;
}

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

  const flow = buildPageFlowOrder(en);
  const usedPaths = new Set();
  const rows = [["Location / context", "Message key", "English", "German", "Latvian"]];

  for (const { location, path: keyPath } of flow) {
    usedPaths.add(keyPath);
    rows.push([
      location,
      keyPath,
      enMap.get(keyPath) ?? "",
      deMap.get(keyPath) ?? "",
      lvMap.get(keyPath) ?? "",
    ]);
  }

  const allKeys = new Set([...enMap.keys(), ...deMap.keys(), ...lvMap.keys()]);
  for (const k of usedPaths) allKeys.delete(k);
  const tail = [...allKeys].sort((a, b) => a.localeCompare(b));

  rows.push(["— Remaining keys (not ordered above) —", "", "", "", ""]);
  for (const keyPath of tail) {
    rows.push([
      "(Unmapped — check if obsolete or TSX-only page)",
      keyPath,
      enMap.get(keyPath) ?? "",
      deMap.get(keyPath) ?? "",
      lvMap.get(keyPath) ?? "",
    ]);
  }

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(rows);
  ws["!cols"] = [{ wch: 56 }, { wch: 42 }, { wch: 64 }, { wch: 64 }, { wch: 64 }];
  XLSX.utils.book_append_sheet(wb, ws, "Translations");

  const outPath = path.join(root, "translations-review.xlsx");
  XLSX.writeFile(wb, outPath);
  console.log(outPath);
}

main();
