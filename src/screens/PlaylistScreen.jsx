export default function PlaylistScreen({ playlists, activeIndex }) {
  if (!playlists.length) {
    return (
      <div className="h-full flex items-center justify-center text-sm text-gray-400">
        No Playlists
      </div>
    );
  }

  return (
    <div className="p-2">
      {playlists.map((p, i) => (
        <div
          key={p.id}
          className={`p-2 ${
            i === activeIndex ? "bg-black text-white" : ""
          }`}
        >
          {p.name}
        </div>
      ))}
    </div>
  );
}
