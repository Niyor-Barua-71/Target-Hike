import { asc } from "drizzle-orm";
import { db } from "@/db";
import { treks, departures, leaders } from "@/db/schema";
import {
  TREKS,
  LEADERS,
  type Region,
  type Difficulty,
  type DepartureStatus,
  type TrekContent,
  type LeaderContent,
} from "@/lib/content";

const REGIONS: Region[] = ["uttarakhand", "western-ghats", "nilgiris"];
const DIFFICULTIES: Difficulty[] = ["easy", "moderate", "difficult", "expert"];

export function isRegion(v: string | null | undefined): v is Region {
  return !!v && (REGIONS as string[]).includes(v);
}
export function isDifficulty(v: string | null | undefined): v is Difficulty {
  return !!v && (DIFFICULTIES as string[]).includes(v);
}

function sortDepartures(t: TrekContent): TrekContent {
  const today = new Date().toISOString().slice(0, 10);
  return {
    ...t,
    departures: [...t.departures].sort((a, b) => {
      const aPast = a.startDate < today ? 1 : 0;
      const bPast = b.startDate < today ? 1 : 0;
      if (aPast !== bPast) return aPast - bPast;
      return a.startDate.localeCompare(b.startDate);
    }),
  };
}

function fallbackTreks(region?: Region, difficulty?: Difficulty) {
  return TREKS.filter(
    (t) =>
      (!region || t.region === region) &&
      (!difficulty || t.difficulty === difficulty),
  )
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map(sortDepartures);
}

export async function getTreks(
  region?: Region,
  difficulty?: Difficulty,
): Promise<TrekContent[]> {
  try {
    const trekRows = await db
      .select()
      .from(treks)
      .orderBy(asc(treks.sortOrder));
    if (trekRows.length === 0) throw new Error("empty treks table");
    const depRows = await db
      .select()
      .from(departures)
      .orderBy(asc(departures.startDate));

    const mapped: TrekContent[] = trekRows.map((t) => ({
      id: t.id,
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
      departures: depRows
        .filter((d) => d.trekId === t.id)
        .map((d) => ({
          id: d.id,
          batchLabel: d.batchLabel,
          startDate: d.startDate,
          endDate: d.endDate,
          seatsTotal: d.seatsTotal,
          seatsLeft: d.seatsLeft,
          status: d.status as DepartureStatus,
        })),
    }));

    return mapped
      .filter(
        (t) =>
          (!region || t.region === region) &&
          (!difficulty || t.difficulty === difficulty),
      )
      .map(sortDepartures);
  } catch {
    return fallbackTreks(region, difficulty);
  }
}

export async function getTrekBySlug(
  slug: string,
): Promise<TrekContent | null> {
  const all = await getTreks();
  return all.find((t) => t.slug === slug) ?? null;
}

function fallbackLeaders(): LeaderContent[] {
  return [...LEADERS].sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getLeaders(): Promise<LeaderContent[]> {
  try {
    const rows = await db.select().from(leaders).orderBy(asc(leaders.sortOrder));
    if (rows.length === 0) throw new Error("empty leaders table");
    return rows.map((l) => ({
      id: l.id,
      name: l.name,
      rank: l.rank,
      service: l.service,
      image: l.image,
      bio: l.bio,
      credentials: l.credentials,
      sortOrder: l.sortOrder,
    }));
  } catch {
    return fallbackLeaders();
  }
}
