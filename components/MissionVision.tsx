import React from 'react';
import { FaRocket, FaEye } from 'react-icons/fa';

const MissionVision = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Mission & Vision</h2>
          <div className="h-1 w-16 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="mission-vision-card bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <FaRocket className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold ml-4 text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 text-justify leading-relaxed">
              To become the go-to company for
              businesses seeking reliable and cost-effective
              equipment solutions in the aviation and industrial
              sectors. We strive to simplify the equipment trading
              process, eliminate unnecessary intermediaries, and
              provide a seamless experience for our clients and
              our affiliates alike. Our goal is to help businesses
              optimize their operations by providing them with
              access to high-quality equipment from trusted
              brands with a trusted on ground consultant that will
              attend to their every need.
            </p>
          </div>

          {/* Vision Card */}
          <div className="mission-vision-card bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <FaEye className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold ml-4 text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 text-justify leading-relaxed">
              To revolutionize the way businesses seek
              equipment and consultation in the aviation and
              industrial by providing them with a trusted and
              technically efficient partner right here in the region.
              We envision a future where companies can easily find
              the equipment they need, and build long-lasting
              relationships in Egypt and in the MENA region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;