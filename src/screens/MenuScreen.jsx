export default function MenuScreen({ items = [], active = 0 }) {
  return (
    <div className="bg-neutral-100 h-full p-2 text-sm">
      {items.map((item, i) => (
        <div
          key={item}
          className={`p-2 rounded flex justify-between items-center ${
            i === active
              ? "bg-blue-600 text-white"
              : "text-neutral-800"
          }`}
        >
          {item}
          {i === active && <span>›</span>}
        </div>
      ))}
    </div>
  );
}
