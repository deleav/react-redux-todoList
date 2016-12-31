/* main.js */
'use strict';

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// reducer
import todoApp from './reducers/AppReducers';

// components
import App from './containers/App';

let rootElement = document.getElementById('mountNode');
let store = createStore( todoApp, window.devToolsExtension ? window.devToolsExtension() : undefined );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
