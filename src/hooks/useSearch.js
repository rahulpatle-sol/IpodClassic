import { useState } from "react";
import { fetchSaavnSongs } from "../services/musicApi";

export default function useSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function search() {
    if (!query.trim()) return;

    setLoading(true);
    const songs = await fetchSaavnSongs(query);
    setResults(songs);
    setLoading(false);
  }

  return {
    query,
    setQuery,
    results,
    loading,
    search,
  };
}
