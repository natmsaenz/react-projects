/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import ExpandButton from "../expandButton/ExpandButton";
import "./MarkdownPreview.css"

interface MarkdownPreviewProps {
    content: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ content }) => {
    return (
        <div className="MarkdownPreview">
            <div className="topBar">
            <h2>Markdown Preview</h2><ExpandButton />
            </div>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}

export default MarkdownPreview;