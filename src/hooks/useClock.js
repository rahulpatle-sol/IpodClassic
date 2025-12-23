import { useEffect, useState } from "react";

export default function useClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return time;
}
