import { useState } from "react";

export default function useNavigation() {
  const [screen, setScreen] = useState("locked");
  const [activeIndex, setActiveIndex] = useState(0);
  const stack = ["locked"];

  const push = (next) => {
    stack.push(next);
    setScreen(next);
    setActiveIndex(0);
  };

  const back = () => {
    if (stack.length > 1) {
      stack.pop();
      setScreen(stack[stack.length - 1]);
      setActiveIndex(0);
    }
  };

  const up = (len = 4) => {
    setActiveIndex((i) => (i - 1 + len) % len);
  };

  const down = (len = 4) => {
    setActiveIndex((i) => (i + 1) % len);
  };

  return {
    screen,
    activeIndex,
    setScreen,
    push,
    back,
    up,
    down,
  };
}
