import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getLocalStorage } from '../common/helpers/Utils';
import CONSTANTS from "../common/helpers/Constants";
const PrivateRouteUser = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getLocalStorage('customerInfo') ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location, roleType: CONSTANTS.ROLES.USER } }}
          />
        )
    }
  />
);

export default PrivateRouteUser;
