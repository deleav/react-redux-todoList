import React, { Component, PropTypes } from 'react';

// components
import MenuPage from './Menu/MenuPage';
import TodoPage from './Todo/TodoPage';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <MenuPage />
        <TodoPage />
      </div>
    )
  }
}
