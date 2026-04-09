"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const CATEGORY_VALUES = [
  "therapists",
  "beauty-cosmetic",
  "sports-performance",
  "physiotherapists",
  "dentists",
  "clinics",
  "other",
] as const;

const CONTACT_METHOD_VALUES = ["email", "phone", "either"] as const;

const formSchema = z
  .object({
    name: z.string().min(2, { message: "validationName" }),
    professionalCategory: z.enum(CATEGORY_VALUES),
    email: z.string().email({ message: "validationEmail" }),
    phone: z.string().optional(),
    preferredContactMethod: z.enum(CONTACT_METHOD_VALUES),
    message: z.string().min(10, { message: "validationMessage" }),
    langDe: z.boolean(),
    langEn: z.boolean(),
    langLv: z.boolean(),
    consentContact: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (!data.langDe && !data.langEn && !data.langLv) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "validationLang",
        path: ["langDe"],
      });
    }
    if (data.consentContact !== true) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "validationConsent",
        path: ["consentContact"],
      });
    }
  });

export type ContactFormValues = z.infer<typeof formSchema>;

const CATEGORY_LABEL_KEY: Record<
  (typeof CATEGORY_VALUES)[number],
  | "categoryTherapists"
  | "categoryBeauty"
  | "categorySports"
  | "categoryPhysio"
  | "categoryDentists"
  | "categoryClinics"
  | "categoryOther"
> = {
  therapists: "categoryTherapists",
  "beauty-cosmetic": "categoryBeauty",
  "sports-performance": "categorySports",
  physiotherapists: "categoryPhysio",
  dentists: "categoryDentists",
  clinics: "categoryClinics",
  other: "categoryOther",
};

function toLanguages(data: ContactFormValues): ("de" | "en" | "lv")[] {
  const out: ("de" | "en" | "lv")[] = [];
  if (data.langDe) out.push("de");
  if (data.langEn) out.push("en");
  if (data.langLv) out.push("lv");
  return out;
}

const inputClass =
  "mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-sm text-[var(--brand-heading)] shadow-sm outline-none ring-[var(--brand-primary)] focus:ring-2 dark:bg-zinc-900";

type ContactFormProps = {
  /** Default `contact` → ids like `contact-name`. Use `drawer-contact` in the floating drawer to avoid duplicate ids. */
  htmlIdPrefix?: string;
  variant?: "page" | "drawer";
  onSuccess?: () => void;
  className?: string;
};

