import { cn } from "@/lib/utils";

export function CardGlass({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/10",
        "bg-gradient-to-b from-white/[0.06] to-white/[0.02]",
        "backdrop-blur-xl shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
