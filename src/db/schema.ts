import {
  pgTable,
  pgEnum,
  uuid,
  varchar,
  integer,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const regionEnum = pgEnum("region", [
  "uttarakhand",
  "western-ghats",
  "nilgiris",
]);

export const difficultyEnum = pgEnum("difficulty", [
  "easy",
  "moderate",
  "difficult",
  "expert",
]);

export const departureStatusEnum = pgEnum("departure_status", [
  "open",
  "filling",
  "full",
]);

export const treks = pgTable("treks", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: varchar("slug", { length: 90 }).notNull().unique(),
  name: varchar("name", { length: 180 }).notNull(),
  region: regionEnum("region").notNull(),
  difficulty: difficultyEnum("difficulty").notNull(),
  altitudeM: integer("altitude_m").notNull(),
  distanceKm: integer("distance_km").notNull(),
  durationDays: integer("duration_days").notNull(),
  priceInr: integer("price_inr").notNull(),
  basecamp: varchar("basecamp", { length: 180 }).notNull(),
  bestSeason: varchar("best_season", { length: 140 }).notNull(),
  heroImage: text("hero_image").notNull(),
  blurb: text("blurb").notNull(),
  highlights: text("highlights").array().notNull(),
  skills: text("skills").array().notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const departures = pgTable("departures", {
  id: uuid("id").defaultRandom().primaryKey(),
  trekId: uuid("trek_id")
    .references(() => treks.id, { onDelete: "cascade" })
    .notNull(),
  batchLabel: varchar("batch_label", { length: 24 }).notNull(),
  startDate: varchar("start_date", { length: 10 }).notNull(),
  endDate: varchar("end_date", { length: 10 }).notNull(),
  seatsTotal: integer("seats_total").notNull(),
  seatsLeft: integer("seats_left").notNull(),
  status: departureStatusEnum("status").notNull().default("open"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const leaders = pgTable("leaders", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 140 }).notNull(),
  rank: varchar("rank", { length: 80 }).notNull(),
  service: varchar("service", { length: 160 }).notNull(),
  image: text("image").notNull(),
  bio: text("bio").notNull(),
  credentials: text("credentials").array().notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const enquiries = pgTable("enquiries", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 140 }).notNull(),
  email: varchar("email", { length: 180 }),
  phone: varchar("phone", { length: 24 }),
  trekSlug: varchar("trek_slug", { length: 90 }),
  seats: integer("seats").notNull().default(1),
  message: text("message"),
  status: varchar("status", { length: 20 }).notNull().default("new"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const waitlist = pgTable("waitlist", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 180 }).notNull().unique(),
  city: varchar("city", { length: 90 }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type TrekRow = typeof treks.$inferSelect;
export type DepartureRow = typeof departures.$inferSelect;
export type LeaderRow = typeof leaders.$inferSelect;
export type EnquiryRow = typeof enquiries.$inferSelect;
