// src/components/ToDoItem.jsx
import React from 'react';

function ToDoItem({ todo, index, deleteTodo, toggleDone }) {
  return (
    <li className={`todo-item ${todo.isDone ? 'done' : ''}`}>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => toggleDone(index)}
        className="todo-checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <button onClick={() => deleteTodo(index)} className="delete-button">Delete</button>
    </li>
  );
}

export default ToDoItem;
