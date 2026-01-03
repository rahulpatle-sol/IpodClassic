export default function NowPlayingScreen({ player }) {
  const song = player.current;
console.log(song);
console.log(player);
  if (!song) {
    return (
      <div className="h-full flex items-center justify-center text-xs text-gray-500">
        No song playing
      </div>
    );
  }

  const image =
    song.image?.[2]?.link ||
    song.image?.[1]?.link ||
    song.image?.[0]?.link ||
    `https://images.unsplash.com/photo-1609667083964-f3dbecb7e7a5?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;
  return (
    <div className="h-full px-4 py-3 bg-neutral-100 flex flex-col">
      {/* HEADER */}
      <div className="text-center mb-3">
        <div className="text-[10px] uppercase tracking-wide text-gray-500 truncate">
          {song.artist || "Unknown Artist"}
        </div>
        <div className="text-sm font-semibold truncate">
          {song.title}
        </div>
      </div>

      {/* ALBUM ART */}
      <div className="flex justify-center flex-1 items-center">
        {image ? (
          <img
            src={image}
            alt={song.title}
            className="w-36 h-36 object-cover rounded-sm border border-neutral-400 shadow-sm"
            draggable={false}
          />
        ) : (
          <div className="w-36 h-36 bg-neutral-300 border border-neutral-400 flex items-center justify-center text-xs text-gray-600">
            No Art
          </div>
        )}
      </div>

      {/* PROGRESS */}
      <div className="mt-4">
        <div className="h-[3px] bg-neutral-300 rounded overflow-hidden">
          <div
            className="h-full bg-black transition-all"
            style={{ width: `${player.progress ?? 0}%` }}
          />
        </div>

        <div className="flex justify-between text-[10px] text-gray-600 mt-1 font-mono">
          <span>{player.currentTime || "0:00"}</span>
          <span>{player.duration || "0:00"}</span>
        </div>
      </div>
    </div>
  );
}
