'use client';

import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaInstagram } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

export default function SocialMenu() {
  const [open, setOpen] = useState(false);

  const icons = [
    { icon: <FaFacebookF />, bg: '#1877F2', angle: -90 },
    { icon: <FaTwitter />, bg: '#1DA1F2', angle: -45 },
    { icon: <FaLinkedinIn />, bg: '#0077B5', angle: 0 },
    { icon: <FaPinterestP />, bg: '#E60023', angle: 45 },
    { icon: <FaInstagram />, bg: '#E4405F', angle: 90 },
  ];

  const radius = 90;

  return (
    <div className="fixed top-1/2 left-6 z-50">
      <div className="relative w-16 h-16">
        <button
          onClick={() => setOpen((s) => !s)}
          className="absolute bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition"
        >
          {open ? <HiX size={26} className="text-gray-700" /> : <HiMenu size={26} className="text-gray-700" />}
        </button>

        {icons.map((item, i) => {
          const x = radius * Math.cos((item.angle * Math.PI) / 180);
          const y = radius * Math.sin((item.angle * Math.PI) / 180);

          return (
            <a
              key={i}
              href="#"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 48,
                height: 48,
                transform: open
                  ? `translate(${x}px, ${y}px) scale(1)`
                  : `translate(0px, 0px) scale(0.01)`,
                transition: 'transform 0.5s ease, opacity 0.4s ease',
                opacity: open ? 1 : 0,
                pointerEvents: open ? 'auto' : 'none',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '9999px',
                  background: item.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  boxShadow: '0 6px 14px rgba(0,0,0,0.15)',
                }}
              >
                {item.icon}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
