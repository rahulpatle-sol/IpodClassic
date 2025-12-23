import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  currentSong: null,
  playing: false,
  currentTime: 0,
  duration: 0,

  setSong: (song) =>
    set({
      currentSong: song,
      playing: true,
      currentTime: 0,
    }),

  setPlaying: (value) =>
    set({ playing: value }),

  setTime: (time) =>
    set({ currentTime: time }),

  setDuration: (duration) =>
    set({ duration }),
}));
