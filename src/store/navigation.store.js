import { useState } from "react";

export default function useNavigation() {
  const [stack, setStack] = useState(["locked"]);
  const [activeIndex, setActiveIndex] = useState(0);

  const screen = stack[stack.length - 1];

  return {
    screen,
    activeIndex,

    setScreen(s) {
      setStack([s]);
      setActiveIndex(0);
    },

    push(s) {
      setStack((prev) => [...prev, s]);
      setActiveIndex(0);
    },

    back() {
      setStack((prev) => prev.slice(0, -1));
      setActiveIndex(0);
    },

    up(len) {
      setActiveIndex((i) => (i - 1 + len) % len);
    },

    down(len) {
      setActiveIndex((i) => (i + 1) % len);
    },
  };
}   