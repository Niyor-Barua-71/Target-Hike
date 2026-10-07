"use client";

import { useEffect, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { REGION_LABEL, type Region } from "@/lib/content";
import { SectionHead, FadeIn } from "@/components/motion";

type TrekLite = { slug: string; name: string; region: Region };
type Status = "idle" | "submitting" | "success" | "error";

export default function Enlist({ treks }: { treks: TrekLite[] }) {
  const [trekSlug, setTrekSlug] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [ref, setRef] = useState<string>("");

  const [wlEmail, setWlEmail] = useState("");
  const [wlStatus, setWlStatus] = useState<Status>("idle");

  useEffect(() => {
    const onSelect = (e: Event) => {
      const slug = (e as CustomEvent<string>).detail;
      setTrekSlug(slug);
      setStatus("idle");
    };
    window.addEventListener("targethike:select-trek", onSelect);
    return () => window.removeEventListener("targethike:select-trek", onSelect);
  }, []);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          trekSlug: trekSlug || null,
          seats: data.get("seats"),
          message: data.get("message"),
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(
          json.error === "contact_required"
            ? "We need at least one channel — a valid email or a 10-digit phone."
            : "The desk could not log this request. Please retry.",
        );
        setStatus("error");
        return;
      }
      setRef(json.ref);
      setStatus("success");
      form.reset();
      setTrekSlug("");
    } catch {
      setError("Network hiccup — the mountain eats signals. Try again.");
      setStatus("error");
    }
  }

  async function submitWaitlist(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setWlStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: wlEmail }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setWlStatus("error");
        return;
      }
      setWlStatus("success");
      setWlEmail("");
    } catch {
      setWlStatus("error");
    }
  }

  const inputCls =
    "w-full border border-line bg-pine px-4 py-3.5 text-sm text-bone placeholder:text-ash outline-none transition-colors focus:border-ember";
  const labelCls =
    "mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-fog";

  return (
    <section
      id="enlist"
      className="relative border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          index="08"
          kicker="Enlist · the ops desk"
          title={
            <>
              Rope in.{" "}
              <em className="italic text-ember">The mountain decides the rest.</em>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="-mt-10">
            <FadeIn>
              <ol className="space-y-5 border-l border-line pl-6">
                {[
                  "Log a request below — the ops desk calls or WhatsApps within 24 hours to check fitness and fit.",
                  "25% booking amount secures your seat on the batch roster; balance at D-21.",
                  "D-21 brief pack: fitness plan, kit list, batch group, leader introduction.",
                ].map((s, i) => (
                  <li key={s} className="relative text-sm leading-relaxed text-fog">
                    <span className="absolute -left-[31px] top-0 grid h-6 w-6 place-items-center border border-ember bg-void font-mono text-[10px] text-ember">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-10 space-y-3 font-mono text-xs text-fog">
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-ember" /> ops@targethike.in
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-ember" /> +91 98XXX XX410 · 0900–2100 IST
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-ember" /> Base: Dehradun, Uttarakhand · 30.3165° N, 78.0322° E
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.18}>
              <div className="mt-10 border border-line bg-pine/60 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
                  The Dispatch — monthly route intel
                </p>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  One email a month: new routes, batch drops, and a field-craft
                  lesson. No spam — mountains don&apos;t shout.
                </p>
                <form onSubmit={submitWaitlist} className="mt-4 flex gap-2">
                  <input
                    type="email"
                    required
                    value={wlEmail}
                    onChange={(e) => {
                      setWlEmail(e.target.value);
                      setWlStatus("idle");
                    }}
                    placeholder="you@citymail.in"
                    className={inputCls}
                  />
                  <button
                    disabled={wlStatus === "submitting"}
                    className="flex shrink-0 items-center gap-2 border border-ember bg-ember px-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-void transition-all hover:bg-transparent hover:text-ember disabled:opacity-50"
                  >
                    {wlStatus === "submitting" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        Join <ArrowUpRight className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </form>
                {wlStatus === "success" && (
                  <p className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-olive">
                    <CheckCircle2 className="h-3.5 w-3.5" /> On the dispatch list. Stand by.
                  </p>
                )}
                {wlStatus === "error" && (
                  <p className="mt-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-red-400">
                    <AlertCircle className="h-3.5 w-3.5" /> Enter a valid email to enlist.
                  </p>
                )}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="-mt-10">
            <div className="border border-line bg-void p-7 md:p-9">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-10 text-center"
                  >
                    <CheckCircle2 className="mx-auto h-12 w-12 text-olive" />
                    <h3 className="mt-5 font-display text-3xl font-medium text-bone">
                      Request logged.
                    </h3>
                    <p className="mt-2 font-mono text-sm tracking-[0.2em] text-gold">
                      REF {ref}
                    </p>
                    <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-fog">
                      The ops desk will reach out within 24 hours. Drink water,
                      start walking stairs — and keep the reference handy.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-7 border border-line px-6 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-fog transition-colors hover:border-bone hover:text-bone"
                    >
                      Log another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={submit}
                    className="space-y-5"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ember">
                      Batch enquiry — no payment now
                    </p>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className={labelCls}>
                          Full name *
                        </label>
                        <input id="name" name="name" required minLength={2} placeholder="Asha Verma" className={inputCls} />
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelCls}>
                          Phone / WhatsApp
                        </label>
                        <input id="phone" name="phone" type="tel" placeholder="98XXX XXXXX" className={inputCls} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className={labelCls}>
                        Email
                      </label>
                      <input id="email" name="email" type="email" placeholder="you@citymail.in" className={inputCls} />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-[1fr_120px]">
                      <div>
                        <label htmlFor="trek" className={labelCls}>
                          Expedition
                        </label>
                        <select
                          id="trek"
                          value={trekSlug}
                          onChange={(e) => setTrekSlug(e.target.value)}
                          className={inputCls}
                        >
                          <option value="">Still deciding — advise me</option>
                          {treks.map((t) => (
                            <option key={t.slug} value={t.slug}>
                              {t.name} · {REGION_LABEL[t.region]}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="seats" className={labelCls}>
                          Seats
                        </label>
                        <input id="seats" name="seats" type="number" min={1} max={20} defaultValue={1} className={inputCls} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className={labelCls}>
                        Tell the desk — fitness, dates, questions
                      </label>
                      <textarea id="message" name="message" rows={4} placeholder="Two of us from Bengaluru, gym-regular, aiming for the Dec snow batch…" className={inputCls} />
                    </div>

                    {status === "error" && (
                      <p className="flex items-start gap-2 border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                        {error}
                      </p>
                    )}

                    <button
                      disabled={status === "submitting"}
                      className="group flex w-full items-center justify-center gap-3 border border-ember bg-ember py-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-void transition-all hover:bg-transparent hover:text-ember disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Radioing the desk…
                        </>
                      ) : (
                        <>
                          Request a seat
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                    <p className="text-center font-mono text-[9px] uppercase tracking-[0.2em] text-ash">
                      Protected by DPDP-compliant handling · zero spam policy
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
