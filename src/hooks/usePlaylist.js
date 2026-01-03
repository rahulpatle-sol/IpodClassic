import { useState } from "react";

export default function usePlaylists() {
  const [playlists, setPlaylists] = useState([]);

  function savePlaylist(name, songs) {
    setPlaylists((p) => [
      ...p,
      {
        id: Date.now(),
        name,
        songs,
      },
    ]);
  }

  return {
    playlists,
    savePlaylist,
  };
}
