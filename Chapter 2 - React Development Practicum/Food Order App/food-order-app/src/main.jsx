import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeProvider from "./theme/ThemeProvider.jsx";
import ItemsProvider from "./store/ItemsProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ItemsProvider>
        <App />
      </ItemsProvider>
    </ThemeProvider>
  </React.StrictMode>
);
