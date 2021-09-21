import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BurgerMenu from './pages/BurgerMenu/BurgerMenu';
import DetailDogCard from './pages/DetailDogCard/DetailDogCard';
import ContactForm from './pages/ContactForm/ContactForm';

function App(): JSX.Element {
  return (
    <>
      <BurgerMenu />
      <BrowserRouter>
        <Switch>
          <Route path="/contact">
            <ContactForm />
          </Route>
        </Switch>
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
