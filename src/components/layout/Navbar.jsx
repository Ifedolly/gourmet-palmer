import React, { useState } from 'react';
import { Menu as MenuIcon } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurantInfo';
import MobileDrawer from './MobileDrawer';
import '../../styles/navbar.css';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          {/* Mobile-only brand on the left */}
          <a href="#home" className="navbar-brand navbar-brand-mobile" aria-label="Tony's Home">
            <span className="navbar-brand-title">{restaurantInfo.name}</span>
            <span className="navbar-brand-tagline">{restaurantInfo.tagline}</span>
          </a>

          {/* Desktop Left Navigation: Menu | About */}
          <nav className="navbar-nav-left" aria-label="Primary Navigation Left">
            <ul className="navbar-links">
              <li>
                <a href="#menu" className="navbar-link">Menu</a>
              </li>
              <li>
                <a href="#about" className="navbar-link">About</a>
              </li>
            </ul>
          </nav>

          {/* Desktop Center Logo / Brand Mark: Clickable to Home / Top */}
          <div className="navbar-center-brand-wrapper">
            <a href="#home" className="navbar-brand navbar-brand-desktop" aria-label="Tony's Home">
              <span className="navbar-brand-title">{restaurantInfo.name}</span>
              <span className="navbar-brand-tagline">{restaurantInfo.tagline}</span>
            </a>
          </div>

          {/* Desktop Right Navigation: Gallery | Contact */}
          <nav className="navbar-nav-right" aria-label="Primary Navigation Right">
            <ul className="navbar-links">
              <li>
                <a href="#gallery" className="navbar-link">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="navbar-link">Contact</a>
              </li>
            </ul>
          </nav>

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

      {/* Full-Screen Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
