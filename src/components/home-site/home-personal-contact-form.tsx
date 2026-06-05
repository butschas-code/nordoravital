"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale } from "next-intl";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { mergeRussianContent } from "@/lib/russian-content";

const DEFAULT_CAL_DISCOVERY_URL = "https://cal.eu/nordoravital/discovery-call";

const CONTACT_METHOD_VALUES = ["email", "phone", "either"] as const;

const supportGoalValues = [
  "recovery",
  "sleep",
  "stress",
  "energy",
  "sport",
  "travel",
  "everyday wellbeing",
] as const;

const formCopy = {
  "en": {
    "title": "Ask about your personal setup",
    "intro": "Share what you want to support and we will guide you toward the simplest setup.",
    "talkTitle": "Prefer to talk it through?",
    "talkBody": "Book a guided introduction and we will walk through your goals, first programs and daily routine.",
    "talkButton": "Book a Personal Introduction",
    "name": "Full name",
    "email": "Email",
    "phone": "Phone (optional)",
    "method": "Preferred contact method",
    "methodEmail": "Email",
    "methodPhone": "Phone",
    "methodEither": "Either is fine",
    "goals": "What do you want to support?",
    "routine": "Current routine or setup (optional)",
    "routinePlaceholder": "Example: after training, evening reset, travel recovery",
    "message": "Your question",
    "messagePlaceholder": "Tell us what you want sanza to support in your daily life.",
    "language": "Preferred language",
    "languages": [
      "German",
      "English",
      "Latvian",
    ],
    "consent": "I agree that Nordora Vital may contact me about my personal sanza request.",
    "success": "Thank you. We received your question and will get back to you.",
    "error": "Something went wrong. Please try again or email us directly.",
    "sending": "Sending...",
    "submit": "Ask a Question",
    "goalLabels": {
      "recovery": "Recovery",
      "sleep": "Sleep",
      "stress": "Stress",
      "energy": "Energy",
      "sport": "Sport",
      "travel": "Travel",
      "everyday wellbeing": "Everyday wellbeing",
    },
    "errors": {
      "name": "Please enter your name.",
      "email": "Please enter a valid email address.",
      "goals": "Please choose at least one area you want to support.",
      "message": "Please tell us a little more.",
      "language": "Please choose at least one preferred language.",
      "consent": "Please confirm that we may contact you about your request.",
    },
  },
  "de": {
    "title": "Fragen Sie nach Ihrer persönlichen Konfiguration",
    "intro": "Teilen Sie uns mit, was Sie unterstützen möchten, und wir führen Sie zur einfachsten Konfiguration.",
    "talkTitle": "Möchten Sie lieber darüber sprechen?",
    "talkBody": "Buchen Sie eine geführte Einführung und wir gehen gemeinsam Ihre Ziele, erste Programme und Ihre tägliche Routine durch.",
    "talkButton": "Buchen Sie eine persönliche Einführung",
    "name": "Vollständiger Name",
    "email": "E-Mail",
    "phone": "Telefon (optional)",
    "method": "Bevorzugte Kontaktmethode",
    "methodEmail": "E-Mail",
    "methodPhone": "Telefon",
    "methodEither": "Beides ist in Ordnung",
    "goals": "Was möchten Sie unterstützen?",
    "routine": "Aktuelle Routine oder Konfiguration (optional)",
    "routinePlaceholder": "Beispiel: nach dem Training, abendliche Erholung, Erholung nach Reisen",
    "message": "Deine Frage",
    "messagePlaceholder": "Teile uns mit, wie sanza dich in deinem Alltag unterstützen soll.",
    "language": "Bevorzugte Sprache",
    "languages": [
      "Deutsch",
      "Englisch",
      "Lettisch",
    ],
    "consent": "Ich bin damit einverstanden, dass Nordora Vital mich bezüglich meiner persönlichen sanza-Anfrage kontaktieren darf.",
    "success": "Vielen Dank. Wir haben deine Frage erhalten und melden uns bei dir.",
    "error": "Es ist ein Fehler aufgetreten. Bitte versuche es erneut oder schreibe uns direkt eine E-Mail.",
    "sending": "Senden...",
    "submit": "Eine Frage stellen",
    "goalLabels": {
      "recovery": "Erholung",
      "sleep": "Schlaf",
      "stress": "Stress",
      "energy": "Energie",
      "sport": "Sport",
      "travel": "Reisen",
      "everyday wellbeing": "Alltägliches Wohlbefinden",
    },
    "errors": {
      "name": "Bitte gib deinen Namen ein.",
      "email": "Bitte gib eine gültige E-Mail-Adresse ein.",
      "goals": "Bitte wähle mindestens einen Bereich aus, den du unterstützen möchtest.",
      "message": "Bitte erzähle uns etwas mehr.",
      "language": "Bitte wähle mindestens eine bevorzugte Sprache aus.",
      "consent": "Bitte bestätige, dass wir dich bezüglich deiner Anfrage kontaktieren dürfen.",
    },
  },
  "lv": {
    "title": "Uzziniet par savu personīgo konfigurāciju",
    "intro": "Pastāstiet, ko vēlaties atbalstīt, un mēs palīdzēsim izvēlēties vienkāršāko konfigurāciju.",
    "talkTitle": "Vēlaties to pārrunāt?",
    "talkBody": "Rezervējiet ievadu ar gidu, un mēs izskatīsim jūsu mērķus, pirmās programmas un ikdienas rutīnu.",
    "talkButton": "Rezervējiet personīgo ievadu",
    "name": "Pilns vārds",
    "email": "E-pasts",
    "phone": "Tālrunis (pēc izvēles)",
    "method": "Vēlamais saziņas veids",
    "methodEmail": "E-pasts",
    "methodPhone": "Tālrunis",
    "methodEither": "Abos veidos",
    "goals": "Ko vēlaties atbalstīt?",
    "routine": "Pašreizējā rutīna vai konfigurācija (pēc izvēles)",
    "routinePlaceholder": "Piemērs: pēc treniņa, vakara atjaunošanās, atgūšanās pēc ceļojuma",
    "message": "Jūsu jautājums",
    "messagePlaceholder": "Pastāstiet mums, ko vēlaties, lai sanza atbalstītu jūsu ikdienas dzīvē.",
    "language": "Vēlamā valoda",
    "languages": [
      "Vācu",
      "Angļu",
      "Latviešu",
    ],
    "consent": "Piekrītu, ka Nordora Vital var sazināties ar mani saistībā ar manu personīgo sanza pieprasījumu.",
    "success": "Paldies. Mēs saņēmām jūsu jautājumu un sazināsimies ar jums.",
    "error": "Kaut kas nogāja greizi. Lūdzu, mēģiniet vēlreiz vai rakstiet mums tieši uz e-pastu.",
    "sending": "Sūtīšana...",
    "submit": "Uzdot jautājumu",
    "goalLabels": {
      "recovery": "Atgūšanās",
      "sleep": "Miegs",
      "stress": "Stress",
      "energy": "Enerģija",
      "sport": "Sports",
      "travel": "Ceļošana",
      "everyday wellbeing": "Ikdienas labsajūta",
    },
    "errors": {
      "name": "Lūdzu, ievadiet savu vārdu.",
      "email": "Lūdzu, ievadiet derīgu e-pasta adresi.",
      "goals": "Lūdzu, izvēlieties vismaz vienu jomu, kurā vēlaties atbalstu.",
      "message": "Lūdzu, pastāstiet mums nedaudz vairāk.",
      "language": "Lūdzu, izvēlieties vismaz vienu vēlamo valodu.",
      "consent": "Lūdzu, apstipriniet, ka mēs varam sazināties ar jums saistībā ar jūsu pieprasījumu.",
    },
  },
} as const;

