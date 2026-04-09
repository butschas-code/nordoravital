"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  date: z.string().optional(),
  message: z.string().optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookingForm() {
  const t = useTranslations("Booking");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      message: "",
    },
  });

  async function onSubmit(data: BookingFormValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
        <label htmlFor="name" className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("name")}
        </label>
        <input
          id="name"
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
        <label htmlFor="email" className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("email")}
        </label>
        <input
          id="email"
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
        <label htmlFor="phone" className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("phone")}
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          className="mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-sm text-[var(--brand-heading)] shadow-sm outline-none ring-[var(--brand-primary)] focus:ring-2 dark:bg-zinc-900"
          {...register("phone")}
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("date")}
        </label>
        <input
          id="date"
          type="date"
          className="mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-sm text-[var(--brand-heading)] shadow-sm outline-none ring-[var(--brand-primary)] focus:ring-2 dark:bg-zinc-900"
          {...register("date")}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("message")}
        </label>
        <textarea
          id="message"
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
