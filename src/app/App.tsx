import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import BurgerMenu from './pages/BurgerMenu/BurgerMenu';

function App(): JSX.Element {
  return (
    <>
      <BurgerMenu />
      <BrowserRouter>
        <Switch></Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
