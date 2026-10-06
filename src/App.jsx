import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

const pageMetadata = {
  '/': {
    title: 'GreenCore – Scrap Pickup & Recycling Service in Chennai',
    description: 'GreenCore picks up scrap metal, paper, plastic and e-waste from your home or business in Chennai. Fair rates and convenient doorstep pickup. Book online.',
  },
  '/services': {
    title: 'Scrap Pickup Services in Chennai | GreenCore',
    description: 'GreenCore collects recyclable scrap from homes, schools and businesses across Chennai. Book doorstep pickup for paper, metal, plastic and e-waste.',
  },
  '/contact': {
    title: 'Contact GreenCore | Scrap Pickup in Chennai',
    description: 'Contact GreenCore to arrange scrap pickup in Chennai. Reach us by phone, WhatsApp or email for home and business collections.',
  },
};

function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pageMetadata[pathname] ?? pageMetadata['/'];
    const canonicalUrl = new URL(pathname, window.location.origin).href;

    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', page.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', page.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <PageMetadata />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
