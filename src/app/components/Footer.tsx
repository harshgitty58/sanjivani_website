'use client';

import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[url(/images/Vehicle/footer.jpg)] bg-no-repeat bg-cover text-white font-bold py-14 px-6 md:px-20">
      <div className="bg-black opacity-70 p-10">

      
      <div className="z-100 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">

        <div>
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-white">Sanjivani</span>  
            
          </h2>
          <p className="text-sm mb-6">
            Sanjivani NGO.
          </p>
          <div className="flex gap-4">  
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-yellow-500-500" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-5 h-5 hover:text-yellow-500" />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube className="w-5 h-5 hover:text-yellow-500" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-yellow-500" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-500">Career</a></li>
            <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-yellow-500">Investor Corner</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500">Login/Register</a></li>
            <li><a href="#" className="hover:text-yellow-500">Vendor Registration</a></li>
            <li><a href="#" className="hover:text-yellow-500">Newsletter</a></li>
            <li><a href="#" className="hover:text-yellow-500">Offers</a></li>
            <li><a href="#" className="hover:text-yellow-500">Blogs</a></li>
            <li><a href="#" className="hover:text-yellow-500">FAQ’s</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500">Airport NGO Services</a></li>
            <li><a href="#" className="hover:text-yellow-500">Outstation NGO Services</a></li>
            <li><a href="#" className="hover:text-yellow-500">Hourly Rental</a></li>
            <li><a href="#" className="hover:text-yellow-500">Corporate Mobility</a></li>
            <li><a href="#" className="hover:text-yellow-500">Airport Counters</a></li>
            <li><a href="#" className="hover:text-yellow-500">FleetPro</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Get in touch</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-1" />
              <div>
                +91 8956253672,<br />
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-1" />
              <a href="mailto:connect@sanjivani.travel" className="hover:text-yellow-500">
                connect@sanjivani.ngo
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              <div>
                2rd Floor, Sulai Complex
                Hasapsar,Pune-411060<br />
                
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </footer>
  );
}
