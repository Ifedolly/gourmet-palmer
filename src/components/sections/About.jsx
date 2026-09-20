import React from 'react';
import { restaurantInfo } from '../../data/restaurantInfo';
import '../../styles/about.css';

export default function About() {
  return (
    <section id="about" className="about-section" aria-label="About Tony's">
      <div className="about-container">
        <div className="about-grid">
          {/* Narrative Column */}
          <div className="about-content">
            <div className="about-badge">
              <span>Our Story &bull; Est. {restaurantInfo.establishedYear}</span>
            </div>

            <h2 className="about-title">
              Exquisite Dining with Homegrown Freshness
            </h2>

            <p className="about-lead">
              {restaurantInfo.aboutText}
            </p>

            <p className="about-text">
              Located at {restaurantInfo.address.street} in Malibu, Tony's has been dedicated
              to delivering memorable culinary moments {restaurantInfo.tagline.toLowerCase()}. We believe
              exceptional cuisine begins with thoughtful care, time-honored preparations, and a warm,
              welcoming coastal atmosphere.
            </p>

            {/* Feature Pillars (Strictly based on authentic project content) */}
            <div className="about-pillars">
              <div className="about-pillar-item">
                <h3 className="about-pillar-title">Homegrown</h3>
                <p className="about-pillar-desc">
                  Fresh, hand-picked ingredients selected daily for authentic quality.
                </p>
              </div>

              <div className="about-pillar-item">
                <h3 className="about-pillar-title">Accessible Luxury</h3>
                <p className="about-pillar-desc">
                  Only the finest dishes prepared and offered at affordable prices.
                </p>
              </div>

              <div className="about-pillar-item">
                <h3 className="about-pillar-title">Malibu Heritage</h3>
                <p className="about-pillar-desc">
                  Proudly serving guests along the Pacific Coast Highway since 1987.
                </p>
              </div>
            </div>
          </div>

          {/* Ambiance Photography Column */}
          <div className="about-media">
            <img
              src="/images/jason-leung-poI7DelFiVA-unsplash.jpg"
              alt="Tony's dining ambiance and interior seating"
              className="about-img"
              loading="lazy"
            />
            <div className="about-media-badge">
              <span>Malibu, CA &bull; Est. {restaurantInfo.establishedYear}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
