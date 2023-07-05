import React, { useState } from "react";
import PropTypes from "prop-types";

function ChecklistItem({ item, onToggle, onDelete }) {
  const handleToggle = () => {
    onToggle(item.id);
  };
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <div>
      <input type="checkbox" checked={item.completed} onChange={handleToggle} />
      <span className={item.completed ? "completed" : ""}>{item.text}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
ChecklistItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ChecklistItem;
