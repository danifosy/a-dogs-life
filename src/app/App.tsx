import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BurgerMenu from './pages/BurgerMenu/BurgerMenu';
import DetailDogCard from './pages/DetailDogCard/DetailDogCard';

function App(): JSX.Element {
  return (
    <>
      <BurgerMenu />
      <BrowserRouter>
        <Switch>
          <Route path="/detailcard">
            <DetailDogCard />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
