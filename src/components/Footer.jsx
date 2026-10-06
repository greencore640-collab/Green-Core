import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span>♻</span> Green<strong>Core</strong>
          </div>
          <p>Making recycling effortless. We pick up scrap from your doorstep and ensure responsible recycling for a greener tomorrow.</p>
          <div className="footer-social">
            <a href="https://wa.me/919345562602" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>We Collect</h4>
          <ul>
            <li>Paper & Cardboard</li>
            <li>Iron & Metal</li>
            <li>Plastic & Bottles</li>
            <li>E-Waste</li>
            <li>Aluminium & Copper</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>📞 +91 93455 62602</li>
            <li>📧 greencore640@gmail.com</li>
            <li>📍 Chennai, Tamil Nadu</li>
            <li>🕘 Mon–Sun, 8 AM – 7 PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} GreenCore. All rights reserved.</p>
        <p>Made with 💚 for a greener planet</p>
      </div>
    </footer>
  );
}
