import LockScreen from "../../screens/LockScreen";
import HomeScreen from "../../screens/HomeScreen";
import MusicMenuScreen from "../../screens/MenuScreen";
import AllSongsScreen from "../../screens/AllSongScreen";
import  NowPlayingScreen from  "../../screens/NowplayingScreen"

export default function Screen({ nav, player, songs }) {
  switch (nav.screen) {
    case "locked":
      return <LockScreen />;
 
    case "home":
      return <HomeScreen nav={nav} />;

    case "music":
      return <MusicMenuScreen nav={nav} />;

    case "allsongs":
      return <AllSongsScreen nav={nav} songs={songs} />;

    case "now":
      return <NowPlayingScreen player={player} />;

    default:
      return (
        <div className="h-full bg-black text-white flex items-center justify-center">
          NO SCREEN
        </div>
      );
  }
}
