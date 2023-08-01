/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faLightbulb,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const cheatSheetUrl = "https://www.markdownguide.org/cheat-sheet/";
  const repositoryUrl =
    "https://github.com/natmsaenz/react-projects/tree/8354040c71bbccdb4e6ad4b9e10bb1e3ac303971/markdown-viewer";

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="sidebarHeader">
        <div className="toggleButton" onClick={handleSidebarToggle}>
        
          <FontAwesomeIcon icon={faBars} />
        </div>
        <h2>Markdown Editor</h2>
      </div>
      <ul className="sidebarLinks">
        <li>
          <a href={cheatSheetUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLightbulb} /> Cheat Sheet
          </a>
        </li>
        <li>
          <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFolderOpen} /> Github repository
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
