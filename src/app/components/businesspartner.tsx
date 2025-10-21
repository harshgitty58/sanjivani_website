'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
    
const countries = [
  { name: 'waterproofing', image: '/images/Vehicle/water.png' },
  { name: 'Cab Vendor', image: '/images/Vehicle/cab-vendor.png' },
  { name: 'Bus Vendor', image: '/images/Vehicle/bus-vendor.png' },
  { name: 'Train Vendor', image: '/images/Vehicle/train-vendor.png' },
  { name: 'Flight Vendor', image: '/images/Vehicle/flight-vendor.png' },
  { name: 'Cruise Vendor', image: '/images/Vehicle/cruisev.png' },
  { name: 'Visa Vendor', image: '/images/Vehicle/visav.png' },
  { name: 'Hotel Vendor', image: '/images/Vehicle/hotelv.png' },
  { name: 'Forex Vendor', image: '/images/Vehicle/forexv.png' },

];

const businesspartner = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  
  return (
    <section className="py-1 bg-[#f2f1f9]">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-800 mb-6">
        Get Help to Start Business
      </h2>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          <ChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-10 scrollbar-hide scroll-smooth"
        >
          {countries.map(({ name, image }) => (
            <div
              key={name}
              className="min-w-[180px] max-w-[180px] rounded-2xl overflow-hidden shadow-md bg-white"
            >
              <Image
                src={image}
                alt={name}
                width={300}
                height={300}
                className="w-50 h-40 object-cover"
              />
              {/* <div className="text-center mt-2 font-semibold text-indigo-900">{name}</div> */}
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default businesspartner;
