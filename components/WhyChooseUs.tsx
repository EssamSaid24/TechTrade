"use client";
import React from "react";

const WhyChooseUs: React.FC = () => {
    return (
        <div className="relative w-full h-screen bg-gray-100">
            {/* Background Section */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/100 (2).jpeg')", // Replace with your actual background image URL
                }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content Section */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
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
