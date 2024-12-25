"use client";
import React, { useState, useEffect } from "react";

interface AboutProps {
    id: string;
}

const About: React.FC <AboutProps> = ({id}) => {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            id={id}
            className="bg-gray-100 transition-transform duration-300"
            style={{
                transform: `translateY(-${Math.min(offsetY * 0.2, 50)}px)`,
            }}
        >
            <div className="px-4 sm:px-6 lg:px-20 py-8 sm:py-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-green-600 text-xl sm:text-2xl md:text-3xl font-bold mb-4">WHO WE ARE</h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-xl leading-relaxed text-justify">
                        Tech Trade Egypt has over 15 years of experience in the Egyptian market, backed by more than 35 years of combined expertise. As a sole agent, consultant, and distributor for leading global brands, we serve both the industrial and aviation sectors, offering the highest standards of products and services.
                        Our team is committed to delivering cost-effective, reliable, and transparent solutions. We work with top manufacturers and provide a streamlined process from initial consultation to final delivery. We handle all logistics, including shipping, delivery, installation, and after-sales services, ensuring a smooth and efficient experience from start to finish.

                        With a focus on extensive industry experience and a strong after-sales network supported by skilled engineers, we aim to offer nothing but the best to our clients, ensuring satisfaction and continued trust in the Egyptian market.
                    </p>
                </div>
                <div className="xl:w-3/4 flex justify-center items-center">
                    <img
                        src="/partsPlane.png"
                        alt="About Us"
                        className="max-w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
