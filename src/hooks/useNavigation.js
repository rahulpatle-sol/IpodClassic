import { useNavigationStore } from "../store/navigation.store";

const MENU = [
  "Music",
  "Playlists",
  "Search",
  "Now Playing",
  "Settings",
];

export function useNavigation() {
  const {
    screen,
    menuIndex,
    setMenuIndex,
    goTo,
    goBack,
  } = useNavigationStore();

  return {
    screen,
    menuIndex,
    menuItems: MENU,

    up: () =>
      setMenuIndex((i) => (i > 0 ? i - 1 : i)),

    down: () =>
      setMenuIndex((i) =>
        i < MENU.length - 1 ? i + 1 : i
      ),

    select: () => goTo(MENU[menuIndex].toUpperCase()),

    back: goBack,
  };
}
