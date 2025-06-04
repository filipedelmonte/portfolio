import { useEffect, useState } from "react";

export const useTheme = () => {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mediaQueryListener = (e: MediaQueryListEvent) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", mediaQueryListener);
    return () => darkThemeMq.removeEventListener("change", mediaQueryListener);
  }, []);

  return isDarkTheme;
};
