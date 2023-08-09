/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import MarkdownPreview from "../markdownPreview/MarkdownPreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faWindowMaximize, faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import "./MarkdownEditor.css";

const MarkdownEditor = () => {
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMarkdownChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMarkdownContent(event.target.value);
  };
  const handleMaximizeClick = () => {
    setIsExpanded(true);
  };

  const handleMinimizeClick = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <div className={`markdownEditorContainer ${isExpanded ? "expanded" : ""}`}>
        <div className="topBar">
        <div className="leftSideContentEditor">
        <FontAwesomeIcon icon={faPen} id="pen"/> <h2 className="editorTitle">Markdown Editor</h2>
        </div>
        <div className="expandButtonsWrapper">
        
        <FontAwesomeIcon icon={faWindowMaximize} id="max" className={`maximizeButton ${isExpanded ? "" : "expanded"}`} onClick={handleMaximizeClick}/>
        <FontAwesomeIcon icon={faWindowMinimize} id="min" className={`minimizeButton ${isExpanded ? "expanded" : ""}`} onClick={handleMinimizeClick}/>


        </div>
      
        </div>
        
        <textarea
          className="markdownEditor"
          value={markdownContent}
          onChange={handleMarkdownChange}
          placeholder="Add the contents of your markdown here"
        />
        
      </div>

      <div className={`markdownPreviewContainer ${isExpanded ? "expanded" : ""}`}>
        <div className="topBarPreview">
          <h2 className="previewTitle">Markdown Preview</h2>
          <div className="expandButtonsWrapper">
          <FontAwesomeIcon icon={faWindowMaximize} id="max" className={`maximizeButton ${isExpanded ? "" : "expanded"}`} onClick={handleMaximizeClick}/>
        <FontAwesomeIcon icon={faWindowMinimize} id="min" className={`minimizeButton ${isExpanded ? "expanded" : ""}`} onClick={handleMinimizeClick}/>

        </div>

        </div>
        <MarkdownPreview content={markdownContent} />
      </div>
    </>
  );
};

export default MarkdownEditor;
