"use client";

import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

export function RoiCalculator() {
  const t = useTranslations("Offers");
  const locale = useLocale();

  const [clientsPerDay, setClientsPerDay] = useState(12);
  const [workingDays, setWorkingDays] = useState(22);
  const [attachRate, setAttachRate] = useState(25);
  const [addOnPrice, setAddOnPrice] = useState(29);
  const [membershipSubscribers, setMembershipSubscribers] = useState(0);
  const [membershipPrice, setMembershipPrice] = useState(79);
  const [equipmentInvestment, setEquipmentInvestment] = useState(10000);

  const { monthlyRevenue, paybackMonths } = useMemo(() => {
    const rate = clamp(attachRate, 0, 100) / 100;
    const addOnMonthly =
      Math.max(0, clientsPerDay) *
      Math.max(0, workingDays) *
      rate *
      Math.max(0, addOnPrice);
    const membershipMonthly =
      Math.max(0, membershipSubscribers) * Math.max(0, membershipPrice);
    const total = addOnMonthly + membershipMonthly;
    let payback: number | null = null;
    if (total > 0 && equipmentInvestment > 0) {
      payback = equipmentInvestment / total;
    }
    return { monthlyRevenue: total, paybackMonths: payback };
  }, [
    clientsPerDay,
    workingDays,
    attachRate,
    addOnPrice,
    membershipSubscribers,
    membershipPrice,
    equipmentInvestment,
  ]);

  const fmtMoney = (n: number) =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);

  const fmtMonths = (n: number) =>
    new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(n);

  const currencyLabel = t("roiCurrency");

  return (
    <div className="rounded-2xl border border-[var(--brand-border)] bg-[var(--brand-surface)] p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-[var(--brand-heading)]">
            {t("roiLabelClientsPerDay")}
          </span>
          <input
            type="number"
            min={0}
            step={1}
            value={Number.isNaN(clientsPerDay) ? "" : clientsPerDay}
            onChange={(e) => setClientsPerDay(parseFloat(e.target.value) || 0)}
            className="mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-[var(--brand-heading)] dark:bg-zinc-900"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-[var(--brand-heading)]">
            {t("roiLabelWorkingDays")}
          </span>
          <input
            type="number"
            min={0}
            max={31}
            step={1}
            value={Number.isNaN(workingDays) ? "" : workingDays}
            onChange={(e) => setWorkingDays(parseFloat(e.target.value) || 0)}
            className="mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-[var(--brand-heading)] dark:bg-zinc-900"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-[var(--brand-heading)]">
            {t("roiLabelAttachRate")}
          </span>
          <input
            type="number"
            min={0}
            max={100}
            step={0.5}
            value={Number.isNaN(attachRate) ? "" : attachRate}
            onChange={(e) => setAttachRate(parseFloat(e.target.value) || 0)}
            className="mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-[var(--brand-heading)] dark:bg-zinc-900"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-[var(--brand-heading)]">
            {t("roiLabelAddOnPrice", { currency: currencyLabel })}
          </span>
          <input
            type="number"
            min={0}
            step={1}
            value={Number.isNaN(addOnPrice) ? "" : addOnPrice}
            onChange={(e) => setAddOnPrice(parseFloat(e.target.value) || 0)}
            className="mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-[var(--brand-heading)] dark:bg-zinc-900"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-[var(--brand-heading)]">
            {t("roiLabelMembershipSubscribers")}
          </span>
          <input
            type="number"
            min={0}
            step={1}
            value={
              Number.isNaN(membershipSubscribers) ? "" : membershipSubscribers
            }
            onChange={(e) =>
              setMembershipSubscribers(parseFloat(e.target.value) || 0)
            }
            className="mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-[var(--brand-heading)] dark:bg-zinc-900"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-[var(--brand-heading)]">
            {t("roiLabelMembershipPrice", { currency: currencyLabel })}
          </span>
          <input
            type="number"
            min={0}
            step={1}
            value={Number.isNaN(membershipPrice) ? "" : membershipPrice}
            onChange={(e) =>
              setMembershipPrice(parseFloat(e.target.value) || 0)
            }
            className="mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-[var(--brand-heading)] dark:bg-zinc-900"
          />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="font-medium text-[var(--brand-heading)]">
            {t("roiLabelEquipmentInvestment", { currency: currencyLabel })}
          </span>
          <input
            type="number"
            min={0}
            step={100}
            value={
              Number.isNaN(equipmentInvestment) ? "" : equipmentInvestment
            }
            onChange={(e) =>
              setEquipmentInvestment(parseFloat(e.target.value) || 0)
            }
            className="mt-1 w-full rounded-lg border border-[var(--brand-border)] bg-white px-3 py-2 text-[var(--brand-heading)] dark:bg-zinc-900"
          />
        </label>
      </div>

      <div className="mt-8 space-y-3 rounded-xl border border-[var(--brand-border)] bg-[var(--color-background)] p-4 text-sm">
        <p className="font-medium text-[var(--brand-heading)]">
          {t("roiResultMonthly", { amount: fmtMoney(monthlyRevenue) })}
        </p>
        {monthlyRevenue <= 0 && (
          <p className="text-[var(--brand-muted)]">{t("roiResultPaybackNever")}</p>
        )}
        {monthlyRevenue > 0 && equipmentInvestment <= 0 && (
          <p className="text-[var(--brand-muted)]">{t("roiPaybackNeedInvestment")}</p>
        )}
        {monthlyRevenue > 0 &&
          equipmentInvestment > 0 &&
          paybackMonths != null &&
          Number.isFinite(paybackMonths) && (
            <p className="text-[var(--brand-muted)]">
              {t("roiResultPayback", { months: fmtMonths(paybackMonths) })}
            </p>
          )}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-[var(--brand-muted)]">
        {t("roiDisclaimer")}
      </p>
    </div>
  );
}
