import React, { useState } from 'react';
import './PickupForm.css';

export default function PickupForm() {
  const [form, setForm] = useState({ name: '', phone: '', address: '', scrap: '' });
  const [sent, setSent] = useState(false);

  const YOUR_WHATSAPP_NUMBER = '919345562602'; // ← Replace with your WhatsApp number (no + or spaces)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `🟢 *New GreenCore Pickup Request*\n\n👤 *Name:* ${form.name}\n📞 *Contact:* ${form.phone}\n📍 *Address:* ${form.address}\n♻ *Scrap Type:* ${form.scrap || 'Not specified'}\n\n_Sent via GreenCore Website_`;
    const encoded = encodeURIComponent(msg);
window.location.href = `https://wa.me/${919345562602}?text=${encoded}`;    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', phone: '', address: '', scrap: '' });
    }, 4000);
  };

  return (
    <div className="pickup-form-wrap">
      <div className="form-badge">🟢 Free Doorstep Pickup</div>
      <h3>Schedule a Pickup</h3>
      <p className="form-sub">Fill in your details — we'll come to you!</p>

      {sent ? (
        <div className="form-success">
          <div className="success-icon">✅</div>
          <h4>Request Sent!</h4>
          <p>Opening WhatsApp with your details. We'll confirm shortly!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="pickup-form">
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Eg. Ravi Kumar"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Eg. 9876543210"
              value={form.phone}
              onChange={handleChange}
              pattern="[6-9][0-9]{9}"
              title="Enter a valid 10-digit mobile number"
              required
            />
          </div>

          <div className="form-group">
            <label>Pickup Address</label>
            <textarea
              name="address"
              placeholder="House no., Street, Area, City"
              value={form.address}
              onChange={handleChange}
              rows={3}
              required
            />
          </div>

          <div className="form-group">
            <label>Scrap Type <span>(optional)</span></label>
            <select name="scrap" value={form.scrap} onChange={handleChange}>
              <option value="">Select scrap type</option>
              <option>Paper & Cardboard</option>
              <option>Iron & Metal</option>
              <option>Plastic</option>
              <option>E-Waste</option>
              <option>Aluminium / Copper</option>
              <option>Mixed / Other</option>
            </select>
          </div>

          <button type="submit" className="form-submit">
            <span>📲 Send via WhatsApp</span>
          </button>

          <p className="form-note">You'll be redirected to WhatsApp to confirm your pickup.</p>
        </form>
      )}
    </div>
  );
}
