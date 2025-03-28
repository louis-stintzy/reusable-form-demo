import { useEffect } from 'react';
import { Check, Braces, Monitor } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import UserProfilePreview from './../../../../assets/user-profile-demo.png';
import FlightReservationPreview from './../../../../assets/flight-reservation-demo.png';
import LoginFormDemoPreview from './../../../../assets/login-form-demo.png';

import './DemoSection.css';

// todo: corriger les liens

const demonstrations = [
  {
    title: 'User Profile',
    image: UserProfilePreview,
    features: ['Text', 'Email', 'Date', 'File', 'Checkbox'],
    link: '/demo/user-profile',
    repo: 'https://github.com/louis-stintzy/reusable-form-demo/tree/feat/landing-page/src/components/PageComponents/FormDemo/UserProfileForm',
  },
  {
    title: 'Login Form',
    image: LoginFormDemoPreview,
    features: ['Email', 'Password', 'Dynamic message'],
    link: '/demo/login',
    repo: 'https://github.com/louis-stintzy/reusable-form-demo/tree/feat/FormBuilder/src/components/PageComponents/FormDemo/LoginFormDemo',
  },
  {
    title: 'Flight Reservation',
    image: FlightReservationPreview,
    features: ['Select', 'Date', 'Number', 'Switch'],
    link: '/demo/flight-reservation',
    repo: 'https://github.com/louis-stintzy/reusable-form-demo/tree/feat/landing-page/src/components/PageComponents/FormDemo/FlightReservationForm',
  },
];

function DemoSection() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="demo-section" id="showcase">
      <div className="demo-header">
        <span className="demo-badge">Showcase</span>
        <h2 className="demo-title">
          ReusableForm <span className="demo-highlight">Showcase</span>
        </h2>
      </div>
      <div className="demo-container">
        {demonstrations.map((demo, index) => (
          <div key={index} className="demo-card">
            {/* demo-name */}
            <div className="demo-name-container">
              <p className="demo-name">{demo.title}</p>
            </div>
            {/* demo-image */}
            <div className="demo-image-container">
              <NavLink to={demo.link} target="_blank" rel="noreferrer">
                <img src={demo.image} alt={demo.title} className="demo-image" />
              </NavLink>
            </div>
            {/* demo-features */}
            <div className="demo-features-container">
              <ul className="demo-features">
                {demo.features.map((feature, index) => (
                  <li key={index}>
                    <Check className="demo-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* buttons */}
            <div className="demo-buttons-container">
              <NavLink
                to={demo.repo}
                className="demo-button"
                target="_blank"
                rel="noreferrer"
              >
                {/* //todo: ne regle pas le pb du hover (pas la bonne solution de passer la couleur au svg) => à refaire /!\ index.css*/}
                <Braces color="var(--logo-color)" />
              </NavLink>
              <NavLink
                to={demo.link}
                className="demo-button"
                target="_blank"
                rel="noreferrer"
              >
                <Monitor color="var(--logo-color)" />
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DemoSection;
