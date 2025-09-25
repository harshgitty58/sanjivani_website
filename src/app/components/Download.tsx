'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TbDeviceMobileDown } from "react-icons/tb";

export default function Download() {
  const [mobile, setMobile] = useState('');

  const handleSubmit = () => {
    if (mobile) {
      alert(`App link sent to: +91 ${mobile}`);
    } else {
      alert('Please enter your mobile number');
    }
  }; 

  return (
  <div className='bg-[#f2f1f9] pb-6 pt-6 '>
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg border p-6 sm:p-8 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-14 max-w-7xl w-[95%] mx-auto"
      >
      <div className="flex-1 w-full">
        <div className="flex items-center gap-3 mb-4">
          <TbDeviceMobileDown className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
          <h2 className="text-xl sm:text-3xl font-bold text-gray-800">
            Download App Now <span className="text-black">!</span>
          </h2>
        </div>

        <p className="text-gray-700 mb-6 text-sm sm:text-base md:text-lg">
          Use code <span className="font-semibold text-black">MUM07251</span> and get{' '}
          <span className="font-bold text-black">FLAT 10% OFF</span> on your travel booking
        </p>

        <div className="flex w-full max-w-md border rounded-lg overflow-hidden shadow-sm">
          <div className="flex items-center px-3 sm:px-4 bg-gray-100 border-r text-gray-700 font-medium text-sm sm:text-base">
            🇮🇳 +91
          </div>
          <input
            type="tel"
            placeholder="Enter Mobile number"
            className="flex-grow px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold transition-all"
          >
            GET APP LINK
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
          <Image src="/images/google-pay.png" alt="Google Play" width={140} height={44} className="w-36 sm:w-40" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
          <Image src="/images/app-store.png" alt="App Store" width={140} height={44} className="w-36 sm:w-40" />
        </motion.div>
      </div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="border rounded-xl overflow-hidden"
      >
        <Image src="/images/qr-code.jpeg" alt="QR Code" width={100} height={100} className="w-24 sm:w-28 md:w-32" />
      </motion.div>
    </motion.section>
  </div>
  );
}
