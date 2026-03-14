import React from 'react';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const whatsappNumber = '918688700711'; // Hyderabad number
  const message = encodeURIComponent('Hello S28 IT Academy, I would like to know more about your programs.');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 0C7.164 0 0 7.164 0 16c0 2.825.74 5.47 2.03 7.77L0 32l8.47-2.03C10.77 32.26 13.415 33 16 33c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.5c-2.24 0-4.35-.59-6.18-1.62l-.42-.21-4.35 1.04 1.04-4.24-.21-.42A13.46 13.46 0 0116 2.5c7.455 0 13.5 6.045 13.5 13.5S23.455 29.5 16 29.5z"
          fill="currentColor"
        />
        <path
          d="M23.5 18.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.36.22-.67.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51-.18-.01-.38-.01-.58-.01-.2 0-.52.07-.8.35-.27.27-1.04 1.04-1.04 2.53s1.07 2.93 1.22 3.13c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z"
          fill="white"
        />
      </svg>
      <span className="whatsapp-tooltip">Chat with us on WhatsApp</span>
    </a>
  );
};

export default WhatsAppFloat;

