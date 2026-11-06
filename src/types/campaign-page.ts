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
  heroImagePosition?: string;
  heroTextAlign?: "left" | "right";
  heroBadge?: string;
  heroKicker: string;
  /** A single `\n` is a deliberate break. Soft wraps are balanced in the hero. */
  heroHeadline: string;
  heroSubhead: string;
  /** Smaller line under the subhead. Use for a caveat, not a second pitch. */
  heroNote?: string;
  heroCtaPrimary: string;
  /** When set, the primary hero control is an in-page link (e.g. #campaign-problem-heading). */
  heroCtaPrimaryHref?: string;
  heroCtaSecondary?: string;
  /** When set, the secondary hero button opens the contact drawer with this message instead of mailto. */
  heroCtaSecondaryContactMessage?: string;
  /** When set, the secondary hero button uses this href instead of /how-it-works. */
  heroCtaSecondaryHref?: string;
  /** Label for contact-drawer CTAs where the hero primary is not the main conversion (e.g. scroll link). */
  primaryContactDrawerLabel?: string;
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
  /** Second contact-drawer prefilled message (e.g. trial vs demo). */
  trialRequestMessage?: string;

  /** Big figures in the stat strip below the hero (three or four columns). */
  quickStats:
    | [
        { value: string; label: string },
        { value: string; label: string },
        { value: string; label: string },
      ]
    | [
        { value: string; label: string },
        { value: string; label: string },
        { value: string; label: string },
        { value: string; label: string },
      ];

  problemEyebrow: string;
  problemTitle: string;
  problemBody: string;
  problemImage?: string;
  problemImagePosition?: string;

  solutionEyebrow: string;
  solutionTitle: string;
  solutionBody: string;
  /** Named programs, set apart from the prose so each name keeps its own line. */
  solutionPrograms?: { name: string; detail: string }[];
  solutionProgramNote?: string;
  /** Three iconified spec pills shown beneath the solution body. Omit when replaced by solutionClosingStatement. */
  solutionSpecs?: [
    { title: string; body: string },
    { title: string; body: string },
    { title: string; body: string },
  ];
  /** One paragraph after the program list instead of the three spec cards (e.g. CF Liepāja). */
  solutionClosingStatement?: string;
  /** PEMF / technology band after the installation image (optional). */
  technologySection?: {
    eyebrow: string;
    title: string;
    intro: string;
    pemfLine: string;
    highlights: [
      { label: string; body: string },
      { label: string; body: string },
      { label: string; body: string },
    ];
  };
  /** Caption under the installation visualization image. */
  problemImageCaption?: string;
  /** Legally / operationally necessary note in a quieter placement (e.g. end of installation section). */
  disclosureFooter?: string;

  fitsTitle: string;
  fitsEyebrow: string;
  fitsLead: string;
  fitsImages?: string[];
  fitsImagePositions?: string[];
  /** 3–4 steps; rendered as equal-height cards with header imagery. */
  fitsItems: { title: string; body: string }[];

  whatChangesTitle: string;
  whatChangesEyebrow: string;
  whatChangesPatientsTitle: string;
  whatChangesPatientsItems: string[];
  whatChangesPatientsImage?: string;
  whatChangesPatientsImagePosition?: string;
  whatChangesPracticeTitle: string;
  whatChangesPracticeItems: string[];
  whatChangesPracticeImage?: string;
  whatChangesPracticeImagePosition?: string;

  socialProofLabel: string;
  socialProofQuote: string;
  socialProofAttribution: string;
  socialProofImage?: string;

  demoStepsEyebrow: string;
  demoStepsTitle: string;
  demoStepsLead: string;
  demoSteps: { title: string; body: string }[];
  /** Optional second button next to the revenue-path primary (e.g. trial discussion). */
  demoStepsSecondaryCta?: string;
  demoStepsSecondaryContactMessage?: string;

  finalCtaTitle: string;
  finalCtaBody: string;
  finalCtaPrimary: string;
  /** Overrides the prefilled message for the final primary contact button. */
  finalCtaPrimaryContactMessage?: string;
  finalCtaSecondary?: string;
  /** When set, the final secondary button opens the contact drawer with this message. */
  finalCtaSecondaryContactMessage?: string;
  /** When set, the secondary closing button uses this href instead of /how-it-works. */
  finalCtaSecondaryHref?: string;
  finalCtaTrustItems?: [string, string, string];
};

export type CampaignLocale = "en" | "de" | "lv";
