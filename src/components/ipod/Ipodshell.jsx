import Screen from "./Screen";
import ClickWheel from "./ClickWheel";
import useNavigation from "../../hooks/useNavigation";
import useWheel from "../../hooks/useWheel";
import usePlayer from "../../hooks/usePlayer";
import { openSourceSongs } from "../../data/openSourceSongs";

export default function IpodShell() {
  const nav = useNavigation(); // manages screen + activeIndex
  const player = usePlayer(openSourceSongs);

  const wheel = useWheel({
    onUp: () => {
      const len =
        nav.screen === "allsongs"
          ? openSourceSongs.length
          : 4;
      nav.up(len);
    },

    onDown: () => {
      const len =
        nav.screen === "allsongs"
          ? openSourceSongs.length
          : 4;
      nav.down(len);
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
          if (nav.activeIndex === 0) {
            nav.push("allsongs");
          }
          break;

        case "allsongs":
          player.play(nav.activeIndex);
          nav.push("now");
          break;

        default:
          break;
      }
    },

    onBack: () => {
      if (nav.screen === "home") {
        nav.setScreen("locked");
      } else {
        nav.back();
      }
    },

    onNext: player.next,
    onPrev: player.prev,
  });

  return (
    <div className="w-80 h-[520px] bg-neutral-200 rounded-3xl p-4 flex flex-col shadow-2xl">
      {/* SCREEN */}
      <Screen
        nav={nav}
        player={player}
        songs={openSourceSongs}
      />

      {/* CLICK WHEEL */}
      <ClickWheel wheel={wheel} />
    </div>
  );
}
