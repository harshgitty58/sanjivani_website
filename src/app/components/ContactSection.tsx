'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Send } from 'lucide-react';

export default function VolunteerSignUp() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer signup:', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', phone: '', interest: '' });
  };

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: 'var(--color-bg-secondary)' }}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              <Users size={16} />
              Join Our Team
            </span>

            <h2
              className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-secondary)' }}
            >
              Become a{' '}
              <span className="text-gradient">Volunteer</span>
            </h2>

            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              Join a community of changemakers. Whether you can spare a few hours a week
              or want to commit full-time — there&apos;s a role for you. We&apos;ll match you with
              a program that fits your skills and passion.
            </p>

            <div className="space-y-4">
              {[
                { icon: '🩺', label: 'Healthcare & Emergency Response' },
                { icon: '📚', label: 'Education & Tutoring' },
                { icon: '🍲', label: 'Food Distribution Drives' },
                { icon: '🌱', label: 'Tree Plantation & Environment' },
                { icon: '🤝', label: 'Community Outreach & Events' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass p-8 rounded-2xl space-y-5 shadow-xl border border-white/40 backdrop-blur-md"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/20 border border-white/30 backdrop-blur-sm"
                >
                  <Heart size={18} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-secondary)' }}
                >
                  Volunteer Registration
                </h3>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none glass-input placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none glass-input placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none glass-input placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
                  Area of Interest
                </label>
                <select
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none glass-input text-[var(--color-text)]"
                >
                  <option value="" className="text-gray-900 bg-white">Select your interest</option>
                  <option value="healthcare" className="text-gray-900 bg-white">Healthcare & Emergency</option>
                  <option value="education" className="text-gray-900 bg-white">Education & Tutoring</option>
                  <option value="food" className="text-gray-900 bg-white">Food Distribution</option>
                  <option value="environment" className="text-gray-900 bg-white">Environment & Plantation</option>
                  <option value="community" className="text-gray-900 bg-white">Community Outreach</option>
                  <option value="other" className="text-gray-900 bg-white">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full gap-2"
                disabled={submitted}
              >
                {submitted ? (
                  '✓ Submitted!'
                ) : (
                  <>
                    <Send size={16} />
                    Join Our Mission
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
