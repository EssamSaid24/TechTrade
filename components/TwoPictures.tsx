"use client";
import React, { useState, useEffect } from "react";

const imagesWithText = [
    {
        image: "/8.jpeg",
        title: "Industrial Field",
        subtitle: "Conquer leaderboards, crush workouts, create with friends and more. Get lost in a growing library of VR classics and all-new experiences.",
    },
    {
        image: "/9.jpeg",
        title: "Aviation Field",
        subtitle: "We are a forum for the exchange of some of the most important ideas and issues facing the world of aviation. This is a place to explore, learn, share and debate. Don't hold back, we want to know what you think. We have a few ideas.",
    },
];

const TwoPictures: React.FC = () => {
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

    return (
        <div className="w-full h-screen flex flex-col sm:flex-row relative">
            {imagesWithText.map((item, index) => (
                <div
                    key={index}
                    className="relative w-full sm:w-1/2 h-1/2 sm:h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${item.image})`,
                    }}
                >
                    {/* Overlay for Readability */}
                    <div className="absolute inset-0 bg-black opacity-60"></div>

                    {/* Text Content */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                        <h1
                            className={`font-bold ${
                                isMobile ? "text-3xl" : "text-5xl"
                            }`}
                            style={{
                                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
                                lineHeight: "1.2",
                                letterSpacing: "1px",
                            }}
                        >
                            {item.title}
                        </h1>
                        <h2
                            className={`mt-4 font-medium ${
                                isMobile ? "text-xl" : "text-lg"
                            }`}
                            style={{
                                textShadow: "1px 1px 6px rgba(0, 0, 0, 0.5)",
                                lineHeight: "1.2",
                            }}
                        >
                            {item.subtitle}
                        </h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TwoPictures;
