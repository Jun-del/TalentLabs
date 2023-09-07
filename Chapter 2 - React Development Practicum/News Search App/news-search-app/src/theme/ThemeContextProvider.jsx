import PropTypes from "prop-types";
import { createContext, useContext } from "react";
import { useColorTheme } from "./useColorTheme";
import { createTheme } from "@mui/material";

export const ThemeContext = createContext({
  mode: "light",
  toggleColorMode: () => {},
  theme: createTheme(),
});

const ThemeContextProvider = ({ children }) => {
  const value = useColorTheme();

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// eslint-disable-next-line
export const useThemeContext = () => {
  return useContext(ThemeContext);
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeContextProvider;
