export default function NowPlaying({ player }) {

  console.log("Now Playing Screen Rendered");
  if (!player.current) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-full p-4 flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-sm">
          {player.current.title}
        </h3>
        <p className="text-xs text-gray-600">
          {player.current.artist}
        </p>
      </div>

      <div className="text-center text-xs text-gray-500">
        ▶ Playing
      </div>
    </div>
  );
}
