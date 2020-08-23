import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getLocalStorage } from '../common/helpers/Utils';

const PrivateRouteList = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            getLocalStorage('userInfoAdmin') ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{ pathname: '/adminLogin', state: { from: props.location } }}
                    />
                )
        }
    />
);

export default PrivateRouteList;
