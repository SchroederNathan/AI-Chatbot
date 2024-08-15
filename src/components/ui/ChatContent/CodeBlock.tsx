import React, { useState } from "react";
import { CopyIcon, CheckIcon } from "lucide-react"; // Import the checkmark icon

const CodeBlock = ({
  children,
  language,
}: {
  children: React.ReactNode;
  language?: string;
}) => {
  const [copied, setCopied] = useState(false);

  // Recursive function to extract text from React nodes
  const extractTextFromChildren = (children: React.ReactNode): string => {
    if (typeof children === "string") {
      return children;
    }
    if (Array.isArray(children)) {
      return children.map(extractTextFromChildren).join("");
    }
    if (
      typeof children === "object" &&
      children !== null &&
      "props" in children
    ) {
      return extractTextFromChildren(children.props.children);
    }
    return "";
  };

  const handleCopy = () => {
    // Extract text content from React nodes
    const textToCopy = extractTextFromChildren(children);
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Revert back to copy icon after 2 seconds
  };

  return (
    <div className="relative font-mono text-sm mb-4">
      {/* Language label */}
      {language && (
        <span className="absolute top-2 left-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          {language}
        </span>
      )}

      {/* Code block container */}
      {language ? (
        <pre className="p-4 mt-4 overflow-x-auto rounded-lg bg-background text-black  dark:text-white border border-transparent dark:border-black">
          <code>{children}</code>
        </pre>
      ) : (
        <pre className="p-4  overflow-x-auto rounded-lg bg-background text-black  dark:text-white border border-transparent dark:border-black">
          <code>{children}</code>
        </pre>
      )}

      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400"
      >
        {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
      </button>
    </div>
  );
};

export default CodeBlock;
