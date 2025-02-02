"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Combined data from both aviation and industrial sectors
const data = {
    aviation: {
        partner: [
            {
                id: "boeing",
                name: "Boeing",
                image: "/10.png",
                description: "Leading aircraft manufacturer",
                fullDescription: "Boeing is a global aerospace leader that designs, manufactures and sells airplanes, rotorcraft, rockets, satellites and missiles. With over 100 years of experience, Boeing has been at the forefront of aviation innovation.",
                features: [
                    "Commercial Aircraft Manufacturing",
                    "Defense and Space Systems",
                    "Global Services and Support",
                    "Research and Development"
                ],
                yearEstablished: 1916,
                headquarters: "Chicago, Illinois, USA"
            },
            // ... Add other aviation partners
        ],
        customer: [
            {
                id: "egypt-air",
                name: "Egypt Air",
                image: "/7.jpeg",
                description: "National carrier of Egypt",
                fullDescription: "EgyptAir is the state-owned flag carrier of Egypt. The airline is headquartered at Cairo International Airport and operates scheduled passenger and freight services to over 75 destinations.",
                features: [
                    "Modern Fleet Operations",
                    "International Route Network",
                    "Cargo Services",
                    "Premium Passenger Services"
                ],
                yearEstablished: 1932,
                headquarters: "Cairo, Egypt"
            },
            // ... Add other aviation customers
        ]
    },
    industrial: {
        partner: [
            {
                id: "siemens",
                name: "Siemens",
                image: "/13.png",
                description: "Industrial automation leader",
                fullDescription: "Siemens AG is a global technology powerhouse that has stood for engineering excellence, innovation, quality, reliability and internationality for more than 170 years.",
                features: [
                    "Industrial Automation",
                    "Power Generation",
                    "Smart Infrastructure",
                    "Digital Industries"
                ],
                yearEstablished: 1847,
                headquarters: "Munich, Germany"
            },
            // ... Add other industrial partners
        ],
        customer: [
            // ... Add industrial customers
        ]
    }
};

export default function DetailPage() {
    const params = useParams();
    const { sector, type, id } = params;

    // Type guard to ensure params are strings
    if (typeof sector !== 'string' || typeof type !== 'string' || typeof id !== 'string') {
        return <div>Invalid parameters</div>;
    }

    const item = data[sector as keyof typeof data]?.[type as 'partner' | 'customer']?.find(
        item => item.id === id
    );

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="pt-20">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-lg shadow-xl p-8"
                    >
                        <Link
                            href={`/services/${sector}`}
                            className="text-green-600 hover:text-green-700 mb-6 inline-block"
                        >
                            ← Back to {sector} services
                        </Link>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="relative h-[400px]">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="rounded-lg"
                                />
                            </div>

                            <div>
                                <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
                                <p className="text-gray-600 mb-6">{item.fullDescription}</p>

                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold mb-3">Key Features</h2>
                                    <ul className="list-disc list-inside space-y-2">
                                        {item.features.map((feature, index) => (
                                            <li key={index} className="text-gray-600">{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="font-bold text-gray-700">Established</h3>
                                        <p className="text-gray-600">{item.yearEstablished}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-700">Headquarters</h3>
                                        <p className="text-gray-600">{item.headquarters}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
}