function getFormLocale(locale: string) {
  return locale === "de" || locale === "lv" ? locale : "en";
}

function createFormSchema(copy: (typeof formCopy)[keyof typeof formCopy]) {
  return z
  .object({
    name: z.string().min(2, { message: copy.errors.name }),
    email: z.string().email({ message: copy.errors.email }),
    phone: z.string().optional(),
    preferredContactMethod: z.enum(CONTACT_METHOD_VALUES),
    goals: z.array(z.enum(supportGoalValues)).min(1, {
      message: copy.errors.goals,
    }),
    currentRoutine: z.string().optional(),
    message: z.string().min(10, { message: copy.errors.message }),
    langDe: z.boolean(),
    langEn: z.boolean(),
    langLv: z.boolean(),
    consentContact: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (!data.langDe && !data.langEn && !data.langLv) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: copy.errors.language,
        path: ["langDe"],
      });
    }
    if (data.consentContact !== true) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: copy.errors.consent,
        path: ["consentContact"],
      });
    }
  });
}

type PersonalContactFormValues = z.infer<ReturnType<typeof createFormSchema>>;

const inputClass =
  "mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2.5 text-base text-[var(--brand-heading)] shadow-sm outline-none ring-[var(--brand-primary)] focus:ring-2";

function toLanguages(data: PersonalContactFormValues): ("de" | "en" | "lv")[] {
  const out: ("de" | "en" | "lv")[] = [];
  if (data.langDe) out.push("de");
  if (data.langEn) out.push("en");
  if (data.langLv) out.push("lv");
  return out;
}

