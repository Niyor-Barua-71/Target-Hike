import { NextRequest, NextResponse } from "next/server";
import { getTreks, isRegion, isDifficulty } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const regionParam = searchParams.get("region");
  const difficultyParam = searchParams.get("difficulty");

  const region = isRegion(regionParam) ? regionParam : undefined;
  const difficulty = isDifficulty(difficultyParam)
    ? difficultyParam
    : undefined;

  const data = await getTreks(region, difficulty);
  return NextResponse.json({ ok: true, count: data.length, data });
}
