import { NavLink } from 'react-router-dom';

import './Navbar.css';
import logo from '../../../../assets/logo2.png';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../../../store/hooks/useAuth';
import { Menu } from 'lucide-react';

function Navbar() {
  const drawerRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated, logout } = useAuth();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = (action: 'open' | 'close') => {
    if (action === 'open') setMobileDrawerOpen(true);
    if (action === 'close') setMobileDrawerOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setMobileDrawerOpen(false);
      }
    };
    if (mobileDrawerOpen)
      document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [mobileDrawerOpen]);

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
          {isAuthenticated ? (
            <>
              <li>
                <button onClick={logout} className="btn-logout">
                  Logout
                </button>
              </li>
              <li>
                <NavLink to="/dashboard" className="btn-dashboard">
                  Dashboard
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
        {/* Mobile Menu Button */}
        <div className="mobile-menu-button">
          {mobileDrawerOpen ? (
            <></>
          ) : (
            <button onClick={() => toggleNavbar('open')}>
              <Menu />
            </button>
          )}
        </div>
        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          // <div className="mobile-overlay">
          <div className="mobile-menu" ref={drawerRef}>
            <ul className="mobile-nav-links">
              {navLinks.map((item, index) => (
                <li key={index} className="mobile-nav-item">
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileDrawerOpen(false)}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
              {isAuthenticated ? (
                <>
                  <li className="mobile-nav-item">
                    <NavLink
                      to="/dashboard"
                      className="mobile-dashboard"
                      onClick={() => setMobileDrawerOpen(false)}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="mobile-nav-item">
                    <button
                      onClick={() => {
                        logout();
                        setMobileDrawerOpen(false);
                      }}
                      className="mobile-logout"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="mobile-nav-item">
                    <NavLink
                      to="/login"
                      className="mobile-signin"
                      onClick={() => setMobileDrawerOpen(false)}
                    >
                      Sign In
                    </NavLink>
                  </li>
                  <li className="mobile-nav-item">
                    <NavLink
                      to="/signup"
                      className="mobile-create-account"
                      onClick={() => setMobileDrawerOpen(false)}
                    >
                      Create an accunt
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          // </div>
        )}
        {/* ----- */}
      </div>
    </nav>
  );
}

export default Navbar;
