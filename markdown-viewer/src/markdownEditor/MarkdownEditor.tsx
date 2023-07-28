/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from "react";
import ReactMarkdown from "react-markdown";
import MarkdownDisplay from "../markdownDisplay/MarkdownDisplay";
import "./MarkdownEditor.css"


const MarkdownEditor = () =>{
    const [markdownContent, setMarkdownContent] = useState<string>('');

    const handleMarkdownChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
        setMarkdownContent(event.target.value);
    };

    return(
        <div className="markdownEditorSection">
            <div className="markdownEditorContainer">
                <h2>Markdown Editor</h2>
                <textarea
                className="markdownEditor"
                value={markdownContent}
                onChange={handleMarkdownChange}
                placeholder="Add the contents of your markdown here"
                />
            </div>

        <div className="markdownDisplayContainer">
            <h2>Markdown Preview</h2>
            <MarkdownDisplay content={markdownContent}/>
        </div>

        </div>
    )
}

export default MarkdownEditor