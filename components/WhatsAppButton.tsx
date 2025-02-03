"use client";
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const phoneNumber = '201282263319'; // Replace with your company's WhatsApp number
    const message = 'Hello! I would like to know more about your services.'; // Default message

    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <button
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
            aria-label="Contact on WhatsApp"
        >
            <FaWhatsapp className="text-3xl" />
        </button>
    );
};

export default WhatsAppButton;