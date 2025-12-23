import { useState } from "react";
import ListItem from "../components/ipod/ListItem";

const MENU_ITEMS = [
  "Music",
  "Playlists",
  "Search",
  "Now Playing",
  "Settings",
];

export default function MenuScreen() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="p-1">
      {MENU_ITEMS.map((item, index) => (
        <ListItem
          key={item}
          text={item}
          selected={index === selected}
        />
      ))}
    </div>
  );
}
