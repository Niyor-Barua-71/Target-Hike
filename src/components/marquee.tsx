const ITEMS = [
  "Uttarakhand",
  "Western Ghats",
  "Nilgiris",
  "Special-Forces Led",
  "Jungle Survival Syllabus",
  "1:6 Leader Ratio",
  "Batches Capped at 18",
  "Leave No Trace",
];

export default function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((item, i) => (
        <span key={item} className="flex items-center">
          <span
            className={`whitespace-nowrap px-6 font-display text-4xl font-medium md:text-6xl ${
              i % 2 === 0 ? "text-bone" : "text-stroke"
            }`}
          >
            {item}
          </span>
          <span className="text-2xl text-ember md:text-3xl">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-hidden
      className="overflow-hidden border-y border-line bg-pine py-7"
    >
      <div className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </section>
  );
}
