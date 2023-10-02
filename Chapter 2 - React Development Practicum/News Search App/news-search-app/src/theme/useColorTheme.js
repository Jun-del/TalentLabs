import { createTheme } from "@mui/material";
import { useState, useMemo, useEffect } from "react";
import { getDesignTokens } from "./theme";
import { DARK_MODE_LOCAL_STORAGE_KEY } from "../constant/constants";

export const useColorTheme = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const lightDarkMode = localStorage.getItem(DARK_MODE_LOCAL_STORAGE_KEY);
    if (lightDarkMode && ["light", "dark"].includes(lightDarkMode)) {
      setMode(lightDarkMode);
    } else {
      const isDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme:dark)").matches;
      setMode(isDarkMode ? "dark" : "light");
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    localStorage.setItem(DARK_MODE_LOCAL_STORAGE_KEY, newMode);
  };

  const modifiedTheme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode],
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};
