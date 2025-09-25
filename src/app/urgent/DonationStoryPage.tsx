'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface StoryBlock {
  img?: string;
  text: string;
}

export default function DonationStoryPage() {
  const { id } = useParams();
  const [storyData, setStoryData] = useState<{ story: StoryBlock[]; donations: string[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  // Scroll detection for fixed donate bar
  const [showDonateBar, setShowDonateBar] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/stories/${id}`);
        if (!res.ok) throw new Error('Story not found');
        const data = await res.json();
        setStoryData(data);
      } catch (err) {
        console.error(err);
        setStoryData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < lastScrollY) {
        setShowDonateBar(true);
      } else {
        setShowDonateBar(false);
      }
      lastScrollY = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) return <div className="text-center py-10 text-gray-500">Loading story...</div>;
  if (!storyData) return <div className="text-center py-10 text-red-500">Story not found.</div>;

  const paginatedDonations = storyData.donations.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="relative pb-8 min-h-screen">
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
        
        <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-xl">
          <h2 className="text-xl font-semibold mb-4">Story</h2>
          <hr className="mb-4" />

          {storyData.story.map((block, i) => (
            <div key={i} className="mb-4">
              {block.img && (
                <Image
                  src={block.img}
                  alt={`Story Image ${i + 1}`}
                  width={300}
                  height={200}
                  className="rounded-md w-full object-cover mb-2"
                />
              )}
              <p className="text-sm text-gray-700">{block.text}</p>
            </div>
          ))}

          <button className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700">
            Read More
          </button>
        </div>

        
        <div className="space-y-6">
          
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="border-b px-4 py-3 flex justify-between items-center">
              <h3 className="text-base font-semibold">All Donations</h3>
              <span className="text-xl text-gray-400">▼</span>
            </div>

            <ul className="divide-y">
              {paginatedDonations.map((donation, i) => {
                const parts = donation.split('From');
                const name = parts[1]?.trim() || 'Anonymous';
                const initials = name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .toUpperCase();

                return (
                  <li key={i} className="flex items-center gap-4 px-4 py-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 border flex items-center justify-center font-medium text-gray-700">
                      {initials}
                    </div>
                    <div className="text-sm text-gray-800">{donation}</div>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 text-sm text-green-700 font-medium rounded-b-2xl">
              <button
                className="text-gray-500 disabled:opacity-30"
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage === 0}
              >
                &#x276E;
              </button>
              <div>
                {currentPage * itemsPerPage + 1} -{' '}
                {Math.min((currentPage + 1) * itemsPerPage, storyData.donations.length)} of{' '}
                {storyData.donations.length} donations
              </div>
              <button
                className="text-gray-700 disabled:opacity-30"
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={(currentPage + 1) * itemsPerPage >= storyData.donations.length}
              >
                &#x276F;
              </button>
            </div>
          </div>

          
          <div className="bg-white p-4 rounded shadow-md text-center space-y-2">
            <h3 className="text-sm font-bold mb-2">Fundraisers for this Cause</h3>
            <Image
              src="/images/hands.png"
              alt="Raise Fund"
              width={100}
              height={100}
              className="mx-auto"
            />
            <button className="w-full bg-green-600 text-white py-2 rounded font-semibold">
              RAISE FUNDS
            </button>
            <div className="flex justify-between gap-2">
              <button className="w-full bg-green-100 text-green-700 text-xs py-1 rounded font-semibold">
                REFER A PATIENT
              </button>
              <button className="w-full bg-red-100 text-red-700 text-xs py-1 rounded font-semibold">
                RAISE A CONCERN
              </button>
            </div>
          </div>
        </div>
      </div>

      
      {showDonateBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 z-50 shadow-lg px-4 py-4 flex items-center justify-center gap-6 text-center transition-all duration-300">
          <p className="text-base sm:text-lg font-semibold text-gray-800">
            Support <span className="text-black font-bold">Vasant Tukaram Jadhav</span>
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full text-sm sm:text-base shadow transition-all duration-200 text-center leading-tight">
            DONATE NOW
            <div className="text-[10px] sm:text-xs italic font-normal mt-1">
              (INDIAN TAX BENEFITS AVAILABLE)
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
