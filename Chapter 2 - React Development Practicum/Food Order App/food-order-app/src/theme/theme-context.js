import { createTheme } from "@mui/material/styles";
import { createContext, useContext } from "react";

const ThemeContext = createContext({
  mode: "light",
  toggleColorMode: () => {},
  theme: createTheme(),
});

export default ThemeContext;

export const useThemeContext = () => useContext(ThemeContext);
