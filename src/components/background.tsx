export function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-emerald-500/20 blur-[140px]" />
      <div className="absolute top-0 right-[-300px] w-[700px] h-[700px] rounded-full bg-emerald-500/20 blur-[160px]" />
      <div className="absolute bottom-[-300px] left-1/3 w-[800px] h-[800px] rounded-full bg-emerald-500/10 blur-[200px]" />
    </div>
  );
}
