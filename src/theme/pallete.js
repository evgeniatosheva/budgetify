import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#6043ba",
      main: "#3d30a2",
      dark: "#282593",
      contrastText: "#D9D9D9",
    },
    secondary: {
      light: "#d1c5f1",
      main: "#9276e0",
      dark: "#0f1da9",
      contrastText: "#000",
    },
    warning: {
      light: "#ffdfb6",
      main: "#ffa43c",
      dark: "#eb6b25",
      contrastText: "#000",
    },
    success: {
      light: "#c4e3ac",
      main: "#89c759",
      dark: "#356c2b",
      contrastText: "#000",
    },
    error: {
      light: "#fe90a6",
      main: "#f32750",
      dark: "#ba1149",
      contrastText: "#000",
    },
  },
});

export default theme;
