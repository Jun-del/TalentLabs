import "./App.css";
import { useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import itemContext from "./store/items-context";
import { useThemeContext } from "./theme/theme-context";
import Users from "./pages/Users";
import Admin from "./pages/Admin";

function App() {
  const itemsContext = useContext(itemContext);
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {itemsContext.switchPage ? <Users /> : <Admin />}
    </ThemeProvider>
  );
}

export default App;
