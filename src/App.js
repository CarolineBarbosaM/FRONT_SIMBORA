import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import theme from './theme';
import Singin from './pages/singin';
import Singup from './pages/singup';

import './mook';

function App() {

  //const url = window.location.href;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home/>}/>
          <Route path="/singin" exact={true} element={<Singin/>}/>
          <Route path="/singup" exact={true} element={<Singup/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
