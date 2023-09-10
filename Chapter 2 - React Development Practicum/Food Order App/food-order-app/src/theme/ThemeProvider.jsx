import PropTypes from "prop-types";
import ThemeContext from "./theme-context";
import { useColorTheme } from "./useColorTheme";

function ThemeProvider({ children }) {
  const value = useColorTheme();

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
