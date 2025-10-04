'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cabData = [
  {
    city: 'No Poverty',
    image: '/images/Popular/sdg1.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Zero Hunger',
    image: '/images/Popular/sdg2.png',
    destinations: ['Projects', ],},
  {
    city: 'Good Health',
    image: '/images/Popular/sdg3.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Quality Education',
    image: '/images/Popular/sdg4.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Gender Equality',
    image: '/images/Popular/sdg5.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Clean Water',
    image: '/images/Popular/sdg6.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Clean Energy',
    image: '/images/Popular/sdg7.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Work and Economic Growth',
    image: '/images/Popular/sdg8.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Infrastruc',
    image: '/images/Popular/sdg9.png',
    destinations: ['Projects', ],
  },
   {
    city: 'Reduced Inequal - ities',
    image: '/images/Popular/sdg10.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Sustain - able Cities',
    image: '/images/Popular/sdg11.png',
    destinations: ['Projects', ],},
  {
    city: 'Consump - tion and Produc - tion',
    image: '/images/Popular/sdg12.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Climate Action',
    image: '/images/Popular/sdg13.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Life Below Water',
    image: '/images/Popular/sdg14.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Life on Land',
    image: '/images/Popular/sdg15.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Peace, Justice',
    image: '/images/Popular/sdg16.png',
    destinations: ['Projects', ],
  },
  {
    city: 'Partner - ships',
    image: '/images/Popular/sdg17.png',
    destinations: ['Projects', ],
  },
];

export default function Popular() {
  return (
    <section className="bg-gray-50 py-5 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#1E0972] mb-10">
        United Nations 17 Sustainable Development Goals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
        {cabData.map(({ city, image, destinations }, index) => (
          <motion.div
            key={city}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
            className="bg-white rounded-xl shadow-sm flex gap-2 items-center p-2 cursor-pointer transition-transform"
          >
            <Image
              src={image}
              alt={city}
              width={100}
              height={100}
              className="w-30 h-50 object-cover rounded-md"
            />
            <div>
              <h6 className="text-base font-semibold text-gray-700">{city}</h6>
              <p className="text-sm text-gray-600">
                To:{' '}
                {destinations.map((d, i) => (
                  <span key={i} className="text-blue-600 hover:underline cursor-pointer">
                    • {d}{' '}
                  </span>
                ))}   
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
