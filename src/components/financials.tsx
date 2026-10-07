"use client";

import { motion } from "framer-motion";
import { IndianRupee, Target, HandCoins, CalendarRange } from "lucide-react";
import { FIN } from "@/lib/content";
import { FadeIn, SectionHead, Counter } from "@/components/motion";
import { formatINR, cn } from "@/lib/utils";

const lakh = (v: number) =>
  `₹${v.toLocaleString("en-IN", { maximumFractionDigits: 1 })}L`;

const DONUT_COLORS = ["#e8621c", "#e8a83e", "#5b7a5e", "#bfd6ea", "#9aa096", "#7a4a2b"];

function UnitEconomics() {
  const totalCost = FIN.unit.items.reduce((a, i) => a + i.v, 0);
  const contribution = FIN.unit.price - totalCost;
  const margin = (contribution / FIN.unit.price) * 100;

  return (
    <div className="border border-line bg-void p-7">
      <div className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
        <IndianRupee className="h-4 w-4 text-ember" />
        {FIN.unit.title}
      </div>
      <div className="space-y-3">
        {FIN.unit.items.map((i, idx) => (
          <div key={i.label}>
            <div className="mb-1 flex items-baseline justify-between gap-4">
              <span className="text-sm text-fog">{i.label}</span>
              <span className="font-mono text-xs text-bone">{formatINR(i.v)}</span>
            </div>
            <div className="h-[5px] bg-ridge">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(i.v / FIN.unit.price) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.06 }}
                className="h-full bg-fog/50"
              />
            </div>
          </div>
        ))}
        <div className="border-t border-line pt-3">
          <div className="mb-1 flex items-baseline justify-between gap-4">
            <span className="text-sm font-bold text-gold">Contribution / trekker</span>
            <span className="font-mono text-sm font-bold text-gold">
              {formatINR(contribution)} · {margin.toFixed(1)}%
            </span>
          </div>
          <div className="h-[6px] bg-ridge">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${margin}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-gold to-ember"
            />
          </div>
        </div>
      </div>
      <p className="mt-5 text-xs leading-relaxed text-ash">
        Blended Year-1 ticket ₹12,600 across regions; direct cost held at 62–65%
        via rented gear, empanelled vendors and shared batch transport.
      </p>
    </div>
  );
}

function BootCapital() {
  const total = FIN.capital.reduce((a, c) => a + c.v, 0);
  let acc = 0;
  const stops = FIN.capital
    .map((c, i) => {
      const start = (acc / total) * 100;
      acc += c.v;
      const end = (acc / total) * 100;
      return `${DONUT_COLORS[i]} ${start}% ${end}%`;
    })
    .join(", ");

  return (
    <div className="flex flex-col border border-line bg-void p-7 sm:flex-row sm:items-center sm:gap-9">
      <div
        className="relative mx-auto h-44 w-44 shrink-0 rounded-full sm:mx-0"
        style={{ background: `conic-gradient(${stops})` }}
      >
        <div className="absolute inset-[22%] grid place-items-center rounded-full bg-void text-center">
          <div>
            <p className="font-display text-2xl font-medium text-bone">
              {lakh(total)}
            </p>
            <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-ash">
              boot capital
            </p>
          </div>
        </div>
      </div>
      <ul className="mt-6 flex-1 space-y-2.5 sm:mt-0">
        {FIN.capital.map((c, i) => (
          <li key={c.label} className="flex items-center justify-between gap-4 text-sm">
            <span className="flex items-center gap-2.5 text-fog">
              <span
                className="inline-block h-2.5 w-2.5"
                style={{ background: DONUT_COLORS[i] }}
              />
              {c.label}
            </span>
            <span className="font-mono text-xs text-bone">{lakh(c.v)}</span>
          </li>
        ))}
        <li className="border-t border-line pt-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
          No office lease · no vehicle purchase · gear rented-to-own
        </li>
      </ul>
    </div>
  );
}

