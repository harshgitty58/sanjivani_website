'use client';

import React from 'react';
import Image from 'next/image';
import { FiInfo } from "react-icons/fi";
import { BriefcaseMedical } from 'lucide-react';
import { FaFacebook, FaWhatsapp, FaGooglePay, FaPhone, FaMapMarkerAlt, FaShareAlt } from 'react-icons/fa';

interface Props {
  id: string;
  title: string;
  image: string;
  fund: string;
}

export default function DonationCampaign({ id, title, image, fund }: Props) {
  return (
    <div className=" relative max-w-6xl mx-auto p-4 min-h-screen">
      {/* SHARE BADGE */}
      <div className="fixed right-4 top-[40%] z-50 text-center">
        <div className="text-black text-sm font-semibold mb-1">11</div>
        <div className="w-10 h-10 rounded-full bg-[#1d2c5e] flex items-center justify-center shadow-md mx-auto">
          <FaShareAlt className="text-white" />
        </div>
        <div className="text-xs text-gray-800 mt-0">SHARES</div>
      </div>

      <h1 className="text-center text-2xl font-semibold mb-2">{title}</h1>

      <div className="flex justify-center mt-1">
  <div className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1 text-sm font-bold text-gray-900 shadow-sm">
    <div className="bg-cyan-400 p-1 rounded-full mr-2 flex items-center justify-center">
      <BriefcaseMedical className="w-4 h-4 text-white" />
    </div>
    MEDICAL
  </div>



<div className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1 text-sm font-bold text-gray-900 shadow-sm">
    <div className="bg-cyan-400 p-1 rounded-full mr-2 flex items-center justify-center">
      <BriefcaseMedical className="w-4 h-4 text-white" />
    </div>
    Verified Project
  </div>

  <div className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1 text-sm font-bold text-gray-900 shadow-sm">
    <div className="bg-cyan-400 p-1 rounded-full mr-2 flex items-center justify-center">
      <BriefcaseMedical className="w-4 h-4 text-white" />
    </div>
    Verified Beneficiary
  </div>



</div>



      <div className="grid md:grid-cols-2 gap-8 mt-6">
        {/* LEFT: Image and Tags */}
        <div className="space-y-4">
          <div className="bg-pink-100">
            <div className="flex justify-between items-center">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">TAX BENEFITS</span>
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">URGENT</span>
            </div>

            <div className="m-4 rounded-xl overflow-hidden shadow-xl max-w-md mx-auto">
              <Image
                src={image}
                alt={title}
                width={700}
                height={400}
                className="w-full object-cover"
              />
              <div className="bg-black text-white text-center py-2 font-semibold text-lg">
                {title}
              </div>
            </div>
          </div>

          {/* Campaigner + Beneficiary */}
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div className="bg-white rounded-2xl shadow-xl p-6 flex gap-4 items-start">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-gray-700 font-semibold text-sm">AV</div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="text-gray-800 font-semibold">Campaigner Details</h4>
                  {/* <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-green-600 font-medium">VERIFIED ✅</span> */}
                </div>
                <hr className="my-2" />
                <p className="text-gray-800 font-medium">Akshaykumar Vasant Jadhav</p>
                <p className="flex items-center text-gray-600 text-sm mt-1">
                  <FaMapMarkerAlt className="mr-1" /> Pune Maharashtra
                </p>
                <p className="flex items-center text-green-700 text-sm mt-1 cursor-pointer hover:underline">
                  📧 Contact
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 flex gap-4 items-start">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-gray-700 font-semibold text-sm">VT</div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="text-gray-800 font-semibold">Beneficiary Details</h4>
                  {/* <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full text-green-600 font-medium">VERIFIED ✅</span> */}
                </div>
                <hr className="my-2" />
                <p className="text-gray-800 text-sm">Vasant Tukaram Jadhav</p>
                <p className="text-gray-600 text-sm">Parent of Akshaykumar Vasant Jadhav</p>
                <p className="text-gray-600 text-sm">
                  Patient Hospitalised at <br />
                  <span className="font-semibold text-black">Ruby Hall Clinic - Sassoon Road, Pune</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Donation Info */}
        <div className="space-y-4">
          <div className="border rounded-2xl shadow-md bg-white px-6 py-6 text-center space-y-4">
            {/* Circular progress mimic */}
            <div className="relative w-24 h-24 mx-auto rounded-full bg-[#f5f5f5] flex items-center justify-center">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-green-500 rounded-full" />
              <div>
                <div className="text-2xl font-bold text-gray-800">7%</div>
                <div className="text-sm text-gray-500">funded in 45 days</div>
              </div>
            </div>

            <div className="text-gray-800 text-lg font-semibold">
              ₹ 1,00,989 <span className="font-normal">Raised</span>
              <div className="text-sm font-normal text-gray-500">of ₹ 15,00,000</div>
            </div>

            <div className="text-green-600 text-sm font-medium underline cursor-pointer">
              40 Donors
            </div>
          </div>

          <p className="text-center text-gray-600 text-[15px] font-[400] font-[cursive] flex items-center justify-center gap-1">
            Funds will be transferred for patient’s treatment
            <FiInfo className="text-teal-500 text-base" />
          </p>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-300">
            <div className="text-base">DONATE NOW</div>
            <div className="text-[11px] mt-1 font-normal tracking-wide">
              (INDIAN TAX BENEFITS AVAILABLE)
            </div>
          </button>

          <p className="text-center text-gray-600 text-[15px] font-[400] font-[cursive] flex items-center justify-center gap-1">
            Every social media share can bring ₹5,000
            <FiInfo className="text-teal-500 text-base" />
          </p>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-300 tracking-wide">
            SHARE ON FACEBOOK
          </button>

          <div className='p-4 bg-[rgba(61, 59, 59, 0.9)]'>
            <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6 text-gray-800">
              <h3 className="text-xl font-semibold border-b pb-3 text-center">
                Donate via Paytm / Google Pay / PhonePe
              </h3>

              <div className="flex justify-center items-center gap-5 text-2xl text-gray-600">
                <FaGooglePay />
                <FaWhatsapp />
                <FaPhone />
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-4 border-t">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/qr-code.png"
                    alt="QR Code"
                    width={140}
                    height={140}
                    className="rounded-md shadow-sm"
                  />
                </div>

                <div className="space-y-3 text-center md:text-left">
                  <div className="flex justify-center md:justify-start">
                    <Image src="/images/upi-logo.png" alt="UPI" width={60} height={30} />
                  </div>
                  <p className="text-base font-medium break-all">
                    supportpranati4@yesbankltd
                  </p>
                  <button
                    className="px-5 py-1.5 border border-green-600 text-green-700 font-semibold rounded-full text-sm hover:bg-green-50 transition"
                    onClick={() => navigator.clipboard.writeText("supportpranati4@yesbankltd")}
                  >
                    COPY
                  </button>
                </div>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed text-center pt-2">
                Donations made through this fundraiser and UPI ID will be securely deposited into
                <br className="hidden md:block" />
                Impact Guru’s bank account for the patient’s treatment.
                <br className="hidden md:block" />
                This UPI ID is not associated with any individual’s or family’s personal bank account.
              </p>
            </div>
          </div>

        </div>
      </div>

    
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl p-4">
        {/* Latest Update */}
        <div className="bg-white rounded-2xl shadow-xl p-6 flex-1">
          <h2 className="text-2xl font-semibold mb-4">Latest Update</h2>
          <p className="text-gray-800 mb-6">
            Dear Donors, This serves as an update on the utilization of funds. The funds collected through this campaign will be transferred to the family's personal account, covering the expenses they have cleared for the individual's treatment. If you have any concerns regarding this process, please don't hesitate to contact us. Your unwavering support for this fundraiser is truly appreciated!
          </p>
          <button className="border-2 border-teal-600 text-teal-600 px-6 py-2 rounded-full hover:bg-teal-50 transition">
            Read More
          </button>
        </div>

        {/* Top Influencers */}
        <div className="bg-white rounded-2xl shadow-md p-6 w-full md:w-96 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Top Influencers</h2>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-lg font-medium">IG</div>
              <div>
                <p className="text-gray-900 font-medium">1st Donor</p>
                <p className="text-gray-600">Impact Guru Donor</p>
                <p className="text-gray-800 font-semibold mt-1">₹ 4,000</p>
              </div>
            </div>
          </div>

          <button className="mt-6 bg-orange-500 text-white text-lg font-bold py-3 rounded-full hover:bg-orange-600 transition">
            DONATE NOW
            <div className="text-sm italic font-normal">
              (INDIAN TAX BENEFITS AVAILABLE)
            </div>
          </button>
        </div>
      </div>
    

    </div>
  );
}