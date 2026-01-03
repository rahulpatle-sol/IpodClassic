import { useEffect, useRef } from "react";

export default function SearchScreen({ search, activeIndex }) {
  const inputRef = useRef(null);
  const results = search.results || [];

  // auto focus input when screen opens
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="h-full p-2 flex flex-col">
      {/* SEARCH INPUT */}
      <input
        ref={inputRef}
        type="text"
        value={search.query}
        onChange={(e) => search.setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            search.search();
          }
        }}
        placeholder="Search artist or song"
        className="mb-2 px-2 py-1 text-sm border rounded outline-none"
      />

      {/* LOADING */}
      {search.loading && (
        <div className="text-xs text-gray-500">Searching...</div>
      )}

      {/* RESULTS */}
      <div className="flex-1 overflow-hidden">
        {results.length === 0 && !search.loading && (
          <div className="text-xs text-gray-400">
            Type name & press Enter
          </div>
        )}

        <ul
          className="transition-transform duration-200"
          style={{
            transform: `translateY(${80 - activeIndex * 28}px)`,
          }}
        >
          {results.map((song, i) => (
            <li
              key={song.id}
              className={`px-2 py-1 text-sm rounded ${
                i === activeIndex
                  ? "bg-black text-white"
                  : ""
              }`}
            >
              {song.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
