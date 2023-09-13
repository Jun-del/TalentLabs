import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useItemscontext } from "../../store/items-context";
import { useThemeContext } from "../../theme/theme-context";
import ThemeToggle from "../custom-components/ThemeToggle";

const Footer = () => {
  const { switchPage, togglePage } = useItemscontext();
  const { theme } = useThemeContext();

  // * Reverse the footer color
  const reversedBackgroundColor = theme.palette.getContrastText(
    theme.palette.background.default
  );
  const reversedTextColor = theme.palette.getContrastText(
    theme.palette.text.primary
  );

  return (
    <Box
      width="100%"
      bgcolor={reversedBackgroundColor}
      color={reversedTextColor}
    >
      <Stack spacing={2} alignItems="center">
        <ThemeToggle
          sx={{
            bgcolor: reversedBackgroundColor,
            color: reversedTextColor,
          }}
        />
        <img src="" alt="Some image" />
        <Button variant="contained" sx={{ width: "30%" }} onClick={togglePage}>
          {switchPage ? "Admin" : "User"}
        </Button>
      </Stack>
    </Box>
  );
};

export default Footer;
