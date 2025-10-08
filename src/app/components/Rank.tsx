'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const campaigns = [
  {
    id: 'chest-pain-patient',
    title: 'Help to save life. Chest pain suspecting heart issues.',
    image: '/images/gdp.jpg',
    badge: 'Rank 4',
  },
  {
    id: 'food-distribution-vehicle',
    title: 'Sanjivani needs vehicle for distributing food across city.',
    image: '/images/foodcar.png',
    badge: 'Tax Benefit',
  },
  {
    id: 'free-medical-help',
    title: 'Sanjivani Provides Free Medical Help to Needy People',
    image: '/images/medicalhelp.png',
    badge: 'Tax Benefit',
    urgent: true,
  },
  {
    id: 'birthday-celebration',
    title: 'Sanjivani Celebrates Your Birthday',
    image: '/images/birthday.png',
    badge: 'Tax Benefit',
    urgent: true,
  },
  {
    id: 'village-road',
    title: 'Sanjivani helps village people build roads in the village.',
    image: '/images/road.png',
    badge: 'Tax Benefit',
  },
];

export default function Rank() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'auto',
      });
    }
  };

  useEffect(() => {
    document.documentElement.style.height = 'auto';
    document.body.style.height = 'auto';
  }, []);

  return (
    <div className="flex flex-col bg-[#f2f1f9] mt-0">
      <div className="px-4 md:px-10 pt-4 pb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-8">
          India in Global Rankings
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-400 w-10 h-10 flex items-center justify-center rounded-full"
          >
            <ChevronLeft size={20} />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-6 px-8 overflow-x-auto scrollbar-hide"
          >
            {campaigns.map((item) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-[260px] h-[200px] border border-gray-300 bg-white"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {item.badge && (
                  <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1">
                    {item.badge}
                  </span>
                )}

                {item.urgent && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1">
                    Urgent
                  </span>
                )}

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                  <button className="bg-blue-600 text-white px-1 py-2 text-sm font-medium">
                    Join Us to Improve
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-400 w-10 h-10 flex items-center justify-center rounded-full"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
