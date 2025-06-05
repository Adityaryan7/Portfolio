import React, { useEffect } from 'react';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import AOS from 'aos';

import 'aos/dist/aos.css';
import Portfolio from './pages/Portfolio/Portfolio';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#e50914' },
    background: { default: '#141414', paper: '#1f1f1f' },
  },
});

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Portfolio />
    </ThemeProvider>
  );
};

export default App;
