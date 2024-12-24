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
        comment: "",
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
                comment: "",
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
            <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-1 gap-6 items-start">
                {/* Left Section: Form */}
                <div>
                    <div className="mb-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
                            <div className="h-1 w-16 bg-green-600 mx-auto"></div>
                        </div>
                        <p className="text-lg sm:text-xl text-center text-gray-800">
                            We'd love to hear from you! Please fill out the form below to get in touch.
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {error && <div className="text-red-500 text-center font-bold">{error}</div>}
                        {success && <div className="text-green-700 text-center font-bold">{success}</div>}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-green-700 font-semibold mb-1">Email</label>
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
                                <label className="block text-green-700 font-semibold mb-1">Comment</label>
                                <input
                                    type="text"
                                    name="comment"
                                    placeholder="Enter your comment"
                                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                                    value={formData.comment}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-green-600 text-white py-2 rounded-md font-bold transition ${loading ? "bg-green-300 cursor-not-allowed" : "hover:bg-green-600"
                                }`}
                        >
                            {loading ? "Sending..." : "Contact"}
                        </button>
                    </form>
                </div>

                {/* Right Section: Company Info */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">Information</h2>
                    <p className="text-gray-800 mb-4 flex items-center gap-2">
                        <CiLocationOn className="text-green-600" />
                        <strong>Address:</strong> 46 Nadi Al Saeed St., Dokki, Giza, Egypt
                    </p>
                    <p className="text-gray-800 mb-4 flex items-center gap-2">
                        <FaPhoneAlt className="text-green-600" />
                        <strong>Phone:</strong> (+20) 2 376 146 82 - (+20) 2 374 996 36
                    </p>
                    <div className="flex justify-center">
                        {/* Embedded Google Map */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.123456789!2d31.20009231563359!3d30.03745665489492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847766db67e67%3A0x2345abcd1234abcd!2s46%20Nadi%20Al%20Saeed%20St.%2C%20Dokki%2C%20Giza%2C%20Egypt!5e0!3m2!1sen!2seg!4v1676845555555"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            className="rounded-md shadow-md"
                            title="Company Location"
                        ></iframe>
                    </div>
                    <div className="flex flex-wrap gap-7 justify-center mt-6">

                        <a href="mailto:mail@techtradeegypt.com" aria-label="Contact Us">
                            <AiOutlineMail className="text-gray-800 text-2xl sm:text-3xl hover:text-green-600 transition duration-300" />
                        </a>
                        <a
                            className="mx-2"
                            href="https://wa.me/01282263319"
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
