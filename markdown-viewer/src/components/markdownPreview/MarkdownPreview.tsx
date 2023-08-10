/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faWindowMaximize, faWindowMinimize,faEye } from "@fortawesome/free-solid-svg-icons";
import "./MarkdownPreview.css";

interface MarkdownPreviewProps {
  content: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMaximizeClick = () => {
    setIsExpanded(true);
  };

  const handleMinimizeClick = () => {
    setIsExpanded(false);
  };
  return (
    <div className={`markdownPreviewContainer ${isExpanded ? "expanded" : ""}`}>
    <div className="topBarPreview">
      <div className="leftSideContentPreview">
      <FontAwesomeIcon icon={faEye} id="eye" />
      <h2 className="previewTitle">Markdown Preview</h2>
      
      </div>
      <div className="expandButtonsWrapper">
      <FontAwesomeIcon icon={faWindowMaximize} id="max" className={`maximizePreviewButton ${isExpanded ? "" : "expanded"}`} onClick={handleMaximizeClick}/>
    <FontAwesomeIcon icon={faWindowMinimize} id="min" className={`minimizePreviewButton ${isExpanded ? "expanded" : ""}`} onClick={handleMinimizeClick}/>

    </div>

    </div>
    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
     
    
  );
};

export default MarkdownPreview;
