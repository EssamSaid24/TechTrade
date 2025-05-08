// app/services/support/page.tsx
"use client";
import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Wrench, Clock, BookOpen, Package2, PhoneCall, MessageSquare, Mail, MapPin } from 'lucide-react';

// **Pulley lagging** and conveyor belts repairs and installations
// **Stock supply** for various repair tools and vulcanizing material
// **Emergency** repairs solution and troubleshooting
// **Training** and consultant services for belt maintenance

export default function SupportServices() {
    const services = [
        {
            icon: <Wrench className="w-8 h-8 text-green-600" />,
            title: "Pulley Lagging",
            description: "Expert conveyor belts repairs and installations with precision"
        },
        {
            icon: <Package2 className="w-8 h-8 text-green-600" />,
            title: "Stock Supply",
            description: "Comprehensive repair tools and vulcanizing material inventory"
        },
        {
            icon: <Clock className="w-8 h-8 text-green-600" />,
            title: "Emergency ",
            description: "Repairs quick solution and troubleshooting for urgent situations"
        },
        {
            icon: <BookOpen className="w-8 h-8 text-green-600" />,
            title: "Training Services",
            description: "Professional consultant services for belt maintenance"
        }
    ];

    const contactMethods = [
        {
            icon: <PhoneCall className="w-6 h-6" />,
            title: "Phone Support",
            detail: "+20 12 82263319",
            description: "Call Assistance"
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Live Chat",
            detail: "Available 9AM-6PM",
            description: "Instant Technical Support"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            detail: "mail@techtradeegypt.com",
            description: "Response within 24 hours"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visit Us",
            detail: "Main Office",
            description: "46 Nadi Al Saeed St., Dokki, Giza, Egypt"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                />
                <Image
                    src="/500.jpg"
                    alt="Support Hero"
                    fill
                    style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <motion.div
                    className="relative z-10 text-center text-white max-w-4xl px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">24/7 Technical Support</h1>
                    <p className="text-lg md:text-xl mb-8">Our engineering team provides continuous support to maintain seamless operations.</p>
                    <Link href='/#contact' className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors duration-300">
                        Contact Support
                    </Link>
                </motion.div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Support Services</h2>
                    <p className="text-xl text-gray-600">Comprehensive technical support for all your needs</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                        <p className="text-xl text-gray-600">Multiple ways to reach our support team</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={method.title}
                                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                                    {method.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                                <p className="text-green-600 font-medium mb-1">{method.detail}</p>
                                <p className="text-gray-500 text-sm">{method.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
