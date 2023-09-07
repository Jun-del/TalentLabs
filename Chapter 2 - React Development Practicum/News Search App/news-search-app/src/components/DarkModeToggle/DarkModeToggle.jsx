import { useThemeContext } from "../../theme/ThemeContextProvider";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const DarkModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <IconButton
      aria-label={mode === "dark" ? "dark mode" : "light mode"}
      onClick={toggleColorMode}
    >
      {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default DarkModeToggle;
