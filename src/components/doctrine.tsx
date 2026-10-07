"use client";

import { motion } from "framer-motion";
import { Compass, Flame, Route, ShieldCheck } from "lucide-react";
import { PILLARS } from "@/lib/content";
import { FadeIn, SectionHead } from "@/components/motion";

const ICONS = { Compass, Flame, Route, ShieldCheck } as const;

export default function Doctrine() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHead
        index="00"
        kicker="The doctrine"
        title={
          <>
            Not another trekking company.{" "}
            <em className="italic text-ember">A field school</em> with summits.
          </>
        }
        copy="India's trekking boom produced logistics companies. The whitespace is a skills company — one where the guide is the product, the syllabus is the moat, and the balance sheet stays light enough to survive a bad season."
      />

      <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p, i) => {
          const Icon = ICONS[p.icon as keyof typeof ICONS];
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ backgroundColor: "rgba(26,33,26,1)" }}
              className="group relative bg-pine p-7 md:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center border border-ember/40 text-ember transition-all duration-500 group-hover:border-ember group-hover:bg-ember group-hover:text-void">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] text-ash">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-medium leading-tight text-bone">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-fog">{p.copy}</p>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-ember transition-all duration-700 group-hover:w-full" />
            </motion.div>
          );
        })}
      </div>

      <FadeIn delay={0.2}>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
          Field note — every rupee that does not buy safety or skill is treated as excess baggage.
        </p>
      </FadeIn>
    </section>
  );
}
