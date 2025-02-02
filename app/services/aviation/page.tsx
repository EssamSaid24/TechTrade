// app/services/aviation/page.tsx
"use client";
import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPlane, FaTools, FaShieldAlt, FaCog } from 'react-icons/fa';
import Slider from '../../../components/Slider';

const partners = [
  { 
    id: "boeing",
    name: "Boeing",
    image: "/10.png",
    description: "Leading aircraft manufacturer",
    type: 'partner' as const,
    sector: 'aviation' as const,
    fullDescription: "Global aerospace leader specializing in commercial jetliners, defense products, and space systems."
  },
  { 
    id: "airbus",
    name: "Airbus",
    image: "/11.png",
    description: "Global aerospace pioneer",
    type: 'partner' as const,
    sector: 'aviation' as const,
    fullDescription: "European multinational aerospace corporation known for innovative aircraft design and manufacturing."
  },
  { 
    id: "rolls-royce",
    name: "Rolls-Royce",
    image: "/12.png",
    description: "Aircraft engine specialist",
    type: 'partner' as const,
    sector: 'aviation' as const,
    fullDescription: "World-renowned manufacturer of aircraft engines and power systems."
  },
  {
    id: "boeingg",
    name: "Boeingg",
    image: "/10.png",
    description: "Leading aircraft manufacturer",
    type: 'partner' as const,
    sector: 'aviation' as const,
    fullDescription: "Global aerospace leader specializing in commercial jetliners, defense products, and space systems."
  },
  { 
    id: "airbuss",
    name: "Airbus",
    image: "/11.png",
    description: "Global aerospace pioneer",
    type: 'partner' as const,
    sector: 'aviation' as const,
    fullDescription: "European multinational aerospace corporation known for innovative aircraft design and manufacturing."
  },
  { 
    id: "rolls-roycee",
    name: "Rolls-Royce",
    image: "/12.png",
    description: "Aircraft engine specialist",
    type: 'partner' as const,
    sector: 'aviation' as const,
    fullDescription: "World-renowned manufacturer of aircraft engines and power systems."
  }
];

const customers = [
  { 
    id: "egypt-air",
    name: "Egypt Air",
    image: "/7.jpeg",
    description: "National carrier of Egypt",
    type: 'customer' as const,
    sector: 'aviation' as const,
    fullDescription: "Egypt's flagship carrier with a modern fleet serving destinations worldwide."
  },
  { 
    id: "air-cairo",
    name: "Air Cairo",
    image: "/8.jpeg",
    description: "Leading regional airline",
    type: 'customer' as const,
    sector: 'aviation' as const,
    fullDescription: "Major regional airline connecting Egypt with key destinations in the Middle East and Europe."
  },
  { 
    id: "alexandria-airlines",
    name: "Alexandria Airlines",
    image: "/9.jpeg",
    description: "Private aviation leader",
    type: 'customer' as const,
    sector: 'aviation' as const,
    fullDescription: "Premier private aviation service provider in Egypt."
  }
];

const services = [
  { icon: <FaPlane />, title: "Aircraft Parts", description: "High-quality aircraft components" },
  { icon: <FaTools />, title: "Maintenance Tools", description: "Specialized aviation tools" },
  { icon: <FaShieldAlt />, title: "Safety Equipment", description: "Critical safety gear" },
  { icon: <FaCog />, title: "Technical Support", description: "24/7 expert assistance" },
];

export default function AviationServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <motion.div 
        className="relative h-[60vh] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/9.jpeg"
          alt="Aviation Hero"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Aviation Excellence</h1>
          <p className="text-xl">Your Trusted Partner in Aviation Solutions</p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Aviation Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-green-600 text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partners Section with Slider */}
      <div className="bg-white  py-16">
        <Slider items={partners} title="Our Partners" />
      </div>

      {/* Customers Section with Slider */}
      <div className="py-16">
        <Slider items={customers} title="Our Customers" />
      </div>

      <Footer />
    </div>
  );
}