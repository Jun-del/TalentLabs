import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useThemeContext } from "../../../theme/theme-context";

const Sidebar = () => {
  const { theme } = useThemeContext();

  const reversedBackgroundColor = theme.palette.getContrastText(
    theme.palette.background.default
  );
  const reversedTextColor = theme.palette.getContrastText(
    theme.palette.text.primary
  );

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ flex: 1 }}
      bgcolor={reversedBackgroundColor}
    >
      <Typography variant="h4" noWrap color={reversedTextColor}>
        <Box sx={{ textAlign: "center", m: 1 }}>Dashboard</Box>
      </Typography>
    </Box>
  );
};

export default Sidebar;
