import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { waitlist } from "@/db/schema";

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

  const email = String(body.email ?? "").trim().toLowerCase();
  const city = String(body.city ?? "").trim().slice(0, 90) || null;

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "valid_email_required" },
      { status: 400 },
    );
  }

  try {
    await db
      .insert(waitlist)
      .values({ email, city })
      .onConflictDoNothing({ target: waitlist.email });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { ok: false, error: "store_failed" },
      { status: 500 },
    );
  }
}
