"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu slider

    const toggleSlider = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className="relative mt-5 text-center py-12"
            style={{
                background: "linear-gradient(to right, #5d8551, #207408)", // Gradient colors
            }}
        >             {/* Main Footer Section for Mobile */}
            <div className="flex justify-between items-center px-4 py-2 sm:hidden">
                {/* Hamburger Menu */}
                <button
                    onClick={toggleSlider}
                    className="text-2xl transition duration-300 order-2"
                >
                    {isOpen ? "✖️" : "☰"}
                </button>

                {/* Logo */}
                <div className="flex items-center justify-center">
                    <Link href="/" className="relative z-10">
                        <Image
                            src="/logo_1-removebg-preview.png"
                            alt="Logo"
                            width={100}
                            height={80}
                            className="max-w-full h-auto"
                        />
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Links */}
            <div
                className={`flex-col gap-4 ${isOpen ? "flex" : "hidden"} sm:hidden justify-center font-bold text-lg items-center`}
            >
                <Link
                    href="/"
                    className="text-black hover:text-green-600 transition duration-300"
                >
                    Home
                </Link>
                <Link
                    href="/#about"
                    className=" hover:text-green-600 transition duration-300"
                >
                    About
                </Link>
            </div>

            {/* Desktop Footer Section */}
            <div className="hidden sm:flex items-center justify-between px-4 py-2">
                {/* Links Behind Logo */}
                <div className="absolute left-1/4 transform -translate-x-1/2 flex gap-10 text-lg">
                    <Link
                        href="/"
                        className="text-slate-100 text-opacity-60 hover:text-black transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        href="/#about"
                        className="text-slate-100 text-opacity-60 hover:text-black  transition duration-300"
                    >
                        About
                    </Link>
                </div>

                {/* Logo */}
                <Link href="/" className=" ml-[8%] relative z-20">
                    <Image
                        src="/logo_1-removebg-preview.png"
                        alt="Logo"
                        width={120}
                        height={100}
                        className="max-w-full"
                    />
                </Link>
                <div className="text-center text-sm text-gray-400 mt-4">
                © Techtrade. All Rights Reserved.
                            </div>

                <div className="flex  justify-center space-x-6 mt-6">
                    {/* LinkedIn Icon */}
                    <a href="https://linkedin.com" target="_blank" className="text-slate-100 text-opacity-60 text-5xl hover:text-green-600 transition duration-300">
                        <FaLinkedin />
                    </a>
                    {/* Contact Us Link */}
                    <Link
                        href="/#contact"
                        className="px-2 py-2 text-slate-100 text-opacity-80 text-center font-bold rounded hover:bg-green-600 transition duration-300"
                    >
                        Contact Us
                    </Link>
                </div>


            </div>

        </div>
    );
};

export default Footer;
