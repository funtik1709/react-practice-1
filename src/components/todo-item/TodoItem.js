import React, { Component } from 'react'
import PropTypes from 'prop-types'


import './style.scss';

export class TodoItem extends Component {
  static propTypes = {

  }

  getStyle = () => {

    return {      
      display: 'block',
      padding: '10px',
      background: '#f4f4f4',
      borderBottom: '1px solid #ccc',
      color: this.props.todo.completed ? 'green' : 'red',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
    // if(this.props.todo.completed) {
    //   return {
    //     textDecoration: 'line-through'
    //   }
    // } else {
    //   return {
    //     textDecoration: 'none'
    //   }
    // }
  }  

  render() {

    const {id, title} = this.props.todo;

    return (
      <div className="todo-item-wrap" style={this.getStyle()}>        
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}  

        {title} 

        <button onClick={this.props.delTodo.bind(this, id)}>+</button>
        </p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default TodoItem
