import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      item: '',
      editItem: false,
      id: 0,
    };
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      title: this.state.item,
      id: this.state.id,
    };
    this.setState({
      items: this.state.items.concat(newItem),
      id: this.state.id + 1,
      editItem: false,
      item: '',
    });
  };
  handleDelete = (id) => {
    const filterItems = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      items: filterItems,
    });
  };
  handleEdit = (id) => {
    const filterItems = this.state.items.filter((item) => {
      return item.id !== id;
    });
    const selectedItem = this.state.items.find((item) => {
      return item.id === id;
    });
    this.setState({
      items: filterItems,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };
  clearList = () => {
    this.setState({
      items: [],
    });
  };
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8'>
            <h3 className='text-capitalize text-center'>todo input</h3>
            <TodoInput
              editItem={this.state.editItem}
              item={this.state.item}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
            <h3 className='text-capitalize text-center'>todo list</h3>
            <TodoList
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              items={this.state.items}
              clearList={this.clearList}
            />
          </div>
        </div>
      </div>
    );
  }
}
