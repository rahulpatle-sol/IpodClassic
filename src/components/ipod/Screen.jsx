import StatusBar from "./StatusBar";
import MenuScreen from "../../screens/MenuScreen";

export default function Screen() {
  return (
    <div className="bg-neutral-100 border border-neutral-400 rounded-md h-[260px] overflow-hidden">
      <StatusBar />
      <MenuScreen />
    </div>
  );
}
