import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <h1 className="hero-title">
        Reusable Form tool
        <span className="gradient-text"> for developers</span>
      </h1>
      <p className="hero-description">
        Empower your creativity and bring your form ideas to life with our
        intuitive development tool. Get started today and turn your imagination
        into forms instantly!
      </p>
      <div className="hero-buttons">
        <a href="#" className="btn-start">
          Start for free
        </a>
        <a href="#" className="btn-docs">
          Documentation
        </a>
      </div>
      <div className="video-container">
        {/* <video autoPlay loop muted className="hero-video">
          // <source src={video1} type="video/mp4" />
          // Your browser does not support the video tag. //{' '}
        </video>
        //{' '}
        <video autoPlay loop muted className="hero-video">
          // <source src={video2} type="video/mp4" />
          // Your browser does not support the video tag. //{' '}
        </video> */}
      </div>
    </div>
  );
}

export default HeroSection;
