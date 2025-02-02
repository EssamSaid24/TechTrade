import React from 'react';
import {FaUserTie } from 'react-icons/fa'; // Import icons from react-icons
import { MdEngineering } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";



const OurTeam = () => {
  const team = [
    {
      name: "Engineers",
      icon: <MdEngineering className="w-16 h-16 text-green-600 mx-auto" /> // Engineer icon
    },
    {
      name: "Industry Professionals",
      icon: <FaUserTie className="w-16 h-16 text-green-600 mx-auto" /> // Industry Professional icon
    },
    {
      name: "Technicians",
      icon: <RiUserSettingsFill  className="w-16 h-16 text-green-600 mx-auto" /> // Technician icon
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Team</h2>
          <div className="h-1 w-16 bg-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          comprises passionate, experienced specialists with deep expertise in aviation and industrial sectors. They understand industry challenges and deliver tailored equipment solutions to meet clients' specific needs with exceptional service.          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 flex items-center justify-center mb-4">
                {member.icon} {/* Render the icon */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                {member.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;