"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Combined data from both aviation and industrial sectors
const data = {
    aviation: {
        partner: [
            {
                id: "DunlopAircraftTyres",
                name: "Dunlop Aircraft Tyres",
                image: "/20.png", // Assuming a placeholder image path
                description: "World's only specialist manufacturer and retreader of aircraft tyres",
                fullDescription: "For more than 100 years, Dunlop Aircraft Tyres has represented excellence in the aviation industry and is today the world's only specialist manufacturer and retreader of aircraft tyres. With over 500 approvals, Dunlop Aircraft Tyres can supply tyres for over 300 different types of aircraft in the civil and military aviation market. The organisation is committed to providing airplane operators around the globe with new or retreaded airplane tyres of the highest quality and customer service of the highest standard. Dunlop Aircraft Tyres is focused on providing constructors and operators alike with a range of high-quality products backed by an unrivaled level of customer service - throughout the world.",
                features: [
                    "Specialist manufacturer of aircraft tyres",
                    "Retreading services for aircraft tyres",
                    "Over 500 approvals for 300+ aircraft types",
                    "Global customer service and support"
                ],
                // "yearEstablished": 1919, // Assuming establishment around 1919 based on "more than 100 years"
                // "headquarters": "Birmingham, United Kingdom" // Assuming headquarters location
            },
            {
                id: "FokkerServices",
                name: "Fokker Services",
                image: "/21.jpeg",
                description: "Innovative aerospace service provider offering availability solutions for airlines, OEMs, and MROs.",
                fullDescription: "Fokker Services is the world’s most innovative aerospace service provider, delivering affordable and reliable availability solutions to airlines, OEMs, and MROs. With a strong reputation in the global aerospace industry, Fokker Services supports a large fleet of various aircraft types. Its capabilities include Component Availability Programs, Flighthour-based Component Repairs, Engineering and Documentation Support, as well as Airframe Maintenance, Modifications, Conversion, and Completion services. With over 100 years of aviation heritage, Fokker Services continues the legacy of Fokker’s worldwide reputation for manufacturing reliable aircraft, applying decades of expertise to provide first-class maintenance solutions for aircraft operators.",
                features: [
                    "Component Availability Programs",
                    "Flighthour-based Component Repairs",
                    "Engineering and Documentation Support",
                    "Airframe Maintenance, Modifications, and Conversions",
                    "100 years of aviation heritage and expertise"
                ]
            },
            {
                id: "STSComponentSolutions",
                name: "STS Component Solutions",
                image: "/700.png",
                description: "Global aircraft inventory solutions with 24/7/365 availability.",
                fullDescription: "STS Component Solutions specializes in the on-time delivery of certified aircraft parts. With expertise in materials management, OEM distribution, and supply chain solutions, the company ensures seamless support for the aviation industry. STS Component Solutions excels at locating hard-to-find aircraft and engine parts while maintaining a rotable inventory in strategic warehouses worldwide, ensuring global availability and efficient service.",
                features: [
                    "24/7/365 global aircraft inventory solutions",
                    "On-time delivery of certified aircraft parts",
                    "Expertise in materials management and OEM distribution",
                    "Supply chain solutions for aviation industry",
                    "Strategic warehouses with rotable inventory worldwide"
                ]
            },
            {
                id: "HYCOMAviationSolutions",
                name: "HYCOM Aviation Solutions",
                image: "/701.png",
                description: "Certified supplier of hydraulic equipment for precise aircraft maintenance.",
                fullDescription: "HYCOM Aviation Solutions is a globally recognized and certified supplier of hydraulic equipment, ensuring safe and reliable aircraft maintenance. The company provides high-quality testing equipment to leading aircraft manufacturers, ranging from mobile test units to built-in hangar systems, component test benches, and general testing equipment. With a strong commitment to efficiency and precision, HYCOM supports the aviation industry with cutting-edge hydraulic solutions.",
                features: [
                    "Certified supplier of hydraulic equipment",
                    "High-quality testing equipment for aircraft maintenance",
                    "Mobile test units and built-in hangar systems",
                    "Component test benches and general testing equipment",
                    "Trusted by leading aircraft manufacturers worldwide"
                ]
            }


            // ... Add other aviation partners
        ],
        customer: [
            {
                id: "airmaster",
                name: "air master",
                image: "/airmaster.png",
                description: "National carrier of Egypt",
                fullDescription: "Our operations coverage encompasses the Arab World, Europe, UK, North America, the Asia Pacific Region, Africa, and CIS. With flexibility, faster turnaround times, fast-track to-market, count on Airmaster expertise and wide range of solutions to manage all your air import and export needs.",
                features: [

                ],
            },
            {
                id: "redseaairline",
                name: "Red Sea Airline",
                image: "/redseaairline.png",
                description: "Egypt's leading airline since 2021, offering both scheduled and charter flights that connect you to Egypt's rich culture and stunning landscapes.",
                fullDescription: "Welcome to Red Sea Airlines, Egypt's leading airline since 2021, offering both scheduled and charter flights that connect you to Egypt's rich culture and stunning landscapes. Our experienced team, including cabin crew, pilots, and ground staff, is passionate about providing a seamless and safe travel experience, ensuring every journey with us is memorable.",
                features: [

                ],
            },
            {
                id: "AirCairo",
                name: "Air Cairo",
                image: "/Aircairo.png",
                description: "Authentic, affordable, and accessible airline connecting the world through Cairo.",
                fullDescription: "Air Cairo, founded in October 2003, is an Egyptian hybrid airline that connects passengers globally under its wings, symbolizing freedom and warmth. Operating with a fleet of 37 aircraft, including ATR, Embraer, and Airbus A320 models, the airline serves over 200 weekly flights to 50 international and domestic destinations. Air Cairo has successfully transported over 20 million passengers and is known for its authenticity, affordability, and consistent accessibility. The airline is IOSA certified, SAFA-compliant, and a member of EASA/ECDC, ICAO, and IATA. The airline's commitment to excellence is showcased in its updated fleet, including the latest A320 neo models, and a dedication to providing amazing journeys every day.",
                features: [
                ]
            }
            
            // ... Add other aviation customers
        ]
    },
    industrial: {
        partner: [
            {
                id: "DunlopConveyorBelting",
                name: "Dunlop Conveyor Belting",
                image: "/900.png",
                description: "Worldwide conveyor solutions with high-quality, durable conveyor belts.",
                fullDescription: "Dunlop Conveyor Belting has developed a wide variety of conveyor belts to meet demands at every stage of the production process. Offering a two-year warranty across its entire product range, Dunlop provides the best quality in the market. All belts are manufactured in the Kingdom of the Netherlands and cover nearly every conveying application, from the lightest to the most severe service conditions. The product range includes multiply belting, steel-reinforced belting, profiled belting (Chevron), and wear-resistant sheeting. Additionally, Dunlop offers heat-resistant (up to 400°C), oil- and fat-resistant, high-abrasion-resistant, and fire-retardant covers that exceed DIN standards.",
                features: [
                    "Two-year warranty on all conveyor belts",
                    "Manufactured in the Netherlands",
                    "Steel-reinforced and profiled (Chevron) belting",
                    "Heat, oil, and fire-resistant covers exceeding DIN standards",
                    "Arkeen Wear-resistant Drum Lagging Rubber applications",
                    "Full lagging services for different pulley sizes on-site"
                ]
            },
            {
                id: "MullerBeltex",
                name: "Muller Beltex",
                image: "/12.png",
                description: "Specialized in FDA white belts, bucket elevators, and PVC belts for various industries.",
                fullDescription: "Muller Beltex provides high-quality conveyor belt solutions, including FDA white belts designed for the food processing industry. These belts offer exceptional fat resistance and exceed the required standards for dry food applications according to German DIN and USDA regulations. The product range also includes plastic conveyor belts made from PVC or polyurethane, meeting DIN and ISO standards for diagonal, vertical, and horizontal transport. Muller Beltex offers specialized belt solutions for industries such as glass recycling, concrete processing, packaging machinery, and food processing, ensuring high performance and durability.",
                features: [
                    "FDA-approved white belts for food processing",
                    "Exceptional fat resistance exceeding DIN and USDA standards",
                    "PVC and polyurethane conveyor belts",
                    "Compliance with DIN and ISO standards for transport applications",
                    "Specialized belts for glass recycling, concrete processing, and packaging machinery"
                ]
            },
            {
                id: "Gurtec",
                name: "Gurtec",
                image: "/11.png",
                description: "Manufacturer of high-quality conveyor rollers, drums, and idlers.",
                fullDescription: "With over 100 years of experience, Gurtec specializes in developing and manufacturing top-quality conveyor components. The product range includes a variety of rollers, from standard belt conveyor rollers to shaft-free, rubber disk return, rubber impact, and aluminum rollers. Gurtec also provides complete frame and roller assemblies, available in painted or hot-galvanized finishes, for belt widths ranging from 350 to over 3200 mm. Additionally, the company offers a wide selection of light, medium, and heavy-duty pulleys, along with a reliable primary belt cleaner designed for light to heavy-duty conveyors, ensuring easy installation at the drive end.",
                features: [
                    "Over 100 years of experience in conveyor components",
                    "Standard and specialized rollers, including rubber and aluminum options",
                    "Complete frame and roller assemblies in painted or hot-galvanized finishes",
                    "Light, medium, and heavy-duty pulleys",
                    "Primary belt cleaner for light to heavy-duty conveyors"
                ]
            },
            {
                id: "DCLInc",
                name: "DCL",
                image: "/13.png",
                description: "Leader in dry bulk loading equipment manufacturing since 1981.",
                fullDescription: "Since 1981, DCL, Inc. has been the industry leader in manufacturing dry bulk loading equipment. Recognized as the standard against which other loading systems are measured, DCL provides comprehensive solutions as a designer, engineer, and integrator. Offering a complete one-stop source for developing, building, and installing bulk loading solutions, the company continually innovates through ongoing research and development, introducing groundbreaking ways to enhance efficiency and performance in bulk material handling.",
                features: [
                    "Leading manufacturer of dry bulk loading equipment",
                    "One-stop source for design, engineering, and installation",
                    "Recognized industry standard for loading systems",
                    "Innovative research and development for advanced solutions",
                    "Over 40 years of experience in bulk material handling"
                ]
            },
            {
                id: "Chemvulc",
                name: "CHEMVULC",
                image: "/16.png",
                description: "Manufacturer of durable rubber products for heavy industry and mining.",
                fullDescription: "With a long-standing relationship with heavy industry and mining, Industrial Rubber Solutions manufactures a range of high-quality products designed to withstand the harshest industrial applications. The product range includes conveyor belt repair systems, pulley lagging, general-purpose rubber sheeting, tank lining, and specialized adhesives. The company also offers hot and cold conveyor splicing products, rubber-to-metal bonding solutions, specialized adhesives, and cements, ensuring reliable and efficient industrial applications. Committed to quality, Industrial Rubber Solutions supplies the best materials for demanding environments.",
                features: [
                    "Durable rubber products for heavy industry and mining",
                    "Conveyor belt repair systems and pulley lagging",
                    "General-purpose rubber sheeting and tank lining",
                    "Hot and cold conveyor splicing products",
                    "Specialized adhesives, cements, and rubber-to-metal bonding solutions"
                ]
            },
            {
                id: "DustSolutionsIncorporated",
                name: "Dust Solutions Incorporated (DSI)",
                image: "/10.png",
                description: "Manufacturer of dust suppression systems for a variety of industries.",
                fullDescription: "Dust Solutions Incorporated (DSI) manufactures Dust Suppression Systems for a wide range of industries, including power generation, mining, mineral processing, aggregate, pulp & paper, wood products, hazardous waste, marine, and bulk handling. DSI's technology uses a special type of air-atomizing nozzle to produce a dry fog (water droplets 10 microns or smaller) that agglomerates and removes airborne dust particles (PM-10) from material handling and processing operations. DSI's specialty is agglomerative dust suppression, with engineering specifications often referring to this technology as ADS, dry fog system, sonic dry fog system, ultra-sonic fog, or air atomizing water spray system.",
                features: [
                    "Dust suppression systems for multiple industries",
                    "Technology using air-atomizing nozzles to produce dry fog",
                    "Specializes in agglomerative dust suppression",
                    "Effective removal of airborne dust particles (PM-10)",
                    "DustTamer Wind Fence Systems for various applications"
                ]
            },
            {
                id: "MLT",
                name: "MLT Group",
                image: "/14.png",
                description: "MT is a European specialist in conveyor belt splicing, known for its innovative Super-Screw® solution.",
                fullDescription: "MT is the European leader in conveyor belt splicing solutions, offering innovative technologies designed to simplify and optimize belt maintenance. Their patented MS® fastener allows for easy splicing using screws, making installation quicker and more efficient. MT’s flagship product, Super-Screw®, is a revolutionary, patented splice that significantly reduces downtime and solves common installation challenges. It offers a reliable and durable alternative to traditional belt splicing methods, combining strength, flexibility, and ease of use.",
                features: [
                    "The MS® fastener allows for quick, screw-based splicing without specialized BsTools.",
                    "Super-Screw® is a unique, patented splice offering unmatched performance and reliability.",
                    "Designed to significantly reduce conveyor system downtime during installation or repair."
                ]
            }
        ],
        customer: [
            {
                id: "EzzSteel",
                name: "Ezz Steel",
                image: "/901.png",
                description: "Largest independent steel producer in the Middle East and North Africa.",
                fullDescription: "Since its founding, Ezz Steel has aspired to be a technological leader in the steel industry, and today, the company has realized that ambition. Ezz Steel is the largest independent steel producer in the Middle East and North Africa, exporting long and flat steel products to many countries worldwide. In 2011, production capacity reached 7 million tons per year, including 4.7 million tons of long products and 2.3 million tons of hot rolled coil (HRC). These high-quality steel products are produced at four state-of-the-art steel plants across Egypt.",
                features: [
                ]
            },
            {
                id: "CEMEX",
                name: "CEMEX",
                image: "/CEMEX.png",
                description: "Global leader in the industry with nearly 46,500 employees worldwide.",
                fullDescription: "Founded in Mexico in 1906, our company has grown from a local player to one of the top global companies in our industry, with close to 46,500 employees worldwide. Over the years, we have expanded our reach and expertise, positioning ourselves as a leader in the field, committed to providing high-quality products and services across multiple regions.",
                features: [
                ]
            },
            {
                id: "SuezSteel",
                name: "Suez Steel",
                image: "/32.png",
                description: "Leading Egyptian steel producer with a commitment to quality and continuous development.",
                fullDescription: "Suez Steel Misr is an Egyptian Steel Group producing a wide range of steel products in line with international standards. The group operates through Suez Steel Company, an integrated steel complex producing steel from raw materials. This includes a direct reduction plant with a capacity of 2.1 million tons per year, two melting shops with a capacity of 2.1 million tons per year, and three rolling mills with a capacity of 2.2 million tons per year. Additionally, the company operates a cut & bend plant with a capacity of 300 thousand tons per year, supported by several other factories in Suez Governorate. With a focus on quality and ongoing investment in plants and human resources, Solb Misr has earned a reputation as a trusted supplier for local and regional clients.",
                features: [

                ]
            },
            {
                id: "NileSugar",
                name: "Nile Sugar",
                image: "/nilesugar-removebg-preview.png",
                description: "Leading beetroot sugar extraction and refinery plant in Egypt.",
                fullDescription: "Nile Sugar was established by the Sawiris Family in 2006 to build, operate, and manage a beetroot sugar extraction plant and refinery. Located in Nubariyah, along Alexandria desert road, 50 kilometers from the Port of Alexandria, the region is ideal for beetroot cultivation due to its abundance of available land. Factory production started in 2010 with a nominal processing capacity of 7,500 tons per day. The capacity of the first production line was later successfully increased to 11,000 tons, operating efficiently since February 2016. Currently, Nile Sugar produces 192,800 tons per season, with a beet season lasting up to 150 days.",
                features: [

                ]
            },
            {
                id: "CanalSugar",
                name: "Canal Sugar",
                image: "/canalsugar.png",
                description: "Egypt's first sugar beet processing plant providing premium white sugar.",
                fullDescription: "The first sugar beet processing plant in Egypt, this facility provides up to 45% of its feedstock from its own farm. The company is dedicated to achieving the world’s highest potential yield of sugar beet by implementing the latest farming practices and modern technology, while also providing agronomic guidance to neighboring farms. The plant produces premium white sugar, which is stored in the world’s largest conditioning silo. At full capacity, the plant’s production will bridge the entire gap between local sugar consumption and production in Egypt.",
                features: [
                ]
            }
        ]
    }
};

