import {
  RiPlayFill,
  RiPauseFill,
  RiSkipBackFill,
  RiSkipForwardFill,
} from "react-icons/ri";

export default function ClickWheel({ wheel }) {
  return (
    <div className="flex justify-center mt-6">
      <div
        onPointerDown={wheel.onPointerDown}
        onPointerMove={wheel.onPointerMove}
        onPointerUp={wheel.onPointerUp}
        className="
          relative w-56 h-56 rounded-full metal-wheel
          shadow-[inset_0_4px_8px_rgba(255,255,255,0.6),inset_0_-6px_10px_rgba(0,0,0,0.6),0_20px_40px_rgba(0,0,0,0.7)]
          flex items-center justify-center
        "
      >
        {/* MENU */}
        <button
          onClick={wheel.onBack}
          className="absolute top-4 text-xs font-semibold tracking-wider text-black/80"
        >
          MENU
        </button>

        {/* LEFT */}
        <button
          onClick={wheel.onPrev}
          className="absolute left-4 text-xl text-black/80"
        >
          <RiSkipBackFill />
        </button>

        {/* RIGHT */}
        <button
          onClick={wheel.onNext}
          className="absolute right-4 text-xl text-black/80"
        >
          <RiSkipForwardFill />
        </button>

        {/* PLAY / PAUSE */}
        <div className="absolute bottom-4 text-xl text-black/80">
          <RiPlayFill />
        </div>

        {/* CENTER BUTTON */}
        <button
          onClick={wheel.onSelect}
          className="
            w-20 h-20 rounded-full metal-wheel-inner
            shadow-[inset_0_3px_6px_rgba(255,255,255,0.2),0_8px_16px_rgba(0,0,0,0.8)]
            active:scale-95 transition
          "
        />
      </div>
    </div>
  );
}
