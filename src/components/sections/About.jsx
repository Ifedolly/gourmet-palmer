import React from 'react';
import '../../styles/about.css';

export default function About() {
  return (
    <section id="about" className="about-section" aria-label="About Tony's">
      <div className="about-container">
        <div className="about-grid">
          {/* Narrative Column (ready for replacement copy) */}
          <div className="about-content" />

          {/* Ambiance Photography Column */}
          <div className="about-media">
            <img
              src="/images/romantic-table-setting.jpg"
              alt="Tony's dining ambiance and interior seating"
              className="about-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
