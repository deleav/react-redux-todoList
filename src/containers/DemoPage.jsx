import React, { Component, PropTypes } from 'react';

// components
import TodoPage from './Todo/TodoPage';

export default class DemoPage extends Component {
  render() {
    return(
      <div id="demoPage">
        <TodoPage id="todoPage"/>
      </div>
    )
  }
}
