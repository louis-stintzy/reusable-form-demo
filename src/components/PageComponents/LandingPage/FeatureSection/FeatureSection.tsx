import bot from '../../../../assets/bot-message-square.svg';
import fingerprint from '../../../../assets/fingerprint.svg';
import shield from '../../../../assets/shield-half.svg';
import battery from '../../../../assets/battery-charging.svg';
import plug from '../../../../assets/plug-zap.svg';
import globe from '../../../../assets/globe-lock.svg';

import './FeatureSection.css';

const features = [
  {
    icon: bot,
    text: 'Drag-and-Drop Form Builder',
    description:
      'Design and structure your forms effortlessly using an intuitive drag-and-drop interface.',
  },
  {
    icon: fingerprint,
    text: 'Multi-Platform Forms',
    description:
      'Create forms optimized for mobile, desktop, and responsive usage across multiple platforms.',
  },
  {
    icon: shield,
    text: 'Reusable Form Templates',
    description:
      'Quickly get started with pre-built reusable form templates tailored for common use-cases.',
  },
  {
    icon: battery,
    text: 'Real-Time Form Preview',
    description:
      'Visualize your forms instantly as you make changes, streamlining your development process.',
  },
  {
    icon: plug,
    text: 'Collaborative Form Editing',
    description:
      'Enhance productivity by enabling real-time collaboration with team members on form creation.',
  },
  {
    icon: globe,
    text: 'Form Analytics Dashboard',
    description:
      'Monitor form interactions, user engagement, and gather insights with built-in analytics tools.',
  },
];

const FeatureSection = () => {
  return (
    <div className="feature-section" id="features">
      <div className="feature-header">
        <span className="feature-badge">Feature</span>
        <h2 className="feature-title">
          Easily build <span className="feature-highlight">your forms</span>
        </h2>
      </div>
      <div className="feature-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">
              <img src={feature.icon} alt={feature.text} />
            </div>
            <div className="feature-content">
              <h5 className="feature-name">{feature.text}</h5>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
