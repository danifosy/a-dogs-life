import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BurgerMenu from './pages/BurgerMenu/BurgerMenu';
import DetailDogCard from './pages/DetailDogCard/DetailDogCard';
import ContactForm from './pages/ContactForm/ContactForm';
import SettingsForm from './pages/SettingsForm/SettingsForm';

function App(): JSX.Element {
  return (
    <>
      <BurgerMenu />
      <BrowserRouter>
        <Switch>
          <Route path="/contact">
            <ContactForm />
          </Route>

          <Route path="/settings">
            <SettingsForm />
          </Route>

          <Route path="/detailcard">
            <DetailDogCard />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
