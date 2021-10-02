import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BurgerMenu from './pages/BurgerMenu/BurgerMenu';
import DetailDogCard from './pages/DetailDogCard/DetailDogCard';
import ContactForm from './pages/ContactForm/ContactForm';
import SettingsForm from './pages/SettingsForm/SettingsForm';
import SearchForm from './pages/SearchForm/SearchForm';
import BackButton from './components/BackButton/BackButton';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import LandingPage from './pages/LandingPage/LandingPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import MainPageARA from './pages/MainPageARA/MainPageARA';
import UploadPage from './pages/UploadPage/UploadPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import { AuthContext, reducer, loadInitialState } from '../utils/signup';

function App(): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, loadInitialState());

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {state.isAuthenticated && <BurgerMenu />}
      <BackButton />

      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/contact">
            <ContactForm />
          </PrivateRoute>

          <PrivateRoute path="/settings">
            <SettingsForm />
          </PrivateRoute>

          <PrivateRoute path="/upload">
            <UploadPage />
          </PrivateRoute>

          <PrivateRoute path="/search">
            <SearchForm />
          </PrivateRoute>

          <PrivateRoute path="/detailcard">
            <DetailDogCard />
          </PrivateRoute>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/signup">
            <SignUpPage />
          </Route>

          <PrivateRoute path="/favorites">
            <FavoritesPage />
          </PrivateRoute>

          <PrivateRoute path="/home">
            <MainPage />
          </PrivateRoute>

          <PrivateRoute path="/homeARA">
            <MainPageARA />
          </PrivateRoute>

          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