type HomePersonalContactFormProps = {
  htmlIdPrefix?: string;
  variant?: "page" | "drawer";
  onSuccess?: () => void;
  className?: string;
};

export function HomePersonalContactForm({
  htmlIdPrefix = "home-personal",
  variant = "page",
  onSuccess,
  className,
}: HomePersonalContactFormProps) {
  const routeLocale = useLocale();
  const locale = getFormLocale(routeLocale);
  const copy = mergeRussianContent(routeLocale, "homeuse/contact form", formCopy[locale]);
  const formSchema = createFormSchema(copy);
  const [status, setStatus] = useState<"idle" | "success" | "error" | "network">("idle");
  const calDiscoveryUrl =
    process.env.NEXT_PUBLIC_CAL_DISCOVERY_URL?.trim() || DEFAULT_CAL_DISCOVERY_URL;
  const fid = (suffix: string) => `${htmlIdPrefix}-${suffix}`;

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PersonalContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      preferredContactMethod: "email",
      goals: [],
      currentRoutine: "",
      message: "",
      langDe: locale === "de",
      langEn: locale === "en",
      langLv: locale === "lv",
      consentContact: false,
    },
  });

  async function onSubmit(data: PersonalContactFormValues) {
    setStatus("idle");
    const personalMessage = [
      `Personal-use enquiry`,
      `Support goals: ${data.goals.join(", ")}`,
      data.currentRoutine?.trim() ? `Current routine or setup: ${data.currentRoutine.trim()}` : null,
      "",
      data.message,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          professionalCategory: "homeuse-personal",
          email: data.email,
          phone: data.phone?.trim() || undefined,
          preferredContactMethod: data.preferredContactMethod,
          message: personalMessage,
          languages: toLanguages(data),
          consentContact: true,
          source: "contact",
        }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      reset({
        name: "",
        email: "",
        phone: "",
        preferredContactMethod: "email",
        goals: [],
        currentRoutine: "",
        message: "",
        langDe: locale === "de",
        langEn: locale === "en",
        langLv: locale === "lv",
        consentContact: false,
      });
      onSuccess?.();
    } catch {
      setStatus("network");
    }
  }

  const formClassName =
    className ??
    (variant === "drawer"
      ? "space-y-4"
      : "space-y-4 rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 shadow-[var(--shadow-card)] sm:p-8");
  const twoColumnClassName = variant === "drawer" ? "grid gap-4" : "grid gap-4 sm:grid-cols-2";
  const goalGridClassName = variant === "drawer" ? "grid gap-2" : "grid gap-2 sm:grid-cols-2";

  return (
    <form
      id={htmlIdPrefix}
      onSubmit={handleSubmit(onSubmit)}
      className={formClassName}
      noValidate
    >
      <div>
        <h3 className="text-xl font-semibold text-[var(--brand-heading)]">
          {copy.title}
        </h3>
        <p className="mt-1 text-base leading-relaxed text-[var(--brand-muted)]">
          {copy.intro}
        </p>
      </div>

      <div className="rounded-2xl border border-[var(--brand-primary)]/25 bg-[var(--panel)] p-4">
        <p className="text-base font-semibold text-[var(--brand-heading)]">
          {copy.talkTitle}
        </p>
        <p className="mt-1 text-base leading-relaxed text-[var(--brand-muted)]">
          {copy.talkBody}
        </p>
        <a
          href={calDiscoveryUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-[var(--brand-primary)] px-4 py-3 text-base font-medium text-white transition hover:opacity-90 sm:w-auto"
        >
          {copy.talkButton}
        </a>
      </div>

      <div>
        <label htmlFor={fid("name")} className="block text-base font-medium text-[var(--brand-heading)]">
          {copy.name}
        </label>
        <input
          id={fid("name")}
          type="text"
          autoComplete="name"
          className={inputClass}
          aria-invalid={errors.name ? "true" : undefined}
          {...register("name")}
        />
        {errors.name?.message ? (
          <p className="mt-1 text-sm text-red-600" role="alert">{errors.name.message}</p>
        ) : null}
      </div>

      <div className={twoColumnClassName}>
        <div>
          <label htmlFor={fid("email")} className="block text-base font-medium text-[var(--brand-heading)]">
            {copy.email}
          </label>
          <input
            id={fid("email")}
            type="email"
            autoComplete="email"
            className={inputClass}
            aria-invalid={errors.email ? "true" : undefined}
            {...register("email")}
          />
          {errors.email?.message ? (
            <p className="mt-1 text-sm text-red-600" role="alert">{errors.email.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor={fid("phone")} className="block text-base font-medium text-[var(--brand-heading)]">
            {copy.phone}
          </label>
          <input
            id={fid("phone")}
            type="tel"
            autoComplete="tel"
            className={inputClass}
            {...register("phone")}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor={fid("method")}
          className="block text-base font-medium text-[var(--brand-heading)]"
        >
          {copy.method}
        </label>
        <select
          id={fid("method")}
          className={inputClass}
          {...register("preferredContactMethod")}
        >
          <option value="email">{copy.methodEmail}</option>
          <option value="phone">{copy.methodPhone}</option>
          <option value="either">{copy.methodEither}</option>
        </select>
      </div>

      <fieldset className="space-y-2">
        <legend className="text-base font-medium text-[var(--brand-heading)]">
          {copy.goals}
        </legend>
        <div className={goalGridClassName}>
          {supportGoalValues.map((goal) => (
            <label
              key={goal}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-base text-[var(--brand-heading)]"
            >
              <Controller
                name="goals"
                control={control}
                render={({ field }) => (
                  <input
                    type="checkbox"
                    className="size-4 rounded border-[var(--brand-border)] text-[var(--brand-primary)] focus:ring-[var(--brand-primary)]"
                    checked={field.value.includes(goal)}
                    onChange={(e) => {
                      const next = e.target.checked
                        ? [...field.value, goal]
                        : field.value.filter((value) => value !== goal);
                      field.onChange(next);
                    }}
                    onBlur={field.onBlur}
                  />
                )}
              />
              {copy.goalLabels[goal]}
            </label>
          ))}
        </div>
        {errors.goals?.message ? (
          <p className="text-sm text-red-600" role="alert">{errors.goals.message}</p>
        ) : null}
      </fieldset>

      <div>
        <label htmlFor={fid("routine")} className="block text-base font-medium text-[var(--brand-heading)]">
          {copy.routine}
        </label>
        <input
          id={fid("routine")}
          type="text"
          className={inputClass}
          placeholder={copy.routinePlaceholder}
          {...register("currentRoutine")}
        />
      </div>

      <div>
        <label htmlFor={fid("message")} className="block text-base font-medium text-[var(--brand-heading)]">
          {copy.message}
        </label>
        <textarea
          id={fid("message")}
          rows={5}
          className={inputClass}
          aria-invalid={errors.message ? "true" : undefined}
          placeholder={copy.messagePlaceholder}
          {...register("message")}
        />
        {errors.message?.message ? (
          <p className="mt-1 text-sm text-red-600" role="alert">{errors.message.message}</p>
        ) : null}
      </div>

      <fieldset className="space-y-2">
        <legend className="text-base font-medium text-[var(--brand-heading)]">
          {copy.language}
        </legend>
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
          {[
            ["langDe", copy.languages[0]],
            ["langEn", copy.languages[1]],
            ["langLv", copy.languages[2]],
          ].map(([name, label]) => (
            <label key={name} className="flex cursor-pointer items-center gap-2 text-base text-[var(--brand-heading)]">
              <Controller
                name={name as "langDe" | "langEn" | "langLv"}
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
              {label}
            </label>
          ))}
        </div>
        {errors.langDe?.message ? (
          <p className="text-sm text-red-600" role="alert">{errors.langDe.message}</p>
        ) : null}
      </fieldset>

      <div>
        <label className="flex cursor-pointer items-start gap-2 text-base text-[var(--brand-heading)]">
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
          <span>{copy.consent}</span>
        </label>
        {errors.consentContact?.message ? (
          <p className="mt-1 text-sm text-red-600" role="alert">{errors.consentContact.message}</p>
        ) : null}
      </div>

      {status === "success" ? (
        <p className="text-base text-green-700" role="status">
          {copy.success}
        </p>
      ) : null}
      {status === "error" || status === "network" ? (
        <p className="text-base text-red-600" role="alert">
          {copy.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-[var(--brand-primary)] px-4 py-3 text-base font-medium text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {isSubmitting ? copy.sending : copy.submit}
      </button>
    </form>
  );
}
