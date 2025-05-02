"use client";
import React, { useState, useEffect } from "react";

interface AboutProps {
    id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
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
                transform: `translateY(${-offsetY * -0.03}px)`, // Adjust this multiplier for stronger or weaker parallax
            }}
        >
            <div className="px-4 sm:px-6 lg:px-20 py-8 sm:py-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-green-600 text-xl sm:text-2xl md:text-3xl font-bold mb-4">WHO WE ARE</h2>
                    <h2 className="text-black text-xl sm:text-2xl md:text-3xl font-bold mb-4">FOUNDED IN 1983,</h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-xl leading-relaxed text-justify">
                        We are a leading consultant agency working in
                        various fields providing state of the art solutions to
                        keep your operations uninterrupted.
                        We have experienced team with vast experience that
                        is happy to assist you with your needs and solutions
                        for both industries with a strong focus on customer
                        satisfaction, we strive to provide innovative solutions
                        and excellent service to our clients.
                        With decades of experience in the industry, we have
                        established ourselves as the sole agent/distributor
                        and consultant for some of the most trusted and
                        reputable brands in the world. Additionally, and due
                        to our vast experience in the region we specialize in
                        providing cost-effective and reliable equipment
                        solutions to businesses in both the aviation and
                        industrial sectors alike.
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
