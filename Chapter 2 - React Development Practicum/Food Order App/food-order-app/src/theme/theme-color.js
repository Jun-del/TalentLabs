export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#51aef5",
          },
          secondary: {
            main: "#e2f1fd",
          },
          divider: "#074473",
          background: {
            default: "#e7f4fe",
            paper: "#ffffff",
          },
          text: {
            primary: "#01060a",
            secondary: "#074473",
          },
        }
      : {
          primary: {
            main: "#51aef5",
          },
          secondary: {
            main: "#042843",
          },
          divider: "rgba(255, 255, 255, 0.12)",
          background: {
            default: "#01060a",
            paper: "#262525",
            lightgray: "#3b3939",
          },
          text: {
            primary: "#e7f4fe",
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
          },
          action: {
            active: "#fff",
            hover: "rgba(255, 255, 255, 0.08)",
            selected: "rgba(255, 255, 255, 0.16)",
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
          },
          info: {
            main: "#2198f2",
          },
        }),
  },
});
