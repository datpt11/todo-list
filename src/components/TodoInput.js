import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    const { editItem, handleChange, item, handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className='card card-body my-5'>
            <div className='input-group my-3'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className='far fa-keyboard'></i>
                </span>
              </div>
              <input
                onChange={handleChange}
                value={item}
                type='text'
                className='form-control text-capitalize'
                placeholder='add a todo item'
              />
            </div>
            {editItem ? (
              <button
                type='submit'
                className='text-capitalize btn btn-block btn btn-success my-3'
              >
                edit item
              </button>
            ) : (
              <button
                type='submit'
                className='text-capitalize btn btn-block btn btn-primary my-3'
              >
                add item
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}
