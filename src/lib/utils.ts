export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export function formatINR(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDateShort(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
  });
}

export function formatDateRange(start: string, end: string): string {
  const s = new Date(start + "T00:00:00");
  const e = new Date(end + "T00:00:00");
  const sameMonth = s.getMonth() === e.getMonth();
  const dayFmt = { day: "2-digit" } as const;
  const monthFmt = { month: "short" } as const;
  const left = s.toLocaleDateString("en-IN", dayFmt);
  const right = `${e.toLocaleDateString("en-IN", dayFmt)} ${e.toLocaleDateString(
    "en-IN",
    monthFmt,
  )}`;
  return sameMonth
    ? `${left}–${right}`
    : `${left} ${s.toLocaleDateString("en-IN", monthFmt)} – ${right}`;
}
