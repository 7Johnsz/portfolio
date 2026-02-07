"use client";

import { Mapcn, MapMarker, MarkerContent } from "@/components/ui/map";
import { MapPin } from "lucide-react";

// Sumaré, SP: 22.8304° S, 47.1642° W -> [-47.1642, -22.8304] (lng, lat)
const SUMARE: [number, number] = [-47.1642, -22.8304];

export function LocationMap() {
  return (
    <div className="absolute inset-0">
      <Mapcn
        center={SUMARE}
        zoom={20}
        interactive={false}
        className="h-full w-full"
      >
        <MapMarker longitude={SUMARE[0]} latitude={SUMARE[1]}>
          <MarkerContent>
            <div className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-12 w-12 rounded-full opacity-50 bg-emerald-400/30 animate-ping"></span>
              <span className="relative inline-flex h-12 w-12 rounded-full bg-emerald-400/50 shadow-[0_0_15px_rgba(52,211,153,0.8)]"></span>
            </div>
          </MarkerContent>
        </MapMarker>
      </Mapcn>

      {/* Label no canto superior esquerdo */}
      <div className="absolute top-4 left-5 z-10">
        <p className="text-xs flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 shrink-0 py-2 pl-3 pr-4 w-fit">
          <MapPin className="size-4" />
          Location
        </p>
      </div>
    </div>
  );
}