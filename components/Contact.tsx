"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

interface FormProps {
    id: string;
}

const FormComponent: React.FC<FormProps> = ({ id }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        childAge: "",
        email: "",
        phoneNumber: "",
        message: "",
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
                childAge: "",
                email: "",
                phoneNumber: "",
                message: "",
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
            <div className="w-full  px-6 lg:px-20 grid md:grid-cols-2 gap-10 items-start">
                {/* Left Section: Form */}
                <div>
                    <div className=" mb-8">
                        <h1 className="text-3xl font-bold text-green-600 mb-4">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-800">
                            We'd love to hear from you! Please fill out the form below to get
                            in touch.
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {error && <div className="text-red-500 text-center font-bold">{error}</div>}
                        {success && <div className="text-green-700 text-center font-bold">{success}</div>}

                        <div>
                            <label className="block text-green-700 font-semibold mb-1">
                                Full Name
                            </label>
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
                            <label className="block text-green-700 font-semibold mb-1">
                                Phone Number
                            </label>
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
                                name="phoneNumber"
                                placeholder="Enter your company name"
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                                value={formData.phoneNumber}
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
                                name="phoneNumber"
                                placeholder="Enter your subject"
                                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                                value={formData.phoneNumber}
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
                    <h2 className="text-3xl font-bold text-green-600 mb-4">
                        Company Information
                    </h2>
                    <p className="text-gray-800 mb-4">
                        <strong>Address:</strong> 123 Green Valley Road, Cityville, Country
                    </p>
                    <p className="text-gray-800 mb-4 flex items-center gap-2">
                        <FaPhoneAlt className="text-green-600" />
                        <strong>Phone:</strong> +1 (234) 567-890
                    </p>
                    <p className="text-gray-800 mb-6">
                        Scan the QR code below to save our contact information:
                    </p>
                    <div className="flex justify-center">
                        <img
                            src="/QR.png" // Replace with the actual path to your QR code image
                            alt="Company QR Code"
                            className="w-40 h-40 object-contain border-4 border-green-600 rounded-lg"
                        />
                    </div>
                    <div className="flex gap-20 justify-center space-x-6 mt-6">
                        {/* <a href="https://facebook.com/kids.coder" target="_blank" className="text-gray-800 text-3xl hover:text-green-600 transition duration-300">
          <FaFacebook />
        </a> */}
                        {/* <a href="https://x.com/kids.coder" target="_blank" className="text-gray-800 text-3xl hover:text-green-600 transition duration-300">
          <BsTwitterX />
        </a> */}

                        {/* <a href="https://linkedin.com" target="_blank" className="text-gray-800 text-3xl hover:text-green-600 transition duration-300">
          <FaLinkedin />
        </a> */}
                        <a href="mailto:kidscoders1@gmail.com" aria-label="Contact Us">
                            <AiOutlineMail className="text-gray-800 text-3xl hover:text-green-600 transition duration-300" />
                        </a>
                        <a
                            className="mx-2"
                            href="https://wa.me/966597765376"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >

                            <FaWhatsapp className="text-gray-800 text-3xl hover:text-green-600 transition duration-300" />
                        </a>

                        <a href="tel:+0597765376" aria-label="Phone">
                            <FaPhoneAlt className="text-gray-800 text-3xl hover:text-green-600 transition duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormComponent;
