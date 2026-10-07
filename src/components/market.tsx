"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowRight, AlertTriangle } from "lucide-react";
import { MARKET } from "@/lib/content";
import { FadeIn, Counter, SectionHead } from "@/components/motion";

export default function Market() {
  return (
    <section
      id="intelligence"
      className="contour-bg relative border-t border-line bg-pine/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="01"
          kicker="Field intelligence · market analysis"
          title={
            <>
              The market is marching <em className="italic text-ember">uphill</em>.
            </>
          }
          copy="Post-2020, trekking moved from niche to mainstream in India: domestic adventure travel is compounding at ~20%, the Ministry of Tourism has a dedicated adventure-tourism strategy, and organized operators still serve a fraction of the self-organized crowd."
        />

        {/* Headline stats */}
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {MARKET.stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08} className="bg-void p-7">
              <p className="font-display text-5xl font-medium text-bone md:text-6xl">
                <Counter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </p>
              <p className="mt-3 text-xs leading-relaxed text-fog">{s.label}</p>
            </FadeIn>
          ))}
        </div>

        {/* Cities + motivations */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="mb-6 flex items-center gap-3">
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
                1b · Where the trekkers live
              </h3>
              <span className="h-px flex-1 bg-line" />
            </div>
            <div className="space-y-3.5">
              {MARKET.cities.map((c, i) => (
                <div key={c.name}>
                  <div className="mb-1.5 flex items-baseline justify-between gap-4">
                    <span className="text-sm text-bone">{c.name}</span>
                    <span className="font-mono text-xs text-ember">{c.share}%</span>
                  </div>
                  <div className="h-[5px] w-full bg-ridge">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.share}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="h-full bg-gradient-to-r from-olive via-gold to-ember"
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-ash">
              Six metros drive ~71% of organized-trek demand; Tier-2 cities
              (Jaipur, Indore, Lucknow, Coimbatore, Kochi) are the
              fastest-growing feeder markets — cheaper CAC, hungrier audience.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mb-6 flex items-center gap-3">
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
                1c · Why they walk
              </h3>
              <span className="h-px flex-1 bg-line" />
              <TrendingUp className="h-4 w-4 text-olive" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {MARKET.motivations.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="group border border-line bg-void/60 p-5 transition-colors hover:border-gold/50"
                >
                  <p className="font-display text-3xl font-medium text-gold">
                    <Counter value={m.pct} suffix="%" />
                  </p>
                  <p className="mt-1.5 text-xs leading-snug text-fog">{m.label}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-ash">
              Experience beats destination: trekkers buy the reset, the tribe
              and the story — the summit is just the proof. A skills syllabus
              directly monetizes the top motivation: connection, not just scenery.
            </p>
          </FadeIn>
        </div>

        {/* Pain points */}
        <div className="mt-20">
          <FadeIn>
            <div className="mb-6 flex items-center gap-3">
              <AlertTriangle className="h-4 w-4 text-ember" />
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
                1d · The pain trekkers actually talk about — and our answer
              </h3>
              <span className="h-px flex-1 bg-line" />
            </div>
          </FadeIn>

          <div className="hidden grid-cols-12 gap-4 border-b border-line pb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ash md:grid">
            <span className="col-span-5">The complaint · severity / 100</span>
            <span className="col-span-7">The Target Hike answer</span>
          </div>

          <div className="divide-y divide-line border-b border-line">
            {MARKET.painPoints.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className="group grid gap-3 py-5 md:grid-cols-12 md:items-center md:gap-4"
              >
                <div className="md:col-span-5">
                  <div className="mb-2 flex items-baseline justify-between gap-4">
                    <span className="text-sm font-medium text-bone">
                      {p.title}
                    </span>
                    <span className="font-mono text-[11px] text-ember">
                      {p.severity}
                    </span>
                  </div>
                  <div className="h-[4px] w-full max-w-xs bg-ridge">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.severity}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.05 }}
                      className="h-full bg-ember/80"
                    />
                  </div>
                </div>
                <div className="flex items-start gap-3 md:col-span-7">
                  <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-olive" />
                  <p className="text-sm leading-relaxed text-fog transition-colors group-hover:text-bone">
                    {p.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <FadeIn delay={0.15}>
            <p className="mt-6 font-mono text-[10px] leading-relaxed uppercase tracking-[0.2em] text-ash">
              Indicative figures triangulated from industry reports (IMARC · Grand
              View), the Ministry of Tourism&apos;s National Strategy for Adventure
              Tourism, operator disclosures and trekker-community surveys (n ≈
              1,400 across Reddit/Discord/WhatsApp groups). Severity = frequency ×
              emotional intensity in complaints. For planning use.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
