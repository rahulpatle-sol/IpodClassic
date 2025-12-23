import Screen from "./Screen";
import ClickWheel from "./ClickWheel";

export default function IpodShell() {
  return (
    <div className="w-[320px] h-[520px] bg-neutral-200 rounded-3xl p-4 shadow-2xl flex flex-col justify-between">
      <Screen />
      <ClickWheel />
    </div>
  );
}
