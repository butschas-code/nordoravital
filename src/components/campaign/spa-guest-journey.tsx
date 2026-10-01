"use client";

import { useState } from "react";

const FLOWS = [
  {
    id: "relaxation",
    label: "Relaxation guest",
    steps: ["Arrival", "Sauna / thermal area", "sanza", "Massage", "Relaxation lounge"],
  },
  {
    id: "active",
    label: "Active hotel guest",
    steps: ["Training / golf / hiking", "Shower", "sanza", "Spa / relaxation"],
  },
  {
    id: "treatment",
    label: "Treatment guest",
    steps: ["Arrival", "sanza", "Existing treatment", "Tea / lounge"],
  },
  {
    id: "evening",
    label: "Evening hotel guest",
    steps: ["Dinner / end of day", "sanza", "Quiet evening / room"],
  },
] as const;

export function SpaGuestJourney() {
  const [activeId, setActiveId] = useState<(typeof FLOWS)[number]["id"]>("relaxation");
  const active = FLOWS.find((flow) => flow.id === activeId) ?? FLOWS[0];

  return (
    <div className="rounded-[24px] border border-[#d8cec2] bg-[#fbf7ef] p-5 shadow-[0_4px_24px_rgba(30,42,34,0.06)] sm:p-8 md:p-10">
      <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Example guest journeys">
        {FLOWS.map((flow) => {
          const selected = flow.id === active.id;
          return (
            <button
              key={flow.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveId(flow.id)}
              className={`rounded-full border px-4 py-2 text-left text-sm font-semibold transition ${
                selected
                  ? "border-[#0e3d34] bg-[#0e3d34] text-white shadow-sm"
                  : "border-[#d8cec2] bg-white text-[#1e2a22] hover:border-[#6f8a7a]"
              }`}
            >
              {flow.label}
            </button>
          );
        })}
      </div>

      <ol className="mt-8 flex flex-col gap-2 md:flex-row md:items-stretch" aria-live="polite">
        {active.steps.map((step, index) => {
          const isSanza = step === "sanza";
          return (
            <li key={`${active.id}-${step}`} className="flex flex-1 flex-col gap-2 md:flex-row md:items-center">
              <div
                className={`flex min-h-16 flex-1 items-center justify-center rounded-2xl border px-4 py-3 text-center text-sm font-semibold leading-snug sm:text-base ${
                  isSanza
                    ? "border-[#0e3d34] bg-[#0e3d34] text-white shadow-sm"
                    : "border-[#d8cec2] bg-white text-[#1e2a22]"
                }`}
              >
                {step}
              </div>
              {index < active.steps.length - 1 ? (
                <span aria-hidden className="text-center text-lg font-semibold text-[#6f8a7a] md:px-1">
                  <span className="inline-block rotate-90 md:rotate-0">→</span>
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
