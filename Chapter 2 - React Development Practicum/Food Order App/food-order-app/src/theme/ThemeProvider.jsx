import PropTypes from "prop-types";
import ThemeContext from "./theme-context";
import { useColorTheme } from "../hooks/useColorTheme";

function ThemeProvider({ children }) {
  const value = useColorTheme();

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
