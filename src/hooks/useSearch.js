//  serch  logic  


import { useMemo, useState } from "react";

export default function useSearch(songs = []) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query) return songs;
    return songs.filter(
      (s) =>
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.artist?.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, songs]);

  return {
    query,
    setQuery,
    results,
  };
}
