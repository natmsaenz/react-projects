import React, { useState } from "react";
import "./ChecklistForm.css"

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
      <input className="add-task"
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add a new task"
      />
     
    </form>
  );
}
export default ChecklistForm;
