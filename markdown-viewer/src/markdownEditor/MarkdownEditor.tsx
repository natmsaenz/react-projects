/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from "react";
import ReactMarkdown from "react-markdown";
import MarkdownPreview from "../markdownPreview/MarkdownPreview";
import ExpandButton from "../expandButton/ExpandButton";
import "./MarkdownEditor.css"


const MarkdownEditor = () =>{
    const [markdownContent, setMarkdownContent] = useState<string>('');
    const [isExpanded,setIsExpanded] = useState(false);

    const handleMarkdownChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
        setMarkdownContent(event.target.value);
    };
    const handleExpandClick = () => {
        setIsExpanded((prevExpanded) => !prevExpanded);
      };
    

    return(
        <>
            <div className="markdownEditorContainer">
                <div className="topBar">
                <h2>Markdown Editor</h2>
                <ExpandButton isExpanded={isExpanded} onExpandClick={handleExpandClick}/>
                </div>
                <textarea
                className="markdownEditor"
                value={markdownContent}
                onChange={handleMarkdownChange}
                placeholder="Add the contents of your markdown here"
                />
            </div>

        <div className="markdownPreviewContainer">
        <div className="topBar">
            <h2>Markdown Preview</h2><ExpandButton isExpanded={isExpanded} onExpandClick={handleExpandClick}/>
            </div>
            <MarkdownPreview content={markdownContent}/>
        </div>

        </>
    )
}

export default MarkdownEditor