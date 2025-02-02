import React from 'react';
import Image from 'next/image';

const customers = [
  {
    name: "Egypt Air",
    image: "/7.jpeg",
    description: "National carrier of Egypt"
  },
  {
    name: "Air Cairo",
    image: "/8.jpeg",
    description: "Leading low-cost carrier"
  },
  {
    name: "Alexandria Port",
    image: "/9.jpeg",
    description: "Major maritime gateway"
  },
];

const Customers = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Customers</h2>
          <div className="h-1 w-16 bg-green-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">
            Trusted by leading companies across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map((customer, index) => (
            <div 
              key={index}
              className="customer-card bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl"
            >
              <div className="h-48 relative mb-4">
                <Image
                  src={customer.image}
                  alt={customer.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                {customer.name}
              </h3>
              <p className="text-gray-600 text-center">
                {customer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;