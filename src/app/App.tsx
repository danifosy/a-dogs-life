import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BurgerMenu from './pages/BurgerMenu/BurgerMenu';
import DetailDogCard from './pages/DetailDogCard/DetailDogCard';
import ContactForm from './pages/ContactForm/ContactForm';
import SettingsForm from './pages/SettingsForm/SettingsForm';
import SearchForm from './pages/SearchForm/SearchForm';
import BackButton from './components/BackButton/BackButton';
loginPages
import SignUpSelection from './pages/SignUpSelection/SignUpSelection';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';


function App(): JSX.Element {
  return (
    <>
      <BurgerMenu />
      <BackButton />

      <BrowserRouter>
        <Switch>
          <Route path="/contact">
            <ContactForm />
          </Route>

          <Route path="/settings">
            <SettingsForm />
          </Route>

          <Route path="/search">
            <SearchForm />
          </Route>

          <Route path="/detailcard">
            <DetailDogCard />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/signup">
            <SignUpPage />
          </Route>

          <Route path="/signupselection">
            <SignUpSelection />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
