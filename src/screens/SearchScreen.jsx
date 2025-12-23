import ListItem from "../components/ipod/ListItem";
import useSearch from "../hooks/useSearch";

export default function SearchScreen({ songs }) {
  const { query, setQuery, results } = useSearch(songs);

  return (
    <div className="p-1 text-sm">
      <div className="px-1 mb-1">
        Search: <span className="font-semibold">{query || "_"}</span>
      </div>

      {results.map((song, index) => (
        <ListItem
          key={song.id}
          text={song.title}
          selected={index === 0}
        />
      ))}
    </div>
  );
}
