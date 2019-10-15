import React from 'react'
import TodoItem from '../todoitem/TodoItem';
import { AppContext } from '../../context/AppContextProvider';

const TodoList = () => {
  return (
    <AppContext.Consumer>
      {({ todo, removeTodo }) => (
        todo && todo.map(item => (
          <TodoItem key={item} title={item} removeTodo={removeTodo} />
        ))
      )
      }
    </AppContext.Consumer>
  )
}

export default TodoList
