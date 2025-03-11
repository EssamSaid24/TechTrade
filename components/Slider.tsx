import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
    const [visibleCount, setVisibleCount] = useState(3);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    // Handle responsive item count
    useEffect(() => {
        const updateVisibleCount = () => {
            if (window.innerWidth < 640) {
                setVisibleCount(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCount(2);
            } else {
                setVisibleCount(3);
            }
        };

        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);
        return () => window.removeEventListener('resize', updateVisibleCount);
    }, []);

    const handleNext = () => {
        setStartIndex((prev) => 
            Math.min(prev + 1, items.length - visibleCount)
        );
    };

    const handlePrevious = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    // Touch handlers for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            handleNext();
        }
        if (isRightSwipe) {
            handlePrevious();
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <div className="relative max-w-6xl mx-auto py-12">
            <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>

            <div className="relative overflow-hidden px-12">
                {/* Navigation Buttons */}
                <button
                    onClick={handlePrevious}
                    disabled={startIndex === 0}
                    className={`absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg transition-all top-1/2 -translate-y-1/2
                        ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                >
                    <FaChevronLeft className="w-6 h-6 text-gray-700" />
                </button>

                {/* Slider Content */}
                <div 
                    className="overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <motion.div
                        className="flex"
                        initial={false}
                        animate={{ 
                            x: `-${(startIndex * 100) / visibleCount}%`
                        }}
                        transition={{ 
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        }}
                    >
                        {items.map((item) => (
                            <div 
                                key={item.id} 
                                className={`flex-none px-2 ${
                                    visibleCount === 1 ? 'w-full' : 
                                    visibleCount === 2 ? 'w-1/2' : 
                                    'w-1/3'
                                }`}
                            >
                                <div className="bg-white rounded-lg shadow-lg p-6 mx-auto hover:shadow-xl transition-shadow duration-300">
                                    <div 
                                        className="w-full h-48 mb-4 bg-center bg-no-repeat bg-contain rounded-lg"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    />
                                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                    {item.sector !== 'aviation' && (
                                        <button 
                                            onClick={() => window.location.href = `/${item.sector}/${item.type}/${item.id}`}
                                            className="mt-4 text-green-600 hover:text-green-700 font-medium"
                                        >
                                            Learn more →
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <button
                    onClick={handleNext}
                    disabled={startIndex >= items.length - visibleCount}
                    className={`absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg transition-all top-1/2 -translate-y-1/2
                        ${startIndex >= items.length - visibleCount ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                >
                    <FaChevronRight className="w-6 h-6 text-gray-700" />
                </button>
            </div>
        </div>
    );
}