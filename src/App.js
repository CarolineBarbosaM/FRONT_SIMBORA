import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Router } from 'react-router-dom';
import Home from './pages/Home';
import theme from './theme';
import Singin from './pages/singin';

function App() {

  //const url = window.location.href;

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <Singin />
          
    </ThemeProvider>
  );
}

export default App;
