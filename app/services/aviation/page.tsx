import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Customers from '../../../components/Customers';

import Image from 'next/image';

export default function AviationServices() {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Aviation Sector Solutions</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Aviation Services</h2>
              <p className="text-gray-600 mb-4">
                We provide comprehensive aviation solutions including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Aircraft parts and components</li>
                <li>Ground support equipment</li>
                <li>Maintenance tools and equipment</li>
                <li>Safety and emergency equipment</li>
                <li>Technical documentation and support</li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/9.jpeg"
                alt="Aviation Services"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Aviation Sectors We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Commercial Airlines', 'Private Aviation', 'Military Aviation', 'Maintenance Facilities', 'Airports', 'Cargo Operations'].map((sector, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sector}</h3>
                  <p className="text-gray-600">Specialized solutions for {sector.toLowerCase()} needs.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Customers />

      </div>

      <Footer />
    </div>
  );
}