import React, { useState } from "react";
import PropTypes from "prop-types";

function ChecklistItem({ item, onToggle, onDelete }) {
  const handleToggle = () => {
    onToggle(item.id);
  };
  const handleDelete = () => {
    onDelete(item.id);
    };
  
    return(
        <div>
            <input type="checkbox" checked={item.completed} onChange={handleToggle} />
        </div>
    )
  
}
export default ChecklistItem;
