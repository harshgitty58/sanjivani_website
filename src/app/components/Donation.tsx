'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const campaigns = [
  {
    id: 'chest-pain-patient',
    title: 'Help to save life. Chest pain suspecting heart issues.',
    image: '/images/patient.png',
    fund: '₹70000.0 Lac',
    badge: 'Tax Benefit',
  },
  {
    id: 'food-distribution-vehicle',
    title: 'Sanjivani needs vehicle for distributing food across city.',
    image: '/images/foodcar.png',
    fund: '₹70000.0 Lac',
    badge: 'Tax Benefit',
  },
  {
    id: 'free-medical-help',
    title: 'Sanjivani Provides Free Medical Help to Needy People',
    image: '/images/medicalhelp.png',
    fund: '₹70000.0 Lac',
    badge: 'Tax Benefit',
    urgent: true,
  },
  {
    id: 'birthday-celebration',
    title: 'Sanjivani Celebrates Your Birthday',
    image: '/images/birthday.png',
    fund: '₹70000.0 Lac',
    badge: 'Tax Benefit',
    urgent: true,
  },
  {
    id: 'village-road',
    title: 'Sanjivani helps village people build roads in the village.',
    image: '/images/road.png',
    fund: '₹70000.0 Lac',
    badge: 'Tax Benefit',
  },
];

export default function DonationPage() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    document.documentElement.style.height = 'auto';
    document.body.style.height = 'auto';
  }, []);

  return (
    <div className="flex flex-col bg-[#f2f1f9] mt-12">
      <div className="px-4 md:px-10 pt-12 pb-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-8">
        Our Projects
      </h2>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 px-8 scroll-smooth overflow-x-auto scrollbar-hide"
          >
            {campaigns.map((item) => (
              <div
                key={item.id}
                onClick={() => router.push(`/donation/${item.id}`)}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer flex-shrink-0 w-[260px] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  {item.badge && (
                    <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {item.badge}
                    </span>
                  )}
                  {item.urgent && (
                    <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                      Urgent
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <p className="text-sm font-semibold mb-2 text-gray-800 line-clamp-2">
                    {item.title}
                  </p>

                  <div className="flex justify-between text-xs text-gray-600 mb-4">
                    <div>
                      <div className="font-semibold">{item.fund}</div>
                      <div>Fund</div>
                    </div>
                    <div>
                      <div className="font-semibold">0</div>
                      <div>Supporters</div>
                    </div>
                    <div>
                      <div className="font-semibold">🔗</div>
                      <div>Share</div>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-medium transition-colors duration-200">
                    Donate
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
          >
            <ChevronRight size={24} />  
          </button>
        </div>
      </div>
    </div>
  );
}
