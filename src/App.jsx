import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Footer from './components/layout/Footer';
import WhatsAppFloatingBtn from './components/layout/WhatsAppFloatingBtn';

export default function App() {
  return (
    <div className="app-layout">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About */}
        <About />

        {/* Placeholder Anchors for Step 6+ */}
        <div id="menu" />
        <div id="gallery" />
        <div id="contact" />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <WhatsAppFloatingBtn />
    </div>
  );
}
