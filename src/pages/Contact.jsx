import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const YOUR_WHATSAPP_NUMBER = '919345562602'; // ← Replace with your WhatsApp number

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `📩 *GreenCore Contact Form*\n\n👤 *Name:* ${form.name}\n📞 *Phone:* ${form.phone}\n📧 *Email:* ${form.email}\n\n💬 *Message:*\n${form.message}\n\n_Sent via GreenCore Website_`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${919345562602}?text=${encoded}`, '_blank');
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: '', phone: '', email: '', message: '' }); }, 5000);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="section-label">Reach Out</div>
          <h1>Get in <span>Touch</span></h1>
          <p>Have questions? Want to schedule a bulk pickup? We're just a message away.</p>
        </div>
      </section>

      <section className="contact-body">
        <div className="container contact-inner">
          {/* LEFT INFO */}
          <div className="contact-info">
            <h2>Let's Talk</h2>
            <p>Whether you have a small bag of scrap or a warehouse full — our team is ready to help. Reach us through any channel below.</p>

            <div className="contact-cards">
              {[
                { icon: '📞', label: 'Phone / WhatsApp', value: '+91 93455 62602', link: 'https://wa.me/919345562602' },
                { icon: '📧', label: 'Email', value: 'greencore640@gmail.com', link: 'mailto:greencore640@gmail.com' },
                { icon: '📍', label: 'Location', value: 'Chennai, Tamil Nadu, India', link: '#' },
                { icon: '🕘', label: 'Working Hours', value: 'Mon–Sun: 8 AM – 7 PM', link: '#' },
              ].map((c, i) => (
                <a href={c.link} className="contact-card" key={i} target={c.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  <span className="cc-icon">{c.icon}</span>
                  <div>
                    <span className="cc-label">{c.label}</span>
                    <span className="cc-value">{c.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <a href="https://wa.me/919345562602" target="_blank" rel="noopener noreferrer" className="whatsapp-direct">
              <span>💬</span> Chat directly on WhatsApp
            </a>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form-wrap">
            <h3>Send us a Message</h3>
            {sent ? (
              <div className="form-success">
                <div style={{ fontSize: '3rem' }}>✅</div>
                <h4>Message Sent!</h4>
                <p>Your message has been forwarded to our WhatsApp. We'll reply shortly!</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Eg. Ravi Kumar" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Eg. 9876543210" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email <span>(optional)</span></label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="How can we help you?" required />
                </div>
                <button type="submit" className="contact-submit">
                  📲 Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="section-label">Common Questions</div>
          <h2 className="section-title">FAQ</h2>
          <div className="faq-grid">
            {[
              ['Is pickup really free?', 'Yes! We charge zero pickup fees. We earn from recycling the scrap — you get paid for it.'],
              ['How soon can you come?', 'We offer same-day pickups for most areas. Schedule before 12 PM for a same-day slot.'],
              ['How is scrap weighed?', 'Our crew carries calibrated digital scales. You can verify the weight before we finalize.'],
              ['How do I get paid?', 'We pay cash on the spot after weighing. No delays, no bank transfers needed.'],
              ['What if I have very little scrap?', 'No minimum quantity! Even a single bag of papers is welcome.'],
              ['Do you take e-waste?', 'Yes, we collect all e-waste and ensure it reaches certified recyclers.'],
            ].map(([q, a], i) => (
              <div className="faq-card" key={i}>
                <h4>Q: {q}</h4>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
