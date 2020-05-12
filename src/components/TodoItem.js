import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { item, handleDelete, handleEdit } = this.props;
    return (
      <li className='list-group-item text-capitalize d-flex justify-content-between'>
        <h6>{item.title}</h6>
        <div className='todo-icon'>
          <span
            className='text-success mx-2'
            onClick={() => handleEdit(item.id)}
          >
            <i className='fas fa-pen'></i>
          </span>
          <span className='text-danger' onClick={() => handleDelete(item.id)}>
            <i className='fas fa-trash'></i>
          </span>
        </div>
      </li>
    );
  }
}
