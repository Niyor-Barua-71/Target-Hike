"use client";

import { motion } from "framer-motion";
import { Scale, SquareCheck, Info } from "lucide-react";
import { LEGAL_PHASES } from "@/lib/content";
import { FadeIn, SectionHead } from "@/components/motion";

export default function Legal() {
  return (
    <section
      id="legal"
      className="relative border-t border-line bg-pine/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="07"
          kicker="Legal & governance"
          title={
            <>
              Compliance is a{" "}
              <em className="italic text-ember">stack</em>, not a licence.
          </>
          }
          copy="India issues no single trekking licence. Legitimacy is built in layers: entity and tax first, then per-region permits, then risk transfer, then scale hygiene. Handle it like ropework — every anchor redundant."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {LEGAL_PHASES.map((p, pi) => (
            <motion.div
              key={p.phase}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6% 0px" }}
              transition={{ duration: 0.7, delay: pi * 0.08 }}
              className="border border-line bg-void p-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="border border-ember px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ember">
                    {p.phase}
                  </span>
                  <h3 className="font-display text-2xl font-medium text-bone">
                    {p.title}
                  </h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
                  {p.timeline}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-fog"
                  >
                    <SquareCheck className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-10 flex flex-col gap-4 border border-gold/40 bg-gold/5 p-6 sm:flex-row sm:items-start">
            <Scale className="h-5 w-5 shrink-0 text-gold" />
            <div>
              <p className="text-sm leading-relaxed text-bone">
                Governance spine: a written Safety Management System, a safety
                board that reviews every incident and near-miss within 72 hours,
                an annual third-party SOP audit from Year 2, and treasurer
                discipline that never treats client advances as revenue until
                the batch debriefs.
              </p>
              <p className="mt-3 flex items-start gap-2 font-mono text-[10px] uppercase tracking-[0.2em] leading-relaxed text-ash">
                <Info className="mt-0.5 h-3 w-3 shrink-0" />
                Planning guidance, not legal counsel — engage a CA and a lawyer
                practising adventure-tourism law before the first paid batch.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
