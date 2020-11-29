import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

export class TodoItem extends Component {
  render() {
    return (
      <div className="todos">
        <div className="todo">
          <h3>{this.props.todo.title}</h3>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
