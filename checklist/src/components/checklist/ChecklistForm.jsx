import React, { useState } from "react";

function ChecklistForm({ onAddItem }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== "") {
      onAddItem(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default ChecklistForm;
