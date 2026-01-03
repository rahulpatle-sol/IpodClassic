export default function PlaylistScreen({
  title = "Playlist",
  songs = [],
  activeIndex = 0,
}) {
  return (
    <div className="h-full bg-neutral-100 flex flex-col">
      {/* HEADER */}
      <div className="px-2 py-1 text-xs font-semibold border-b border-neutral-300">
        {title}
      </div>

      {/* LIST WINDOW */}
      <div className="relative flex-1 overflow-hidden">
        <ul
          className="absolute w-full transition-transform duration-150"
          style={{
            transform: `translateY(${96 - activeIndex * 32}px)`,
          }}
        >
          {songs.map((song, i) => (
            <li
              key={song.id || i}
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
