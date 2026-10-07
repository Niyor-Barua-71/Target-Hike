"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Flame,
  Droplets,
  Compass,
  Tent,
  HeartPulse,
  Anchor,
  Leaf,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { SKILL_MODULES, CAMPFIRE_IMG } from "@/lib/content";
import { FadeIn, SectionHead } from "@/components/motion";

const ICONS = {
  Flame,
  Droplets,
  Compass,
  Tent,
  HeartPulse,
  Anchor,
  Leaf,
  Users,
} as const;

export default function Curriculum() {
  return (
    <section
      id="fieldcraft"
      className="relative border-t border-line bg-pine/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHead
                index="03"
                kicker="Fieldcraft syllabus"
                title={
                  <>
                    The mountain is the{" "}
                    <em className="italic text-gold">classroom</em>.
                  </>
                }
              />
              <FadeIn delay={0.1}>
                <p className="-mt-6 mb-8 text-sm leading-relaxed text-fog">
                  Every trek embeds teaching stations along the route — no
                  classrooms, no lectures. Modules are demonstrated by the
                  leader, rehearsed by the team, and signed off in a pocket
                  field-book trekkers take home. It is the reason parents send
                  kids, companies send teams, and alumni come back.
                </p>
              </FadeIn>
              <FadeIn delay={0.18}>
                <div className="relative aspect-[16/10] overflow-hidden border border-line">
                  <Image
                    src={CAMPFIRE_IMG}
                    alt="Night fieldcraft exercise around a campfire"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-[0.22em] text-fog">
                    Night fire-craft exercise · Module 01
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-line border-y border-line">
              {SKILL_MODULES.map((m, i) => {
                const Icon = ICONS[m.icon as keyof typeof ICONS];
                return (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-6% 0px" }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    className="group grid grid-cols-[auto_1fr] gap-5 py-6 transition-colors hover:bg-ridge/50 sm:grid-cols-[auto_auto_1fr] sm:items-center md:gap-7"
                  >
                    <span className="pt-1 font-mono text-[11px] tracking-[0.25em] text-ash sm:pt-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="grid h-11 w-11 shrink-0 place-items-center border border-line text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-void">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-medium text-bone md:text-2xl">
                        {m.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-fog">
                        {m.detail}
                      </p>
                      <p className="mt-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-olive">
                        <ArrowUpRight className="h-3 w-3" />
                        {m.outcome}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xs leading-relaxed text-ash">
                Modules 04, 05 and 08 double as the corporate-offsite core —
                sold to L&amp;D teams as &ldquo;Leadership Under Fatigue&rdquo;
                and billed per learner, not per trekker.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
