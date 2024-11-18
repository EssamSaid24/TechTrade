"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu slider

    const toggleSlider = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-md">
            {/* Main Navbar Section for Mobile */}
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
                            src="/logo_1.jpeg"
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
                    className="text-black hover:text-orange-600 transition duration-300"
                >
                    Home
                </Link>
                <Link
                    href="/#about"
                    className="hover:text-orange-600 transition duration-300"
                >
                    About
                </Link>
            </div>

            {/* Desktop Navbar Section */}
            <div className="hidden sm:flex items-center justify-between px-4 py-2">
                {/* Links Behind Logo */}
                <div className="absolute left-1/4 transform -translate-x-1/2 flex gap-10 text-lg">
                    <Link
                        href="/"
                        className="text-gray-700 hover:text-black transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        href="/#about"
                        className="text-gray-700 hover:text-black  transition duration-300"
                    >
                        About
                    </Link>
                </div>

                {/* Logo */}
                <Link href="/" className=" ml-[8%] relative z-20">
                    <Image
                        src="/logo_1.jpeg"
                        alt="Logo"
                        width={120}
                        height={100}
                        className="max-w-full h-auto"
                    />
                </Link>

                {/* Contact Us */}
                <div className="ml-auto">
                    <Link
                        href="/#contact"
                        className="px-4 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-600 transition duration-300"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
