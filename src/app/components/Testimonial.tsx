"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <div className="bg-[#f2f1f9] pt-2 pb-12 md:pt-2 md:pb-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-8">
          What people say about us
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-white shadow-md border border-gray-200 
          rounded-2xl p-4 sm:p-6 md:p-8 w-full sm:w-[90%] md:w-[80%] 
          flex flex-col sm:flex-row items-center justify-center 
          gap-4 sm:gap-8 group overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="relative w-32 h-40 sm:w-40 sm:h-56 rounded-xl overflow-hidden flex-shrink-0"
          >
            <Image
              src="/images/rahul1.png"
              alt="Rahul"
              fill
              className="object-cover rounded-xl"
            />
          </motion.div>

          <div className="relative text-center sm:text-left flex-1">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1.1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute top-0 left-2 sm:left-0 text-orange-400"
            >
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 opacity-70" />
            </motion.div>

            <div className="mt-8 sm:mt-0 sm:ml-10">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Rahul
              </h3>
              <p className="text-sm sm:text-base text-gray-700 italic mb-2 leading-snug">
                "Thanks for helping us. The support and service were beyond what I expected!"
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                — Volunteer from Maharashtra
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
