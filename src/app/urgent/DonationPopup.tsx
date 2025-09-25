'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface PopupData {
  title: string;
  messageLine1: string;
  name: string;
  amount: number;
  images: string[];
}

export default function DonationPopup() {
  const params = useParams();
  const id = params?.id as string;

  const [popupData, setPopupData] = useState<PopupData | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/popup/${id}`);
        if (!res.ok) {
          console.error('Failed to fetch popup:', res.status);
          return;
        }
        const data = await res.json();
        setPopupData(data);
        setTimeout(() => setShowPopup(true), 10000); // show after 10s
      } catch (error) {
        console.error('Error fetching popup:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!popupData || !showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md sm:max-w-lg lg:max-w-xl text-center relative p-5 sm:p-8">
        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-4 text-xl font-bold text-gray-600 hover:text-red-500"
          aria-label="Close popup"
        >
          ×
        </button>

        {/* Images */}
        {popupData.images?.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {popupData.images.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`popup-img-${i}`}
                width={80}
                height={80}
                className="rounded-md object-cover"
              />
            ))}
          </div>
        )}

        
        <p className="text-gray-700 text-sm mb-1">{popupData.title}</p>
        <p className="text-lg font-semibold text-gray-900">{popupData.messageLine1}</p>
        <p className="text-2xl font-bold text-black mt-1">{popupData.name}</p>

        
        <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full w-full sm:w-auto">
          Donate ₹{popupData.amount}
        </button>

        <p className="mt-3 text-sm text-gray-500">OR</p>

        <button className="mt-1 text-green-600 underline font-medium hover:text-green-700">
          Choose a different amount
        </button>
      </div>
    </div>
  );
}
