//  wheel  rotaion logic 
import { useRef } from "react";

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

    if (diff > 15) {
      onDown?.();
      lastY.current = e.clientY;
    } else if (diff < -15) {
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
    onSelect,
    onBack,
    onNext,
    onPrev,
  };
}
