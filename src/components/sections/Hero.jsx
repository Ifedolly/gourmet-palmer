import React from 'react';
import { Utensils } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurantInfo';
import '../../styles/hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Welcome to Tony's">
      <div className="hero-container">
        <div className="hero-content">
          {/* Main Brand Title */}
          <h1 className="hero-title">{restaurantInfo.name}</h1>

          {/* Subtitle / Tagline */}
          <div className="hero-tagline">{restaurantInfo.tagline}</div>

          {/* Action CTA */}
          <div className="hero-actions">
            <a href="#menu" className="hero-btn-primary">
              <Utensils size={17} />
              <span>Explore Menu</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
