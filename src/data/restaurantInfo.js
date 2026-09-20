/**
 * ============================================================================
 * Tony's — Restaurant Information (restaurantInfo.js)
 * ============================================================================
 * NOTE: All business-specific details (contact numbers, email, hours, social
 * links) are preserved from the legacy project or configured as placeholder data.
 * Update this centralized file whenever confirmed business data is provided.
 * ============================================================================
 */

export const restaurantInfo = {
  // Brand & Heritage
  name: "Tony's",
  tagline: "...since 2001",
  establishedYear: "2001",
  heroSubtitle: "Exquisite coastal dining with homegrown, farm-fresh ingredients in Malibu.",
  aboutText:
    "Tony's is an exquisite restaurant that offers only the best meals at affordable prices. With our homegrown and fresh hand-picked ingredients, our dishes never disappoint.",

  // Physical Location (Preserved from legacy project - treat as placeholder)
  address: {
    street: "21422 Pacific Coast Highway",
    city: "Malibu",
    state: "CA",
    zip: "22605",
    full: "21422 Pacific Coast Highway, Malibu, CA 22605",
    googleMapsUrl: "https://maps.google.com/?q=21422+Pacific+Coast+Highway,+Malibu,+CA+22605",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105820.7397753696!2d-118.82562479567954!3d34.02592164478148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e81e3a9c72e47d%3A0x6b4f74d47c617b0!2sPacific%20Coast%20Hwy%2C%20Malibu%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
  },

  // Contact Information (Preserved from legacy project - treat as placeholder)
  contact: {
    phone: "+2348023445572",
    phoneDisplay: "+234 802 344 5572",
    fax: "+234.230.110.2233",
    email: "malibu@tonys.com",
    whatsAppNumber: "2348023445572", // Numerical format for wa.me URL
  },

  // Operating Hours (Placeholder structure)
  hours: [
    { days: "Monday – Thursday", lunch: "12:00 PM – 3:30 PM", dinner: "5:30 PM – 10:00 PM" },
    { days: "Friday – Saturday", lunch: "12:00 PM – 4:00 PM", dinner: "5:00 PM – 11:00 PM" },
    { days: "Sunday Brunch & Dinner", lunch: "11:00 AM – 3:30 PM", dinner: "5:00 PM – 9:30 PM" },
  ],

  // Social Media Links (Placeholder targets)
  socials: [
    { name: "Instagram", url: "#", handle: "@tonysmalibu" },
    { name: "Facebook", url: "#", handle: "Tony's Malibu" },
    { name: "TripAdvisor", url: "#", handle: "Tony's" },
  ],

  // Reservation CTA & Instructions
  reservation: {
    note: "Reservations are welcomed via WhatsApp or email. Walk-ins are accommodated based on daily seating availability.",
    defaultWhatsAppMessage: "Hello Tony's, I would like to inquire about reserving a table.",
  },
};
