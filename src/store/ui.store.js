import { create } from "zustand";

export const useUIStore = create((set) => ({
  selectedIndex: 0,

  setSelectedIndex: (index) =>
    set({ selectedIndex: index }),

  moveUp: () =>
    set((state) => ({
      selectedIndex:
        state.selectedIndex > 0
          ? state.selectedIndex - 1
          : 0,
    })),

  moveDown: (max) =>
    set((state) => ({
      selectedIndex:
        state.selectedIndex < max - 1
          ? state.selectedIndex + 1
          : state.selectedIndex,
    })),
}));
