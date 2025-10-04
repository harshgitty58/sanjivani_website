'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
   

const countries = [

  { name: 'Wipro', image: '/images/Explore/Kolhapur.png' },
  { name: 'Sangli', image: '/images/Explore/Sangli.png' },
  { name: 'Satara', image: '/images/Explore/Satara.png' },
  { name: 'Solapur', image: '/images/Explore/Solapur.png' },
  { name: 'Mumbai', image: '/images/Explore/Mumbai.png' },
  { name: 'Thane', image: '/images/Explore/Thane.png' },
  { name: 'Palghar', image: '/images/Explore/Palghar.png' },
  { name: 'Raigad', image: '/images/Explore/Raigad.png' },
  { name: 'Ratnagiri', image: '/images/Explore/Ratnagiri.png' },
  { name: 'Sindhudurg', image: '/images/Explore/Sindhudurg.png' },
  { name: 'Latur', image: '/images/Explore/Latur.png' },
  { name: 'Dharashiv', image: '/images/Explore/Dharashiv.png' },
  { name: 'Parbhani', image: '/images/Explore/Parbhani.png' },
   { name: 'Nanded', image: '/images/Explore/Nanded.png' },
  { name: 'Beed', image: '/images/Explore/Beed.png' },
  { name: 'Jalna', image: '/images/Explore/Jalna.png' },
  { name: 'Chhatrapati Sambhaji Nagar', image: '/images/Explore/Sambhaji-Nagar.png' },
  { name: 'Akola', image: '/images/Explore/Akola.png' },
  { name: 'Amravati', image: '/images/Explore/Amravati.png' },
  { name: 'Buldhana', image: '/images/Explore/Buldhana.png' },
  { name: 'Washim', image: '/images/Explore/Washim.png' },
  { name: 'Dhule', image: '/images/Explore/Dhule.png' },
  { name: 'Jalgaon', image: '/images/Explore/Jalgaon.png' },
  { name: 'Nashik', image: '/images/Explore/Nashik.png' },
  { name: 'Yavatmal', image: '/images/Explore/Yavatmal.png' },
  { name: 'Hingoli', image: '/images/Explore/Hingoli.png' },
  { name: 'Nandurbar', image: '/images/Explore/Nandurbar.png' },
  { name: 'ahilyanagar', image: '/images/Explore/ahilyanagar.png' },
  { name: 'Bandara', image: '/images/Explore/Bandara.png' },
  { name: 'Chandrapur', image: '/images/Explore/Chandrapur.png' },
  { name: 'Gadchiroli', image: '/images/Explore/Gadchiroli.png' },
  { name: 'Gondia', image: '/images/Explore/Gondia.png' },
  { name: 'Nagpur', image: '/images/Explore/Nagpur.png' },
  { name: 'Wardha', image: '/images/Explore/Wardha.png' },
];

const Explore = () => {
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
    <section className="py-5 bg-[#f2f1f9]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-12">
        Corporate CSR Partners
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
              className="min-w-[210px] max-w-[180px] h-57 rounded-2xl overflow-hidden shadow-md bg-white"
            >
              <Image
                src={image}
                alt={name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="text-center mt-2 font-semibold text-indigo-900">{name}</div>
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

export default Explore;
