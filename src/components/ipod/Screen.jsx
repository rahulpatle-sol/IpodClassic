import LockScreen from "../../screens/LockScreen";
import HomeScreen from "../../screens/HomeScreen";
import MenuScreen from "../../screens/MenuScreen";
import AllSongsScreen from "../../screens/AllSongScreen";
import NowPlayingScreen from "../../screens/NowplayingScreen";
import SearchScreen from "../../screens/SearchScreen";
import PlaylistScreen from "../../screens/PlaylistScreen";

export default function Screen({ nav, songs, loading, player, search }) {
  switch (nav.screen) {
    case "locked":
      return <LockScreen />;

    case "home":
      return <HomeScreen nav={nav} />;

    case "music":
      return (
        <MenuScreen
          items={["All Songs", "Search"]}
          active={nav.activeIndex}
        />
      );

    case "allsongs":
      return (
        <AllSongsScreen
          songs={songs}
          activeIndex={nav.activeIndex}
        />
      );

    case "search":
      return (
        <SearchScreen
          search={search}
          activeIndex={nav.activeIndex}
        />
      );
case "playlist":
      return (
        <PlaylistScreen
          player={player}
          activeIndex={nav.activeIndex}
        />
      );
    case "now":
      return <NowPlayingScreen player={player} />;

    default:
      return null;
  }
}
