/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from "react";
import ReactMarkdown from "react-markdown";
import MarkdownPreview from "../markdownPreview/MarkdownPreview";
import ExpandButton from "../expandButton/ExpandButton";
import "./MarkdownEditor.css"


const MarkdownEditor = () =>{
    const [markdownContent, setMarkdownContent] = useState<string>('');

    const handleMarkdownChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
        setMarkdownContent(event.target.value);
    };

    return(
        <div className="markdownEditorSection">
            <div className="markdownEditorContainer">
                <div className="topBar">
                <h2>Markdown Editor</h2>
                <ExpandButton />
                </div>
                <textarea
                className="markdownEditor"
                value={markdownContent}
                onChange={handleMarkdownChange}
                placeholder="Add the contents of your markdown here"
                />
            </div>

        <div className="MarkdownPreviewContainer">
           
            <MarkdownPreview content={markdownContent}/>
        </div>

        </div>
    )
}

export default MarkdownEditor