'use client';

import React from 'react';
import Image from 'next/image';
 
const cabData = [
  {
    city: 'No Poverty',
    image: '/images/Popular/Pune.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Zero Hunger',
    image: '/images/Popular/Mumbai.png',
    destinations: ['Projects', ],},
  {
    city: 'Good Health',
    image: '/images/Popular/Bangalore.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Quality Education',
    image: '/images/Popular/Indore.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Gender Equality',
    image: '/images/Popular/Ahmedabad.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Clean Water',
    image: '/images/Popular/Latur.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Clean Energy',
    image: '/images/Popular/Chennai.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Work and Economic Growth',
    image: '/images/Popular/Hyderabad.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Infrastructure',
    image: '/images/Popular/goa.jpg',
    destinations: ['Projects', ],
  },
];

export default function PopularAirportNGO() {
  return (
    <section className="bg-gray-50 py-5 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#1E0972] mb-10">
        United Nations 17 Sustainable Development Goals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cabData.map(({ city, image, destinations }) => (
          <div key={city} className="bg-white rounded-xl shadow-sm flex gap-4 items-center p-4">
            <Image
              src={image}
              alt={city}
              width={64}
              height={64}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <h3 className="text-base font-semibold text-gray-800">{city}</h3>
              <p className="text-sm text-gray-600">
                To:{' '}
                {destinations.map((d, i) => (
                  <span key={i} className="text-blue-600 hover:underline cursor-pointer">
                    • {d}{' '}
                  </span>
                ))}   
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
