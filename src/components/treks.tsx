"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mountain,
  Route,
  ArrowUpRight,
  Database,
} from "lucide-react";
import {
  REGION_LABEL,
  DIFFICULTY_LABEL,
  type Region,
  type TrekContent,
  type DepartureInput,
} from "@/lib/content";
import { formatINR, formatDateRange, cn } from "@/lib/utils";
import { FadeIn, SectionHead } from "@/components/motion";

const FILTERS: Array<{ key: Region | "all"; label: string }> = [
  { key: "all", label: "All theatres" },
  { key: "uttarakhand", label: "Uttarakhand" },
  { key: "western-ghats", label: "Western Ghats" },
  { key: "nilgiris", label: "Nilgiris" },
];

const DIFF_STYLE: Record<string, string> = {
  easy: "border-olive/50 text-olive",
  moderate: "border-gold/50 text-gold",
  difficult: "border-ember/60 text-ember",
  expert: "border-red-500/60 text-red-400",
};

function nextBatch(t: TrekContent): DepartureInput | null {
  const today = new Date().toISOString().slice(0, 10);
  return (
    t.departures.find((d) => d.startDate >= today && d.status !== "full") ??
    null
  );
}

function TrekCard({ trek, index }: { trek: TrekContent; index: number }) {
  const batch = nextBatch(trek);
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col border border-line bg-pine transition-colors duration-500 hover:border-ember/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={trek.heroImage}
          alt={trek.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine via-pine/20 to-transparent" />
        <div className="absolute left-4 top-4 border border-line bg-void/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-bone backdrop-blur-sm">
          {REGION_LABEL[trek.region]}
        </div>
        <div
          className={cn(
            "absolute right-4 top-4 border bg-void/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.22em] backdrop-blur-sm",
            DIFF_STYLE[trek.difficulty],
          )}
        >
          {DIFFICULTY_LABEL[trek.difficulty]}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-medium leading-tight text-bone">
          {trek.name}
        </h3>
        <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-fog">
          {trek.blurb}
        </p>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4 font-mono text-[11px] text-fog">
          <span className="flex items-center gap-1.5">
            <Mountain className="h-3.5 w-3.5 text-ember" />
            {trek.altitudeM.toLocaleString("en-IN")} m
          </span>
          <span className="flex items-center gap-1.5">
            <Route className="h-3.5 w-3.5 text-ember" />
            {trek.distanceKm} km
          </span>
          <span className="flex items-center gap-1.5 font-bold text-bone">
            {trek.durationDays} days
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {trek.skills.map((s) => (
            <span
              key={s}
              className="border border-line px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-ash"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-5">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-ash">
              All-inclusive from
            </p>
            <p className="mt-1 font-display text-2xl font-medium text-gold">
              {formatINR(trek.priceInr)}
            </p>
          </div>
          <div className="text-right">
            {batch ? (
              <>
                <p className="font-mono text-[11px] text-bone">
                  {batch.batchLabel} · {formatDateRange(batch.startDate, batch.endDate)}
                </p>
                <p
                  className={cn(
                    "mt-1 font-mono text-[10px] uppercase tracking-[0.18em]",
                    batch.status === "filling" ? "text-ember" : "text-olive",
                  )}
                >
                  {batch.status === "filling"
                    ? `Filling fast · ${batch.seatsLeft} left`
                    : `${batch.seatsLeft} of ${batch.seatsTotal} seats open`}
                </p>
              </>
            ) : (
              <p className="font-mono text-[11px] text-ash">Batch on request</p>
            )}
          </div>
        </div>

        <button
          onClick={() => {
            window.dispatchEvent(
              new CustomEvent("targethike:select-trek", { detail: trek.slug }),
            );
            document
              .getElementById("enlist")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group/btn mt-6 flex items-center justify-center gap-2 border border-line py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-bone transition-all hover:border-ember hover:bg-ember hover:text-void"
        >
          Reserve a rope
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>
      </div>
    </motion.article>
  );
}

export default function Treks({ treks }: { treks: TrekContent[] }) {
  const [filter, setFilter] = useState<Region | "all">("all");
  const visible = useMemo(
    () => (filter === "all" ? treks : treks.filter((t) => t.region === filter)),
    [filter, treks],
  );

  return (
    <section
      id="expeditions"
      className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32"
    >
      <SectionHead
        index="02"
        kicker="Expedition ledger · live from database"
        title={
          <>
            Nine routes.{" "}
            <em className="italic text-ember">Three theatres.</em>
          </>
        }
        copy="Every route is scouted by our leaders before it is sold. Winter snow lines in Uttarakhand, monsoon ridges in the Ghats, biosphere trails in the Nilgiris — the calendar never sleeps, and no batch exceeds 18 trekkers."
      />

      <FadeIn>
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => {
            const count =
              f.key === "all"
                ? treks.length
                : treks.filter((t) => t.region === f.key).length;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={cn(
                  "flex items-center gap-2 border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-all",
                  filter === f.key
                    ? "border-ember bg-ember text-void"
                    : "border-line text-fog hover:border-bone hover:text-bone",
                )}
              >
                {f.label}
                <span
                  className={cn(
                    "text-[10px]",
                    filter === f.key ? "text-void/70" : "text-ember",
                  )}
                >
                  {String(count).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
      </FadeIn>

      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((trek, i) => (
            <TrekCard key={trek.id} trek={trek} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      <FadeIn delay={0.15}>
        <p className="mt-10 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
          <Database className="h-3.5 w-3.5 text-olive" />
          Departures sync live from PostgreSQL · GET /api/treks
          {treks.some((t) => t.departures.some((d) => d.status === "full")) &&
            " · Full batches held off the shelf"}
        </p>
      </FadeIn>
    </section>
  );
}
