// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "dark" ? (
        <MdDarkMode
          className="cursor-pointer"
          size={24}
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdLightMode
          className="cursor-pointer"
          size={24}
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
