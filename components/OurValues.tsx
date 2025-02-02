import React from 'react';
import { FaStar, FaHandshake, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

const OurValues = () => {
  const values = [
    {
      icon: <FaStar />,
      title: "EXPERTISE AND PROFESSIONALISM",
      description: "Its expert aviation and industrial professionals, prioritizing professionalism to deliver accurate information, reliable advice, and efficient solutions."
    },
    {
      icon: <FaHandshake />,
      title: "INTEGRITY AND TRANSPARENCY",
      description: "The company prioritizes integrity and transparency, fostering honest communication with stakeholders to build trust and uphold ethical practices."
    },
    {
      icon: <FaLightbulb />,
      title: "CUSTOMER-CENTRIC APPROACH",
      description: "The company focuses on understanding clients' needs, delivering tailored solutions, and providing exceptional service with prompt responses and dedicated support."
    }

  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Values</h2>
          <div className="h-1 w-16 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-green-600 text-3xl mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;