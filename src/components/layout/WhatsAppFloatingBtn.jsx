import React from 'react';
import { MessageCircle } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurantInfo';
import '../../styles/floating-button.css';

export default function WhatsAppFloatingBtn() {
  const whatsAppUrl = `https://wa.me/${restaurantInfo.contact.whatsAppNumber}?text=${encodeURIComponent(
    restaurantInfo.reservation.defaultWhatsAppMessage
  )}`;

  return (
    <a
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating-btn"
      aria-label="Chat with Gourmet Palmer on WhatsApp"
      title="Reserve via WhatsApp"
    >
      <MessageCircle className="whatsapp-floating-btn-icon" />
    </a>
  );
}
