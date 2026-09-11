import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloatingBtn from './components/layout/WhatsAppFloatingBtn';
import { restaurantInfo } from './data/restaurantInfo';

export default function App() {
  return (
    <div className="app-layout">
      {/* Top Navigation */}
      <Navbar />

      {/* Placeholder main content testing section anchors */}
      <main style={{ minHeight: '60vh', padding: 'var(--space-3xl) var(--container-padding)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'var(--color-gold-light)', marginBottom: 'var(--space-md)' }}>
            {restaurantInfo.name}
          </h1>
          <p style={{ fontStyle: 'italic', color: 'var(--color-gold)', marginBottom: 'var(--space-lg)' }}>
            {restaurantInfo.tagline}
          </p>
          <p style={{ maxWidth: '600px', margin: '0 auto var(--space-2xl) auto', color: 'var(--color-text-secondary)' }}>
            {restaurantInfo.aboutText}
          </p>

          {/* Planned Section Anchor Anchors (Placeholders for Step 5+) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)', opacity: 0.6, fontSize: 'var(--text-sm)' }}>
            <div id="home">Planned #home section</div>
            <div id="about">Planned #about section</div>
            <div id="menu">Planned #menu section</div>
            <div id="gallery">Planned #gallery section</div>
            <div id="contact">Planned #contact section</div>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Floating WhatsApp CTA */}
      <WhatsAppFloatingBtn />
    </div>
  );
}
