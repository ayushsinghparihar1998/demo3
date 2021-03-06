import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import HttpsRedirect from 'react-https-redirect';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ELPRoute from './route/ELPRoute';
import reducers from './common/redux/reducers';
import './assets/scss/style.scss';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
  <HttpsRedirect>
    <BrowserRouter>
      <Provider store={store}>
        <ELPRoute />
      </Provider>
    </BrowserRouter>
  </HttpsRedirect>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
