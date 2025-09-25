'use client';

import { FaUser } from 'react-icons/fa';

export default function CommentBox() {
  return (
    <div className="relative max-w-6xl mx-auto px-4 py-4">
      <div className="w-full sm:w-2/3 bg-white rounded-2xl shadow-md p-4 mt-6">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">
          Comment (0)
        </h2>

        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow-inner">
            <FaUser className="text-gray-600 text-lg" />
          </div>

        
          <input
            type="text"
            placeholder="Share your well wishes here"
            className="flex-1 bg-gray-100 text-gray-700 rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

        
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-full w-full sm:w-auto">
            POST
          </button>
        </div>
      </div>
    </div>
  );
}
