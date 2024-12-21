"use client";
import React, { useState, useEffect } from "react";

const imagesWithText = [
    {
        image: "/8.jpeg",
        title: "In the Industrial World",
        subtitle: "Success is earned through dedication, adaptability, and vision.",
        paragraph:"We specialize in a diverse range of industrial fields, offering advanced solutions that enhance operational efficiency and foster innovation. With deep expertise in key sectors, we are committed to helping businesses optimize their processes, reduce costs, and achieve sustainable growth."
    },
    {
        image: "/9.jpeg",
        title: "In Aviation Field",
        subtitle: "It's not about how high you can fly, but how safely you can land.",
        paragraph:"We specialize in providing high-quality aviation parts, equipment, and solutions. With a focus on reliability and compliance, we supply essential components for aircraft maintenance, safety, and performance. Our team ensures that all products meet industry standards and regulations, helping to keep aviation operations running smoothly and safely."
    },
];

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isMobile;
};

const TwoPictures: React.FC = () => {
    const isMobile = useIsMobile();

    return (
        <div className="w-full h-screen flex flex-col sm:flex-row relative">
            {imagesWithText.map((item, index) => (
                <div
                    key={index}
                    className="relative w-full sm:w-1/2 h-1/2 sm:h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${item.image})`,
                    }}
                    role="img"
                    aria-label={item.title}
                >
                    {/* Overlay for Readability */}
                    <div className="absolute inset-0 bg-black opacity-60"></div>

                    {/* Text Content */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                        <h1
                            className={`font-bold ${
                                isMobile ? "text-3xl" : "text-4xl"
                            }`}
                            style={{
                                lineHeight: "1.2",
                                letterSpacing: "1px",
                            }}
                        >
                            {item.title}
                        </h1>
                        <h2
                            className={`mt-4 font-semibold ${
                                isMobile ? "text-xl" : "text-2xl"
                            }`}
                            style={{
                                lineHeight: "1.2",
                            }}
                        >
                            {item.subtitle}
                        </h2>
                        <h2
                            className={`mt-4 font-medium ${
                                isMobile ? "text-xl" : "text-lg"
                            }`}
                            style={{
                                lineHeight: "1.2",
                            }}
                        >
                            {item.paragraph}
                        </h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TwoPictures;
