'use client';

import { useEffect, useState } from 'react';
import { FaRupeeSign, FaChevronRight } from 'react-icons/fa';

export default function Banner() {
  return (
    <div className="bg-yellow-100 text-[#3b2f0b] py-3 px-6 flex items-center justify-between">
      
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 animate-spin-slow mr-3">
        <FaRupeeSign className="text-orange-800" />
      </div>

      
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#3b2f0b] text-white ml-3 cursor-pointer">
        <FaChevronRight />
      </div>
    </div>
  );
}
