export default function AllSongsScreen({ songs, activeIndex }) {
  const ITEM_HEIGHT = 32;
  const VISIBLE_ITEMS = 6;

  // iPod-style centered scroll
  const offset =
    Math.max(0, activeIndex - Math.floor(VISIBLE_ITEMS / 2)) *
    ITEM_HEIGHT;

  return (
    <div className="h-full bg-white border border-black/10 rounded overflow-hidden">
      {/* HEADER */}
      <div className="px-3 py-1 text-xs font-semibold border-b bg-neutral-100">
        All Songs
      </div>

      {/* LIST WINDOW */}
      <div
        className="relative overflow-hidden"
        style={{ height: VISIBLE_ITEMS * ITEM_HEIGHT }}
      >
        <ul
          className="absolute w-full transition-transform duration-150 ease-out"
          style={{
            transform: `translateY(-${offset}px)`,
          }}
        >
          {songs.map((s, i) => (
            <li
              key={s.id}
              className={`px-3 flex items-center text-sm truncate`}
              style={{ height: ITEM_HEIGHT }}
            >
              <div
                className={`w-full px-2 py-1 rounded ${
                  i === activeIndex
                    ? "bg-black text-white"
                    : "text-black"
                }`}
              >
                {s.title}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
