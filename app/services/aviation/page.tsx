// app/services/aviation/page.tsx
"use client";
import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPlane, FaTools, FaShieldAlt, FaCog } from 'react-icons/fa';
import Slider from '../../../components/Slider';

// const partners = [
//   { 
//     id: "DunlopAircraftTyres",
//     name: "Dunlop Aircraft Tyres",
//     image: "/20.png",
//     description: "The world's only specialist manufacturer and retreader of aircraft tyres",
//     type: 'partner' as const,
//     sector: 'aviation' as const,
//     fullDescription: "Global aerospace leader specializing in commercial jetliners, defense products, and space systems."
//   },
//   { 
//     id: "FokkerServices",
//     name: "Fokker Services",
//     image: "/21.jpeg",
//     description: "Innovative aerospace service provider offering solutions for airlines, OEMs, and MROs.",
//     type: 'partner' as const,
//     sector: 'aviation' as const,
//     fullDescription: "European multinational aerospace corporation known for innovative aircraft design and manufacturing."
//   },
//   { 
//     id: "STSComponentSolutions",
//     name: "STS Component Solutions",
//     image: "/700.png",
//     description: "Global aircraft inventory solutions with 24/7/365 availability.",
//     type: 'partner' as const,
//     sector: 'aviation' as const,
//     fullDescription: "World-renowned manufacturer of aircraft engines and power systems."
//   },
//   {
//     id: "HYCOMAviationSolutions",
//     name: "HYCOM Aviation Solutions",
//     image: "/701.png",
//     description: "Certified supplier of hydraulic equipment for precise aircraft maintenance.",
//     type: 'partner' as const,
//     sector: 'aviation' as const,
//     fullDescription: "Global aerospace leader specializing in commercial jetliners, defense products, and space systems."
//   }

// ];

const customers = [
  {
    id: "airmaster",
    name: "air master",
    image: "/airmaster.png",
    description: "",
    type: 'customer' as const,
    sector: 'aviation' as const,
    fullDescription: "Our operations coverage encompasses the Arab World, Europe, UK, North America, the Asia Pacific Region, Africa, and CIS. With flexibility, faster turnaround times, fast-track to-market, count on Airmaster expertise and wide range of solutions to manage all your air import and export needs.",
  },

  {
    id: "redseaairline",
    name: "Red Sea Airline",
    image: "/redseaairline.png",
    description: "",
    type: 'customer' as const,
    sector: 'aviation' as const,
    fullDescription: "Welcome to Red Sea Airlines, Egypt's leading airline since 2021, offering both scheduled and charter flights that connect you to Egypt's rich culture and stunning landscapes. Our experienced team, including cabin crew, pilots, and ground staff, is passionate about providing a seamless and safe travel experience, ensuring every journey with us is memorable."
  },
  {
    id: "AirCairo",
    name: "Air Cairo",
    image: "/Aircairo.png",
    description: "",
    type: 'customer' as const,
    sector: 'aviation' as const,
    fullDescription: "Air Cairo, founded in October 2003, is an Egyptian hybrid airline that connects passengers globally under its wings, symbolizing freedom and warmth. Operating with a fleet of 37 aircraft, including ATR, Embraer, and Airbus A320 models, the airline serves over 200 weekly flights to 50 international and domestic destinations. Air Cairo has successfully transported over 20 million passengers and is known for its authenticity, affordability, and consistent accessibility. The airline is IOSA certified, SAFA-compliant, and a member of EASA/ECDC, ICAO, and IATA. The airline's commitment to excellence is showcased in its updated fleet, including the latest A320 neo models, and a dedication to providing amazing journeys every day.",
  },
  {
    id: "Egypt Air",
    name: "Egypt Air",
    image: "/EgyptAir-Logo.wine.png",
    description: "",
    fullDescription: "EgyptAir",
    type: 'customer' as const,
    sector: 'aviation' as const,
  }, 
  {
    id: "Nile Air",
    name: "Nile Air",
    image: "/AirNile.png",
    description: "",
    fullDescription: "",
    type: 'customer' as const,
    sector: 'aviation' as const,
  }, 
  {
    id: "Nemsa_Airlines_Logo.png",
    name: "Nemsa Airlines",
    image: "/Nemsa_Airlines_Logo.png",
    description: "",
    fullDescription: "",
    type: 'customer' as const,
    sector: 'aviation' as const,
  }, 
  {
    id: "Egyptian_Air_Force_emblem",
    name: "Egyptian Air Force",
    image: "/Egyptian_Air_Force_emblem.png",
    description: "",
    fullDescription: "",
    type: 'customer' as const,
    sector: 'aviation' as const,
  }, 
  {
    id: "AMC",
    name: "AMC",
    image: "/AMC.png",
    description: "",
    fullDescription: "",
    type: 'customer' as const,
    sector: 'aviation' as const,
  }, 

];

const services = [
  { icon: <FaPlane />, title: "Aircraft Parts", description: "Supply, Exchanges & Repairs" },
  { icon: <FaTools />, title: "Pool Programs", description: "Customized according to your needs" },
  { icon: <FaShieldAlt />, title: "Landing Gears", description: "Overhauls, Exchanges & Trading" },
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
      {/* <div className="bg-white  py-16">
        <Slider items={partners} title="Our Partners" />
      </div> */}

      {/* Customers Section with Slider */}
      <div className="py-16">
        <Slider items={customers} title="Our Customers" />
      </div>

      <Footer />
    </div>
  );
}