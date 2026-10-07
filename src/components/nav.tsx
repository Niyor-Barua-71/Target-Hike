"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain, Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-[100] transition-colors duration-500 ${
          scrolled
            ? "border-b border-line bg-void/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border border-ember/60 bg-ember/10 text-ember transition-colors group-hover:bg-ember group-hover:text-void">
              <Mountain className="h-4.5 w-4.5" strokeWidth={2.2} />
            </span>
            <span className="leading-none">
              <span className="block font-mono text-sm font-bold tracking-[0.32em] text-bone">
                TARGET HIKE
              </span>
              <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.28em] text-fog">
                Expedition Co. · Est. 2026
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-fog transition-colors hover:text-ember"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#enlist"
              className="group hidden items-center gap-2 border border-ember bg-ember px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-void transition-all hover:bg-transparent hover:text-ember sm:flex"
            >
              Enlist
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center border border-line text-bone lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[110] flex flex-col bg-void/97 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-mono text-sm font-bold tracking-[0.32em] text-bone">
                TARGET HIKE
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center border border-line text-bone"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2 px-8">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                  className="border-b border-line py-4 font-display text-4xl font-medium text-bone transition-colors hover:text-ember"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#enlist"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-6 flex w-fit items-center gap-3 border border-ember bg-ember px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-void"
              >
                Enlist for a batch
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </div>
            <p className="px-8 pb-8 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">
              Uttarakhand · Western Ghats · Nilgiris
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
