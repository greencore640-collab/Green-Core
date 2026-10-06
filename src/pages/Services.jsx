import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    icon: '🏫',
    title: 'School & College Scrap',
    price: 'Free',
    desc: 'We collect all types of educational institution scrap directly from your campus. Schedule a convenient pickup and our team will collect and pay on the spot.',
    items: ['Old books & notebooks', 'Broken desks & chairs', 'Computer & electronic scrap', 'Paper records & cardboard'],
  },
  {
    icon: '🏢',
    title: 'Office Clearance',
    price: 'Free',
    desc: 'Clearing out old office equipment? We handle bulk pickups for businesses — old computers, furniture, paper waste, and more.',
    items: ['Bulk paper & files', 'Computer hardware', 'Old office furniture', 'Metal fixtures'],
  },
  {
    icon: '🏗️',
    title: 'Construction Scrap',
    price: 'Custom Quote',
    desc: 'Post-construction cleanup made easy. We collect iron rods, wires, broken fixtures, and other construction waste.',
    items: ['Iron rods & beams', 'Copper & aluminium wire', 'PVC pipes', 'Broken fixtures'],
  },
  {
    icon: '💻',
    title: 'E-Waste Collection',
    price: 'Free',
    desc: 'Responsibly dispose of your old gadgets and electronics. We ensure certified recycling with zero data risk for sensitive equipment.',
    items: ['Old phones & laptops', 'Batteries & chargers', 'Printers & scanners', 'Cables & adapters'],
  },
  {
    icon: '🏭',
    title: 'Industrial Scrap',
    price: 'Custom Quote',
    desc: 'Large-scale industrial scrap disposal with bulk pricing, proper weighing equipment, and timely pickup by our fleet.',
    items: ['Machinery parts', 'Metal shavings', 'Industrial plastic', 'Packaging material'],
  },
  {
    icon: '🏥',
    title: 'Hospital Scrap',
    price: 'Free',
    desc: 'Have outdated hospital equipment, medical furniture, packaging waste, or non-biomedical scrap? We collect and recycle it safely in one visit.',
    items: ['Hospital beds & furniture', 'Metal equipment & fixtures', 'Cardboard & packaging waste', 'Plastic containers & office scrap'],
  },
];

const rates = [

];

export default function Services() {
  return (
    <main className="services-page">
      {/* HEADER */}
      <section className="services-hero">
        <div className="container">
          <div className="section-label">What We Offer</div>
          <h1>Scrap Pickup Services in <span>Chennai</span></h1>
          <p>GreenCore collects recyclable scrap from homes, schools and businesses across Chennai. From a bag of newspapers to an office clearance, book a convenient doorstep pickup.</p>
        </div>
        <div className="sh-blob" />
      </section>

      {/* SERVICES GRID */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="sc-header">
                  <span className="sc-icon">{s.icon}</span>
                  <span className="sc-price">{s.price}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="sc-items">
                  {s.items.map((item, j) => (
                    <li key={j}><span>✓</span> {item}</li>
                  ))}
                </ul>
                <Link to="/contact" className="sc-link">Enquire →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RATES TABLE */}
      <section className="rates-section">
        <div className="container">
          <div className="section-label">Transparent Pricing</div>
          <h2 className="section-title">*Rates vary daily with market. Final price confirmed at pickup.</h2>
          <div className="rates-table">
            {rates.map((r, i) => (
              <div className="rate-row" key={i}>
                <span className="rate-item">{r.item}</span>
                <span className="rate-value">{r.rate}</span>
              </div>
            ))}
          </div>
          <div className="rates-cta">
            <Link to="/#pickup-form" className="btn-primary">Book Free Pickup</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
