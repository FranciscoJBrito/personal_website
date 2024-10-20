"use client";
import { MoonIcon, SunIcon } from "@/assets/icons";
import { useTheme } from "next-themes";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="h-9 w-9 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-100/10"
      onClick={handleThemeChange}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ModeToggle;
