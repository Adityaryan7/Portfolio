/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import AOS from "aos";

import "aos/dist/aos.css";
import Portfolio from "./pages/Portfolio/Portfolio";

const proTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#0b79d0" }, // professional navy accent
    background: { default: "#0b1220", paper: "#071021" },
    text: { primary: "#e6eef8", secondary: "#9fb6d6" },
  },
  typography: {
    fontFamily:
      "'Inter', 'Nunito Sans', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    h2: { fontWeight: 800 },
    h6: { fontWeight: 700 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#071021",
        },
      },
    },
  },
});

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <ThemeProvider theme={proTheme}>
      <CssBaseline />
      <Portfolio />
    </ThemeProvider>
  );
};

export default App;
