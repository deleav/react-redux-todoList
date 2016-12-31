import React, { Component, PropTypes } from 'react';
import MenuItem from './MenuItem';

export default class MenuList extends Component {
  render() {
    return (
      <div id="menuList">
        <MenuItem text='item1' />
      </div>
    )
  }
}
