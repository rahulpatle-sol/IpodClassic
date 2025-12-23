import { useState } from "react";
import ListItem from "../components/ipod/ListItem";

export default function MusicScreen({ songs = [] }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="p-1">
      {songs.map((song, index) => (
        <ListItem
          key={song.id}
          text={song.title}
          selected={index === selected}
        />
      ))}
    </div>
  );
}
