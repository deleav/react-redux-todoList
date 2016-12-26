import React, { Component, PropTypes } from 'react';
import { Button } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';

export default class AddTodo extends Component {
  constructor( props ) {
    super();
    this.state = {
      inputValue: ''
    }
  }

  render() {
    return (
      <div className="addTodo">
        <Input value={this.state.inputValue} type='text'
          onChange={e => this.setState({ inputValue: e.target.value })}
          onKeyPress={e => this.handleKeyPress(e)}/>
        <Button onClick={e => this.handleClick(e)}>
          ADD
        </Button>
      </div>
    )
  }

  add = () => {
    const text = this.state.inputValue.trim();
    if ( text.length > 0 ) {
      this.props.onAddClick( text );
      this.setState({ inputValue: '' });
    } // if
  }

  handleClick( e ) {
    this.add();
  }

  handleKeyPress( e ) {
    if ( e.key == "Enter" )
      this.add();
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}
