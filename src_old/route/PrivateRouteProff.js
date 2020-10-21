import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getLocalStorage } from '../common/helpers/Utils';

const PrivateRouteProff = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getLocalStorage('userInfoProff') ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
    }
  />
);

export default PrivateRouteProff;
