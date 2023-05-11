import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm(props) {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [time, setTime] = useState("");

  // function to handle form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    const newTodo = {
      id: uuidv4(),
      text: input,
      image: image,
      time: time,
      isComplete: false,
    };

    props.addTodo(newTodo);
    setInput("");
    setImage(null);
    setTime("");
  };

  // function to handle input change event
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // function to handle image change event
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  // function to handle time input change event
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo details"
        value={input}
        onChange={handleInputChange}
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <input
        type="time"
        placeholder="Expected time to complete"
        value={time}
        onChange={handleTimeChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;