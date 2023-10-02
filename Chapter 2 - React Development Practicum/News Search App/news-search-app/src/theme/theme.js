export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#0d5939",
          },
          secondary: {
            main: "#a4f4a5",
          },
          divider: "#1cd835",
          background: {
            default: "#edfcf6",
            paper: "#ffffff",
          },
          text: {
            primary: "#010906",
            secondary: "#05290a",
          },
        }
      : {
          primary: {
            main: "#97f2a3",
          },
          secondary: {
            main: "#cef8e6",
          },
          divider: "#9bf2a6",
          background: {
            default: "#05290a",
            paper: "#121212",
          },
          text: {
            primary: "#d6fadb",
            secondary: "#ffffff",
          },
        }),
  },
});
