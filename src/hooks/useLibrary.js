//  songs .playlist managment 


import { useState } from "react";

export default function useLibrary(initialSongs = []) {
  const [songs, setSongs] = useState(initialSongs);
  const [liked, setLiked] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const likeSong = (songId) => {
    setLiked((prev) =>
      prev.includes(songId) ? prev : [...prev, songId]
    );
  };

  const unlikeSong = (songId) => {
    setLiked((prev) => prev.filter((id) => id !== songId));
  };

  const createPlaylist = (name) => {
    setPlaylists((prev) => [
      ...prev,
      { id: Date.now(), name, songIds: [] },
    ]);
  };

  return {
    songs,
    setSongs,
    liked,
    likeSong,
    unlikeSong,
    playlists,
    createPlaylist,
  };
}
