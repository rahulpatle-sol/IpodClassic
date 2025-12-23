export default function NowPlayingScreen({ song, isPlaying }) {
  if (!song) return null;

  return (
    <div className="h-full flex flex-col items-center justify-center text-center px-4">
      <div className="text-sm font-semibold">{song.title}</div>
      <div className="text-xs text-neutral-600">{song.artist}</div>

      <div className="mt-4 text-lg">
        {isPlaying ? "▶ Playing" : "❚❚ Paused"}
      </div>
    </div>
  );
}
