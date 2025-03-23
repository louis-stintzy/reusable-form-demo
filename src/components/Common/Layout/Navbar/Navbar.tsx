import { NavLink } from 'react-router-dom';

import './Navbar.css';
import logo from '../../../../assets/logo2.png';
import menu from '../../../../assets/menu.svg';
import X from '../../../../assets/x.svg';
import { useState } from 'react';

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // todo :  les liens doivent renvoyer vers des sections de la page LandingPage (et "logo" vers le haut de la page LandingPage)

  const navLinks = [
    { title: 'Features', path: '/#features' },
    { title: 'Showcase', path: '/#showcase' },
    { title: 'Docs', path: '/docs' },
    { title: 'Get Started', path: '/get-started' },
  ];
  return (
    <nav className="navbar">
      <div className="nav-content">
        {/* Nav Logo */}
        <NavLink to="/" className="nav-logo">
          <img src={logo} alt="logo" />
          <p>
            Reusable<span>Form</span>
          </p>
        </NavLink>
        {/* Nav Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.title}>
              <NavLink to={link.path}>{link.title}</NavLink>
            </li>
          ))}
        </ul>
        {/* Nav Actions */}
        <ul className="nav-actions">
          <li>
            <NavLink to="/login" className="btn-signin">
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className="btn-create-account">
              Create an accunt
            </NavLink>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <div className="mobile-menu-button">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? (
              <img src={X} alt="close" />
            ) : (
              <img src={menu} alt="menu" />
            )}
          </button>
        </div>
        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="mobile-menu">
            <ul className="mobile-nav-links">
              {navLinks.map((item, index) => (
                <li key={index} className="mobile-nav-item">
                  <NavLink to={item.path}>{item.title}</NavLink>
                </li>
              ))}
              <li className="mobile-nav-item">
                <NavLink to="/get-started">Get Started</NavLink>
              </li>
              <li className="mobile-nav-item">
                <NavLink to="/login" className="mobile-signin">
                  Sign In
                </NavLink>
              </li>
              <li className="mobile-nav-item">
                <NavLink to="/signup" className="mobile-create-account">
                  Create an accunt
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        {/* ----- */}
      </div>
    </nav>
  );
}

export default Navbar;
