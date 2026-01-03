import { useEffect, useRef } from "react";

export default function SearchScreen({ search, activeIndex }) {
  const inputRef = useRef(null);
  const results = search.results || [];

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="h-full p-2 flex flex-col bg-neutral-100">
      {/* SEARCH INPUT */}
      <div className="mb-2">
        <input
          ref={inputRef}
          type="text"
          value={search.query}
          onChange={(e) => search.setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") search.search();
          }}
          placeholder="Search artist or song"
          className="
            w-full
            px-2 py-1
            text-sm
            border border-neutral-400
            rounded
            bg-white
            outline-none
            focus:border-black
          "
        />
      </div>

      {/* LOADING */}
      {search.loading && (
        <div className="text-xs text-gray-500 mb-1">
          Searching...
        </div>
      )}

      {/* RESULTS WINDOW */}
      <div className="relative flex-1 overflow-hidden bg-white border border-neutral-300 rounded">
        {results.length === 0 && !search.loading && (
          <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-400">
            Type name & press Enter
          </div>
        )}

        <ul
          className="absolute w-full transition-transform duration-150"
          style={{
            transform: `translateY(${96 - activeIndex * 32}px)`,
          }}
        >
          {results.map((song, i) => (
            <li
              key={song.id}
              className={`
                px-3 py-1
                text-sm
                truncate
                ${
                  i === activeIndex
                    ? "bg-black text-white"
                    : "text-black"
                }
              `}
            >
              {song.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
