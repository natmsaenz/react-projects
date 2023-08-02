/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import MarkdownEditor from './components/markdownEditor/MarkdownEditor'
import MarkdownPreview from './components/markdownPreview/MarkdownPreview';
import Sidebar from './components/sidebar/Sidebar';
import React, {useState} from "react";


function App() {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  return (
    <div className='container'>
      <div className='sidebarWrapper'>
      <Sidebar />
      </div>
     
      <div className='markdownWrapper'>

        <MarkdownEditor />
        <MarkdownPreview content={markdownContent} />
      </div>
     
    </div>
  )
}

export default App
