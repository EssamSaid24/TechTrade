"use client";
import React, { useState, useEffect } from "react";

const backgroundImages: string[] = ["/7.jpeg"];

const Banner: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState(0);

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
        <div className="w-full h-full relative">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover text-white transition-all duration-700"
                style={{
                    backgroundImage: `url(${backgroundImages[currentIndex]})`,
                }}
            ></div>

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative h-screen max-w-screen-2xl  pt-28 mx-auto flex flex-col text-white text-center items-center">
                {/* Title and Main Text */}
                <h1
                    className={`mt-9 font-bold ${isMobile ? "text-3xl" : "text-5xl"}`}
                    style={{
                        lineHeight: "1",
                        textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
                        letterSpacing: "1px",
                    }}
                >
                    Leading Your Busniess 
                    
                                    </h1>
                <h1
                    className={`mt-9 font-bold ${isMobile ? "text-3xl" : "text-5xl"}`}
                    style={{
                        lineHeight: "1",
                        textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
                        letterSpacing: "1px",
                    }}
                >
                    To Evident Success
                </h1>

            </div>
        </div>
    );
};

export default Banner;