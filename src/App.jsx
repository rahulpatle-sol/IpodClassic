import IpodShell from "./components/ipod/Ipodshell"
import ClickWheel from "./components/ipod/ClickWheel";

import useWheel from "./hooks/useWheel";
import  useNavigation  from "./hooks/useNavigation";

import MenuScreen from "./screens/MenuScreen";

function App() {
  const nav = useNavigation();

  const wheel = useWheel({
    onUp: nav.up,
    onDown: nav.down,
    onSelect: nav.select,
    onBack: nav.back,
    onNext: () => {},
    onPrev: () => {},
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-800">
      <IpodShell
        screen={
          <MenuScreen
            items={nav.menuItems}
            active={nav.menuIndex}
          />
        }
        wheel={<ClickWheel {...wheel} />}
      />
    </div>
  );
}

export default App;
