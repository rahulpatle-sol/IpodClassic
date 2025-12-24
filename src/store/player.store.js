import { create } from "zustand";

export const usePlayer = create((set) => ({
  current: null,
  playing: false,
  audio: new Audio(),

  play: (song) => {
    const audio = new Audio(song.url);
    audio.play();

    set({
      current: song,
      playing: true,
      audio,
    });
  },

  stop: () =>
    set((s) => {
      s.audio.pause();
      return { playing: false };
    }),
}));
