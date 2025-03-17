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
  const navLinks = [
    { title: 'Features', path: '#' },
    // { title: 'Workflow', path: '#' },
    { title: 'Pricing', path: '#' },
    { title: 'Testimonials', path: '#' },
    { title: 'Get Started', path: '#' },
  ];
  return (
    <nav className="navbar">
      <div className="nav-content">
        {/* Nav Logo */}
        <div className="nav-logo">
          <img src={logo} alt="logo" />
          <p>
            Reusable<span>Form</span>
          </p>
        </div>
        {/* Nav Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.title}>
              <a href={link.path}>{link.title}</a>
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
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
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
            {/* <div className="mobile-buttons">
              <a href="#" className="mobile-login-button">
                Log in
              </a>
              <a href="#" className="mobile-create-account">
                Sign up
              </a>
            </div> */}
          </div>
        )}
        {/* ----- */}
      </div>
    </nav>
  );
}

export default Navbar;
