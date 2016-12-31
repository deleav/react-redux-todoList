import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// actions
import { VisibilityFilters, setVisibilityFilter } from '../../actions/VisibilityFilterActions';
import { addTodo, toggleTodo, deleteTodo } from '../../actions/TodoActions';

// components
import FilterList from '../../components/Filter/FilterList';
import AddTodo from '../../components/Todo/AddTodo';
import TodoList from '../../components/Todo/TodoList';

class TodoPage extends Component {
  render() {
    const { dispatch, visibilityFilter, visibleTodos } = this.props
    return (
      <div id="todoPage">
        <FilterList
          filter={visibilityFilter}
          {...VisibilityFilters}
          onFilterChange={filter => dispatch( setVisibilityFilter( filter ) )} />
        <AddTodo onAddClick={text => dispatch(addTodo(text))}/>
        <TodoList
          todos={visibleTodos}
          onTodoClick={index => dispatch(toggleTodo(index))}
          onDeleteClick={ index => dispatch(deleteTodo(index))}/>
      </div>
    )
  }
}
function getVisibilityTodos( todos, filter ) {
  let visibleTodos = [];
  switch( filter ) {
    case VisibilityFilters.SHOW_ALL:
      todos.map(( todo, index ) => {
        visibleTodos.push( { index, ...todo } );
      });
      return visibleTodos;
    case VisibilityFilters.SHOW_COMPLETED:
      todos.map(( todo, index ) => {
        if ( todo.completed )
          visibleTodos.push( { index, ...todo } );
      });
      return visibleTodos;
    case VisibilityFilters.SHOW_ACTIVE:
      todos.map(( todo, index ) => {
        if ( !todo.completed )
          visibleTodos.push( { index, ...todo } );
      });
      return visibleTodos;
  }
}

function select( state ) {
  return {
    visibleTodos: getVisibilityTodos( state.todos, state.visibilityFilter ),
    visibilityFilter: state.visibilityFilter
  };
}

export default connect( select )(TodoPage);
