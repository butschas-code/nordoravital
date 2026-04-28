/**
 * Central paths for assets under `public/images/`.
 * Curated files are mirrored from `Website/References` — see `scripts/sync-reference-images.sh`.
 * Replace filenames here if you swap assets; keep `public/images` tree aligned with References.
 */
export const IMAGE_PATHS = {
  brand: {
    /** Source: Brand/nordora_logo_trans_02.png */
    logo: "/images/brand/nordora_logo_trans_02.png",
    logoPlaceholder: "/images/brand/logo-placeholder.svg",
  },
  hero: {
    /** Full-bleed hero loop (public/images/home_hero.mp4). */
    backgroundVideo: "/images/home_hero.mp4",
    /** How it works page hero (public/images/how it works hero.mp4). */
    howItWorksHeroVideo: "/images/how it works hero.mp4",
    /** Mirrored from References/sanzanet/images/home-main-de/bg_waves_1920.png (descriptive rename). */
    backgroundPhoto:
      "/images/references/hero/home-hero-soft-abstract-waves-background.png",
    /** Vector fallback / overlay-friendly background. */
    backgroundSvg: "/images/references/hero/hero-background.svg",
    /** Lifestyle — warm daylight, from References/sanzanet/images/happy-aging-main */
    lifestyleSide:
      "/images/references/lifestyle/calm-wellness-session-warm-light.jpg",
  },
  /** Editorial photos (References/sanzanet/images/happy-aging-main) */
  lifestyle: {
    pillarPemf: "/images/references/lifestyle/relaxation-ritual-soft-daylight.jpg",
    pillarBio: "/images/references/lifestyle/professional-calm-treatment-space.jpg",
    pillarLight: "/images/references/lifestyle/wellness-room-natural-materials.jpg",
    testimonialAmbient: "/images/references/lifestyle/calm-wellness-session-warm-light.jpg",
  },
  sectors: {
    therapists: "/images/references/sectors/therapists.svg",
    "beauty-cosmetic": "/images/references/sectors/beauty.svg",
    "sports-performance": "/images/references/sectors/sports.svg",
    physiotherapists: "/images/references/sectors/physio.svg",
    dentists: "/images/references/sectors/dentists.svg",
    clinics: "/images/references/sectors/clinics.svg",
  },
  pillars: {
    pemf: "/images/references/pillars/pemf.svg",
    biofrequency: "/images/references/pillars/biofrequency.svg",
    light: "/images/references/pillars/light.svg",
  },
  modular: {
    generator: "/images/references/modular/generator.svg",
    mat: "/images/references/modular/mat.svg",
    pad: "/images/references/modular/pad.svg",
    twinc: "/images/references/modular/twinc.svg",
    pen: "/images/references/modular/pen.svg",
    handElectrodes: "/images/references/modular/hand-electrodes.svg",
  },
  professionals: {
    /** Full-bleed hero for /professionals. */
    hero: "/images/professionals-hero.jpg",
  },
  offers: {
    /** Full-bleed hero for /offers (sanza for you). */
    hero: "/images/sanza-for-you-hero.jpg",
    /** Intro block — Generator product shot (shadow). */
    introGenerator: "/images/sanza_generator_611_shadow.png",
    arrival: "/images/references/offers/arrival.svg",
    decompression: "/images/references/offers/decompression.svg",
    membership: "/images/references/offers/membership.svg",
    staff: "/images/references/offers/staff.svg",
  },
  /** Homepage photography — equipment & room context */
  home: {
    welcomeSide: "/images/references/lifestyle/calm-wellness-session-warm-light.jpg",
    twoPathsA: "/images/references/lifestyle/professional-calm-treatment-space.jpg",
    twoPathsB: "/images/references/lifestyle/relaxation-ritual-soft-daylight.jpg",
    systemHero: "/images/sanza_gesamtsystem_645.png",
    productMat: "/images/02_sanza_mat_700.jpg",
    productPad: "/images/02_sanza_pad_700.jpg",
    /** Hand electrodes — matches How it works / biofrequency copy */
    productHandElectrode: "/images/sanza hand electrode 01.jpg",
    productPen: "/images/02_sanza_pen_700.jpg",
    productGenerator: "/images/02_sanza_generator_shadow.png",
    partnerSide: "/images/references/lifestyle/wellness-room-natural-materials.jpg",
    /** Client outcomes bento — photography under translucent BrandAtmosphere overlay */
    outcomePhotos: [
      "/images/sanza calmer arrivals.jpg",
      "/images/sanza a softer landing.jpg",
      "/images/sanza, less wired.jpg",
      "/images/sanza focus and presence.jpg",
      "/images/sanza comfort routines.jpg",
    ] as const,
  },
  /** Lead deck — static photography under public/images/ */
  deck: {
    slide1Background: "/images/Sanza mat 01.jpg",
    slide2Welcome: "/images/sanza a softer landing.jpg",
    /** Slide 4 (three technologies) — left card photography */
    slide4ThreeTechLeft: "/images/sanza comfort routines 01.png",
  },
} as const;
