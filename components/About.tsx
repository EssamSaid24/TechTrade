import React from "react";

const AboutUsSection: React.FC = () => {
    return (
        <div className=" relative h-full bg-gray-100">
            {/* Top Section with Title */}
            <div
                className="relative  py-4 px-20"
                style={{
                    background: "linear-gradient(to right, #5d8551, #207408)", // Gradient colors
                }}
            >
                <h1 className="relative lg:w-1/2 text-center lg:text-left text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ">
                    About us
                </h1>
            </div>

            {/* Content Section */}
            <div className="px-4 sm:px-6 lg:px-20 py-8 sm:py-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
                {/* Left Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-green-600 text-xl sm:text-2xl md:text-3xl font-bold mb-4">WHO WE ARE</h2>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
                        Tech Trade Egypt has over 15 years of experience in the Egyptian market, backed by more than 35 years of combined expertise. As a sole agent, consultant, and distributor for leading global brands, we serve both the industrial and aviation sectors, offering the highest standards of products and services.
                        Our team is committed to delivering cost-effective, reliable, and transparent solutions. We work with top manufacturers and provide a streamlined process from initial consultation to final delivery. We handle all logistics, including shipping, delivery, installation, and after-sales services, ensuring a smooth and efficient experience from start to finish.

                        With a focus on extensive industry experience and a strong after-sales network supported by skilled engineers, we aim to offer nothing but the best to our clients, ensuring satisfaction and continued trust in the Egyptian market.
                    </p>
                </div>

                {/* Right Image Content */}
                <div className="lg:w-1/2 flex justify-center items-center">
                    <img
                        src="/logo_1.jpeg" // Replace with your image path
                        alt="About Us"
                        className="rounded-lg shadow-lg max-w-full h-auto object-contain"
                    />
                </div>
            </div>

            {/* Optional Curved Section */}
            <div className="">
                <svg
                    className="absolute bottom-0 left-0 right-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="#000000"
                        fillOpacity="1"
                        d="M0,224L48,208C96,192,192,160,288,144C384,128,480,128,576,160C672,192,768,256,864,272C960,288,1056,256,1152,240C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default AboutUsSection;
