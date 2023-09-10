import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "../theme/theme-context";

const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <IconButton
      aria-label={mode === "dark" ? "dark mode" : "light mode"}
      onClick={toggleTheme}
    >
      {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