function Projections() {
  const max = Math.max(...FIN.years.map((y) => y.revenue));
  const bars = (y: (typeof FIN.years)[number]) =>
    [
      { k: "Revenue", v: y.revenue, cls: "bg-gold" },
      { k: "Direct cost", v: y.direct, cls: "bg-fog/40" },
      { k: "Contribution", v: y.contribution, cls: "bg-olive" },
      { k: "Fixed opex", v: y.fixed, cls: "bg-fog/40" },
      { k: "EBITDA", v: y.ebitda, cls: y.ebitda < 0 ? "bg-red-500/70" : "bg-ember" },
    ] as const;

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-3">
        {FIN.years.map((y, yi) => (
          <motion.div
            key={y.fy}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: yi * 0.1 }}
            className={cn(
              "border bg-void p-6",
              yi === 2 ? "border-ember/60" : "border-line",
            )}
          >
            <div className="flex items-baseline justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ember">
                {y.fy}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
                {y.batches}
              </p>
            </div>
            <p className="mt-1.5 font-display text-xl font-medium text-bone">
              {y.label}
            </p>
            <p className="mt-0.5 font-mono text-[11px] text-fog">
              <Counter value={y.trekkers} /> trekkers · {lakh(y.revenue)} revenue
            </p>
            <div className="mt-5 space-y-2.5">
              {bars(y).map((b, bi) => (
                <div key={b.k}>
                  <div className="mb-1 flex items-center justify-between font-mono text-[10px] text-ash">
                    <span>{b.k}</span>
                    <span className={b.v < 0 ? "text-red-400" : "text-bone"}>
                      {b.v < 0 ? `−${lakh(Math.abs(b.v))}` : lakh(b.v)}
                    </span>
                  </div>
                  <div className="h-[5px] bg-ridge">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.max(1.5, (Math.abs(b.v) / max) * 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.15 + bi * 0.06 }}
                      className={cn("h-full", b.cls)}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 border-t border-line pt-3 text-xs leading-relaxed text-fog">
              {y.note}
            </p>
          </motion.div>
        ))}
      </div>

      <FadeIn delay={0.15}>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
          All figures in ₹ lakh · revenue target: 65% seat fill at published rates · EBITDA margin path −0.4% → 12.7% → 20.3%
        </p>
      </FadeIn>
    </div>
  );
}

export default function Financials() {
  return (
    <section
      id="numbers"
      className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32"
    >
      <SectionHead
        index="06"
        kicker="The numbers · 3-year projection"
        title={
          <>
            Lean math,{" "}
            <em className="italic text-gold">mountain margins</em>.
          </>
        }
        copy="Boot capital under ₹10 lakh, direct costs capped near 63%, fixed payroll under a third of revenue — the model breaks even in month 14 and throws off ₹89 lakh EBITDA by Year 3."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <UnitEconomics />
        <BootCapital />
      </div>

      <div className="mt-14">
        <FadeIn>
          <div className="mb-6 flex items-center gap-3">
            <HandCoins className="h-4 w-4 text-ember" />
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
              Three-year operating projection
            </h3>
            <span className="h-px flex-1 bg-line" />
          </div>
        </FadeIn>
        <Projections />
      </div>

      <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {FIN.pricingTiers.map((t) => (
          <div key={t.name} className="bg-void p-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-ash">
              {t.days}
            </p>
            <p className="mt-1.5 text-sm font-medium text-bone">{t.name}</p>
            <p className="mt-2 font-display text-2xl font-medium text-gold">
              {t.price}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <FadeIn>
          <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-fog">
            <IndianRupee className="h-4 w-4 text-ember" />
            Payroll & payment terms
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {FIN.payrollTerms.map((t) => (
              <li key={t} className="py-3.5 text-sm leading-relaxed text-fog">
                {t}
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-fog">
            <Target className="h-4 w-4 text-ember" />
            Revenue doctrine
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {FIN.revenueTargets.map((t) => (
              <li key={t} className="py-3.5 text-sm leading-relaxed text-fog">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <div className="mb-3 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
              <CalendarRange className="h-3.5 w-3.5 text-olive" />
              Seasonality map — UK Uttarakhand · WG Western Ghats · NG Nilgiris
            </div>
            <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-12">
              {FIN.seasonality.map((s) => (
                <div
                  key={s.m}
                  className="border border-line bg-void/70 p-2 text-center"
                >
                  <p className="font-mono text-[10px] font-bold text-bone">{s.m}</p>
                  <p className="mt-1 font-mono text-[8px] leading-relaxed tracking-wide text-olive">
                    {s.r}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
