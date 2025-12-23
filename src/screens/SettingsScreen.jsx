import ListItem from "../components/ipod/ListItem";

const SETTINGS = [
  "Theme",
  "About",
  "Reset Library",
];

export default function SettingsScreen() {
  return (
    <div className="p-1">
      {SETTINGS.map((item, index) => (
        <ListItem
          key={item}
          text={item}
          selected={index === 0}
        />
      ))}
    </div>
  );
}
