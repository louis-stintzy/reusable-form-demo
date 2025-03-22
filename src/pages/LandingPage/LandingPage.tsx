import { NavLink, useLocation } from 'react-router-dom';
// import Navbar from '../../components/PageComponents/LandingPage/Navbar/Navbar';

import './LandingPage.css';
import HeroSection from '../../components/PageComponents/LandingPage/HeroSection/HeroSection';
import FeatureSection from '../../components/PageComponents/LandingPage/FeatureSection/FeatureSection';
import { useEffect } from 'react';

function LandingPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Si un hash est présent, scroll jusqu'à l'élément correspondant
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si aucun hash, scroll en haut
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="home-page__container">
      {/* <Navbar /> */}
      <div className="container">
        <HeroSection />
        <FeatureSection />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className="text-blue-500">---Demo---</h2>
          <h3 className="text-green-500">*User Profile*</h3>
          <h4>Input Type</h4>
          <ul>
            <li>text</li>
            <li>email</li>
            <li>date</li>
            <li>file</li>
            <li>checkbox</li>
          </ul>
          <NavLink to="/demo/user-profile">User Profile</NavLink>
          <h3 className="text-green-500">*Flight Reservation*</h3>
          <ul>
            <li>Input Type</li>
            <li>select</li>
            <li>date</li>
            <li>number</li>
            <li>switch</li>
          </ul>
          <NavLink to="/demo/flight-reservation">Flight Reservation</NavLink>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
