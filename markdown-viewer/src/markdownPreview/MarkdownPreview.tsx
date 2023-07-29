/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import ExpandButton from "../expandButton/ExpandButton";
import "./MarkdownPreview.css"

interface MarkdownPreviewProps {
    content: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ content }) => {
    const [isExpanded,setIsExpanded] = useState(false);
    const handleExpandClick = () => {
        setIsExpanded((prevExpanded) => !prevExpanded);
      };
    
    return (
        <div className="MarkdownPreview">
            
            {isExpanded && <ReactMarkdown>{content}</ReactMarkdown>}
        </div>
    );
}

export default MarkdownPreview;