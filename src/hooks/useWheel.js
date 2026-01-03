import { useRef } from "react";
import { playSound } from "../utils/sound";
import clickSound from "../assets/sounds/click.mp3";
import wheelSound from "../assets/sounds/click.mp3";

export default function useWheel({
  onUp,
  onDown,
  onSelect,
  onBack,
  onNext,
  onPrev,
}) {
  const lastY = useRef(null);

  const onPointerDown = (e) => {
    lastY.current = e.clientY;
  };

  const onPointerMove = (e) => {
    if (lastY.current === null) return;

    const diff = e.clientY - lastY.current;

    if (diff > 18) {
      playSound(wheelSound, 0.2);
      onDown?.();
      lastY.current = e.clientY;
    } else if (diff < -18) {
      playSound(wheelSound, 0.2);
      onUp?.();
      lastY.current = e.clientY;
    }
  };

  const onPointerUp = () => {
    lastY.current = null;
  };

  return {
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onSelect: () => {
      playSound(clickSound);
      onSelect?.();
    },
    onBack: () => {
      playSound(clickSound);
      onBack?.();
    },
    onNext: () => {
      playSound(clickSound);
      onNext?.();
    },
    onPrev: () => {
      playSound(clickSound);
      onPrev?.();
    },
  };
}
