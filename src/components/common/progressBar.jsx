export default function ProgressBar({ current = 0, total = 100 }) {
  const percentage = total === 0 ? 0 : (current / total) * 100;

  return (
    <div className="w-full h-2 border border-neutral-400 bg-neutral-200">
      <div
        className="h-full bg-black"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
