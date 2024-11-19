"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            className="relative mt-5 text-center py-8 px-4"
            style={{
                background: "linear-gradient(to right, #5d8551, #207408)", // Gradient colors
            }}
        >
            {/* Desktop Footer Section */}
            <div className="hidden sm:flex items-center justify-between px-4">
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
                        className="text-slate-100 text-opacity-60 hover:text-black transition duration-300"
                    >
                        About
                    </Link>
                </div>

                {/* Logo */}
                <Link href="/" className="relative z-20 ml-8">
                    <Image
                        src="/logo_1-removebg-preview.png"
                        alt="Logo"
                        width={120}
                        height={100}
                        className="max-w-full"
                    />
                </Link>

                {/* Social Media and Contact */}
                <div className="flex items-center gap-6">
                    {/* LinkedIn Icon */}
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        className="text-slate-100 text-opacity-60 text-3xl hover:text-green-600 transition duration-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    {/* Contact Us Link */}
                    <Link
                        href="/#contact"
                        className="px-4 py-2 text-slate-100 text-opacity-80 font-bold rounded hover:bg-green-600 transition duration-300"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>

            {/* Mobile Footer Section */}
            <div className="flex flex-col items-center sm:hidden gap-4">
                {/* Logo */}
                <Link href="/" className="relative z-20">
                    <Image
                        src="/logo_1-removebg-preview.png"
                        alt="Logo"
                        width={100}
                        height={80}
                        className="max-w-full mx-auto"
                    />
                </Link>

                {/* Links */}
                <div className="flex flex-col gap-2 text-center">
                    <Link
                        href="/"
                        className="text-slate-100 hover:text-black transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        href="/#about"
                        className="text-slate-100 hover:text-black transition duration-300"
                    >
                        About
                    </Link>
                </div>

                {/* Social Media and Contact */}
                <div className="flex justify-center gap-6">
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        className="text-slate-100 text-opacity-80 text-3xl hover:text-green-600 transition duration-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <Link
                        href="/#contact"
                        className="px-4 py-2 text-slate-100 text-opacity-80 font-bold rounded hover:bg-green-600 transition duration-300"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-sm text-gray-400 mt-6">
                © Techtrade. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
