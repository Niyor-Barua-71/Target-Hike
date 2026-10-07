import { NextRequest, NextResponse } from "next/server";
import { getTrekBySlug } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const trek = await getTrekBySlug(slug);
  if (!trek) {
    return NextResponse.json(
      { ok: false, error: "trek_not_found" },
      { status: 404 },
    );
  }
  return NextResponse.json({ ok: true, data: trek });
}
