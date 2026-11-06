"use client";

import { useId, useState } from "react";
import { formatEuro, illustrativeGrossRevenue } from "@/lib/proposals/cf-liepaja";

const COPY = {
  lv: {
    result: "Mēneša bruto ieņēmumi",
    formula: (price: number, sessions: number, days: number) =>
      `${price} € × ${sessions} sesijas dienā × ${days} dienas`,
    price: "Cena par sesiju",
    sessions: "Sesijas dienā",
    sessionsUnit: "sesijas",
    days: "Dienas mēnesī",
    daysUnit: "dienas",
    note: "Ilustratīvs aprēķins, nevis solījums. Viena stacija = viens biedrs. 5–10 minūšu programma plus pāris minūtes, lai apgultos un pieceltos, ir aptuveni 15 minūtes. Stundā sanāk apmēram 4 maiņas. Pieci pieraksti dienā ir piesardzīgs starts, nevis stacijas griesti.",
  },
  en: {
    result: "Monthly gross revenue",
    formula: (price: number, sessions: number, days: number) =>
      `€${price} × ${sessions} sessions a day × ${days} days`,
    price: "Price per session",
    sessions: "Sessions per day",
    sessionsUnit: "sessions",
    days: "Days per month",
    daysUnit: "days",
    note: "Illustrative calculation, not a promise. One station means one member. A 5–10 minute program, plus a couple of minutes to lie down and get up, is about 15 minutes. That is about 4 turns an hour. Five bookings a day is a cautious start, not the station’s ceiling.",
  },
} as const;

const LIMITS = {
  price: { min: 0, max: 80, initial: 10 },
  sessions: { min: 0, max: 30, initial: 5 },
  days: { min: 0, max: 31, initial: 22 },
} as const;

function clamp(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, Math.round(value)));
}

export function RevenueCalculator({ locale = "lv" }: { locale?: "lv" | "en" }) {
  const copy = COPY[locale];
  const baseId = useId();
  const [price, setPrice] = useState<number>(LIMITS.price.initial);
  const [sessions, setSessions] = useState<number>(LIMITS.sessions.initial);
  const [days, setDays] = useState<number>(LIMITS.days.initial);
  const { monthly } = illustrativeGrossRevenue(price, sessions, days);

  return (
    <div className="rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] sm:p-8">
      <div aria-live="polite">
        <p className="text-sm text-[var(--muted)]">{copy.result}</p>
        <p className="mt-1 font-heading text-5xl font-bold tabular-nums tracking-tight text-[var(--text)]">
          {formatEuro(monthly, locale)}
        </p>
        <p className="mt-3 text-sm text-[var(--muted)]">{copy.formula(price, sessions, days)}</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Control
          id={`${baseId}-price`}
          label={copy.price}
          unit="€"
          min={LIMITS.price.min}
          max={LIMITS.price.max}
          value={price}
          onChange={setPrice}
        />
        <Control
          id={`${baseId}-sessions`}
          label={copy.sessions}
          unit={copy.sessionsUnit}
          min={LIMITS.sessions.min}
          max={LIMITS.sessions.max}
          value={sessions}
          onChange={setSessions}
        />
        <Control
          id={`${baseId}-days`}
          label={copy.days}
          unit={copy.daysUnit}
          min={LIMITS.days.min}
          max={LIMITS.days.max}
          value={days}
          onChange={setDays}
        />
      </div>

      <p className="mt-8 text-pretty text-sm leading-[1.6] text-[var(--muted)]">
        {copy.note}
      </p>
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
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold text-[var(--text)]">
          {label}
        </label>
        <span className="font-heading text-base font-bold tabular-nums text-[var(--brand-strong)]">
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
        className="input-brand min-h-11"
      />
      <input
        type="range"
        min={min}
        max={max}
        step={1}
        value={value}
        aria-label={`${label}, ${unit}`}
        onChange={(event) => onChange(clamp(event.target.valueAsNumber, min, max))}
        className="h-11 w-full accent-[var(--brand-strong)]"
      />
    </div>
  );
}
