"use client";

import React from "react";
import { CardContent } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // You can change this to any highlight.js theme
import CodeBlock from "./CodeBlock";

const ChatMessage = ({ message }: { message: any }) => {
  console.log(message);
  return (
    <>
      {message.role === "user" ? (
        <CardContent className="flex w-max max-w-[75%] flex-col rounded-lg px-3 py-2 text-base ml-auto bg-primary text-primary-foreground whitespace-pre-line">
          {message.content}
        </CardContent>
      ) : (
        <CardContent className="flex w-max max-w-[75%] flex-col py-3 rounded-lg px-3 text-base bg-muted whitespace-break-spaces">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-2xl font-bold mb-4" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-xl font-bold" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-lg font-bold" {...props} />
              ),
              p: ({ node, ...props }) => <p className="text-base" {...props} />,
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-outside ml-10 break-normal" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-outside ml-10 break-normal" {...props} />
              ),
              li: ({ node, ...props }) => <li className="break-normal" {...props} />,
              code: ({ node, className, children, ...props }) => {
                // Use CodeBlock component for block code
                return <CodeBlock language={className}>{children}</CodeBlock>;
              },
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 border-gray-300 pl-4 italic my-0"
                  {...props}
                />
              ),
            }}
          >
            {message.content}
          </ReactMarkdown>
        </CardContent>
      )}
    </>
  );
};

export default ChatMessage;
