import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div className="todos" style={this.getStyle()}>
        <div className="todo">
          <h3>
            <input
              type="checkbox"
              onChange={this.props.markComplete.bind(this, id)}
            />{' '}
            {title}
          </h3>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
