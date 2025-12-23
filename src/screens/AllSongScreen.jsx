export default function AllSongsScreen({ songs, nav, player }) {
  return (
    <div className="bg-neutral-100 h-full p-2 overflow-y-auto">
      {songs.map((song, i) => (
        <div
          key={song.id}
          className={`p-2 rounded text-sm ${
            i === nav.activeIndex
              ? "bg-blue-600 text-white"
              : ""
          }`}
        >
          {song.title}
          <div className="text-xs opacity-70">
            {song.artist}
          </div>
        </div>
      ))}
    </div>
  );
}
