'use client';

import React from 'react';

const ContactSection = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat bg-fixed text-white flex items-center justify-center px-4 sm:px-6 md:px-10 py-4"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/images/placetovisit.jpg')",
      }}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-0 py-1 items-center">

        <div className="lg:col-span-3 pl-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s Discuss your
          </h1>
          
          <div className="inline-block bg-white px-3 sm:px-4 py-2 rounded-md">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-800">
              Weekend Outing Plan
            </span>
          </div>

          <p className="mt-6 text-base sm:text-lg text-white max-w-lg leading-relaxed">
            Our support team can help in Weekend Outing Planning.
          </p>

        </div>

        <form className="lg:col-span-2 bg-transparent rounded-lg p-1 sm:p-6 space-y-4 text-white font-semibold shadow-lg w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full placeholder-white border-2 border-white px-4 py-2 rounded outline-none focus:ring-2 focus:ring-purple-600 bg-transparent"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full placeholder-white border-2 border-white px-4 py-2 rounded outline-none focus:ring-2 focus:ring-purple-600 bg-transparent"
                required
              />
            </div>
          </div>

          <div>
            <textarea
              rows={4}
              placeholder="Tell us what's in your mind for outing"
              className="w-full placeholder-white border-2 border-white px-4 py-2 rounded outline-none focus:ring-2 focus:ring-purple-600 bg-transparent"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full text-white font-bold py-3 rounded-md transition-transform hover:scale-105"
              style={{
                background: 'linear-gradient(to right, #f97316, #ec4899)',
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
