import { useRef, useState, useEffect } from "react";

export default function usePlayer(songs = []) {
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = async (index = currentIndex) => {
    if (!songs[index] || !audioRef.current) return;

    setCurrentIndex(index);
    setIsPlaying(true);
  };

  const pause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const toggle = () => {
    isPlaying ? pause() : play();
  };

  const next = () => {
    play((currentIndex + 1) % songs.length);
  };

  const prev = () => {
    play((currentIndex - 1 + songs.length) % songs.length);
  };

  // 🔥 ACTUAL AUDIO CONTROL
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.src = songs[currentIndex]?.url || "";

    if (isPlaying) {
      audioRef.current
        .play()
        .catch((err) => console.warn("Play blocked:", err));
    }
  }, [currentIndex, isPlaying, songs]);

  return {
    audioRef,
    currentIndex,
    isPlaying,
    play,
    pause,
    toggle,
    next,
    prev,
    currentSong: songs[currentIndex],
  };
}
