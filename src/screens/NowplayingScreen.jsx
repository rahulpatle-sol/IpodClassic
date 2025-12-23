import ProgressBar from "../components/common/ProgressBar";

export default function NowPlayingScreen({
  song,
  currentTime,
  duration,
  playing,
}) {
  if (!song) {
    return (
      <div className="flex items-center justify-center h-full text-xs">
        No Song Playing
      </div>
    );
  }

  return (
    <div className="p-2 text-sm flex flex-col gap-2">
      <div className="font-semibold truncate">{song.title}</div>
      <div className="text-xs truncate">{song.artist}</div>

      <ProgressBar current={currentTime} total={duration} />

      <div className="text-xs flex justify-between">
        <span>{Math.floor(currentTime)}s</span>
        <span>{Math.floor(duration)}s</span>
      </div>

      <div className="text-xs">
        {playing ? "▶ Playing" : "❚❚ Paused"}
      </div>
    </div>
  );
}
