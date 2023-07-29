/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import MarkdownEditor from './markdownEditor/MarkdownEditor'
import MarkdownPreview from './MarkdownPreview/MarkdownPreview'
import React, {useState} from "react";


function App() {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  return (
    <>
      <div className='markdownBody'>

        <MarkdownEditor />
        <MarkdownPreview content={markdownContent} />
      </div>
     
    </>
  )
}

export default App
