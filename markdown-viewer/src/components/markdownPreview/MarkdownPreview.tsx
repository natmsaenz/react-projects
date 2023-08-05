/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import ExpandButtons from "../expandButton/ExpandButtons";
import "./MarkdownPreview.css";

interface MarkdownPreviewProps {
  content: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ content }) => {
  return (
    <div className="MarkdownPreview">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownPreview;
