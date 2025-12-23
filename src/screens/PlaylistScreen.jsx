import ListItem from "../components/ipod/ListItem";

export default function PlaylistScreen({ playlists = [] }) {
  return (
    <div className="p-1">
      {playlists.length === 0 && (
        <div className="text-xs text-center mt-8">
          No Playlists
        </div>
      )}

      {playlists.map((pl, index) => (
        <ListItem
          key={pl.id}
          text={pl.name}
          selected={index === 0}
        />
      ))}
    </div>
  );
}
