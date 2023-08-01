/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";

interface ExpandButtonProps {
  isExpanded: boolean;
  onExpandClick: () => void;
}
const ExpandButton: React.FC<ExpandButtonProps> = ({
  isExpanded,
  onExpandClick,
}) => {
  return (
    <div className="expandButtonWrapper">
      <button className="expandButton" onClick={onExpandClick}>
        {isExpanded ? (
          <FontAwesomeIcon icon={faCompress} />
        ) : (
          <FontAwesomeIcon icon={faExpand} />
        )}
      </button>
    </div>
  );
};

export default ExpandButton;
