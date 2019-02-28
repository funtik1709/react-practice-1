import React, { Component } from 'react';
import TodoItem from './../todo-item/TodoItem';
import PropTypes from 'prop-types';

import './style.scss';

class Todos extends Component {

  markComplete = () => {
    console.log('hello');
  }

  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
      
    ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default Todos;