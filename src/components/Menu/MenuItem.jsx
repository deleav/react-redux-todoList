import React, { Component, PropTypes } from 'react';

export default class MenuItem extends Component {
  render() {
    return (
      <a className="menuItem">
        { this.props.text }
      </a>
    )
  }
}
