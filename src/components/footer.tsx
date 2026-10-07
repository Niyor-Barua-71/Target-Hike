import { Mountain, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, REGION_LABEL } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-pine">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <a href="#top" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center border border-ember/60 bg-ember/10 text-ember">
                <Mountain className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="font-mono text-lg font-bold tracking-[0.32em] text-bone">
                TARGET HIKE
              </span>
            </a>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-fog">
              A venture blueprint and live platform for a Special Forces-led
              trekking company — off-beat routes across three mountain
              theatres, jungle-survival syllabuses on every trail, and a
              balance sheet built like a lightweight rope team.
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
              30.3165° N · 78.0322° E — Dehradun base camp
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group flex items-center gap-2 text-sm text-fog transition-colors hover:text-ember"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
              Theatres
            </p>
            <ul className="space-y-2.5 text-sm text-fog">
              {Object.values(REGION_LABEL).map((r) => (
                <li key={r}>
                  <a href="#expeditions" className="transition-colors hover:text-ember">
                    {r}
                  </a>
                </li>
              ))}
              <li className="pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
                Himachal · Sahyadri · Nepal — on the Y3 board
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 overflow-hidden">
          <p className="text-stroke select-none whitespace-nowrap text-center font-display text-[12vw] font-semibold leading-none lg:text-[8.5vw]">
            TARGET HIKE
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ash md:flex-row md:items-center md:justify-between">
          <p>© 2026 Target Hike Expedition Co. (Pvt. Ltd. proposed)</p>
          <p>Photography: Pexels · Figures indicative, for planning</p>
          <p>Backend: Next.js · Drizzle ORM · PostgreSQL</p>
        </div>
      </div>
    </footer>
  );
}
