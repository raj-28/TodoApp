import React from "react";

const Todo = ({ todo, completeTodo, deleteTodo }) => {
  // Event handler for Complete button
  const handleCompleteClick = () => {
    completeTodo(todo.id);
  };

  // Event handler for Delete button
  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  // Render the todo item with its text, time, and image (if any)
  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="todo-item">
        <p>{todo.text}</p>
        {todo.time && <span className="time">{todo.time}</span>}
        {todo.image && <img src={todo.image} alt="todo item" />}
      </div>
      <div className="todo-actions">
        <button onClick={handleCompleteClick}>Complete</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </li>
  );
};

export default Todo;