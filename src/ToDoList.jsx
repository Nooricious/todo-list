// src/components/ToDoList.jsx
import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, deleteTodo, toggleDone }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleDone={toggleDone}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
