import React, { useState } from "react";
import PropTypes from "prop-types";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ChecklistItem.css";

function ChecklistItem({ item, onToggle, onDelete }) {
  const handleToggle = () => {
    onToggle(item.id);
  };
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <div className="singleChecklistItem">
      <input type="checkbox" checked={item.completed} onChange={handleToggle} />
      <span className={item.completed ? "completed crossed-out" : ""}>{item.text}</span>
      <div className="buttons">
        <button onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashCan} className="deleteIcon"/>
        </button>
      </div>
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
