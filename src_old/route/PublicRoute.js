import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getLocalStorage } from '../common/helpers/Utils';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}

      render={props =>
        getLocalStorage('userInfo') ? (
          <Redirect to="/userDashboard" />
        ) : getLocalStorage('userInfoProff') ? (
          <Redirect to="/userDashboardproff" />
        ) :
            getLocalStorage('customerInfo') ? (
              <Redirect to="/userDashboardcust" />
            )
              : (
                <Component {...props} />
              )
      }
    />
  );
};


export default PublicRoute;
