import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

interface SliderItem {
    id: string;
    name: string;
    image: string;
    description: string;
    type: 'partner' | 'customer';
    sector: 'aviation' | 'industrial';
}

interface SliderProps {
    items: SliderItem[];
    title: string;
}

export default function Slider({ items, title }: SliderProps) {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 3;

    // Duplicate the items to create a seamless loop
    const duplicatedItems = [...items, ...items, ...items];

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % items.length);
    };

    const handlePrevious = () => {
        setStartIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    return (
        <div className="relative max-w-6xl mx-auto py-12">
            <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>

            {/* Partner Grid */}
            <div className="relative overflow-hidden">
                <div className="flex items-center justify-between">
                    {/* Left Button */}
                    <button
                        onClick={handlePrevious}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow-md transition-all hover:bg-green-700"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Items */}
                    <div className="w-full overflow-hidden">
                        <motion.div
                            className="flex gap-6 px-6"
                            initial={{ x: 0 }}
                            animate={{ x: -startIndex * (100 / visibleCount) + '%' }}
                            transition={{ type: 'tween', duration: 0.5 }}
                        >
                            {duplicatedItems.slice(startIndex, startIndex + visibleCount * 2).map((item, index) => (
                                <div key={`${item.id}-${index}`} className="flex-none w-1/3">
                                    <div className="bg-white rounded-lg shadow-lg p-6 m-4 flex flex-col items-center cursor-pointer hover:shadow-2xl transition-shadow">
                                        <Link href={`/${item.sector}/${item.type}/${item.id}`} className="block h-full w-full text-center">
                                            <div className="relative w-full h-40 mb-4">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    style={{ objectFit: 'contain' }}
                                                    className="rounded-lg"
                                                />
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                            <p className="mt-2 text-green-600 hover:text-green-700">Click to learn more →</p>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow-md transition-all hover:bg-green-700"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
}