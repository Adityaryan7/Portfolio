import React, { useEffect } from 'react';

import { ThemeProvider, createTheme, CssBaseline, Container } from '@mui/material';
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

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
       <Portfolio/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
