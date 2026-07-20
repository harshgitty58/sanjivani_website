'use client';

import React, { useState } from 'react';

export default function OutingPlanner() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submit
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', mobile: '', message: '' });
    }, 3000);
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-900">
      {/* Background image container matching the reference style */}
      <div 
        className="absolute inset-0 bg-[url('/images/food1.jpg')] bg-cover bg-center opacity-40 pointer-events-none"
        style={{ filter: 'brightness(0.7) contrast(1.1)' }}
      />
      
      {/* Dark overlay to ensure contrast and accessibility */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      {/* Main Grid Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Side: Copywriting Content */}
        <div className="lg:col-span-6 text-white space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase drop-shadow-md">
              Let's Discuss your
            </h2>
            <div className="inline-block bg-white px-5 py-2.5 rounded-xl shadow-lg border border-purple-100">
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-700 uppercase tracking-wide">
                Weekend Outing Plan
              </span>
            </div>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-medium max-w-lg leading-relaxed drop-shadow-sm">
            Our support team can help in Weekend Outing Planning.
          </p>
        </div>

        {/* Right Side: Interactive Discussion Form */}
        <div className="lg:col-span-6 bg-black/30 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Input Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent border-2 border-white/60 rounded-xl px-4 py-3 text-white placeholder-white/80 focus:border-white focus:outline-none transition-colors duration-200 font-bold text-sm"
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  required
                  className="w-full bg-transparent border-2 border-white/60 rounded-xl px-4 py-3 text-white placeholder-white/80 focus:border-white focus:outline-none transition-colors duration-200 font-bold text-sm"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what's in your mind for outing"
                required
                rows={4}
                className="w-full bg-transparent border-2 border-white/60 rounded-xl px-4 py-3 text-white placeholder-white/80 focus:border-white focus:outline-none transition-colors duration-200 font-bold text-sm resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitted}
              className="w-full bg-gradient-to-r from-[#f97316] to-[#ec4899] hover:from-[#ea580c] hover:to-[#db2777] text-white font-extrabold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 tracking-wider uppercase text-sm"
            >
              {submitted ? 'Submitted Successfully' : 'Submit'}
            </button>
            
          </form>
        </div>

      </div>
    </section>
  );
}
