type BackgroundNumberProps = {
  value: number | string;
};

export function BackgroundNumber({ value }: BackgroundNumberProps) {
  return (
    <span
      aria-hidden
      className="
        pointer-events-none
        absolute
        left-1/2
        top-6
        -translate-x-1/2
        select-none
        font-display
        text-[180px]
        font-extrabold
        leading-none
        text-transparent
        bg-gradient-to-b
        from-zinc-500/20
        to-transparent
        bg-clip-text
        mask-fade
      "
    >
      {value}
    </span>
  );
}
