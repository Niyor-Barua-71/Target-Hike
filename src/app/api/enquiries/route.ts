import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { enquiries } from "@/db/schema";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const phone = String(body.phone ?? "").replace(/[^\d+]/g, "").slice(0, 14);
  const trekSlug = String(body.trekSlug ?? "").trim().slice(0, 90) || null;
  const message = String(body.message ?? "").trim().slice(0, 2000) || null;
  const seatsRaw = Number(body.seats);
  const seats = Number.isFinite(seatsRaw)
    ? Math.min(20, Math.max(1, Math.round(seatsRaw)))
    : 1;

  if (name.length < 2) {
    return NextResponse.json(
      { ok: false, error: "name_required" },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email) && phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json(
      { ok: false, error: "contact_required" },
      { status: 400 },
    );
  }

  try {
    const [row] = await db
      .insert(enquiries)
      .values({
        name,
        email: EMAIL_RE.test(email) ? email : null,
        phone: phone || null,
        trekSlug,
        seats,
        message,
      })
      .returning({ id: enquiries.id });

    return NextResponse.json(
      { ok: true, ref: `ARK-${row.id.replace(/-/g, "").slice(0, 8).toUpperCase()}` },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "store_failed" },
      { status: 500 },
    );
  }
}
