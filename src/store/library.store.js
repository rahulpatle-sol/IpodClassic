import { create } from "zustand";

export const useLibraryStore = create((set, get) => ({
  songs: [],
  liked: [],
  playlists: [],

  setSongs: (songs) => set({ songs }),

  likeSong: (songId) =>
    set((state) => ({
      liked: state.liked.includes(songId)
        ? state.liked
        : [...state.liked, songId],
    })),

  unlikeSong: (songId) =>
    set((state) => ({
      liked: state.liked.filter((id) => id !== songId),
    })),

  createPlaylist: (name) =>
    set((state) => ({
      playlists: [
        ...state.playlists,
        {
          id: Date.now(),
          name,
          songIds: [],
        },
      ],
    })),

  addToPlaylist: (playlistId, songId) =>
    set((state) => ({
      playlists: state.playlists.map((pl) =>
        pl.id === playlistId
          ? {
              ...pl,
              songIds: [...pl.songIds, songId],
            }
          : pl
      ),
    })),
}));
