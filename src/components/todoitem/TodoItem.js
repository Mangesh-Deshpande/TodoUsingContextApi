import React from 'react'

import './TodoItem.css';

const TodoItem = ({ title, removeTodo }) => {
  return (
    <div className="todo_item">
      <div className="todo_item_content">
        <div className="todo_item_title">{title}</div>
        <div className="todo_item_time">Created at:{'' + new Date().toLocaleDateString()}</div>
      </div>
      <div className="todo_item_footer">
        <button className="todo_update_btn">Update</button>
        <button
          className="todo_delete_btn"
          onClick={() => {
            removeTodo(title)
          }}
        >Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