export function ContactForm({
  htmlIdPrefix = "contact",
  variant = "page",
  onSuccess,
  className,
}: ContactFormProps) {
  const t = useTranslations("Contact");
  const fid = (suffix: string) => `${htmlIdPrefix}-${suffix}`;
  const [status, setStatus] = useState<"idle" | "success" | "error" | "network">(
    "idle",
  );

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      professionalCategory: "therapists",
      email: "",
      phone: "",
      preferredContactMethod: "email",
      message: "",
      langDe: false,
      langEn: false,
      langLv: false,
      consentContact: false,
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setStatus("idle");
    const payload = {
      name: data.name,
      professionalCategory: data.professionalCategory,
      email: data.email,
      phone: data.phone?.trim() || undefined,
      preferredContactMethod: data.preferredContactMethod,
      message: data.message,
      languages: toLanguages(data),
      consentContact: true as const,
      source: "contact" as const,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      reset({
        name: "",
        professionalCategory: "therapists",
        email: "",
        phone: "",
        preferredContactMethod: "email",
        message: "",
        langDe: false,
        langEn: false,
        langLv: false,
        consentContact: false,
      });
      onSuccess?.();
    } catch {
      setStatus("network");
    }
  }

  const formShell =
    variant === "drawer"
      ? "space-y-4"
      : "space-y-4 rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 sm:p-8";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={className ?? formShell}
      noValidate
    >
      {variant === "page" ? (
        <div>
          <h2 className="text-xl font-semibold text-[var(--brand-heading)]">
            {t("formTitle")}
          </h2>
          <p className="mt-1 text-sm text-[var(--brand-muted)]">{t("formLead")}</p>
        </div>
      ) : null}

      <div>
        <label htmlFor={fid("name")} className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("name")}
        </label>
        <input
          id={fid("name")}
          type="text"
          autoComplete="name"
          className={inputClass}
          aria-invalid={errors.name ? "true" : undefined}
          {...register("name")}
        />
        {errors.name?.message && (
          <p className="mt-1 text-xs text-red-600" role="alert">
            {t(errors.name.message as "validationName")}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor={fid("category")}
          className="block text-sm font-medium text-[var(--brand-heading)]"
        >
          {t("professionalCategory")}
        </label>
        <select
          id={fid("category")}
          className={inputClass}
          {...register("professionalCategory")}
        >
          {CATEGORY_VALUES.map((v) => (
            <option key={v} value={v}>
              {t(CATEGORY_LABEL_KEY[v])}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={fid("email")} className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("email")}
        </label>
        <input
          id={fid("email")}
          type="email"
          autoComplete="email"
          className={inputClass}
          aria-invalid={errors.email ? "true" : undefined}
          {...register("email")}
        />
        {errors.email?.message && (
          <p className="mt-1 text-xs text-red-600" role="alert">
            {t(errors.email.message as "validationEmail")}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={fid("phone")} className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("phone")}
        </label>
        <input
          id={fid("phone")}
          type="tel"
          autoComplete="tel"
          className={inputClass}
          {...register("phone")}
        />
      </div>

      <div>
        <label
          htmlFor={fid("method")}
          className="block text-sm font-medium text-[var(--brand-heading)]"
        >
          {t("preferredContactMethod")}
        </label>
        <select
          id={fid("method")}
          className={inputClass}
          {...register("preferredContactMethod")}
        >
          <option value="email">{t("contactMethodEmail")}</option>
          <option value="phone">{t("contactMethodPhone")}</option>
          <option value="either">{t("contactMethodEither")}</option>
        </select>
      </div>

      <div>
        <label htmlFor={fid("message")} className="block text-sm font-medium text-[var(--brand-heading)]">
          {t("message")}
        </label>
        <textarea
          id={fid("message")}
          rows={5}
          className={inputClass}
          aria-invalid={errors.message ? "true" : undefined}
          {...register("message")}
        />
        {errors.message?.message && (
          <p className="mt-1 text-xs text-red-600" role="alert">
            {t(errors.message.message as "validationMessage")}
          </p>
        )}
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium text-[var(--brand-heading)]">
          {t("langPreferenceTitle")}
        </legend>
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-[var(--brand-heading)]">
            <Controller
              name="langDe"
              control={control}
              render={({ field }) => (
                <input
                  type="checkbox"
                  className="size-4 rounded border-[var(--brand-border)] text-[var(--brand-primary)] focus:ring-[var(--brand-primary)]"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  onBlur={field.onBlur}
                  ref={field.ref}
                />
              )}
            />
            {t("langDe")}
          </label>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-[var(--brand-heading)]">
            <Controller
              name="langEn"
              control={control}
              render={({ field }) => (
                <input
                  type="checkbox"
                  className="size-4 rounded border-[var(--brand-border)] text-[var(--brand-primary)] focus:ring-[var(--brand-primary)]"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  onBlur={field.onBlur}
                  ref={field.ref}
                />
              )}
            />
            {t("langEn")}
          </label>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-[var(--brand-heading)]">
            <Controller
              name="langLv"
              control={control}
              render={({ field }) => (
                <input
                  type="checkbox"
                  className="size-4 rounded border-[var(--brand-border)] text-[var(--brand-primary)] focus:ring-[var(--brand-primary)]"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                  onBlur={field.onBlur}
                  ref={field.ref}
                />
              )}
            />
            {t("langLv")}
          </label>
        </div>
        {errors.langDe?.message && (
          <p className="text-xs text-red-600" role="alert">
            {t(errors.langDe.message as "validationLang")}
          </p>
        )}
      </fieldset>

      <div>
        <label className="flex cursor-pointer items-start gap-2 text-sm text-[var(--brand-heading)]">
          <Controller
            name="consentContact"
            control={control}
            render={({ field }) => (
              <input
                type="checkbox"
                className="mt-0.5 size-4 shrink-0 rounded border-[var(--brand-border)] text-[var(--brand-primary)] focus:ring-[var(--brand-primary)]"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                onBlur={field.onBlur}
                ref={field.ref}
              />
            )}
          />
          <span>{t("consentLabel")}</span>
        </label>
        {errors.consentContact?.message && (
          <p className="mt-1 text-xs text-red-600" role="alert">
            {t(errors.consentContact.message as "validationConsent")}
          </p>
        )}
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
      {status === "network" && (
        <p className="text-sm text-red-600" role="alert">
          {t("errorNetwork")}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-[var(--brand-primary)] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {isSubmitting ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}
