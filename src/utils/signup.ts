import React from 'react';

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

export const loadInitialState = (): StateType => {
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

export const reducer = (state: StateType, action: ActionType): StateType => {
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
