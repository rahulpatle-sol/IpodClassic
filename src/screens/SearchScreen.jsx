export default function SearchScreen({ search, activeIndex }) {
  const results = search.results || [];

  return (
    <div className="h-full flex flex-col bg-neutral-100 p-2">
      <input
        value={search.query}
        onChange={(e) => search.setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && search.search()}
        placeholder="Search song / artist"
        className="mb-2 px-2 py-1 text-sm rounded border"
      />

      <div className="flex-1 overflow-hidden relative">
        <ul
          className="absolute w-full transition-transform duration-200"
          style={{
            transform: `translateY(${60 - activeIndex * 36}px)`
          }}
        >
          {results.map((item, i) => (
            <li
              key={item.id}
              className={`flex items-center gap-2 px-2 py-2 rounded ${
                i === activeIndex ? "bg-black text-white" : ""
              }`}
            >
              <img
                src={item.image?.[0]?.url}
                className="w-8 h-8 rounded"
              />
              <div className="text-sm truncate">
                {item.title}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
