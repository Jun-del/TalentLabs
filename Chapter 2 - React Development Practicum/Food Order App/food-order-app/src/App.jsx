import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useItemscontext } from "./store/items-context";
import { useThemeContext } from "./theme/theme-context";
import Users from "./pages/Users";
import Admin from "./pages/Admin";
import Footer from "./components/Footer/Footer";

function App() {
  const itemsContext = useItemscontext();
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {itemsContext.switchPage ? <Users /> : <Admin />}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
