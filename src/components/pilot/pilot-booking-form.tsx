"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SECTOR_VALUES = [
  "therapists",
  "beauty-cosmetic",
  "sports-performance",
  "physiotherapists",
  "dentists",
  "clinics",
  "other",
] as const;

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  sector: z.enum(SECTOR_VALUES),
  preferredStart: z.string().optional(),
  questions: z.string().optional(),
});

export type PilotBookingValues = z.infer<typeof schema>;

const SECTOR_LABEL_KEY: Record<
  (typeof SECTOR_VALUES)[number],
  | "sectorTherapists"
  | "sectorBeauty"
  | "sectorSports"
  | "sectorPhysio"
  | "sectorDentists"
  | "sectorClinics"
  | "sectorOther"
> = {
  therapists: "sectorTherapists",
  "beauty-cosmetic": "sectorBeauty",
  "sports-performance": "sectorSports",
  physiotherapists: "sectorPhysio",
  dentists: "sectorDentists",
  clinics: "sectorClinics",
  other: "sectorOther",
};

export function PilotBookingForm() {
  const t = useTranslations("Pilot");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PilotBookingValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      sector: "therapists",
      preferredStart: "",
      questions: "",
    },
  });

  async function onSubmit(data: PilotBookingValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "pilot",
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("success");
      reset({
        name: "",
        email: "",
        phone: "",
        sector: "therapists",
        preferredStart: "",
        questions: "",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-lg space-y-4 rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 sm:p-8"
      noValidate
    >
      <div>
        <h2 className="text-xl font-semibold text-[var(--brand-heading)]">
          {t("formTitle")}
        </h2>
        <p className="mt-1 text-sm text-[var(--brand-muted)]">{t("formLead")}</p>
      </div>

      <div>
        <label htmlFor="pilot-name" className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("name")}
        </label>
        <input
          id="pilot-name"
          type="text"
          autoComplete="name"
          className="mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-sm text-[var(--brand-heading)] shadow-sm outline-none ring-[var(--brand-primary)] focus:ring-2 dark:bg-zinc-900"
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600">{t("error")}</p>
        )}
      </div>

      <div>
        <label htmlFor="pilot-sector" className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("sector")}
        </label>
        <select
          id="pilot-sector"
          className="mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-sm text-[var(--brand-heading)] shadow-sm outline-none ring-[var(--brand-primary)] focus:ring-2 dark:bg-zinc-900"
          {...register("sector")}
        >
          {SECTOR_VALUES.map((v) => (
            <option key={v} value={v}>
              {t(SECTOR_LABEL_KEY[v])}
            </option>
          ))}
        </select>
        {errors.sector && (
          <p className="mt-1 text-xs text-red-600">{t("error")}</p>
        )}
      </div>

      <div>
        <label htmlFor="pilot-email" className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("email")}
        </label>
        <input
          id="pilot-email"
          type="email"
          autoComplete="email"
          className="mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-sm text-[var(--brand-heading)] shadow-sm outline-none ring-[var(--brand-primary)] focus:ring-2 dark:bg-zinc-900"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{t("error")}</p>
        )}
      </div>

      <div>
        <label htmlFor="pilot-phone" className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("phone")}
        </label>
        <input
          id="pilot-phone"
          type="tel"
          autoComplete="tel"
          className="mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-sm text-[var(--brand-heading)] shadow-sm outline-none ring-[var(--brand-primary)] focus:ring-2 dark:bg-zinc-900"
          {...register("phone")}
        />
      </div>

      <div>
        <label htmlFor="pilot-start" className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("preferredStart")}
        </label>
        <input
          id="pilot-start"
          type="date"
          className="mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-sm text-[var(--brand-heading)] shadow-sm outline-none ring-[var(--brand-primary)] focus:ring-2 dark:bg-zinc-900"
          {...register("preferredStart")}
        />
      </div>

      <div>
        <label htmlFor="pilot-questions" className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("questions")}
        </label>
        <textarea
          id="pilot-questions"
          rows={4}
          className="mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-sm text-[var(--brand-heading)] shadow-sm outline-none ring-[var(--brand-primary)] focus:ring-2 dark:bg-zinc-900"
          {...register("questions")}
        />
      </div>

      {status === "success" && (
        <p className="text-sm text-green-700 dark:text-green-400" role="status">
          {t("success")}
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {t("error")}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-[var(--brand-primary)] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {isSubmitting ? "…" : t("submit")}
      </button>
    </form>
  );
}
