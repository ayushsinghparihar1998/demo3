import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getLocalStorage } from '../common/helpers/Utils';

const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getLocalStorage('userInfo') ||
        getLocalStorage('userInfoProff') ||
        getLocalStorage('customerInfo') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
    }
  />
);

export default PrivateRoutes;
