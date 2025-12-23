export default function ClickWheel() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-56 h-56 bg-neutral-100 rounded-full border border-neutral-400 flex items-center justify-center">
        
        {/* MENU */}
        <div className="absolute top-4 text-xs font-semibold">
          MENU
        </div>

        {/* LEFT */}
        <div className="absolute left-4 text-lg">
          ◀◀
        </div>

        {/* RIGHT */}
        <div className="absolute right-4 text-lg">
          ▶▶
        </div>

        {/* PLAY / PAUSE */}
        <div className="absolute bottom-4 text-lg">
          ▶❚❚
        </div>

        {/* CENTER BUTTON */}
        <div className="w-20 h-20 bg-neutral-200 rounded-full border border-neutral-400" />
      </div>
    </div>
  );
}
