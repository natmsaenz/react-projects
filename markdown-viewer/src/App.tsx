/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import MarkdownEditor from "./components/markdownEditor/MarkdownEditor";
import MarkdownPreview from "./components/markdownPreview/MarkdownPreview";
import Sidebar from "./components/sidebar/Sidebar";
import React, { useState } from "react";

function App() {
  const [markdownContent, setMarkdownContent] = useState<string>("");

  return (
    <div className="container">
      <div className="markdownWrapper">
        <MarkdownEditor />
      </div>
      <div className="sidebarWrapper">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
