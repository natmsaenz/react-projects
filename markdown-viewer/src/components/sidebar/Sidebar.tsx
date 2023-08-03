/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faLightbulb,
  faFolderOpen,
  faFilePen,
  faCircleXmark
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  const cheatSheetUrl = "https://www.markdownguide.org/cheat-sheet/";
  const repositoryUrl =
    "https://github.com/natmsaenz/react-projects/tree/8354040c71bbccdb4e6ad4b9e10bb1e3ac303971/markdown-viewer";

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleSidebarToggle = () => {
    console.log("toggle sidebar");
    setIsSidebarOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <>
      <div
        className={`toggleButton ${isSidebarOpen ? "rotateIcon" : ""}`}
        onClick={handleSidebarToggle}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div
        id="sidebar"
        className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}
      >
        <div className="sidebarHeader">
          <FontAwesomeIcon icon={faFilePen} id="pen" />
          <h2 className="sidebarTitle">Markdown Editor</h2>
          <FontAwesomeIcon icon={faCircleXmark} id="xmark" />
        </div>
        <ul className="sidebarLinks">
          <li>
            <a href={cheatSheetUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLightbulb} id="cheatsheet" /> Cheat Sheet
            </a>
          </li>
          <li>
            <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFolderOpen} id="folder" /> Github
              repository
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;