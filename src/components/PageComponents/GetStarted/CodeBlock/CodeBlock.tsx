import { useState } from 'react';
import { Copy } from 'lucide-react';
import { Check } from 'lucide-react';
import './CodeBlock.css';

interface CodeBlockProps {
  children: React.ReactNode;
}

function CodeBlock({ children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof children === 'string') {
      navigator.clipboard
        .writeText(children)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => console.error('Failed to copy'));
    }
  };
  return (
    <div className="code-block-container">
      <pre className="code-block">
        <code>{children}</code>
      </pre>
      <button
        className={`code-block-copy-button ${copied ? 'copied' : ''}`}
        onClick={handleCopy}
        aria-label="Copy code to clipboard"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );
}

export default CodeBlock;
