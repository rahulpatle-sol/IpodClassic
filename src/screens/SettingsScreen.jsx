import { useTheme } from "../store/theme.store";

export default function SettingsScreen() {
  const { theme, setTheme } = useTheme();

  const themes = ["classic", "dark", "modern"];

  return (
    <div className="p-3 space-y-2">
      {themes.map((t) => (
        <div
          key={t}
          onClick={() => setTheme(t)}
          className={`p-2 rounded cursor-pointer ${
            theme === t ? "bg-blue-600 text-white" : ""
          }`}
        >
          {t.toUpperCase()}
        </div>
      ))}
    </div>
  );
}
