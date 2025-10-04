'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cardData = [
  { title: 'Education', image: '/images/rahul1.png', buttonText: 'READ MORE' },
  { title: 'Children', image: '/images/rahul1.png', buttonText: 'READ MORE' },
  { title: 'Old Age', image: '/images/rahul1.png', buttonText: 'READ MORE' },
  { title: 'Electricity & Power', image: '/images/rahul1.png', buttonText: 'READ MORE' },
  { title: 'Food & Hunger', image: '/images/rahul1.png', buttonText: 'READ MORE' },
  { title: 'Sports', image: '/images/rahul1.png', buttonText: 'READ MORE' },
  { title: 'Women Empowerment', image: '/images/rahul1.png', buttonText: 'READ MORE' },
  { title: 'Farmers', image: '/images/rahul1.png', buttonText: 'READ MORE' },
  { title: 'Medical Help', image: '/images/rahul1.png', buttonText: 'READ MORE' },
  { title: 'Memorials', image: '/images/rahul1.png', buttonText: 'READ MORE' },
  { title: 'Water', image: '/images/rahul1.png', buttonText: 'READ MORE' },
  { title: 'Infrastructure', image: '/images/rahul1.png', buttonText: 'READ MORE' },
  { title: 'Transportation', image: '/images/rahul1.png', buttonText: 'READ MORE' },
  { title: 'HUMAN RIGHTS', image: '/images/rahul1.png', buttonText: 'READ MORE' },
  { title: 'Art & Cultural', image: '/images/rahul1.png', buttonText: 'READ MORE' },
  { title: 'Wildlife', image: '/images/rahul1.png', buttonText: 'READ MORE' },
  { title: 'Technology', image: '/images/rahul1.png', buttonText: 'READ MORE' },
  { title: 'Entrepreneurship', image: '/images/rahul1.png', buttonText: 'READ MORE' },
  { title: 'Disaster Relief', image: '/images/rahul1.png', buttonText: 'READ MORE' },
];

export default function Portfo() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative w-screen-1 h-screen bg-[#f2f1f9]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-8">
        Our Portfolios
      </h2>
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100"
      >
        <ChevronRight size={24} />
      </button>

      <div
        ref={scrollRef}
        className="flex h-full overflow-x-auto scroll-smooth no-scrollbar"
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative w-[24.7vw] h-full flex-shrink-0 group overflow-hidden transition-all duration-500"
          >
            <Image
              src={card.image}
              alt={card.title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end items-start p-6 text-white">
              <p className="text-lg font-medium mb-4">{card.title}</p>
              <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-100 transition">
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
