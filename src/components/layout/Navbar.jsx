import React, { useState } from 'react';
import { Menu as MenuIcon, MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurantInfo';
import MobileDrawer from './MobileDrawer';
import '../../styles/navbar.css';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const whatsAppUrl = `https://wa.me/${restaurantInfo.contact.whatsAppNumber}?text=${encodeURIComponent(
    restaurantInfo.reservation.defaultWhatsAppMessage
  )}`;

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          {/* Brand / Logo */}
          <a href="#home" className="navbar-brand">
            <span className="navbar-brand-title">{restaurantInfo.name}</span>
            <span className="navbar-brand-tagline">{restaurantInfo.tagline}</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className="navbar-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="navbar-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Reservation CTA */}
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta"
          >
            <MessageCircle size={16} />
            <span>Reserve via WhatsApp</span>
          </a>

          {/* Mobile Hamburger Menu Button */}
          <button
            type="button"
            className="navbar-menu-btn"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open menu"
            aria-expanded={isDrawerOpen}
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
