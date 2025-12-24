import { create } from "zustand";

export const useNavigation = create((set, get) => ({
  stack: ["MENU"],   // history stack
  selectedIndex: 0,

  push: (screen) =>
    set((state) => ({
      stack: [...state.stack, screen],
      selectedIndex: 0,
    })),

  pop: () =>
    set((state) => ({
      stack: state.stack.length > 1
        ? state.stack.slice(0, -1)
        : state.stack,
      selectedIndex: 0,
    })),

  current: () => get().stack[get().stack.length - 1],

  moveUp: (max) =>
    set((s) => ({
      selectedIndex:
        (s.selectedIndex - 1 + max) % max,
    })),

  moveDown: (max) =>
    set((s) => ({
      selectedIndex:
        (s.selectedIndex + 1) % max,
    })),
}));
