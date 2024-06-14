// src/components/ToDoForm.jsx
import React, { useState } from 'react';

function ToDoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo({
      text: value,
      isDone: false,
    });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new to-do"
        className="todo-input"
      />
      <button type="submit" className="todo-button">Add</button>
    </form>
  );
}

export default ToDoForm;
