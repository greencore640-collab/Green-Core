import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <NavLink to="/" className="nav-logo">
          <span className="logo-icon">♻</span>
          <span className="logo-text">Green<strong>Core</strong></span>
        </NavLink>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {[['/', 'Home'], ['/services', 'Services'], ['/contact', 'Contact']].map(([path, label]) => (
            <li key={path}>
              <NavLink to={path} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={() => setMenuOpen(false)}>
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <a href="https://wa.me/919345562602" target="_blank" rel="noopener noreferrer" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Book Pickup
            </a>
          </li>
        </ul>

        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
