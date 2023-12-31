import React, { useImperativeHandle, useState } from "react";
import ChecklistItem from "../checklistItem/ChecklistItem";
import ChecklistForm from "../checklistForm/ChecklistForm";
import ChecklistHeader from "../checklistHeader/ChecklistHeader";
import "./Checklist.css"

function Checklist() {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    const newItem = {
      id: Math.random().toString(),
      text,
      completed: false,
    };
    setItems([...items, newItem]);
  };

  const toggleComplete = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(updatedItems);
  };
  const deleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <div id="app">
      <ChecklistHeader />
      <div className="checklist">
        {items.map((item) => (
          <ChecklistItem
            key={item.id}
            item={item}
            onToggle={toggleComplete}
            onDelete={deleteItem}
          />
        ))}
        <div className="checklistForm" >
        <ChecklistForm  onAddItem={addItem} /> 

        </div>

      </div>
    </div>
  );
}

export default Checklist;
