"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Box } from "@/components/ui/box";
import { cn } from "@/lib/utils";
import { SpotifyTrack } from "@/lib/spotify";
import { Music } from "lucide-react";

export function SpotifyCard() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSpotify() {
      try {
        const res = await fetch("/api/spotify");
        const data = await res.json();
        setTrack(data);
      } catch (error) {
        console.error("Failed to fetch Spotify status", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSpotify();
    const interval = setInterval(fetchSpotify, 30000); // Update every 30s
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <Box className="flex items-center gap-3 p-3 animate-pulse">
        <div className="size-10 rounded-md bg-zinc-800" />
        <div className="flex flex-col gap-1.5 flex-1">
          <div className="h-3 w-24 bg-zinc-800 rounded" />
          <div className="h-2 w-16 bg-zinc-800 rounded" />
        </div>
      </Box>
    );
  }

  if (!track) return null;

  return (
    <Box className="group relative flex items-center gap-4 overflow-hidden p-3 transition-colors hover:bg-zinc-800/30">
      <div className="relative size-12 flex-shrink-0 overflow-hidden rounded-md border border-white/5">
        <Image
          src={track.albumImageUrl}
          alt={track.album}
          fill
          className="object-cover"
        />
        {track.isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="flex items-end gap-[2px] h-3">
              <span className="w-0.5 bg-brand animate-[music-bar_1s_ease-in-out_infinite]" style={{ height: '60%' }} />
              <span className="w-0.5 bg-brand animate-[music-bar_1s_ease-in-out_0.2s_infinite]" style={{ height: '100%' }} />
              <span className="w-0.5 bg-brand animate-[music-bar_1s_ease-in-out_0.4s_infinite]" style={{ height: '80%' }} />
            </div>
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-1.5 overflow-hidden">
          <span className="truncate text-xs font-semibold text-white">
            {track.title}
          </span>
          {track.isPlaying && (
             <Music className="size-2.5 text-brand animate-pulse flex-shrink-0" />
          )}
        </div>
        <span className="truncate text-[10px] text-muted-foreground">
          {track.artist}
        </span>
      </div>

      <a
        href={track.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
      />
    </Box>
  );
}
