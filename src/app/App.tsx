import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import BurgerMenu from './pages/BurgerMenu/BurgerMenu';
import styles from './App.module.css';

function App(): JSX.Element {
  return (
    <>
      <BurgerMenu />
      <BrowserRouter>
        <main className={styles.appBackground}></main>
        <Switch></Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
