import { useLocation } from 'react-router-dom';
// import Navbar from '../../components/PageComponents/LandingPage/Navbar/Navbar';

import './LandingPage.css';
import HeroSection from '../../components/PageComponents/LandingPage/HeroSection/HeroSection';
import FeatureSection from '../../components/PageComponents/LandingPage/FeatureSection/FeatureSection';
import { useEffect } from 'react';
import DemoSection from '../../components/PageComponents/LandingPage/DemoSection/DemoSection';

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
        <DemoSection />
      </div>
    </div>
  );
}

export default LandingPage;
