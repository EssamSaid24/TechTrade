"use client";
import { FaStar, FaHandshake, FaLightbulb } from 'react-icons/fa';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyChooseUs: React.FC = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const values = [
        {
            icon: <FaStar />, 
            title: "Extensive Industry Experience", 
            description: "With over 30 years of experience, we offer expert guidance and solutions in the aviation and industrial sectors."
        },
        {
            icon: <FaHandshake />, 
            title: "Strong Partnerships", 
            description: "Our global partnerships with leading brands provide clients with top-quality equipment and services, while ensuring market exposure and regulatory compliance for affiliates."
        },
        {
            icon: <FaLightbulb />, 
            title: "Cost-Effectiveness", 
            description: "We deliver cost-effective solutions by leveraging our network and sole distributor/agent status to secure the best equipment at competitive prices."
        },
        {
            icon: <FaStar />, 
            title: "Reliability and Transparency", 
            description: "Transparency, trust, and reliability are core to our operations, fostering long-term relationships."
        },
        {
            icon: <FaHandshake />, 
            title: "Streamlined Process", 
            description: "Our streamlined process ensures a hassle-free experience from consultation to installation, saving time and effort."
        }

    ];

    return (
        <div ref={ref} className="relative w-full min-h-screen flex flex-col items-center justify-center px-4">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{
                backgroundImage: "url('/100 (2).jpeg')",
                transition: "transform 0.2s ease-out"
            }}></div>
            
            {/* Header Section */}
            <div className="relative rounded-lg  bg-white z-10 text-center p-6">
                <h2 className="text-3xl  font-bold text-gray-900">Why Choose Us?</h2>
                <p className="text-gray-600">Unmatched Expertise and Unwavering Support</p>
            </div>
            
            {/* Values Section */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-6xl">
                {values.map((value, index) => (
                    <motion.div 
                        key={index} 
                        className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.9, delay: index * 1 }}
                    >
                        <div className="text-green-600 text-3xl mb-4 flex justify-center">{value.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{value.title}</h3>
                        <p className="text-sm text-gray-600 text-center">{value.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;