import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useItemscontext } from "./store/items-context";
import { useThemeContext } from "./theme/theme-context";
import Users from "./pages/Users";
import Admin from "./pages/Admin";
import Footer from "./components/Footer/Footer";
import OrderedItemsProvider from "./store/OrderedItemsProvider";

function App() {
  const { switchPage } = useItemscontext();
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <OrderedItemsProvider>
        {switchPage ? <Users /> : <Admin />}
      </OrderedItemsProvider>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
