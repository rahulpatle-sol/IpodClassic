const MUSIC_MENU = [
  "All Songs",
  "Artists",
  "Albums",
  "Playlists",
];

export default function MusicMenuScreen({ nav }) {
  console.log({ nav });
  return (
    <div className="bg-neutral-100 h-full p-2">
      {MUSIC_MENU.map((item, i) => (
        <div
          key={item}
          className={`p-2 rounded ${
            i === nav.activeIndex
              ? "bg-blue-600 text-white"
              : ""
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
