import { useEffect, useState } from "react";

export default function LockScreen() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const mins = time.getMinutes().toString().padStart(2, "0");

  return (
    <div className="h-full flex flex-col items-center justify-center bg-black text-blue-300 font-mono">
      <div className="text-6xl tracking-widest">
        {hours}:{mins}
      </div>
      <div className="mt-4 text-xs text-neutral-400">
        Press MENU to unlock
      </div>
    </div>
  );
}
