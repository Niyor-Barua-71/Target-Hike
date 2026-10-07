"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck } from "lucide-react";
import type { LeaderContent } from "@/lib/content";
import { FadeIn, SectionHead } from "@/components/motion";

export default function Leaders({ leaders }: { leaders: LeaderContent[] }) {
  return (
    <section
      id="command"
      className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32"
    >
      <SectionHead
        index="04"
        kicker="The command · leadership bench"
        title={
          <>
            Led by those who{" "}
            <em className="italic text-ember">already survived it</em>.
          </>
        }
        copy="The product is the leader. Our bench is built through veteran-resettlement networks — DGR and AWPO — which makes world-class safety both our brand and our hiring moat."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {leaders.map((l, i) => (
          <motion.article
            key={l.id}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="group border border-line bg-pine"
          >
            <div className="relative aspect-[3/3.4] overflow-hidden">
              <Image
                src={l.image}
                alt={`${l.rank} ${l.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine via-transparent to-transparent" />
              <span className="absolute right-4 top-4 font-mono text-[10px] tracking-[0.3em] text-fog/70">
                FILE 0{i + 1}
              </span>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="mb-2 inline-flex items-center gap-1.5 border border-ember/60 bg-void/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-ember backdrop-blur-sm">
                  <ShieldCheck className="h-3 w-3" />
                  {l.rank}
                </span>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
                  {l.service}
                </p>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-display text-2xl font-medium text-bone">
                {l.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fog">{l.bio}</p>
              <ul className="mt-5 space-y-2 border-t border-line pt-5">
                {l.credentials.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-fog"
                  >
                    <BadgeCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
          Bench strength beyond the file wall: 5 additional certified trek
          leaders on per-batch contract · all leaders re-certify WFR annually.
        </p>
      </FadeIn>
    </section>
  );
}
