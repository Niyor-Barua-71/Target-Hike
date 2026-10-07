"use client";

import { motion } from "framer-motion";
import { ArrowDown, MoveRight, Radio } from "lucide-react";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { HERO_VIDEO, HERO_POSTER, HERO_BG } from "@/lib/content";

const chip = (s: string) => (
  <span
    key={s}
    className="border border-line bg-pine/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-fog"
  >
    {s}
  </span>
);

export default function Hero() {
  return (
    <div id="top" className="relative">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={HERO_VIDEO}
        posterSrc={HERO_POSTER}
        bgImageSrc={HERO_BG}
        title="BEYOND THE TREELINE"
        date="Target Hike Expedition Co — Uttarakhand · Ghats · Nilgiris"
        scrollToExpand="Scroll — the mountain expands"
        textBlend
      >
        <div className="mx-auto max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-ember"
          >
            <Radio className="h-3.5 w-3.5" />
            A venture blueprint · served from a live database
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="font-display text-3xl font-medium leading-snug text-bone md:text-5xl md:leading-[1.15]"
          >
            Off-beat treks across three mountain theatres, commanded by{" "}
            <em className="text-ember not-italic font-semibold italic">
              Special Forces veterans
            </em>{" "}
            and Everest summiteers — where every trail doubles as a{" "}
            <em className="text-gold italic">jungle-survival syllabus</em>.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-6 max-w-3xl text-base leading-relaxed text-fog md:text-lg"
          >
            This is both the plan and the product: a market-backed business
            case for a minimal-capital trekking venture — and below it, the
            working platform. Routes, departures and leadership are read from
            PostgreSQL; enquiries land in the ops desk via the API. Scroll on
            for the intelligence, the catalog, the numbers and the law.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#expeditions"
              className="group flex items-center gap-3 border border-ember bg-ember px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.22em] text-void transition-all hover:bg-transparent hover:text-ember"
            >
              View the expeditions
              <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#intelligence"
              className="group flex items-center gap-3 border border-line px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.22em] text-bone transition-all hover:border-bone"
            >
              Read the plan
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.34 }}
            className="mt-9 flex flex-wrap gap-2.5"
          >
            {[
              "3 regions · 9 routes",
              "1:6 leader ratio",
              "Batches capped at 18",
              "Break-even: month 14",
              "Boot capital ₹9.6 L",
            ].map(chip)}
          </motion.div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
