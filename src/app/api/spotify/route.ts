import { NextResponse } from "next/server";
import { getNowPlaying } from "@/lib/spotify";

export async function GET() {
  try {
    const track = await getNowPlaying();
    return NextResponse.json(track);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching Spotify data" },
      { status: 500 }
    );
  }
}
