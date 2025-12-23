import MenuScreen from "./MenuScreen";
import MusicScreen from "./MusicScreen";
import SettingsScreen from "./SettingsScreen";

export default function ScreenRouter({ screen, menuItems, menuIndex }) {
  if (screen === "MENU")
    return <MenuScreen items={menuItems} active={menuIndex} />;

  if (screen === "MUSIC") return <MusicScreen />;

  if (screen === "SETTINGS") return <SettingsScreen />;

  return <div className="p-2">Empty</div>;
}
