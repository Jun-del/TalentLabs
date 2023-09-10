import { useCallback, useEffect, useMemo, useState } from "react";
import { MODE_LOCAL_STORAGE_KEY } from "../constant";
import { createTheme } from "@mui/material";
import { getDesignTokens } from "./theme-color";

export const useColorTheme = () => {
  const [mode, setMode] = useState(getUserDefaultTheme());

  useEffect(() => {
    localStorage.setItem(MODE_LOCAL_STORAGE_KEY, mode);
  }, [mode]);

  const toggleTheme = useCallback(() => {
    setMode((currentMode) => {
      return currentMode === "light" ? "dark" : "light";
    });
  }, []);

  const modifiedTheme = useMemo(() => {
    return createTheme(getDesignTokens(mode));
  }, [mode]);

  return {
    theme: modifiedTheme,
    mode,
    toggleTheme,
  };
};

function getUserDefaultTheme() {
  const localStorageMode = localStorage.getItem(MODE_LOCAL_STORAGE_KEY);

  // Check if the user has previously selected a preference
  if (
    localStorageMode !== null &&
    // Check if the value is a valid theme (light or dark, prevent malicious code)
    (localStorageMode === "dark" || localStorageMode === "light")
  ) {
    return localStorageMode;
  }

  // Else check for user preference
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersDarkMode === true) {
    return "dark";
  }

  return "light";
}
