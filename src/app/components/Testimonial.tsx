"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonial() {                                        
  return (                                                     
  <div className="bg-[#f2f1f9]">  
    <div className="py-1 px-1 flex flex-col justify-center pb-6 pt-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-12">
        WHAT PEOPLE SAY ABOUT US
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="relative bg-white bg-opacity-90 backdrop-blur-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] border border-gray-200 rounded-3xl p-8 max-w-5xl mx-auto flex flex-col sm:flex-row items-center group overflow-hidden"
      >
        <div className="absolute inset-0 rounded-3xl z-[-1] bg-white from-orange-300 via-yellow-400 to-orange-500 opacity-20 blur-lg" />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="relative w-60 h-80 rounded-2xl overflow-hidden mb-6 sm:mb-0 sm:mr-8 group-hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/images/rahul1.png"
            alt="Rahul"
            fill
            className="object-cover w-full h-full rounded-2xl border-4 border-transparent group-hover:border-orange-400 transition-all duration-300"
          />
        </motion.div>

        <div className="relative text-left">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1.2 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="absolute top-0 left-0 text-orange-400"
          >
            <Quote className="w-10 h-10 opacity-70" />
          </motion.div>
          <div className="ml-12">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Rahul</h3>
            <p className="text-lg text-gray-700 italic mb-2 leading-relaxed">
              "Thanks for helping us. The support and service were beyond what I expected!"
            </p>
            <p className="text-sm text-gray-500">— Volunteer from Maharashtra</p>
          </div>
        </div>
      </motion.div>
    </div>
   </div> 
  );
}
