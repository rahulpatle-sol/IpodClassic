const MUSIC_MENU = [
  "All Songs",
  "Artists",
  "Albums",
  "Playlists",
];

export default function MusicMenuScreen({ nav }) {
  return (
    <div className="h-full bg-neutral-100 p-2">
      <div className="text-xs font-semibold text-neutral-500 mb-2">
        Music
      </div>

      {MUSIC_MENU.map((item, index) => (
        <div
          key={item}
          className={`px-3 py-2 rounded text-sm transition-colors ${
            nav.activeIndex === index
              ? "bg-blue-600 text-white"
              : "text-neutral-800"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
