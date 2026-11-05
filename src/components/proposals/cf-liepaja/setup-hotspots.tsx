"use client";

import Image from "next/image";
import { useState } from "react";

type SpotId = "mat" | "controller" | "pad" | "area";

const SPOTS: {
  id: SpotId;
  n: string;
  x: number;
  y: number;
  name: string;
  title: string;
  body: string;
  photo?: string;
  photoAlt?: string;
  caption?: string;
}[] = [
  {
    id: "mat",
    n: "1",
    x: 66,
    y: 47,
    name: "MAT",
    title: "MAT — visa ķermeņa pielietojums",
    body: "Biedrs ērti apguļas uz balta Sanza MAT. Sesijas laikā ierīce rada programmētus pulsējošus elektromagnētiskos laukus matrača laukumā. Koncepta attēlā matracis ir uz atpūtas krēsla, un tā forma ir aptuvena.",
    photo: "/images/02_sanza_mat_700.jpg",
    photoAlt: "Sieviete guļ uz balta Sanza MAT, blakus novietots kontrolleris. Produkta fotogrāfija.",
    caption: "Faktiskais Sanza MAT. Studijas fotogrāfija, nevis CF Liepāja telpa.",
  },
  {
    id: "controller",
    n: "2",
    x: 75,
    y: 57,
    name: "Kontrolleris",
    title: "Kontrolleris — izvēlas un palaiž programmu",
    body: "Baltais kvadrātveida kontrolleris ar gaiši zaļu gredzenu palaiž izvēlēto programmu. Personāls to iestata. Biedram nav jāregulē tehniskie parametri.",
    photo: "/images/sanza mat 02.jpg",
    photoAlt: "Sanza kontrolleris ar gaiši zaļu gredzenu uz galdiņa blakus matracim. Produkta fotogrāfija.",
    caption: "Faktiskais kontrolleris sesijas laikā. Telpa attēlā nav CF Liepāja.",
  },
  {
    id: "pad",
    n: "3",
    x: 22,
    y: 63,
    name: "PAD",
    title: "PAD — izvēles lokāls aplikators",
    body: "PAD ir atsevišķs aplikators lokālai lietošanai, ja izvēlētā konfigurācija to ietver. Koncepta attēlā tā forma ir aptuvena. Blakus ir faktiskā produkta fotogrāfija.",
    photo: "/images/02_sanza_pad_700.jpg",
    photoAlt: "Vīrietis atpūšas krēslā ar balto Sanza PAD aplikatoru. Produkta fotogrāfija.",
    caption: "Faktiskais Sanza PAD. Tas nav medicīnisks pārsējs un nav obligāta komplekta daļa.",
  },
  {
    id: "area",
    n: "4",
    x: 48,
    y: 18,
    name: "Atpūtas zona",
    title: "Atpūtas zona — vieta, kur nomierināties",
    body: "Neliela zona ar guļvietu, galdiņu kontrollerim un mierīgu gaismu. Tā ir domāta laikam pēc treniņa. Tā neaizstāj fitnesa zāli un neprasa mainīt nodarbību grafiku.",
  },
];

export function SetupHotspots() {
  const [active, setActive] = useState<SpotId>("mat");
  const spot = SPOTS.find((item) => item.id === active) ?? SPOTS[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.8fr)] lg:items-start">
      <div>
        <div className="relative">
          <Image
            src="/images/proposals/cf-liepaja/setup-station.webp"
            alt="Koncepta vizualizācija: Sanza MAT, atsevišķs PAD un kontrolleris uz atpūtas krēsla funkcionālā fitnesa zālē. Nav CF Liepāja telpu fotogrāfija."
            width={1800}
            height={1800}
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="h-auto w-full"
          />
          {SPOTS.map((item) => (
            <button
              key={item.id}
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              onClick={() => setActive(item.id)}
              className="absolute hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[#14171b]/80 text-sm font-semibold text-white md:flex"
              style={{ left: `${item.x}%`, top: `${item.y}%` }}
            >
              <span
                className={
                  item.id === active
                    ? "flex h-11 w-11 items-center justify-center rounded-full bg-[#f4f0e8] text-[#14171b] ring-2 ring-[#14171b]"
                    : "flex h-11 w-11 items-center justify-center"
                }
              >
                {item.n}
              </span>
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[#c9c1b6]">
          Koncepta vizualizācija — iespējamais risinājums CF Liepāja. Zāles arhitektūra ir
          iedvesmota no kluba publiskajiem attēliem. Šī nav fotogrāfija no Jūsu telpām, un
          iekārta tajās nav uzstādīta.
        </p>
      </div>

      <div>
        <div role="tablist" aria-label="Iekārtas daļas" className="grid grid-cols-2 gap-2">
          {SPOTS.map((item) => {
            const selected = item.id === active;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`spot-tab-${item.id}`}
                aria-selected={selected}
                aria-controls="spot-panel"
                onClick={() => setActive(item.id)}
                className={`min-h-11 px-3 py-2 text-left text-sm font-semibold transition-colors ${
                  selected
                    ? "bg-[#f4f0e8] text-[#14171b]"
                    : "bg-white/5 text-[#f4f0e8] hover:bg-white/10"
                }`}
              >
                <span className={`mr-2 tabular-nums ${selected ? "text-[#245033]" : "text-[#d7e4d6]"}`}>
                  {item.n}
                </span>
                {item.name}
              </button>
            );
          })}
        </div>

        <div
          id="spot-panel"
          role="tabpanel"
          aria-labelledby={`spot-tab-${spot.id}`}
          className="mt-4 border border-white/10 p-5"
        >
          <h3 className="font-heading text-xl leading-snug">{spot.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#e4ddd4]">{spot.body}</p>
          {spot.photo ? (
            <figure className="mt-5">
              <Image
                src={encodeURI(spot.photo)}
                alt={spot.photoAlt ?? ""}
                width={900}
                height={640}
                sizes="(min-width: 1024px) 28vw, 100vw"
                className="h-auto w-full bg-[#d7d5d2] object-cover"
              />
              <figcaption className="mt-2 text-xs leading-relaxed text-[#c9c1b6]">
                {spot.caption}
              </figcaption>
            </figure>
          ) : null}
        </div>
      </div>
    </div>
  );
}
