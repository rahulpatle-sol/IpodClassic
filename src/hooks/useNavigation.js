import { useState } from "react";

const MENUS = {
  home: ["Music", "Settings"],
  music: ["All Songs", "Search"],
};

export default function useNavigation() {
  const [stack, setStack] = useState(["locked"]);
  const [activeIndex, setActiveIndex] = useState(0);

  const screen = stack[stack.length - 1];

  const menuItems = MENUS[screen] || [];

  return {
    screen,
    activeIndex,
    menuItems,

    setScreen(s) {
      setStack([s]);
      setActiveIndex(0);
    },

    push(s) {
      setStack((prev) => [...prev, s]);
      setActiveIndex(0);
    },

    back() {
      setStack((prev) =>
        prev.length > 1 ? prev.slice(0, -1) : prev
      );
      setActiveIndex(0);
    },

    up() {
      const len = menuItems.length || 1;
      setActiveIndex((i) => (i - 1 + len) % len);
    },

    down() {
      const len = menuItems.length || 1;
      setActiveIndex((i) => (i + 1) % len);
    },
  };
}
