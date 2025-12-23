import useClock from "../../hooks/useClock";

export default function StatusBar() {
  const time = useClock();

  return (
    <div className="h-6 px-2 flex items-center justify-between text-[11px] text-white/90 bg-black/40 backdrop-blur">
      <span>iPod</span>
      <span>{time}</span>
    </div>
  );
}
