import React, { useState } from 'react';
import ChecklistItem from './ChecklistItem';
import ChecklistForm from './ChecklistForm';
import ChecklistHeader from './ChecklistHeader';

function Checklist() {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    const newItem = {
      id: Math.random().toString(),
      text,
      completed: false
    };
    setItems([...items, newItem]);
  };

  const toggleComplete = (itemId) => {
    const updatedItems = items.map(item => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <div id="app">
      <ChecklistHeader />
      <div className="checklist">
        {items.map(item => (
          <ChecklistItem
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.completed}
            onToggleComplete={toggleComplete}
          />
        ))}
        <ChecklistForm onAddItem={addItem} />
      </div>
    </div>
  );
}

export default Checklist;
