// import ReactMarkdown from 'react-markdown';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import readmeContent from '../../../README.md?raw';

import 'github-markdown-css/github-markdown.css';
import './DocsPage.css';

function DocsPage() {
  return (
    <div className="markdown-body docs-container">
      {/* <ReactMarkdown>{readmeContent}</ReactMarkdown> */}
      <Markdown remarkPlugins={[remarkGfm]}>{readmeContent}</Markdown>
    </div>
  );
}

export default DocsPage;
