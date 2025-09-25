'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
  const [filter, setFilter] = useState('All');
  const router = useRouter();

  const filteredCampaigns = campaigns.filter((item) => {
    if (filter === 'Urgent') return item.urgent;
    if (filter === 'Tax Benefit') return item.badge === 'Tax Benefit';
    return true;
  });

  return (
    <div className="px-6 py-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        COVID 19 FREE FOOD CAMP
      </h2>

      <div className="mb-6 flex justify-center">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 text-sm"
        >
          <option value="All">All</option>
          <option value="Urgent">Urgent</option>
          <option value="Tax Benefit">Tax Benefit</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCampaigns.map((item) => (
          <div
            key={item.id}
            onClick={() => router.push(`/donation/${item.id}`)}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
          >
            <div className="relative h-40">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
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
              <p className="text-sm font-medium mb-2">{item.title}</p>
              <div className="flex justify-between text-xs text-gray-600 mb-3">
                <div>
                  <div className="font-semibold">{item.fund}</div>
                  <div className="text-xs">Fund</div>
                </div>
                <div>
                  <div className="font-semibold">0</div>
                  <div className="text-xs">Supporters</div>
                </div>
                <div>
                  <div className="font-semibold">🔗</div>
                  <div className="text-xs">Share</div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded text-sm font-semibold">
                Donate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
