import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import uuid from "react-uuid";
import React, { Component } from "react";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItems = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, newItems];
    this.setState(
      {
        items: updatedItems,
        item: "",
        id: uuid(),
        editItem: false,
      },
      () => console.log(this.state)
    );
  };
  clearList = () => {
    this.setState({
      items:[]
    })
  };
  handleDelete = (id) => {
    console.log(`handle delete ${id}`);
    const filteredItem = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItem
    
    });
  };
  handleEdit = (id) => {
    console.log(`handle edit ${id}`);
    const filteringItem = this.state.items.filter(item =>(item.id !== id))
    const selectedItem = this.state.items.find(item =>(item.id === id))
    this.setState({
      items:filteringItem,
      item:selectedItem.title,
      id:id,
      editItem:true

    })

  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">todo input</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
