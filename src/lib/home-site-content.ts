import type { HomeLocale } from "@/lib/home-copy";

export const HOME_SITE_NAV = [
  { label: "Home", href: "/home", external: false },
  { label: "How sanza works", href: "/how-it-works", external: false },
  { label: "Programs", href: "/programs", external: false },
  { label: "sanza Experiences", href: "/sanza-experiences", external: false },
  { label: "FAQ", href: "/faq", external: false },
  { label: "Shop", href: "https://nordoravital.sanzanet.com/shop-en", external: true },
] as const;

export const HOME_SITE_SLUGS = [
  "experience",
] as const;

export type HomeSiteSlug = (typeof HOME_SITE_SLUGS)[number];

export const HOME_SITE_PAGES: Record<
  HomeSiteSlug,
  Record<
    HomeLocale,
    {
      title: string;
      eyebrow: string;
      description: string;
      sections: { title: string; body: string }[];
    }
  >
> = {
  "experience": {
    "en": {
      "eyebrow": "How sanza works",
      "title": "A quiet ritual for the moments your body asks for pause.",
      "description": "sanza brings structured wellness technology into a private setting, with gentle programs designed around calm, recovery, relaxation and daily reset.",
      "sections": [
        {
          "title": "Prepared, then personal",
          "body": "Choose the program that fits the moment, settle in, and let the session create a softer transition between effort and rest.",
        },
        {
          "title": "Technology without the clinical mood",
          "body": "The experience stays calm and tactile: a mat, targeted applicators, simple routines and enough structure to make wellness feel repeatable.",
        },
        {
          "title": "Built for ordinary days",
          "body": "Use it after training, before sleep, during a quiet afternoon, or as a shared home ritual when the day needs a better ending.",
        },
      ],
    },
    "de": {
      "eyebrow": "So funktioniert sanza",
      "title": "Ein ruhiges Ritual für die Momente, in denen Ihr Körper nach einer Pause verlangt.",
      "description": "sanza bringt strukturierte Wellness-Technologie in den privaten Bereich – mit sanften Programmen, die auf Ruhe, Erholung, Entspannung und den täglichen Reset ausgerichtet sind.",
      "sections": [
        {
          "title": "Vorbereitet, dann persönlich",
          "body": "Wählen Sie das Programm, das zum Moment passt, machen Sie es sich bequem und lassen Sie die Sitzung einen sanfteren Übergang zwischen Anstrengung und Ruhe schaffen.",
        },
        {
          "title": "Technologie ohne klinische Atmosphäre",
          "body": "Das Erlebnis bleibt ruhig und haptisch: eine Matte, gezielte Applikatoren, einfache Routinen und genug Struktur, damit sich Wellness wiederholbar anfühlt.",
        },
        {
          "title": "Entwickelt für ganz normale Tage",
          "body": "Nutzen Sie es nach dem Training, vor dem Schlafengehen, an einem ruhigen Nachmittag oder als gemeinsames Ritual zu Hause, wenn der Tag ein besseres Ende braucht.",
        },
      ],
    },
    "lv": {
      "eyebrow": "Kā darbojas sanza",
      "title": "Kluss rituāls brīžiem, kad jūsu ķermenis lūdz pauzi.",
      "description": "sanza ievieš strukturētu labsajūtas tehnoloģiju privātā vidē, piedāvājot maigas programmas, kas veidotas, domājot par mieru, atgūšanos, relaksāciju un ikdienas atjaunošanos.",
      "sections": [
        {
          "title": "Sagatavots, tad personīgs",
          "body": "Izvēlieties programmai, kas atbilst brīdim, iekārtojieties un ļaujiet sesijai radīt maigāku pāreju starp piepūli un atpūtu.",
        },
        {
          "title": "Tehnoloģija bez klīniskas noskaņas",
          "body": "Pieredze paliek mierīga un taustāma: paklājs, mērķtiecīgi aplikatori, vienkāršas rutīnas un pietiekama struktūra, lai labsajūta šķistu atkārtojama.",
        },
        {
          "title": "Radīts parastajām dienām",
          "body": "Izmantojiet to pēc treniņa, pirms miega, klusā pēcpusdienā vai kā kopīgu mājas rituālu, kad dienai nepieciešams labāks noslēgums.",
        },
      ],
    },
  },
};

export function isHomeSiteSlug(value: string): value is HomeSiteSlug {
  return (HOME_SITE_SLUGS as readonly string[]).includes(value);
}
