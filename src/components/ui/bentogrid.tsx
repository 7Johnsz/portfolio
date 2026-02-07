import { cn } from "@/lib/utils";

type BentoCardProps = {
  size?: keyof typeof bentoSizes;
  className?: string;
  children: React.ReactNode;
};

export const bentoSizes = {
  small: "col-span-3 row-span-2",
  medium: "col-span-4 row-span-3",
  wide: "col-span-6 row-span-3",
  tall: "col-span-3 row-span-4",
  large: "col-span-6 row-span-4",
};

export function BentoCard({
  size = "medium",
  className,
  children,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-4",
        bentoSizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}
