/**
 * Content shape for a single Latvia-outreach landing page.
 * Strings may include `<strong>…</strong>` (rendered via RichLine).
 */
export type CampaignPageContent = {
  segmentName: string;
  metaTitle: string;
  metaDescription: string;

  /** Tiny hero pill above the kicker. */
  heroImage?: string;
  heroTextAlign?: "left" | "right";
  heroBadge?: string;
  heroKicker: string;
  /** May contain a single newline `\n` for visual line break. */
  heroHeadline: string;
  heroSubhead: string;
  heroCtaPrimary: string;
  heroCtaSecondary?: string;
  /** Three short trust pills below the hero subhead. */
  heroValueProps: [string, string, string];
  contactCategory?:
    | "therapists"
    | "beauty-cosmetic"
    | "sports-performance"
    | "physiotherapists"
    | "dentists"
    | "clinics"
    | "other";
  demoRequestMessage: string;

  /** Four big numbers in the stat strip below the hero. */
  quickStats: [
    { value: string; label: string },
    { value: string; label: string },
    { value: string; label: string },
    { value: string; label: string },
  ];

  problemEyebrow: string;
  problemTitle: string;
  problemBody: string;
  problemImage?: string;

  solutionEyebrow: string;
  solutionTitle: string;
  solutionBody: string;
  /** Three iconified spec pills shown beneath the solution body. */
  solutionSpecs: [
    { title: string; body: string },
    { title: string; body: string },
    { title: string; body: string },
  ];

  fitsTitle: string;
  fitsEyebrow: string;
  fitsLead: string;
  fitsImages?: [string, string, string, string];
  /** 3–4 steps; rendered as equal-height cards with header imagery. */
  fitsItems: { title: string; body: string }[];

  whatChangesTitle: string;
  whatChangesEyebrow: string;
  whatChangesPatientsTitle: string;
  whatChangesPatientsItems: string[];
  whatChangesPatientsImage?: string;
  whatChangesPracticeTitle: string;
  whatChangesPracticeItems: string[];
  whatChangesPracticeImage?: string;

  socialProofLabel: string;
  socialProofQuote: string;
  socialProofAttribution: string;
  socialProofImage?: string;

  demoStepsEyebrow: string;
  demoStepsTitle: string;
  demoStepsLead: string;
  demoSteps: [
    { title: string; body: string },
    { title: string; body: string },
    { title: string; body: string },
  ];

  finalCtaTitle: string;
  finalCtaBody: string;
  finalCtaPrimary: string;
  finalCtaSecondary?: string;
  finalCtaTrustItems?: [string, string, string];
};

export type CampaignLocale = "en" | "de" | "lv";
