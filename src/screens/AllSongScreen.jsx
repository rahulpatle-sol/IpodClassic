export default function AllSongsScreen({ songs = [], activeIndex = 0 }) {
  const ITEM_HEIGHT = 32;
  const VISIBLE = 7;

  const offset =
    Math.max(0, activeIndex - Math.floor(VISIBLE / 2)) * ITEM_HEIGHT;

  return (
    <div className="relative h-full overflow-hidden">
      <ul
        className="absolute w-full transition-transform duration-200"
        style={{ transform: `translateY(-${offset}px)` }}
      >
        {songs.map((s, i) => (
          <li
            key={s.id}
            className={`px-3 py-1 text-sm ${
              i === activeIndex
                ? "bg-black text-white rounded"
                : ""
            }`}
          >
            {s.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
