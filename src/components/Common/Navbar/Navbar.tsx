import { NavLink } from 'react-router-dom';

import './Navbar.css';
import logo from '../../../assets/logo2.png';

function Navbar() {
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
        {/* ----- */}
      </div>
    </nav>
  );
}

export default Navbar;
