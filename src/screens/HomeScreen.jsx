const items= [
  "Music",
  "Photos",
  "Settings",
  "About",
];

export default function HomeScreen({ nav }) {
  // const items = ["Music"];

  return (
    <div className="p-2">
      {items.map((item, i) => (
        <div
          key={item}
          className={`p-2 rounded ${
            i === nav.activeIndex ? "bg-blue-600 text-white" : ""
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

