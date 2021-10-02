import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../../../utils/signup';
import type { ReactNode } from 'react';

export default function PrivateRoute({
  children,
  ...rest
}: {
  children: ReactNode;
  [key: string]: unknown;
}): JSX.Element {
  const { state } = React.useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
