'use client';

import React from 'react';

const ContactSection = () => {
  return (
    <section
      className=" bg-cover bg-center bg-no-repeat bg-fixed text-white flex items-center justify-center px-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/images/placetovisit.jpg')",
      }}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-5 items-center">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Let&apos;s Discuss your</h1>
          <div className="inline-block bg-white px-4 py-2 rounded-md">
            <span className="text-4xl lg:text-5xl font-bold text-purple-800">
              Social Work Plan 
            </span>
          </div>
          <p className="mt-6 text-lg text-white max-w-md">
            Our NGO support team is available to engage you in current projects.
          </p>
        </div>

        <form className="bg-transparent rounded-lg p-3 space-y-4 text-white font-semibold shadow-lg w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full placeholder-white border-2 border-white px-4 py-2 rounded outline-white focus:ring-2 focus:ring-purple-600"
                required
              />
              <p className="text-red-500 text-sm mt-1">required</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Location"
                className="w-full placeholder-white border-2 border-white px-4 py-2 rounded outline-white focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full placeholder-white border-2 border-white px-4 py-2 rounded outline-white focus:ring-2 focus:ring-purple-600"
                required
              />
              <p className="text-red-500 text-sm mt-1">required</p>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full placeholder-white border-2 border-white px-4 py-2 rounded outline-white focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>
          <div>
            <textarea
              rows={4}
              placeholder="Tell us what is your way of doing social work"
              className="w-full placeholder-white border-2 border-white px-4 py-2 rounded outline-white focus:ring-2 focus:ring-purple-600"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full text-white font-bold py-2 rounded"
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
