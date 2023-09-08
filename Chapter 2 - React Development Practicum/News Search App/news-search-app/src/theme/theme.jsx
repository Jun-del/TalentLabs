// const theme = {
//   palette: {
//     primary: {
//       main: "#556cd6",
//     },
//     secondary: {
//       main: "#19857b",
//     },
//     error: {
//       main: red.A400,
//     },
//   },
// };

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // ? palette values for light mode
          primary: {
            main: "#556cd6",
          },
          // divider: amber[200],
          // text: {
          //   primary: grey[900],
          //   secondary: grey[800],
          // },
        }
      : {
          // ? palette values for dark mode
          // primary: deepOrange,
          // divider: deepOrange[700],
          background: {
            default: "#121212",
            paper: "#121212",
          },
          // text: {
          //   primary: "#fff",
          //   secondary: grey[500],
          // },
        }),
  },
});
