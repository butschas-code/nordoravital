"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().optional(),
});

export type SectorBookingFormValues = z.infer<typeof schema>;

type Props = {
  categoryLabel: string;
  sectorSlug: string;
};

export function SectorBookingForm({ categoryLabel, sectorSlug }: Props) {
  const t = useTranslations("SectorBooking");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SectorBookingFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: SectorBookingFormValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          professionalCategory: categoryLabel,
          sectorSlug,
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("success");
      reset();
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
        <label
          htmlFor="sector-category"
          className="block text-sm font-medium text-[var(--brand-heading)]"
        >
          {t("categoryLabel")}
        </label>
        <input
          id="sector-category"
          type="text"
          readOnly
          value={categoryLabel}
          className="mt-1 w-full cursor-default rounded-lg border border-[var(--brand-border)] bg-[var(--brand-surface-elevated)] px-3 py-2 text-sm text-[var(--brand-heading)]"
        />
      </div>

      <div>
        <label htmlFor="sector-name" className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("name")}
        </label>
        <input
          id="sector-name"
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
        <label htmlFor="sector-email" className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("email")}
        </label>
        <input
          id="sector-email"
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
        <label htmlFor="sector-phone" className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("phone")}
        </label>
        <input
          id="sector-phone"
          type="tel"
          autoComplete="tel"
          className="mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-sm text-[var(--brand-heading)] shadow-sm outline-none ring-[var(--brand-primary)] focus:ring-2 dark:bg-zinc-900"
          {...register("phone")}
        />
      </div>

      <div>
        <label htmlFor="sector-message" className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("message")}
        </label>
        <textarea
          id="sector-message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-sm text-[var(--brand-heading)] shadow-sm outline-none ring-[var(--brand-primary)] focus:ring-2 dark:bg-zinc-900"
          {...register("message")}
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
