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

export type UserType = 'ARA' | 'user';

export type StateType = {
  isAuthenticated: boolean;
  userName?: string;
  userType?: UserType;
};

type LoginActionType = {
  type: 'LOGIN';
  payload: {
    userName: string;
    userType: UserType;
  };
};

type LogoutActionType = {
  type: 'LOGOUT';
};

export type ActionType = LoginActionType | LogoutActionType;

export type AuthContextType = {
  state: StateType;
  dispatch: (event: ActionType) => void;
};

const initialState: StateType = {
  isAuthenticated: false,
  userName: undefined,
  userType: undefined,
};

const loadInitialState = () => {
  const userNameJson = localStorage.getItem('userName');
  const userTypeJson = localStorage.getItem('userType');

  if (!userNameJson || !userTypeJson) {
    return initialState;
  }

  const userName = JSON.parse(userNameJson);
  const userType = JSON.parse(userTypeJson) as UserType;

  return {
    isAuthenticated: true,
    userName,
    userType,
  };
};

export const AuthContext = React.createContext<AuthContextType>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('userName', JSON.stringify(action.payload.userName));
      localStorage.setItem('userType', JSON.stringify(action.payload.userType));
      return {
        ...state,
        isAuthenticated: true,
        userName: action.payload.userName,
        userType: action.payload.userType,
      };
    case 'LOGOUT':
      localStorage.removeItem('userName');
      localStorage.removeItem('userType');
      return {
        ...state,
        isAuthenticated: false,
        userName: undefined,
        userType: undefined,
      };
    default:
      return state;
  }
};

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
