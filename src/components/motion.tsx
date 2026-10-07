"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, animate } from "framer-motion";

export function FadeIn({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function SectionHead({
  index,
  kicker,
  title,
  copy,
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  copy?: string;
}) {
  return (
    <div className="mb-14 grid gap-10 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <FadeIn>
          <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-fog">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember animate-pulse-dot" />
            <span className="text-ember">{index}</span>
            <span className="h-px w-10 bg-line" />
            <span>{kicker}</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2 className="font-display text-4xl leading-[1.05] font-medium tracking-tight text-bone md:text-6xl">
            {title}
          </h2>
        </FadeIn>
      </div>
      {copy ? (
        <FadeIn delay={0.16} className="lg:col-span-4">
          <p className="border-l border-line pl-5 text-sm leading-relaxed text-fog">
            {copy}
          </p>
        </FadeIn>
      ) : null}
    </div>
  );
}
