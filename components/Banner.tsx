// Banner.tsx
"use client";
import React, { useState, useEffect } from "react";

const backgroundImages: string[] = ["/777.png"];

const Banner: React.FC = () => {
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
        <div className="relative w-full h-screen overflow-hidden">
            {/* Parallax Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(${backgroundImages[0]})`,
                    transform: `translateY(${offsetY * 0.5}px)`, // Adjust this multiplier for stronger or weaker parallax
                }}
            ></div>

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
                <h1 className="text-5xl font-bold drop-shadow-lg">
                Driving Business Success Through                 </h1>
                <h2 className="text-3xl font-semibold mt-4 drop-shadow-lg">
                Streamlined Excellence for Aviation & Industrial Needs.                </h2>
            </div>
        </div>
    );
};

export default Banner;
