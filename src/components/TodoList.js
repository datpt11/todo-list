import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className='list-group'>
        {items.map((item) => {
          return (
            <TodoItem
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              item={item}
              key={item.id}
            />
          );
        })}

        <button
          onClick={clearList}
          type='button'
          className='my-3 btn btn-block btn btn-danger text-capitalize'
        >
          clear list
        </button>
      </ul>
    );
  }
}
