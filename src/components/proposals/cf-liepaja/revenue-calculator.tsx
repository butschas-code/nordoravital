"use client";

import { useId, useState } from "react";
import { formatEuro, illustrativeGrossRevenue } from "@/lib/proposals/cf-liepaja";

const LIMITS = {
  price: { min: 0, max: 80, initial: 10 },
  sessions: { min: 0, max: 30, initial: 5 },
  days: { min: 0, max: 31, initial: 22 },
} as const;

function clamp(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, Math.round(value)));
}

export function RevenueCalculator() {
  const baseId = useId();
  const [price, setPrice] = useState<number>(LIMITS.price.initial);
  const [sessions, setSessions] = useState<number>(LIMITS.sessions.initial);
  const [days, setDays] = useState<number>(LIMITS.days.initial);
  const { monthly, yearly } = illustrativeGrossRevenue(price, sessions, days);

  return (
    <div
      style={{ colorScheme: "light" }}
      className="grid gap-10 bg-[#f6f1ea] p-6 text-[#1e2a22] sm:p-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-12 md:p-10"
    >
      <div aria-live="polite">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#5c534c]">
          Ilustratīvs pieņēmums
        </p>
        <p className="mt-6 text-sm text-[#3c3834]">Potenciālie mēneša bruto ieņēmumi</p>
        <p className="mt-1 font-heading text-5xl tabular-nums tracking-[-0.03em] text-[#1e2a22] md:text-6xl">
          {formatEuro(monthly)}
        </p>
        <p className="mt-8 text-sm text-[#3c3834]">Potenciālie gada bruto ieņēmumi</p>
        <p className="mt-1 font-heading text-3xl tabular-nums tracking-[-0.02em]">
          {formatEuro(yearly)}
        </p>
        <p className="mt-6 max-w-[42ch] text-sm leading-relaxed text-[#1e2a22]">
          {price} € × {sessions} sesijas dienā × {days} dienas mēnesī. Rādītājs ir bruto
          ieņēmumi, nevis peļņa.
        </p>
        <p className="mt-6 border-t border-[#d8cec2] pt-6 text-sm leading-relaxed text-[#1e2a22]">
          Aprēķins ir ilustratīvs. Faktiskie ieņēmumi būs atkarīgi no pieprasījuma, cenām un
          noslodzes. Nav iekļautas aprīkojuma, personāla, telpu, nodokļu un citas izmaksas.
        </p>
      </div>

      <div className="flex flex-col justify-center gap-7">
        <Control
          id={`${baseId}-price`}
          label="Cena par sesiju"
          unit="€"
          min={LIMITS.price.min}
          max={LIMITS.price.max}
          value={price}
          onChange={setPrice}
        />
        <Control
          id={`${baseId}-sessions`}
          label="Sesijas dienā"
          unit="sesijas"
          min={LIMITS.sessions.min}
          max={LIMITS.sessions.max}
          value={sessions}
          onChange={setSessions}
        />
        <Control
          id={`${baseId}-days`}
          label="Dienas mēnesī"
          unit="dienas"
          min={LIMITS.days.min}
          max={LIMITS.days.max}
          value={days}
          onChange={setDays}
        />
      </div>
    </div>
  );
}

function Control({
  id,
  label,
  unit,
  min,
  max,
  value,
  onChange,
}: {
  id: string;
  label: string;
  unit: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="grid gap-2">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-semibold">
          {label}
        </label>
        <span className="font-heading text-lg tabular-nums">
          {value} {unit}
        </span>
      </div>
      <input
        id={id}
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={(event) => onChange(clamp(event.target.valueAsNumber, min, max))}
        className="h-11 w-full border border-[#d8cec2] bg-white px-3 text-base text-[#1e2a22] outline-none focus-visible:border-[#507040]"
      />
      <input
        type="range"
        min={min}
        max={max}
        step={1}
        value={value}
        aria-label={`${label}, ${unit}`}
        onChange={(event) => onChange(clamp(event.target.valueAsNumber, min, max))}
        className="h-11 w-full accent-[#507040]"
      />
    </div>
  );
}
