"use client";
import React, { useEffect, useState } from "react";

const Services: React.FC = () => {
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
        <div
            className="bg-gray-100 py-16"
            style={{
                transform: `translateY(-${offset * 0.1}px)`, // Move up on scroll
                transition: "transform 0.1s ease-out", // Smooth animation
            }}
        >
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">SERVICES</h2>
                <div className="h-1 w-16 bg-green-600 mx-auto"></div>
            </div>

            {/* Services Content */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 gap-12">
                {/* Service Item 1 */}
                <div className="flex items-center hover:border-4 hover:border-green-500 p-4 rounded-lg transition-all duration-300">
                    <div className="w-1/3">
                        <img
                            src="/8.jpeg" // Replace with your image path
                            alt="Industrial Equipment"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-2/3 ml-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Industrial Equipment Distribution
                        </h3>
                        <p className="text-gray-600">
                            We provide a wide range of high-quality industrial equipment from
                            top global brands, ensuring your facilities operate efficiently.
                        </p>
                    </div>
                </div>

                {/* Service Item 2 */}
                <div className="flex items-center hover:border-4 hover:border-green-500 p-4 rounded-lg transition-all duration-300">
                    <div className="w-2/3 mr-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Aviation Sector Solutions
                        </h3>
                        <p className="text-gray-600">
                            Our aviation sector solutions include the distribution of aircraft
                            parts and equipment, backed by expert technical support and
                            consultation.
                        </p>
                    </div>
                    <div className="w-1/3">
                        <img
                            src="/9.jpeg" // Replace with your image path
                            alt="Aviation Sector"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Service Item 3 */}
                <div className="flex items-center hover:border-4 hover:border-green-600 p-4 rounded-lg transition-all duration-200">
                    <div className="w-1/3">
                        <img
                            src="/500.jpg" // Replace with your image path
                            alt="Industrial Equipment"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-2/3 ml-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            24/7 Technical Support
                        </h3>
                        <p className="text-gray-600">
                            Our dedicated team of engineers offers round-the-clock technical support to ensure minimal downtime and smooth operations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
