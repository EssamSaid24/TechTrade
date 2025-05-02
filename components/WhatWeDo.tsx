"use client";
import React from 'react';
import { FaCog, FaTools, FaChartLine, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatWeDo = () => {
  const activities = [
    {
      icon: <FaCog className="text-4xl" />,
      title: "Part Distribution",
      description: "Providing high-quality industrial and aviation equipment from leading global manufacturers."
    },
    {
      icon: <FaTools className="text-4xl" />,
      title: "Technical Support",
      description: "24/7 expert technical assistance and maintenance services for all our products."
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Consulting Services",
      description: "Professional guidance on equipment selection and optimization strategies."
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Partnership Management",
      description: "Building and maintaining strong relationships with global manufacturers and local clients."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <div className="h-1 w-24 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering excellence through comprehensive solutions and expert services
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {activities.map((activity, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="relative overflow-hidden bg-white rounded-2xl shadow-lg p-8 group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-green-600 transform -skew-x-12"></div>
              <div className="relative z-10">
                <div className="text-green-600 mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {activity.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;