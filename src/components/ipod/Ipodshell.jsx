import { useEffect, useState } from "react";
import Screen from "./Screen";
import ClickWheel from "./ClickWheel";
import useNavigation from "../../hooks/useNavigation";
import useWheel from "../../hooks/useWheel";
import usePlayer from "../../hooks/usePlayer";
import { fetchSaavnSongs } from "../../services/musicApi";
import useSearch from "../../hooks/useSearch";

export default function IpodShell() {
  const nav = useNavigation();
  const search = useSearch();

  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSaavnSongs("arijit").then((res) => {
      setSongs(res);
      setLoading(false);
    });
  }, []);

  const player = usePlayer(songs);

  const wheel = useWheel({
    onUp: () => {
      const len =
        nav.screen === "allsongs"
          ? songs.length
          : nav.screen === "search"
          ? search.results.length
          : 4;
      nav.up(len || 1);
    },

    onDown: () => {
      const len =
        nav.screen === "allsongs"
          ? songs.length
          : nav.screen === "search"
          ? search.results.length
          : 4;
      nav.down(len || 1);
    },

    onSelect: () => {
      switch (nav.screen) {
        case "locked":
          nav.setScreen("home");
          break;

        case "home":
          nav.push("music");
          break;

        case "music":
          if (nav.activeIndex === 0) nav.push("allsongs");
          if (nav.activeIndex === 1) nav.push("search");
          break;

        case "search":
          if (search.results.length === 0) {
            search.search();
          } else {
            player.setPlaylist(search.results);
            player.play(nav.activeIndex);
            nav.push("now");
          }
          break;

        case "allsongs":
          player.play(nav.activeIndex);
          nav.push("now");
          break;
      }
    },

    onBack: () => {
      if (nav.screen === "home") nav.setScreen("locked");
      else nav.back();
    },

    onNext: player.next,
    onPrev: player.prev,
  });

  return (
    <div className="w-80 h-[520px] bg-neutral-200 rounded-3xl p-4 flex flex-col shadow-2xl">
      <Screen
        nav={nav}
        songs={songs}
        loading={loading}
        player={player}
        search={search}
      />
      <ClickWheel wheel={wheel} />
    </div>
  );
}
