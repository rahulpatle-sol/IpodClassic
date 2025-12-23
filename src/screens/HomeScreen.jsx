const HOME_ITEMS = [
  "Music",
  "Photos",
  "Settings",
  "About",
];

export default function HomeScreen({ nav }) {
  return (
    <div className="bg-black text-white h-full p-3">
      <div className="text-xs opacity-60 mb-2">iPod</div>

      {HOME_ITEMS.map((item, i) => (
        <div
          key={item}
          className={`px-3 py-2 rounded-md mb-1 text-sm
            ${
              i === nav.activeIndex
                ? "bg-blue-500 text-white"
                : "text-gray-300"
            }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
