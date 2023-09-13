import { createTheme } from "@mui/material/styles";
import { createContext, useContext } from "react";

const ThemeContext = createContext({
  theme: createTheme(),
  mode: "light",
  toggleColorMode: () => {},
});

export default ThemeContext;

export const useThemeContext = () => useContext(ThemeContext);
