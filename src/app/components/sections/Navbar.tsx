"use client"

import React, { useState } from 'react'
import IconSection from './IconSection'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { X } from 'lucide-react'

export default function Navbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedState = searchParams ? searchParams.get('state') : null;
  const [menuOpen, setMenuOpen] = useState(false);

  const redirectToLogin = () => router.push('/login');
  const redirectToHome  = () => { router.push('/'); setMenuOpen(false); };

  /* Nav items data — mirrors IconSection for the mobile drawer */
  const navItems = [
    { title: 'Home' },
    { title: 'District' },
    { title: 'Air' },
    { title: 'Water' },
    { title: 'Food' },
    { title: 'Cloths' },
    { title: 'Shelter' },
    { title: 'Solar' },
    { title: 'Education' },
    { title: 'Work' },
    { title: 'Medical' },
    { title: 'Legal' },
    { title: 'Voting' },
  ];

  return (
    <>
      {/* ── Main Navbar bar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between gap-3 max-w-screen-xl mx-auto px-3 sm:px-6 py-0 sm:py-1">

          {/* Logo & Selected State */}
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 cursor-pointer" onClick={redirectToHome}>
              <Image
                src="/images/sanjivani-logo.png"
                alt="sanjivani-logo"
                width={90}
                height={70}
                className="object-contain"
              />
            </div>
            {selectedState && (
              <div className="flex items-center pl-2 border-l-2 border-slate-300 h-8">
                <span className="text-slate-800 font-extrabold text-xs sm:text-sm tracking-wide uppercase select-none whitespace-nowrap">
                  {selectedState}
                </span>
              </div>
            )}
          </div>

          {/* Desktop nav (hidden on mobile) */}
          <div className="hidden sm:flex flex-1">
            <IconSection />
          </div>

          {/* Right side: hamburger on mobile | login always */}
          <div className="flex items-center gap-3">
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(true)}
              className="sm:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-lg hover:bg-slate-100 transition"
              aria-label="Open menu"
            >
              <span className="block w-6 h-[2.5px] bg-slate-700 rounded-full" />
              <span className="block w-6 h-[2.5px] bg-slate-700 rounded-full" />
              <span className="block w-6 h-[2.5px] bg-slate-700 rounded-full" />
            </button>

            {/* Login button */}
            <div
              onClick={redirectToLogin}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-blue-800 text-white font-semibold py-2 px-4 rounded-md cursor-pointer"
            >
              <div className="flex items-center justify-center w-3 h-3 rounded-full bg-green-200">
                <div className="w-1.5 h-1.5 rounded-full bg-green-300" />
              </div>
              <p className="text-white text-xs font-medium">Login</p>
            </div>
          </div>

        </div>
      </nav>

      {/* ── Mobile drawer backdrop ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm sm:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ── Mobile slide-in drawer ── */}
      <div
        className={`fixed top-0 left-0 h-full w-[72vw] max-w-xs z-[70] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out sm:hidden ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <Image
            src="/images/sanjivani-logo.png"
            alt="sanjivani-logo"
            width={80}
            height={55}
            className="object-contain cursor-pointer"
            onClick={redirectToHome}
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav list */}
        <nav className="flex-1 overflow-y-auto py-3 px-2">
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center gap-3 px-4 py-3.5 rounded-xl text-left text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500 text-xs font-bold">
                {item.title[0]}
              </span>
              {item.title}
            </button>
          ))}
        </nav>

        {/* Drawer footer: Login */}
        <div className="px-4 pb-6 pt-3 border-t border-slate-100">
          <button
            onClick={() => { setMenuOpen(false); redirectToLogin(); }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-400 to-blue-800 text-white font-semibold text-sm"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
