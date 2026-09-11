import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurantInfo';
import '../../styles/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand & Heritage */}
          <div className="footer-brand">
            <span className="footer-brand-title">{restaurantInfo.name}</span>
            <span className="footer-brand-tagline">{restaurantInfo.tagline}</span>
            <p className="footer-brand-description">
              {restaurantInfo.aboutText}
            </p>
            <div className="footer-social-list">
              {restaurantInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="footer-social-link"
                  aria-label={social.name}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div>
            <h4 className="footer-heading">Location & Contact</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={16} style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{restaurantInfo.address.full}</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} style={{ flexShrink: 0, marginTop: '3px' }} />
                <a
                  href={`tel:${restaurantInfo.contact.phone}`}
                  className="footer-contact-link"
                >
                  {restaurantInfo.contact.phoneDisplay}
                </a>
              </li>
              <li className="footer-contact-item">
                <Mail size={16} style={{ flexShrink: 0, marginTop: '3px' }} />
                <a
                  href={`mailto:${restaurantInfo.contact.email}`}
                  className="footer-contact-link"
                >
                  {restaurantInfo.contact.email}
                </a>
              </li>
              <li className="footer-contact-item" style={{ marginTop: 'var(--space-2xs)' }}>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  style={{ borderColor: 'var(--color-gold)', color: 'var(--color-gold-light)' }}
                >
                  <MessageCircle size={14} />
                  <span>Reserve via WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Operating Hours */}
          <div>
            <h4 className="footer-heading">Hours</h4>
            <ul className="footer-hours-list">
              {restaurantInfo.hours.map((schedule, idx) => (
                <li key={idx} className="footer-hours-item">
                  <strong>{schedule.days}</strong>
                  <span>{schedule.lunch} &bull; {schedule.dinner}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Disclaimer */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} {restaurantInfo.name}. All rights reserved.
          </p>
          <p className="footer-disclaimer">
            Malibu, California &bull; Pacific Coast Highway
          </p>
        </div>
      </div>
    </footer>
  );
}
