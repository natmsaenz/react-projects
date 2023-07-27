import React, { useState } from "react";
import ReactMarkdown from "react-markdown";


interface MarkdownDisplayProps {
    content: string;
}

const MarkdownDisplay: React.FC<MarkdownDisplayProps> = ({ content }) => {
    return (
        <div className="markdownDisplay">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}

export default MarkdownDisplay;