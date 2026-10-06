import React from 'react';
import { Link } from 'react-router-dom';
import PickupForm from '../components/PickupForm';
import './Home.css';

const stats = [
  { value: '5,000+', label: 'Happy Customers' },
  { value: '200T+', label: 'Scrap Recycled' },
  { value: '50+', label: 'Areas Covered' },
  { value: '4.9★', label: 'Customer Rating' },
];

const materials = [
  { icon: '📰', name: 'Paper & Cardboard', desc: 'Newspapers, boxes, books' },
  { icon: '🔩', name: 'Iron & Metal', desc: 'Furniture, rods, utensils' },
  { icon: '🧴', name: 'Plastic', desc: 'Bottles, containers, sheets' },
  { icon: '💻', name: 'E-Waste', desc: 'Electronics, batteries, cables' },
  { icon: '🥫', name: 'Aluminium', desc: 'Cans, frames, foils' },
  { icon: '🔌', name: 'Copper & Brass', desc: 'Wires, pipes, fittings' },
];

const steps = [
  { n: '01', title: 'Fill the Form', desc: 'Enter your name, contact & address in the quick form below.' },
  { n: '02', title: 'We Confirm', desc: 'Our team calls you to confirm the pickup time slot.' },
  { n: '03', title: 'We Arrive', desc: 'Our crew arrives at your doorstep at the scheduled time.' },
  { n: '04', title: 'Get Paid', desc: 'We weigh your scrap on the spot and pay you instantly.' },
];

export default function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb orb-1" />
          <div className="hero-orb orb-2" />
          <div className="hero-grid" />
        </div>

        <div className="hero-inner container">
          <div className="hero-content">
            <div className="hero-tag fade-up">
              <span className="pulse-dot" /> Doorstep Scrap Pickup in Chennai
            </div>
            <h1 className="hero-title fade-up delay-1">
              Scrap Pickup<br />
              in <span className="highlight">Chennai</span>
            </h1>
            <p className="hero-desc fade-up delay-2">
              GreenCore collects scrap from homes and businesses across Chennai. We pick up paper, metal, plastic and e-waste at your doorstep, with fair rates and easy booking.
            </p>
            <div className="hero-actions fade-up delay-3">
              <a href="#pickup-form" className="btn-primary">📲 Book Free Pickup</a>
              <Link to="/services" className="btn-outline">Our Services →</Link>
            </div>
          </div>

          <div className="hero-form fade-up delay-4" id="pickup-form">
            <PickupForm />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-bar">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MATERIALS */}
      <section className="materials">
        <div className="container">
          <div className="section-label">What We Buy</div>
          <h2 className="section-title">We Accept All Types<br />of Scrap Material</h2>
          <div className="materials-grid">
            {materials.map((m, i) => (
              <div className="material-card" key={i}>
                <div className="mat-icon">{m.icon}</div>
                <h4>{m.name}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-label">Simple Process</div>
          <h2 className="section-title">How GreenCore Works</h2>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div className="step-card" key={i}>
                <div className="step-num">{s.n}</div>
                <div className="step-connector" />
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us">
        <div className="container why-inner">
          <div className="why-text">
            <div className="section-label">Why GreenCore</div>
            <h2 className="section-title">Recycling Made <span className="text-lime">Rewarding</span></h2>
            <ul className="why-list">
              {[
                ['💰', 'Best Market Rates', 'We offer the best price for your scrap — no bargaining needed.'],
                ['🚚', 'Free Doorstep Pickup', 'No need to carry or travel. We come to your home or office.'],
                ['⚡', 'Same-Day Service', 'Fast pickup available. Just book and we\'ll be there.'],
                ['🌱', 'Eco-Responsible', 'All scrap is recycled through certified, eco-friendly channels.'],
                ['🔒', 'Safe & Trusted', 'Verified crew, digital receipts, and transparent weighing.'],
              ].map(([icon, title, desc], i) => (
                <li key={i}>
                  <span className="why-icon">{icon}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="why-visual">
            <div className="visual-ring ring-1" />
            <div className="visual-ring ring-2" />
            <div className="visual-card">
              <div className="vc-icon">♻️</div>
              <h3>Start Recycling Today</h3>
              <p>Join thousands of households making a difference</p>
              <a href="#pickup-form" className="btn-primary">Book Pickup Free</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to clear your scrap?</h2>
          <p>Book a free doorstep pickup right now — it takes less than 60 seconds.</p>
          <a href="#pickup-form" className="btn-white">Schedule Now →</a>
        </div>
      </section>
    </main>
  );
}
