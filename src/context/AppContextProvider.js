import React, { Component } from 'react'

export const AppContext = React.createContext({
  todo: [],
  addTodo: () => null,
  removeTodo: () => null,
  updateTodo: () => null
})

class AppContextProvider extends Component {
  state = {
    todo: [],
  }
  componentDidMount = () => {
    const todo = JSON.parse(localStorage.getItem('todos'));
    if (todo !== null) {
      this.setState({ todo });
    }
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state !== prevState) {
      localStorage.setItem('todos', JSON.stringify(this.state.todo))
    }
  }

  addTodo = (value) => {
    const { todo } = this.state;
    const isNewItem = todo.indexOf(value) === -1 ? true : false;
    if (todo.length === 0) {
      this.setState({ todo: [...todo, value] })
    } else if (isNewItem) {
      this.setState({ todo: [...todo, value] });
    }
  }

  removeTodo = (value) => {
    this.setState({
      todo: this.state.todo.filter(v => v !== value)
    })
  }

  updateTodo = (oldval, newval) => {
    if (oldval !== newval) {
      const todo = this.state.todo.map(val => {
        if (val === oldval) {
          return newval;
        }
        return val;
      })

      this.setState({ todo })
    }
  }

  render() {
    return (
      <AppContext.Provider value={{
        todo: this.state.todo,
        addTodo: this.addTodo,
        removeTodo: this.removeTodo,
        updateTodo: this.updateTodo

      }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}


export default AppContextProvider;
