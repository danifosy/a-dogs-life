import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BurgerMenu from './pages/BurgerMenu/BurgerMenu';
import DetailDogCard from './pages/DetailDogCard/DetailDogCard';
import ContactForm from './pages/ContactForm/ContactForm';
import SettingsForm from './pages/SettingsForm/SettingsForm';
import SearchForm from './pages/SearchForm/SearchForm';
import BackButton from './components/BackButton/BackButton';
import styles from './App.module.css';
import SignUpSelection from './pages/SignUpSelection/SignUpSelection';

function App(): JSX.Element {
  function goBack() {
    history.back();
  }
  return (
    <>
      <BurgerMenu />
      <button type="button" onClick={goBack} className={styles.backButton}>
        <BackButton />
      </button>
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

          <Route path="/signupselection">
            <SignUpSelection />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
