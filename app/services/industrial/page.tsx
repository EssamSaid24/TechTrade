import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Image from 'next/image';

export default function IndustrialServices() {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Industrial Equipment Distribution</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Industrial Solutions</h2>
              <p className="text-gray-600 mb-4">
                We provide comprehensive industrial equipment solutions including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Heavy machinery and equipment</li>
                <li>Industrial automation systems</li>
                <li>Manufacturing equipment</li>
                <li>Material handling solutions</li>
                <li>Safety and monitoring systems</li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/8.jpeg"
                alt="Industrial Equipment"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Manufacturing', 'Construction', 'Mining', 'Energy', 'Chemical', 'Food Processing'].map((industry, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{industry}</h3>
                  <p className="text-gray-600">Specialized solutions for {industry.toLowerCase()} sector needs.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}