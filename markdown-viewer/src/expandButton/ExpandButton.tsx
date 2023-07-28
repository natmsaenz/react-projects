/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

const ExpandButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandedClick = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className="expandButtonWrapper">
      <button className="expandButton">
        {isExpanded ? "Minimize" : "Expand"}
      </button>
    </div>
  );
};

export default ExpandButton;
