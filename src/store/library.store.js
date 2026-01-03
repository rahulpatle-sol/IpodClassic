import { useEffect, useState } from "react";
import { fetchSaavnSongs } from "../services/musicApi";

export function useLibrary() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSaavnSongs("arijit").then(setSongs);
  }, []);

  return { songs };
}
