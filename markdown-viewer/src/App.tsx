/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import MarkdownEditor from './markdownEditor/MarkdownEditor'
import MarkdownPreview from './markdownPreview/MarkdownPreview';
import Sidebar from './sidebar/Sidebar';
import React, {useState} from "react";


function App() {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  return (
    <div>
      <div className='sidebarWrapper'></div>
      <Sidebar />
      <div className='markdownBody'>

        <MarkdownEditor />
        <MarkdownPreview content={markdownContent} />
      </div>
     
    </div>
  )
}

export default App
