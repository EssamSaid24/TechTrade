"use client";
import React, { useEffect } from 'react';
import { FaSearch, FaHandshake, FaCog, FaCheckCircle } from 'react-icons/fa';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  { id: 1, icon: <FaSearch aria-label="Consultation" />, title: "Consultation", description: "We understand client requirements, budget, timelines, and goals." },
  { id: 2, icon: <FaHandshake aria-label="Solution Design" />, title: "Solution Design", description: "We provide top-quality solutions and equipment via global partnerships." },
  { id: 3, icon: <FaCog aria-label="Logistics" />, title: "Logistics", description: "We manage shipping, delivery, installation for the process." },
  { id: 4, icon: <FaCheckCircle aria-label="Support" />, title: "Support", description: "We deliver after-sales services for a seamless end-to-end experience." }
];

const OurProcess: React.FC = () => {
  const controlsArray = steps.map(() => useAnimation());
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  useEffect(() => {
    if (inView) {
      steps.forEach((_, index) => {
        setTimeout(() => {
          controlsArray[index].start({ opacity: 1, y: 0 });
        }, index * 600);
      });
    }
  }, [inView, controlsArray]);
  
  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Process</h2>
          <div className="h-1 w-16 bg-green-600 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-green-200 -translate-y-1/2 hidden lg:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={controlsArray[index]}
                className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-green-600 text-3xl mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
                <div className="absolute top-1/2 -right-4 w-8 h-8 bg-green-600 rounded-full text-white flex items-center justify-center text-sm font-bold  lg:flex">
                  {step.id}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
