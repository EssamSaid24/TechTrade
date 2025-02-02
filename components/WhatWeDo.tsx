import React from 'react';
import { FaCog, FaTools, FaChartLine, FaHandshake } from 'react-icons/fa';

const WhatWeDo = () => {
  const activities = [
    {
      icon: <FaCog />,
      title: "Equipment Distribution",
      description: "Providing high-quality industrial and aviation equipment from leading global manufacturers."
    },
    {
      icon: <FaTools />,
      title: "Technical Support",
      description: "24/7 expert technical assistance and maintenance services for all our products."
    },
    {
      icon: <FaChartLine />,
      title: "Consulting Services",
      description: "Professional guidance on equipment selection and optimization strategies."
    },
    {
      icon: <FaHandshake />,
      title: "Partnership Management",
      description: "Building and maintaining strong relationships with global manufacturers and local clients."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">What We Do</h2>
          <div className="h-1 w-16 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-green-600 text-3xl mb-4 flex justify-center">
                {activity.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                {activity.title}
              </h3>
              <p className="text-gray-600 text-center">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;