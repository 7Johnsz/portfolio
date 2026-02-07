"use client";

import React from "react";
import { cn } from "@/lib/utils";


export interface DockProps {
  className?: string;
  children: React.ReactNode;
}

export const Dock = ({ className, children }: DockProps) => {
  return (
    <div
      className={cn(
        "mx-auto flex h-[58px] items-center gap-2 rounded-2xl border border-white/10 bg-zinc-950/40 px-2 backdrop-blur-md premium-card-shadow",
        className
      )}
    >
      {children}
    </div>
  );
};

export function DockIcon({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  label?: string; // Kept for interface compatibility but unused
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex size-10 items-center justify-center rounded-full bg-zinc-900/80 border border-white/5 text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
