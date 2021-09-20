import React, { useState } from 'react';
import styles from './App.module.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BurgerMenu from './pages/BurgerMenu/BurgerMenu';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/burgerMenu">
          <BurgerMenu />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
