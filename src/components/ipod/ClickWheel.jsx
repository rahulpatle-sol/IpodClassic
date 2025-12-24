import {
  RiPlayFill,
  RiSkipBackFill,
  RiSkipForwardFill,
} from "react-icons/ri";

export default function ClickWheel({ wheel }) {
  return (
    <div className="flex justify-center mt-6">
      <div
        className="
          relative w-56 h-56 rounded-full metal-wheel
          touch-none select-none
          shadow-[inset_0_4px_8px_rgba(255,255,255,0.6),inset_0_-6px_10px_rgba(0,0,0,0.6),0_20px_40px_rgba(0,0,0,0.7)]
          flex items-center justify-center
        "
        onPointerDown={wheel.onPointerDown}
        onPointerMove={wheel.onPointerMove}
        onPointerUp={wheel.onPointerUp}
      >
        <button
          onClick={wheel.onBack}
          className="absolute top-4 text-xs font-semibold"
        >
          MENU
        </button>

        <button
          onClick={wheel.onPrev}
          className="absolute left-4 text-xl"
        >
          <RiSkipBackFill />
        </button>

        <button
          onClick={wheel.onNext}
          className="absolute right-4 text-xl"
        >
          <RiSkipForwardFill />
        </button>

        <div className="absolute bottom-4 text-xl">
          <RiPlayFill />
        </div>

        <button
          onClick={wheel.onSelect}
          className="w-20 h-20 rounded-full metal-wheel-inner"
        />
      </div>
    </div>
  );
}
