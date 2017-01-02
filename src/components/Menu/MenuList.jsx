import React, { Component, PropTypes } from 'react';
import MenuItem from './MenuItem';

export default class MenuList extends Component {
  allItems = () => {
    return ['TodoList'];
  }

  render() {
    return (
      <div id="menuList">
        { this.allItems().map(( item, i ) => <MenuItem key={i} text={item}/> )}
        <MenuItem text='item'/>
        <MenuItem text='item'/>
        <MenuItem text='item'/>
        <MenuItem text='item'/>
        <MenuItem text='item'/>
        <MenuItem text='item'/>
        <MenuItem text='item'/> 
      </div>
    )
  }
}
