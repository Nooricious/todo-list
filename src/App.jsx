import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState(()=> {
    const storageTodos = localStorage.getItem("todos");
    return storageTodos ? JSON.parse(storageTodos) : []
  })

// stored data in local storage
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };
  return (
    <>
      <div>
      <h1>  My ToDo List</h1>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} toggleDone={toggleDone} />
      </div>
      {/* <h1>Congrats you finish your Task</h1> */}
      <div className="card">
      </div>
    
    </>
  )
}

export default App
  //  get data of to-do-list from local storage when components mounted
// useEffect(()=>{  const storedTodos= JSON.parse(localStorage.getItem('todos'));
//   if (storedTodos){
//     setTodos(storedTodos);
//   }
// },[]  )
// stored data in local storage