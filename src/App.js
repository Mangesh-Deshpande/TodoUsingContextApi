import React, { Component } from "react";

import Navbar from "./components/navbar/Navbar.js";
import TodoForm from "./components/todoform/TodoForm.js";
import TodoList from "./components/todoList/TodoList.js";
import AppContextProvider from "./context/AppContextProvider.js";


import "./App.css";

export default class App extends Component {

  render() {
    return (
      <AppContextProvider>
        <div className="todo_list_container">
          <Navbar />
          <div className="todo_form_wrapper">
            <TodoForm />
          </div>
          <div className="todo_result_wrapper">
            <TodoList />
          </div>
        </div>
      </AppContextProvider>
    );
  }
}
