"use client";
import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaIndustry, FaCogs, FaWrench, FaChartLine } from 'react-icons/fa';
import Slider from '../../../components/Slider';

const partners = [

  { 
    id: "Chemvulc",
    name: "CHEMVULC",
    image: "/16.png",
    description: "Manufacturer of durable rubber products for heavy industry and mining.",
    type: 'partner' as const,
    sector: 'industrial' as const,
    fullDescription: "European multinational aerospace corporation known for innovative aircraft design and manufacturing."
  },
  { 
    id: "MullerBeltex",
    name: "Muller Beltex",
    image: "/12.png",
    description: "Specialized in FDA white belts, bucket elevators, and PVC belts for various industries.",
    type: 'partner' as const,
    sector: 'industrial' as const,
    fullDescription: "World-renowned manufacturer of aircraft engines and power systems."
  },
  {
    id: "DunlopConveyorBelting",
    name: "Dunlop Conveyor Belting",
    image: "/900.png",
    description: "Worldwide conveyor solutions with high-quality, durable conveyor belts.",
    type: 'partner' as const,
    sector: 'industrial' as const,
    fullDescription: "Global aerospace leader specializing in commercial jetliners, defense products, and space systems."
  },
  { 
    id: "Gurtec",
    name: "Gurtec",
    image: "/11.png",
    description: "Manufacturer of high-quality conveyor rollers, drums, and idlers.",
    type: 'partner' as const,
    sector: 'industrial' as const,
    fullDescription: "With over 100 years of experience, Gurtec specializes in developing and manufacturing top-quality conveyor components. The product range includes a variety of rollers, from standard belt conveyor rollers to shaft-free, rubber disk return, rubber impact, and aluminum rollers. Gurtec also provides complete frame and roller assemblies, available in painted or hot-galvanized finishes, for belt widths ranging from 350 to over 3200 mm. Additionally, the company offers a wide selection of light, medium, and heavy-duty pulleys, along with a reliable primary belt cleaner designed for light to heavy-duty conveyors, ensuring easy installation at the drive end.",
  },  
  { 
    id: "DustSolutionsIncorporated",
    name: "Dust Solutions Incorporated (DSI)",
    image: "/10.png",
    description: "Manufacturer of dust suppression systems for a variety of industries.",
    type: 'partner' as const,
    sector: 'industrial' as const,
    fullDescription: "Global aerospace leader specializing in commercial jetliners, defense products, and space systems."
  },
  { 
    id: "DCLInc",
    name: "DCL",
    image: "/13.png",
    description: "Leader in dry bulk loading equipment manufacturing since 1981.",
    type: 'partner' as const,
    sector: 'industrial' as const,
    fullDescription: "World-renowned manufacturer of aircraft engines and power systems."
  }
];
const customers = [
  { 
    id: "EzzSteel",
    name: "Ezz Steel",
    image: "/901.png",
    description: "Largest independent steel producer in the Middle East and North Africa.",
    type: 'customer' as const,
    sector: 'industrial' as const,
    fullDescription: "Egypt's flagship carrier with a modern fleet serving destinations worldwide."
  },
  { 
    id: "CEMEX",
    name: "CEMEX",
    image: "/CEMEX.png",
    description: "Global leader in the industry with nearly 46,500 employees worldwide.",
    type: 'customer' as const,
    sector: 'industrial' as const,
    fullDescription: "Major regional airline connecting Egypt with key destinations in the Middle East and Europe."
  },
  { 
    id: "NileSugar",
    name: "Nile Sugar",
    image: "/nilesugar-removebg-preview.png",
    description: "Leading beetroot sugar extraction and refinery plant in Egypt.",
    type: 'customer' as const,
    sector: 'industrial' as const,
    fullDescription: "Premier private industrial service provider in Egypt."
  },
  { 
    id: "CanalSugar",
    name: "Canal Sugar",
    image: "/canalsugar.png",
    description: "Egypt's first sugar beet processing plant providing premium white sugar.",
    type: 'customer' as const,
    sector: 'industrial' as const,
    fullDescription: "Premier private industrial service provider in Egypt."
  }
];


const services = [
  { icon: <FaIndustry />, title: "Heavy Machinery", description: "Industrial-grade equipment" },
  { icon: <FaCogs />, title: "Automation Systems", description: "Smart factory solutions" },
  { icon: <FaWrench />, title: "Maintenance Tools", description: "Professional-grade tools" },
  { icon: <FaChartLine />, title: "Process Optimization", description: "Efficiency solutions" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function IndustrialServices() {
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
          src="/8.jpeg"
          alt="Industrial Hero"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Industrial Innovation</h1>
          <p className="text-xl">Powering Progress Through Technology</p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          {...fadeInUp}
        >
          Our Industrial Services
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

      {/* Partners Section */}
      <div className="bg-white  py-16">
        <Slider items={partners} title="Our Partners" />
      </div>


      {/* Customers Section */}
      <div className="py-16">
        <Slider items={customers} title="Our Customers" />
      </div>

      <Footer />
    </div>
  );
}