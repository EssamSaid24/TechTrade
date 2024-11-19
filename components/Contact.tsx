"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";


interface FormProps {
    id: string;
}

const FormComponent: React.FC<FormProps> = ({ id }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        Subject: "",
        email: "",
        phoneNumber: "",
        message: "",
        Company: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        if (!validateEmail(formData.email)) {
            setError("Please enter a valid email address.");
            setLoading(false);
            return;
        }

        try {
            await emailjs.send(
                "your_service_id", // Replace with your EmailJS service ID
                "your_template_id", // Replace with your EmailJS template ID
                formData,
                "your_user_id" // Replace with your EmailJS user ID
            );
            setSuccess("Message sent successfully!");
            setFormData({
                fullName: "",
                Subject: "",
                email: "",
                phoneNumber: "",
                message: "",
                Company: "",
            });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setError("Failed to send message. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id={id} className="py-12 bg-gradient-to-b from-white to-gray-50 shadow-lg rounded-lg">
            <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Left Section: Form */}
                <div>
                    <div className="mb-8">
                        <h1 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">
                            Contact Us
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-800">
                            We'd love to hear from you! Please fill out the form below to get in touch.
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {error && <div className="text-red-500 text-center font-bold">{error}</div>}
                        {success && <div className="text-green-700 text-center font-bold">{success}</div>}

                        <div>
                            <label className="block text-green-700 font-semibold mb-1">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your full name"
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* Additional Input Fields (unchanged) */}
                        <div>
                            <label className="block text-green-700 font-semibold mb-1">Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="Enter your phone number"
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-green-700 font-semibold mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-green-700 font-semibold mb-1">
                                Company
                            </label>
                            <input
                                type="text"
                                name="Company"
                                placeholder="Enter your company name"
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                                value={formData.Company}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-green-700 font-semibold mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="Subject"
                                placeholder="Enter your subject"
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                                value={formData.Subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-green-700 font-semibold mb-1">
                                Question
                            </label>
                            <input
                                type="text"
                                name="message"
                                placeholder="Enter your question"
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-green-600 text-white py-2 rounded-md font-bold transition ${loading ? "bg-green-300 cursor-not-allowed" : "hover:bg-green-600"
                                }`}
                        >
                            {loading ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </div>

                {/* Right Section: Company Info */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">Information</h2>
                    <p className="text-gray-800 mb-4 flex items-center gap-2">
                        <CiLocationOn className="text-green-600" />
                        <strong>Address:</strong> 46 Nadi Al Saeed St. , Dokki, Giza, Egypt
                    </p>
                    <p className="text-gray-800 mb-4 flex items-center gap-2">
                        <FaPhoneAlt className="text-green-600" />
                        <strong>Phone:</strong> (+20) 2 376 146 82 - (+20) 2 374 996 36
                    </p>
                    <div className="flex justify-center">
                        <img
                            src="/QR.png" // Replace with the actual path to your QR code image
                            alt="Company QR Code"
                            className="w-32 h-32 sm:w-40 sm:h-40 object-contain border-4 border-green-600 rounded-lg"
                        />
                    </div>
                    <div className="flex flex-wrap gap-7 justify-center mt-6">
                        <a href="https://linkedin.com" target="_blank" className="text-gray-800 text-2xl sm:text-3xl hover:text-green-600 transition duration-300">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:Michael.Barsoum@techtradeegypt.com" aria-label="Contact Us">
                            <AiOutlineMail className="text-gray-800 text-2xl sm:text-3xl hover:text-green-600 transition duration-300" />
                        </a>
                        <a
                            className="mx-2"
                            href="https://wa.me/966597765376"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp className="text-gray-800 text-2xl sm:text-3xl hover:text-green-600 transition duration-300" />
                        </a>
                        <a href="tel:(+20) 2 376 168 40" aria-label="Phone">
                            <FaPhoneAlt className="text-gray-800 text-2xl sm:text-3xl hover:text-green-600 transition duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default FormComponent;
