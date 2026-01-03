import { useEffect, useRef, useState } from "react";

export default function usePlayer(initialSongs = []) {
  const audioRef = useRef(new Audio());

  const [playlist, setPlaylist] = useState(initialSongs);
  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState(null);

  // play song when index or playlist changes
  useEffect(() => {
    if (!playlist.length) return;

    const song = playlist[index];
    if (!song?.url) return;

    audioRef.current.src = song.url;
    audioRef.current.play();
    setCurrent(song);
  }, [index, playlist]);

  return {
    current,
    playlist,
    index,

    play(i) {
      setIndex(i);
    },

    next() {
      setIndex((i) => (i + 1) % playlist.length);
    },

    prev() {
      setIndex((i) =>
        i === 0 ? playlist.length - 1 : i - 1
      );
    },

    setPlaylist(songs) {
      setPlaylist(songs);
      setIndex(0);
    },
  };
}
