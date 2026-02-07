import { cn } from "@/lib/utils";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Box({ children, className, ...props }: BoxProps) {
  return (
    <div
      className={cn(
        "relative w-full border border-border/40 rounded-xl bg-cardColor/50 backdrop-blur-sm p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
