'use client';

import Image from 'next/image';
import React from 'react';

const goals = [
  { id: 1, title: 'No Poverty', color: 'bg-[#e5243b]', image: '/images/Popular/sdg1.jpg' },
  { id: 2, title: 'Zero Hunger', color: 'bg-[#dda63a]', image: '/images/Popular/sdg2.jpg' },
  { id: 3, title: 'Good Health and Well-being', color: 'bg-[#4c9f38]', image: '/images/Popular/sdg3.jpg' },
  { id: 4, title: 'Quality Education', color: 'bg-[#c5192d]', image: '/images/Popular/sdg4.jpg' },
  { id: 5, title: 'Gender Equality', color: 'bg-[#ff3a21]', image: '/images/Popular/sdg5.jpg' },
  { id: 6, title: 'Clean Water and Sanitation', color: 'bg-[#26bde2]', image: '/images/Popular/sdg6.jpg' },
  { id: 7, title: 'Affordable and Clean Energy', color: 'bg-[#fcc30b]', image: '/images/Popular/sdg7.jpg' },
  { id: 8, title: 'Decent Work and Economic Growth', color: 'bg-[#a21942]', image: '/images/Popular/sdg8.jpg' },
  { id: 9, title: 'Industry, Innovation and Infrastructure', color: 'bg-[#fd6925]', image: '/images/Popular/sdg9.jpg' },
  { id: 10, title: 'Reduced Inequality', color: 'bg-[#dd1367]', image: '/images/Popular/sdg10.jpg' },
  { id: 11, title: 'Sustainable Cities and Communities', color: 'bg-[#fd9d24]', image: '/images/Popular/sdg11.jpg' },
  { id: 12, title: 'Responsible Consumption and Production', color: 'bg-[#bf8b2e]', image: '/images/Popular/sdg12.jpg' },
  { id: 13, title: 'Climate Action', color: 'bg-[#3f7e44]', image: '/images/Popular/sdg13.jpg' },
  { id: 14, title: 'Life Below Water', color: 'bg-[#0a97d9]', image: '/images/Popular/sdg14.jpg' },
  { id: 15, title: 'Life on Land', color: 'bg-[#56c02b]', image: '/images/Popular/sdg15.jpg' },
  { id: 16, title: 'Peace, Justice and Strong Institutions', color: 'bg-[#00689d]', image: '/images/Popular/sdg16.jpg' },
  { id: 17, title: 'Partnerships for the Goals', color: 'bg-[#19486a]', image: '/images/Popular/sdg17.jpg' },
  { id: 18, title: 'SDG Goals Overview', color: 'bg-[#19486a]', image: '/images/Popular/sdg18.jpg' },
];

export default function SDGGrid() {
  return (
    <div className="bg-[#f2f1f9] py-16 px-4 sm:px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-900 tracking-tight">
            Sustainable Development Goals
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-gray-600 font-medium">
            Sanjivani NGO actively aligns its initiatives and portfolios with the United Nations Sustainable Development Goals to construct a better tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {goals.map((goal) => (
            <div 
              key={goal.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-square w-full border border-slate-150"
            >
              {/* Image */}
              <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={goal.image}
                  alt={goal.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Hover/Active overlay card */}
              <div className={`absolute inset-0 ${goal.color} opacity-0 group-hover:opacity-95 flex flex-col justify-center items-center text-white text-center p-3 transition-opacity duration-300`}>
                <p className="text-2xl font-black">Goal {goal.id}</p>
                <p className="text-xs sm:text-sm mt-2 font-bold px-1">{goal.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
