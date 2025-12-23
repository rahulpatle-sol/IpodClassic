import { create } from "zustand";

export const useNavigationStore = create((set) => ({
  screen: "MENU",
  menuIndex: 0,
  history: [],

  setMenuIndex: (fn) =>
    set((s) => ({ menuIndex: fn(s.menuIndex) })),

  goTo: (screen) =>
    set((s) => ({
      history: [...s.history, s.screen],
      screen,
    })),

  goBack: () =>
    set((s) => ({
      screen: s.history.pop() || "MENU",
      history: [...s.history],
    })),
}));
