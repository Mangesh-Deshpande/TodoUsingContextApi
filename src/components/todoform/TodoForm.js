import React, { Component } from "react";
import { AppContext } from '../../context/AppContextProvider';

import "./TodoForm.css";

class TodoForm extends Component {
  state = {
    input: ''
  }
  handleSubmit = (e, value) => {
    e.preventDefault();
    value.addTodo(this.state.input);
    this.setState({ input: '' })
  }
  render() {
    return (
      <AppContext.Consumer>
        {(value) => (
          <form onSubmit={(e) => this.handleSubmit(e, value)} className="todo_form_container">
            <span className="custom_input">
              <input
                name="todoInput"
                className="todo_form_input"
                type="text"
                value={this.state.input}
                onChange={(e) => this.setState({ input: e.target.value })}
                placeholder="Add a todo Item"
              />
            </span>
            <button className="todo_form_btn">Add Item</button>
          </form>
        )}
      </AppContext.Consumer>
    );
  }
}

export default TodoForm;
