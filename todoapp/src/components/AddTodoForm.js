import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  // State variables to store the input values for text, time, and image
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");

  // Event handler for the form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new todo object with the input values and a unique ID
    const newTodo = {
      id: Date.now(),
      text,
      time,
      image,
      completed: false,
    };

    // Call the addTodo function with the new todo object
    addTodo(newTodo);

    // Reset the input values
    setText("");
    setTime("");
    setImage("");
  };

  // Event handler for the text input
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Event handler for the time input
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  // Event handler for the image input
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  // Render the form with inputs for text, time, and image, and a submit button
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add todo..."
        value={text}
        onChange={handleTextChange}
      />
      <input
        type="text"
        placeholder="Expected time"
        value={time}
        onChange={handleTimeChange}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;