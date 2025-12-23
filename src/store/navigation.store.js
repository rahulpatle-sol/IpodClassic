import { useState } from "react";

export default function useNavigation(menuItems) {
  const [screen, setScreen] = useState("locked");
  const [activeIndex, setActiveIndex] = useState(0);

  const up = () =>
    setActiveIndex((i) => (i > 0 ? i - 1 : menuItems.length - 1));

  const down = () =>
    setActiveIndex((i) => (i + 1) % menuItems.length);

  const select = () => {
    if (screen === "home") {
      setScreen(menuItems[activeIndex].toLowerCase());
    }
  };

  const back = () => {
    if (screen !== "home") setScreen("home");
  };

  return {
    screen,
    setScreen,
    activeIndex,
    up,
    down,
    select,
    back,
  };
}
