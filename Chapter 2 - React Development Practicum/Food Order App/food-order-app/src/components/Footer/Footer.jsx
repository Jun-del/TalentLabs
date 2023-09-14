import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useItemscontext } from "../../store/items-context";
import { useThemeContext } from "../../theme/theme-context";
import ThemeToggle from "../custom-components/ThemeToggle";
import logoImage from "../../assets/logo.png";

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
      p={2}
    >
      <Stack spacing={2} alignItems="center">
        <ThemeToggle
          sx={{
            bgcolor: reversedBackgroundColor,
            color: reversedTextColor,
          }}
        />
        <Box
          component="img"
          sx={{
            width: 300,
            height: 300,
            maxHeight: { xs: 150, md: 250, lg: 300 },
            maxWidth: { xs: 150, md: 250, lg: 300 },
          }}
          alt="footer logo"
          src={logoImage}
          loading="lazy"
        />
        <Button variant="contained" sx={{ width: "30%" }} onClick={togglePage}>
          {switchPage ? "Admin" : "User"}
        </Button>
      </Stack>
    </Box>
  );
};

export default Footer;
