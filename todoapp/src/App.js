import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // function to add new todo item to the list
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // function to mark a todo item as completed
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  // function to remove a completed todo item from the list
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;