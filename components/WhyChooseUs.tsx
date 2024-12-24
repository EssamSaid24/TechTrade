"use client";
import React, { useEffect, useState } from "react";

const WhyChooseUs: React.FC = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setOffset(scrollY); // Update the offset as the user scrolls
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="relative w-full h-screen bg-gray-100">
            {/* Background Section */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/100 (2).jpeg')",
                    transform: `translateY(-${offset * 0.1}px)`, // Move up as the user scrolls
                    transition: "transform 0.2s ease-out", // Smooth animation // Replace with your actual background image URL
                }}
            ></div>


            {/* Content Section */}
            <div
                className="relative z-10 flex items-center justify-center h-full"
                style={{

                }}
            >
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full" style={{
                    transform: `translateY(-${offset * 0.1}px)`, // Move up as the user scrolls
                    transition: "transform 0.2s ease-out", // Smooth animation // Replace with your actual background image URL
                }}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Us?</h2>
                    <p className="text-gray-600">
                        Unmatched Expertise and Unwavering Support
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
