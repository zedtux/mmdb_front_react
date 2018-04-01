import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import mmdbApp from './reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import logger from 'redux-logger';
import App from './App';
import { airingTv } from './actions/airing_tv';
import { airingTheater } from './actions/airing_theater';

const client = axios.create({
  //all axios can be used, shown in axios documentation
  baseURL: process.env.REACT_APP_API_ROOT,
  responseType: 'json'
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  mmdbApp,
  composeEnhancers(
    applyMiddleware(
      axiosMiddleware(client), //second parameter options can optionally contain onSuccess, onError, onComplete, successSuffix, errorSuffix. This middleware automatically calls state change (dispatch) when axios requests finish (success or failure)
      logger
    )
  )
);

// store.dispatch(airingTv());
store.dispatch(airingTheater());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
