import './Section.css';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

import './Section.css';

function Section({ title, children }: SectionProps) {
  return (
    <div className="get-started-process__section">
      <h2 className="get-started-process__section-title">{title}</h2>
      <div className="get-started-process__section-content">{children}</div>
    </div>
  );
}

export default Section;
