"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Megaphone,
  Network,
  Flag,
  MapPin,
  Briefcase,
  Radio,
  ArrowRight,
  Crosshair,
} from "lucide-react";
import { PERSONAS, MARKETING, ORG, ROADMAP, BLIND_SPOTS } from "@/lib/content";
import { FadeIn, SectionHead } from "@/components/motion";
import { cn } from "@/lib/utils";

const TABS = [
  { key: "audience", label: "Target audience", icon: Users },
  { key: "marketing", label: "Marketing campaign", icon: Megaphone },
  { key: "org", label: "Org structure", icon: Network },
  { key: "roadmap", label: "Roadmap & moats", icon: Flag },
] as const;

type TabKey = (typeof TABS)[number]["key"];

function Audience() {
  return (
    <div>
      <div className="mb-8 grid gap-px border border-line bg-line sm:grid-cols-3">
        {[
          { icon: MapPin, k: "Geography", v: "6 metros primary — Delhi NCR, Bengaluru, Mumbai, Pune, Hyderabad, Chennai. Feeder: Tier-2 (Jaipur, Indore, Lucknow, Coimbatore, Kochi)." },
          { icon: Users, k: "Age band", v: "Core 24–40 salaried professionals. Volume 18–24 students & aspirants. Premium 35–50 milestone climbers." },
          { icon: Briefcase, k: "Employment", v: "IT / consulting / startup salaried, students & NCC cadets, founders, and HR/L&D buyers for B2B offsites." },
        ].map((b) => (
          <div key={b.k} className="bg-void p-6">
            <b.icon className="h-5 w-5 text-ember" />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
              {b.k}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-fog">{b.v}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {PERSONAS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group border border-line bg-void p-6 transition-colors hover:border-gold/50"
          >
            <div className="flex items-start justify-between gap-4">
              <h4 className="font-display text-2xl font-medium text-bone">
                {p.name}
              </h4>
              <span className="border border-line px-2 py-1 font-mono text-[10px] text-gold">
                {p.age}
              </span>
            </div>
            <dl className="mt-4 space-y-2.5 text-sm">
              {[
                ["Base", p.base],
                ["Work", p.work],
                ["Behaviour", p.behavior],
                ["Reach via", p.channel],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[92px_1fr] gap-3">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash pt-0.5">
                    {k}
                  </dt>
                  <dd className="text-fog leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 border-t border-line pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-olive">
              LTV signal · {p.ltv}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Marketing() {
  return (
    <div>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border border-line bg-void p-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ember">
            Launch campaign
          </p>
          <h4 className="mt-2 font-display text-4xl font-medium text-bone">
            {MARKETING.campaign}
          </h4>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-fog">
          {MARKETING.budgetNote}
        </p>
      </div>

      <div className="overflow-x-auto border border-line">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-ridge/60 font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
              <th className="px-5 py-3.5 font-medium">Platform</th>
              <th className="px-5 py-3.5 font-medium">Role</th>
              <th className="px-5 py-3.5 font-medium">Cadence / format</th>
              <th className="px-5 py-3.5 font-medium">Success metric</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {MARKETING.platforms.map((p) => (
              <tr key={p.name} className="transition-colors hover:bg-ridge/30">
                <td className="px-5 py-4 font-mono text-xs font-bold uppercase tracking-[0.15em] text-gold">
                  {p.name}
                </td>
                <td className="px-5 py-4 text-bone">{p.role}</td>
                <td className="px-5 py-4 text-fog">{p.cadence}</td>
                <td className="px-5 py-4 font-mono text-xs text-olive">{p.kpi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className="border border-line bg-void p-6">
          <h5 className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
            The funnel
          </h5>
          <div className="space-y-1">
            {MARKETING.funnel.map((f, i) => (
              <div key={f.stage} className="flex items-stretch gap-3">
                <div className="flex flex-col items-center">
                  <span className="grid h-7 w-7 shrink-0 place-items-center border border-ember font-mono text-[10px] text-ember">
                    {i + 1}
                  </span>
                  {i < MARKETING.funnel.length - 1 && (
                    <span className="w-px flex-1 bg-line" />
                  )}
                </div>
                <div className="pb-5">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-bone">
                    {f.stage}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-fog">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-line bg-void p-6">
          <h5 className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
            Launch ammunition
          </h5>
          <ul className="space-y-4">
            {MARKETING.launch.map((l) => (
              <li key={l} className="flex items-start gap-3 text-sm leading-relaxed text-fog">
                <Radio className="mt-1 h-3.5 w-3.5 shrink-0 text-ember" />
                {l}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
            Positioning line — “Treks led by the people who wrote the survival manual.”
          </p>
        </div>
      </div>
    </div>
  );
}

function Org() {
  return (
    <div>
      <div className="overflow-x-auto border border-line">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-line bg-ridge/60 font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
              <th className="px-5 py-3.5 font-medium">Role</th>
              <th className="px-5 py-3.5 font-medium">Type</th>
              <th className="px-5 py-3.5 font-medium">Cost</th>
              <th className="px-5 py-3.5 font-medium">Mandate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {ORG.roles.map((r) => (
              <tr key={r.title} className="align-top transition-colors hover:bg-ridge/30">
                <td className="px-5 py-4 font-medium text-bone">{r.title}</td>
                <td className="px-5 py-4 font-mono text-[11px] uppercase tracking-[0.15em] text-gold">
                  {r.type}
                </td>
                <td className="px-5 py-4 text-ember">{r.cost}</td>
                <td className="px-5 py-4 text-fog">{r.brief}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {ORG.triggers.map((t) => (
          <div key={t} className="border border-line bg-void p-5">
            <Crosshair className="h-4 w-4 text-olive" />
            <p className="mt-3 text-sm leading-relaxed text-fog">{t}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
        Fixed payroll ≈ ₹1.17L/mo incl. retainers · leaders and ground crews are variable cost, booked per batch — the org survives a zero-booking month.
      </p>
    </div>
  );
}

function Roadmap() {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {ROADMAP.map((r, i) => (
          <motion.div
            key={r.tag}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="border border-line bg-void p-6"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ember">
              {r.tag}
            </p>
            <h4 className="mt-2 font-display text-2xl font-medium text-bone">
              {r.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {r.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-fog">
                  <ArrowRight className="mt-1 h-3 w-3 shrink-0 text-gold" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 border-t border-line pt-8">
        <h5 className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
          Blind spots most first-time founders miss — covered
        </h5>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {BLIND_SPOTS.map((b) => (
            <div key={b.title} className="border border-line bg-ridge/30 p-5">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-gold">
                {b.title}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-fog">{b.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Blueprint() {
  const [tab, setTab] = useState<TabKey>("audience");

  return (
    <section
      id="blueprint"
      className="relative border-t border-line bg-pine/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="05"
          kicker="Venture blueprint"
          title={
            <>
              Who we hunt, how we reach them,{" "}
              <em className="italic text-ember">who carries the weight</em>.
            </>
          }
          copy="Audience, campaign and org — engineered to start on boot capital under ₹10 lakh, with fixed costs light enough to weather an empty quarter."
        />

        <FadeIn>
          <div className="mb-10 flex flex-wrap gap-2">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={cn(
                  "flex items-center gap-2.5 border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-all",
                  tab === t.key
                    ? "border-ember bg-ember text-void"
                    : "border-line text-fog hover:border-bone hover:text-bone",
                )}
              >
                <t.icon className="h-3.5 w-3.5" />
                {t.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {tab === "audience" && <Audience />}
            {tab === "marketing" && <Marketing />}
            {tab === "org" && <Org />}
            {tab === "roadmap" && <Roadmap />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
