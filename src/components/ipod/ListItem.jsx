export default function ListItem({ text, selected }) {
  return (
    <div
      className={`px-2 py-1 text-sm flex items-center ${
        selected
          ? "bg-black text-white"
          : "bg-transparent text-black"
      }`}
    >
      {selected && <span className="mr-1">▶</span>}
      <span className="truncate">{text}</span>
    </div>
  );
}
