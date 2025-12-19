'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const campaigns = [
  {
    id: 'gdp',
    image: '/images/gdp.jpg',
    badge: 'Rank 4',
  },
  {
    id: 'edb',
    image: '/images/edb.jpg',
    badge: 'Rank 39th',
  },
  {
    id: 'hunger',
    image: '/images/hungerindex.jpg',
    badge: 'Rank 111th',
    urgent: true,
  },
  {
    id: 'happiness',
    image: '/images/happy.jpg',
    badge: 'Rank 126th',
    urgent: true,
  },
  {
    id: 'environment',
    image: '/images/envx.jpg',
    badge: 'Rank 176th',
  },
];

export default function Rank() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    const scrollAmount =
      window.innerWidth < 768 ? 260 : scrollRef.current.offsetWidth / 1.2;

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="bg-[#f2f1f9] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-8">
          India in Global Rankings
        </h2>

        <div className="relative">

          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
                       bg-white border shadow-md w-10 h-10 items-center justify-center rounded-full"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth
                       px-1 sm:px-10 scrollbar-hide"
          >
            {campaigns.map((item) => (
              <div
                key={item.id}
                className="relative flex-shrink-0
                           w-[220px] sm:w-[260px] md:w-[300px]
                           h-[160px] sm:h-[190px] md:h-[210px]
                           rounded-md overflow-hidden border bg-white"
              >
                <Image
                  src={item.image}
                  alt={item.badge}
                  fill
                  className="object-cover"
                />

                <span className="absolute top-2 left-2 bg-yellow-500
                                 text-white text-xs font-semibold px-2 py-1 rounded">
                  {item.badge}
                </span>

                {item.urgent && (
                  <span className="absolute top-2 right-2 bg-red-600
                                   text-white text-xs font-semibold px-2 py-1 rounded">
                    Urgent
                  </span>
                )}

                <div className="absolute bottom-3 inset-x-0 flex justify-center">
                  <button className="bg-blue-600 hover:bg-blue-700
                                     text-white text-xs sm:text-sm
                                     px-3 py-2 rounded transition">
                    Join Us to Improve
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
                       bg-white border shadow-md w-10 h-10 items-center justify-center rounded-full"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
