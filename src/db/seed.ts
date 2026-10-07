import "dotenv/config";
import { db } from "./index";
import { treks, departures, leaders } from "./schema";
import { TREKS, LEADERS } from "../lib/content";

async function main() {
  const existing = await db.select({ id: treks.id }).from(treks).limit(1);
  if (existing.length > 0) {
    console.log("Database already seeded — skipping.");
    process.exit(0);
  }

  for (const t of TREKS) {
    const [row] = await db
      .insert(treks)
      .values({
        slug: t.slug,
        name: t.name,
        region: t.region,
        difficulty: t.difficulty,
        altitudeM: t.altitudeM,
        distanceKm: t.distanceKm,
        durationDays: t.durationDays,
        priceInr: t.priceInr,
        basecamp: t.basecamp,
        bestSeason: t.bestSeason,
        heroImage: t.heroImage,
        blurb: t.blurb,
        highlights: t.highlights,
        skills: t.skills,
        sortOrder: t.sortOrder,
      })
      .returning({ id: treks.id });

    await db.insert(departures).values(
      t.departures.map((d) => ({
        trekId: row.id,
        batchLabel: d.batchLabel,
        startDate: d.startDate,
        endDate: d.endDate,
        seatsTotal: d.seatsTotal,
        seatsLeft: d.seatsLeft,
        status: d.status,
      })),
    );
  }

  await db.insert(leaders).values(
    LEADERS.map((l) => ({
      name: l.name,
      rank: l.rank,
      service: l.service,
      image: l.image,
      bio: l.bio,
      credentials: l.credentials,
      sortOrder: l.sortOrder,
    })),
  );

  console.log(
    `Seeded ${TREKS.length} treks, ${TREKS.reduce(
      (acc, t) => acc + t.departures.length,
      0,
    )} departures, ${LEADERS.length} leaders.`,
  );
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