export default function DetailPage() {
    const params = useParams();
    const { sector, type, id } = params;

    // Type guard to ensure params are strings
    if (typeof sector !== 'string' || typeof type !== 'string' || typeof id !== 'string') {
        return <div>Invalid parameters</div>;
    }

    const item = data[sector as keyof typeof data]?.[type as 'partner' | 'customer']?.find(
        item => item.id === id
    );

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="pt-20">
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-lg shadow-xl p-8"
                    >
                        <Link
                            href={`/services/${sector}`}
                            className="text-green-600 hover:text-green-700 mb-6 inline-block"
                        >
                            ← Back to {sector} services
                        </Link>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="relative h-[400px]">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="rounded-lg"
                                />
                            </div>

                            <div>
                                <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
                                <p className="text-gray-600 mb-6">{item.fullDescription}</p>

                                {type === "partner" && item.features.length > 0 && (
                                    <div className="mb-6">
                                        <h2 className="text-2xl font-bold mb-3">Key Features</h2>
                                        <ul className="list-disc list-inside space-y-2">
                                            {item.features.map((feature, index) => (
                                                <li key={index} className="text-gray-600">{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}


                                {/* <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="font-bold text-gray-700">Established</h3>
                                        <p className="text-gray-600">{item.yearEstablished}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-700">Headquarters</h3>
                                        <p className="text-gray-600">{item.headquarters}</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
}