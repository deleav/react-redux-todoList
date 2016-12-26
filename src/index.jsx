/* main.js */
'use strict';

import thunkMiddleware from 'redux-thunk';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './reducers/AppReducers';

let rootElement = document.getElementById('mountNode');
let store = createStore(
  todoApp,
  applyMiddleware( thunkMiddleware ),
  window.devToolsExtension ? window.devToolsExtension() : undefined );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
