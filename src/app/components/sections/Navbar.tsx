"use client"

import React from 'react'
import IconSection from './IconSection'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  
  const router = useRouter();

  const redirectToLogin = () => {
    router.push('/login');
  }

  const redirectToHome = () => {
    router.push('/');
  }
  
  return (
    <nav className='fixed top-0 left-0 right-0 mbl z-50 mb-20 bg-white shadow-custom px-3'>
      <div className='flex items-center gap-3 justify-between max-w-screen-xl mx-auto px-2 sm:px-6 py-0 sm:py-1 text-sm'>
        
        <div className="flex-shrink-0 cursor-pointer" onClick={redirectToHome}>
          <Image 
            src={"/images/sanjivani-logo.png"} 
            alt='sanjivani-logo' 
            width={90} 
            height={70} 
            className="object-contain" 
          />
        </div>

        <div className="flex flex-1">
          <IconSection/>
        </div>

        <div onClick={redirectToLogin} className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-blue-800 text-white font-semibold py-2 px-4 rounded-md cursor-pointer">
          <div className="flex items-center justify-center w-3 h-3 rounded-full bg-green-200">
            <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
          </div>
          <div className="text-black text-xs font-medium">
            <p className='text-white'>Login</p>
          </div>
        </div>

      </div>
    </nav>
  )
}
