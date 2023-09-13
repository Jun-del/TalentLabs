import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "../../theme/theme-context";

const ThemeToggle = (props) => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <IconButton
      {...props}
      aria-label={mode === "dark" ? "dark mode" : "light mode"}
      onClick={toggleTheme}
    >
      {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
