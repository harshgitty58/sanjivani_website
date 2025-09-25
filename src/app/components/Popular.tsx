'use client';

import React from 'react';
import Image from 'next/image';
 
const cabData = [
  {
    city: 'Pune',
    image: '/images/Popular/Pune.png',
    destinations: ['Mumbai', 'Solapur', 'Latur','Goa'],
  },
  {
    city: 'Mumbai',
    image: '/images/Popular/Mumbai.png',
    destinations: ['Hyderabad', 'Bangalore', 'Pune','Goa'],
  },
  {
    city: 'Bangalore',
    image: '/images/Popular/Bangalore.png',
    destinations: ['Pune', 'Mumbai', 'Goa'],
  },
  {
    city: 'Indore',
    image: '/images/Popular/Indore.png',
    destinations: ['Pune', 'Mumbai', 'Goa'],
  },
  {
    city: 'Ahmedabad',
    image: '/images/Popular/Ahmedabad.png',
    destinations: ['Surat', 'Mumbai', 'Pune'],
  },
  {
    city: 'Latur',
    image: '/images/Popular/Latur.png',
    destinations: ['Mumbai', 'Goa', 'Pune'],
  },
  {
    city: 'Chennai',
    image: '/images/Popular/Chennai.png',
    destinations: ['Tirupati', 'Madurai', 'Puducherry'],
  },
  {
    city: 'Hyderabad',
    image: '/images/Popular/Hyderabad.png',
    destinations: ['Mumbai', 'Goa', 'Pune'],
  },
  {
    city: 'Goa',
    image: '/images/Popular/goa.jpg',
    destinations: ['Pune', 'Mumbai', 'Hampi'],
  },
];

export default function PopularAirportNGO() {
  return (
    <section className="bg-gray-50 py-5 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#1E0972] mb-10">
        Our Area of work
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
