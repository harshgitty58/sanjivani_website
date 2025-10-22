'use client';

import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[url(/images/Vehicle/footer.jpg)] bg-no-repeat bg-cover text-white font-bold py-5 px-6 md:px-20">
      <div className="bg-black opacity-40 pt-5 pr-1 pb-2 pl-7">


      
      <div className="z-100 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">

        <div>
          <h2 className="text-5x4 font-bold mb-2">
            <span className="text-white">Sanjivani</span>  
            
          </h2>
          <p className="text-sm mb-2">
            Sanjivani NGO. 
            We help in medical,
            We help feeding hungry,
            We help in legal,
            We help farmers,
            We help in education,
            We do Tree Plantation,
            We help in blood donation,
            We help in women empowerment,
            We help saving children,
            We conduct social events, 
           </p>
          
          <div className="flex gap-8 pl-50">  
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

         

           <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-1" />
              <a href="mailto:connect@sanjivani.travel" className="hover:text-yellow-500">
                connect@sanjivani.ngo
              </a>
            </li>

            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-1" />
              <div>
                8956253672
              </div>
            </li>

            
             <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              <div>
                Hadapsar,Pune
                
              </div>
            </li>
      
          </div>
        </div>

        {/* <div>
          <h2 className="text-2xl font-bold mb-2">
            <br></br>
            
          </h2>
          <p className="text-sm mb-2">
            hourly rental, corporate transport solution, flight booking, hotels, holiday packages, 
            trains, buses, and car rentals.
          </p>
        </div> */}

        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-500">IPR Compliance</a></li>
            <li><a href="#" className="hover:text-yellow-500">GDPR Compliance</a></li>
            <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-yellow-500">Refund Policy</a></li>
            
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500">Login/Register</a></li>
            <li><a href="#" className="hover:text-yellow-500">Vendor Registration</a></li>
            <li><a href="#" className="hover:text-yellow-500">Corporate Registration</a></li>
            <li><a href="#" className="hover:text-yellow-500">Anti-Spam Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500">Abuse Policy</a></li>
            
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500">Photo Gallery</a></li>
            <li><a href="#" className="hover:text-yellow-500">Video Gallery</a></li>
            <li><a href="#" className="hover:text-yellow-500">NEWS</a></li>
            <li><a href="#" className="hover:text-yellow-500">Internship</a></li>
            <li><a href="#" className="hover:text-yellow-500 whitespace-nowrap">CSR Opportunity</a></li>
            <li><a href="#" className="hover:text-yellow-500">Share NGO Banner</a></li>
          
          </ul>
        </div>

         <div>
          <br></br> <br></br>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500">Donate in Honour of</a></li>
            <li><a href="#" className="hover:text-yellow-500">Donate in Memory of</a></li>
             <li><a href="#" className="hover:text-yellow-500">Donate on Occasion of</a></li>
            <li><a href="#" className="hover:text-yellow-500 whitespace-nowrap">Volunteer Publication</a></li>
            <li><a href="#" className="hover:text-yellow-500">FAQ’s</a></li>
          
          </ul>
        </div>
      </div>
      </div>
    </footer>
  );
}
