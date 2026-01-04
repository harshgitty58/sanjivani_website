'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const JoinPage = () => {
  return (
    <section className="w-full h-screen bg-[#17142d] text-white overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center h-full px-4 md:px-1 py-6 md:py-0 relative">
        
        <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden">
          <Image
            src="/images/rahul1.png"
            alt="BJP Badge on Shirt"
            fill
            className="object-cover brightness-90"
            priority
          />
          <div className="absolute inset-0 bg-white from-[#17142d]/80 to-transparent" />
        </div>

    
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6 px-4 md:px-10 text-center md:text-left h-1/2 md:h-full flex flex-col justify-center z-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-orange-400 drop-shadow-md">
            Join The <span className="text-white"> Team</span>
          </h1>
          <p className="text-lg text-gray-300">Be the change you want to see.</p>

          {/* <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl font-bold"
          >
            JOIN <span className="text-orange-500 underline underline-offset-4">NGO</span>
          </motion.p> */}

          <p className="text-sm text-gray-400 max-w-xl leading-relaxed">
            BJP is devoutly committed to building a strong and developed India which is unimaginable without
            the trust and the unflinching support of the people of India. Join us and be part of the
            unprecedented transformation that is changing the lives of all sections of society for better.
            Together let's build <span className="text-orange-400 font-medium">‘Ek Bharat, Shreshtha Bharat’</span> and witness the rise of New India under the
            charismatic leadership of Adv. Rahul Torambe.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded shadow transition duration-300"
            >
              JOIN AS VOLUNTEER
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded shadow transition duration-300"
            >
              BECOME A MEMBER
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded shadow transition duration-300 animate-pulse"
            >
              MAKE A DONATION
            </motion.button>
          </div>
        </motion.div>

       
      </div>
    </section>
  );
};

