import { createTheme } from "@mui/material";
import { useState, useMemo } from "react";
import theme from "./theme";

export const useColorTheme = () => {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const modifiedTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        palette: {
          ...theme.palette,
          mode,
        },
      }),
    [mode],
  );

  // * For custom theme
  // const modifiedTheme = React.useMemo(
  //   () => createTheme(getDesignTokens(mode)),
  //   [mode]
  // );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};
