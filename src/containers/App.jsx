import React, { Component, PropTypes } from 'react';

// components
import MenuList from '../components/Menu/MenuList';
import MenuPage from './Menu/MenuPage';
import DemoPage from './DemoPage';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <MenuPage />
        <MenuList />
        <DemoPage />
      </div>
    )
  }
}
