"use client";

import S from "@/styles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbMoon, TbSunHigh } from "react-icons/tb";

export default function ThemeSwitcher() {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMount(true);
  }, []);
  return mount ? (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      type="button"
      className={` ${S.flxC} h-10 w-25 p-2`}
    >
      <TbSunHigh
        color="#fcd34d"
        size={20}
        className="hidden dark:block h-8 w-8 p-1 hover:scale-110 border border-gray-500 rounded-md focus:outline-none focus:ring-0 focus:ring-gray-200"
      />
      <TbMoon
        color="#2563eb"
        size={20}
        className="dark:hidden h-8 w-8 p-1 hover:scale-110 border border-gray-500 rounded-md focus:outline-none focus:ring-0 focus:ring-gray-200"
      />
    </button>
  ) : null;
}
