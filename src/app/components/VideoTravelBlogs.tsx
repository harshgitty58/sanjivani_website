'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
    
const countries = [
  { name: 'Rahul', image: '/images/Travel Bloggers/travel.png' },
  { name: 'Neha', image: '/images/Travel Bloggers/travel3.png' },
  { name: 'Anjali', image: '/images/Travel Bloggers/travel1.png' },
  { name: 'Vikram', image: '/images/Travel Bloggers/travel4.png' },
  { name: 'Sukanya', image: '/images/Travel Bloggers/travel2.png' },
   { name: 'Pooja', image: '/images/Travel Bloggers/travel3.png' },
 
 

];

const VideoTravelBlogs = () => {
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
        Join Social Work Enthusiast Team
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

export default VideoTravelBlogs;
