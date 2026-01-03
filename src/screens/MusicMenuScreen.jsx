export default function MusicMenuScreen({ items, activeIndex }) {


  console.log({ items, activeIndex });
  return (
    <div className="h-full px-3 py-2 text-[13px] font-medium text-neutral-800">
      <div className="relative h-full overflow-hidden">

        {/* Top fade */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-neutral-200 to-transparent z-10" />

        <ul className="space-y-[2px]">
          {items.map((item, i) => (
            <li
              key={item.id || item}
              className={`
                px-2 py-1.5 rounded-md
                transition-all duration-150
                ${
                  i === activeIndex
                    ? "bg-neutral-900 text-white shadow-sm scale-[1.02]"
                    : "text-neutral-700"
                }
              `}
            >
              <span className="truncate block">
                {item.title || item}
              </span>
            </li>
          ))}
        </ul>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-neutral-200 to-transparent z-10" />
      </div>
    </div>
  );
}
