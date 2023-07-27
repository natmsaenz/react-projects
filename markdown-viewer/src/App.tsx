/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import MarkdownEditor from './markdownEditor/MarkdownEditor'
import MarkdownDisplay from './markdownDisplay/MarkdownDisplay'
import React, {useState} from "react";


function App() {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  return (
    <>
      <div className='markdownBody'>

        <MarkdownEditor />
        <MarkdownDisplay content={markdownContent} />
      </div>
     
    </>
  )
}

export default App
