import React, { useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurantInfo';

export default function MobileDrawer({ isOpen, onClose }) {
  // Prevent background scrolling and support Escape key when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

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
      {/* Backdrop overlay */}
      <div
        className={`drawer-backdrop ${isOpen ? 'is-open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out drawer panel */}
      <div
        className={`drawer-panel ${isOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        aria-hidden={!isOpen}
      >
        <div className="drawer-header">
          <div>
            <div className="drawer-brand-title">{restaurantInfo.name}</div>
            <div className="drawer-brand-tagline">{restaurantInfo.tagline}</div>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav aria-label="Mobile Navigation Links">
          <ul className="drawer-nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="drawer-nav-link"
                  onClick={onClose}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="drawer-footer">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="drawer-cta"
            onClick={onClose}
          >
            <MessageCircle size={18} />
            <span>Reserve via WhatsApp</span>
          </a>
          <p className="drawer-info-snippet">
            {restaurantInfo.address.street} &bull; Malibu, CA
          </p>
        </div>
      </div>
    </>
  );
}
