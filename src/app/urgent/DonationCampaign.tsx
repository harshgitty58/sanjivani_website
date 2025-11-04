'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BriefcaseMedical } from 'lucide-react';
import { FaShareAlt } from 'react-icons/fa';

interface Props {
  id: string;
  title: string;
  image: string;
  fund: string;
}

export default function DonationCampaign({ id, title, image, fund }: Props) {
  const donations = [
    '₹ 70,000 From shubham',
    '₹ 20,000 From rutuja',
    '₹ 10,000 From ganesh',
    '₹ 3,000 From xyz',
    '₹ 2,000 From jay',
    '₹ 1,000 From sham',
    '₹ 500 From jau',
    '₹ 200 From lata',
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const paginatedDonations = donations.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const storyData = { donations };

  return (
    <div className="relative max-w-6xl mx-auto p-4 min-h-screen">

      <div className="fixed right-4 top-[80%] z-50 text-center hidden sm:block">
        <div className="text-black text-sm font-semibold mb-1">11</div>
        <div className="w-10 h-10 rounded-full bg-[#1d2c5e] flex items-center justify-center shadow-md mx-auto">
          <FaShareAlt className="text-white" />
        </div>
        <div className="text-xs text-gray-800 mt-0">SHARES</div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 text-center sm:text-left">
        <Link href="/" passHref>
          <Image
            src="/images/sanjivani-logo.png"
            alt="Logo"
            width={100}
            height={50}
            className="object-contain cursor-pointer mx-auto sm:mx-0"
          />
        </Link>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2 sm:mt-0 text-center md:text-center w-full">
  {title}
</h1>

      </div>

      <div className="flex justify-center mt-1">
        <div className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1 text-sm font-bold text-gray-900 shadow-sm">
          <div className="bg-cyan-400 p-1 rounded-full mr-2 flex items-center justify-center">
            <BriefcaseMedical className="w-4 h-4 text-white" />
          </div>
          MEDICAL
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-pink-100 rounded-lg overflow-hidden shadow-xl">
          <div className="flex justify-between items-center p-2 sm:p-3">
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">TAX BENEFITS</span>
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">URGENT</span>
          </div>

          <div className="relative w-full h-[250px] sm:h-[400px]">
            <Image src={image} alt={title} fill className="object-cover" />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-3 text-base sm:text-lg font-semibold">
              {title}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3 sm:space-y-0 sm:flex sm:flex-wrap sm:gap-4">
        <button className="w-full sm:w-[32%] bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300">
          DONATE NOW
        </button>

        <button className="w-full sm:w-[32%] bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300">
          SHARE ON FACEBOOK
        </button>

        <button className="w-full sm:w-[32%] bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300">
          SHARE ON WHATSAPP
        </button>
      </div>

      <div className="p-4 bg-[rgba(61,59,59,0.9)] mt-6 rounded-xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 text-gray-800">
          <h3 className="text-lg sm:text-xl font-semibold border-b pb-3 text-center">
            Donate via Paytm / Google Pay / PhonePe
          </h3>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-6">
            <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
              <div className="flex-shrink-0">
                <Image
                  src="/images/qr-code.jpeg"
                  alt="QR Code"
                  width={300}
                  height={300}
                  className="rounded-md shadow-sm"
                />
              </div>

              <div className="space-y-3 text-center md:text-left mt-4 pt-4 md:mt-0">
                <p className="text-base font-medium break-all">
                  shubhambhos6@yesbankltd
                </p>
                <button
                  className="px-5 py-1.5 border border-green-600 text-green-700 font-semibold rounded-full text-sm hover:bg-green-50 transition"
                  onClick={() => navigator.clipboard.writeText('supportpranati4@yesbankltd')}
                >
                  COPY
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full lg:w-1/2">
              <div className="border-b px-4 py-3 flex justify-between items-center">
                <h3 className="text-base font-semibold">All Donations</h3>
                <span className="text-xl text-gray-400">▼</span>
              </div>

              <ul className="divide-y">
                {paginatedDonations.map((donation, i) => {
                  const parts = donation.split('From');
                  const name = parts[1]?.trim() || 'Anonymous';
                  const initials = name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .toUpperCase();

                  return (
                    <li key={i} className="flex items-center gap-4 px-4 py-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 border flex items-center justify-center font-medium text-gray-700">
                        {initials}
                      </div>
                      <div className="text-sm text-gray-800">{donation}</div>
                    </li>
                  );
                })}
              </ul>

              <div className="flex items-center justify-between px-4 py-3 bg-gray-50 text-sm text-green-700 font-medium rounded-b-2xl">
                <button
                  className="text-gray-500 disabled:opacity-30"
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  disabled={currentPage === 0}
                >
                  &#x276E;
                </button>
                <div>
                  {currentPage * itemsPerPage + 1} -{' '}
                  {Math.min((currentPage + 1) * itemsPerPage, storyData.donations.length)} of{' '}
                  {storyData.donations.length} donations
                </div>
                <button
                  className="text-gray-700 disabled:opacity-30"
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  disabled={(currentPage + 1) * itemsPerPage >= storyData.donations.length}
                >
                  &#x276F;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl p-4 mt-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 flex-1">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Story</h2>
          <p className="text-gray-800 mb-6 text-sm sm:text-base">
            Dear Donors, This serves as an update on the utilization of funds. The funds collected through this campaign will be transferred to the family's personal account, covering the expenses they have cleared for the individual's treatment. If you have any concerns regarding this process, please don't hesitate to contact us. Your unwavering support for this fundraiser is truly appreciated!
          </p>
          <button className="border-2 border-teal-600 text-teal-600 px-6 py-2 rounded-full hover:bg-teal-50 transition text-sm sm:text-base">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}



// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { FiInfo } from "react-icons/fi";
// import { BriefcaseMedical } from 'lucide-react';
// import { FaFacebook, FaWhatsapp, FaGooglePay, FaPhone, FaMapMarkerAlt, FaShareAlt } from 'react-icons/fa';

// interface Props {
//   id: string;
//   title: string;
//   image: string;
//   fund: string;
// }

// export default function DonationCampaign({ id, title, image, fund }: Props) {
//   return (
//     <div className=" relative max-w-6xl mx-auto p-4 min-h-screen">
//       <div className="fixed right-4 top-[40%] z-50 text-center">
//         <div className="text-black text-sm font-semibold mb-1">11</div>
//         <div className="w-10 h-10 rounded-full bg-[#1d2c5e] flex items-center justify-center shadow-md mx-auto">
//           <FaShareAlt className="text-white" />
//         </div>
//         <div className="text-xs text-gray-800 mt-0">SHARES</div>
//       </div>

//       <h1 className="text-center text-2xl font-semibold mb-2">{title}</h1>

//       <div className="flex justify-center mt-1">
//   <div className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1 text-sm font-bold text-gray-900 shadow-sm">
//     <div className="bg-cyan-400 p-1 rounded-full mr-2 flex items-center justify-center">
//       <BriefcaseMedical className="w-4 h-4 text-white" />
//     </div>
//     MEDICAL
//   </div>





//   <div className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1 text-sm font-bold text-gray-900 shadow-sm">
//     <div className="bg-cyan-400 p-1 rounded-full mr-2 flex items-center justify-center">
//       <BriefcaseMedical className="w-4 h-4 text-white" />
//     </div>
//     Verified Beneficiary
//   </div>



// </div>



//       <div className="grid md:grid-cols-2 gap-8 mt-6">
//         <div className="space-y-4">
//           <div className="bg-pink-100">
//             <div className="flex justify-between items-center">
//               <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">TAX BENEFITS</span>
//               <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">URGENT</span>
//             </div>

//             <div className="m-4 rounded-xl overflow-hidden shadow-xl max-w-md mx-auto">
//               <Image
//                 src={image}
//                 alt={title}
//                 width={700}
//                 height={400}
//                 className="w-full object-cover"
//               />
//               <div className="bg-black text-white text-center py-2 font-semibold text-lg">
//                 {title}
//               </div>
//             </div>
//           </div>

         
//         </div>

//         {/* RIGHT: Donation Info */}
//         <div className="space-y-4">
//           <div className="border rounded-2xl shadow-md bg-white px-6 py-6 text-center space-y-4">
//             {/* Circular progress mimic */}
//             <div className="relative w-24 h-24 mx-auto rounded-full bg-[#f5f5f5] flex items-center justify-center">
//               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-green-500 rounded-full" />
//               <div>
//                 <div className="text-2xl font-bold text-gray-800">7%</div>
//                 <div className="text-sm text-gray-500">funded in 45 days</div>
//               </div>
//             </div>

//             <div className="text-gray-800 text-lg font-semibold">
//               ₹ 1,00,989 <span className="font-normal">Raised</span>
//               <div className="text-sm font-normal text-gray-500">of ₹ 15,00,000</div>
//             </div>

//             <div className="text-green-600 text-sm font-medium underline cursor-pointer">
//               40 Donors
//             </div>
//           </div>

//           <p className="text-center text-gray-600 text-[15px] font-[400] font-[cursive] flex items-center justify-center gap-1">
//             Funds will be transferred for patient’s treatment
//             <FiInfo className="text-teal-500 text-base" />
//           </p>

//           <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-300">
//             <div className="text-base">DONATE NOW</div>
//             <div className="text-[11px] mt-1 font-normal tracking-wide">
//               (INDIAN TAX BENEFITS AVAILABLE)
//             </div>
//           </button>

//           <p className="text-center text-gray-600 text-[15px] font-[400] font-[cursive] flex items-center justify-center gap-1">
//             Every social media share can bring ₹5,000
//             <FiInfo className="text-teal-500 text-base" />
//           </p>

//           <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition-all duration-300 tracking-wide">
//             SHARE ON FACEBOOK
//           </button>

//           <div className='p-4 bg-[rgba(61, 59, 59, 0.9)]'>
//             <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6 text-gray-800">
//               <h3 className="text-xl font-semibold border-b pb-3 text-center">
//                 Donate via Paytm / Google Pay / PhonePe
//               </h3>

//               <div className="flex justify-center items-center gap-5 text-2xl text-gray-600">
//                 <FaGooglePay />
//                 <FaWhatsapp />
//                 <FaPhone />
//               </div>

//               <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-4 border-t">
//                 <div className="flex-shrink-0">
//                   <Image
//                     src="/images/qr-code.png"
//                     alt="QR Code"
//                     width={140}
//                     height={140}
//                     className="rounded-md shadow-sm"
//                   />
//                 </div>

//                 <div className="space-y-3 text-center md:text-left">
//                   <div className="flex justify-center md:justify-start">
//                     <Image src="/images/upi-logo.png" alt="UPI" width={60} height={30} />
//                   </div>
//                   <p className="text-base font-medium break-all">
//                     supportpranati4@yesbankltd
//                   </p>
//                   <button
//                     className="px-5 py-1.5 border border-green-600 text-green-700 font-semibold rounded-full text-sm hover:bg-green-50 transition"
//                     onClick={() => navigator.clipboard.writeText("supportpranati4@yesbankltd")}
//                   >
//                     COPY
//                   </button>
//                 </div>
//               </div>

//               <p className="text-xs text-gray-500 leading-relaxed text-center pt-2">
//                 Donations made through this fundraiser and UPI ID will be securely deposited into
//                 <br className="hidden md:block" />
//                 Impact Guru’s bank account for the patient’s treatment.
//                 <br className="hidden md:block" />
//                 This UPI ID is not associated with any individual’s or family’s personal bank account.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>

    
//       <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl p-4">
//         <div className="bg-white rounded-2xl shadow-xl p-6 flex-1">
//           <h2 className="text-2xl font-semibold mb-4">Latest Update</h2>
//           <p className="text-gray-800 mb-6">
//             Dear Donors This serves as an update on the utilization of funds. The funds collected through this campaign will be transferred to the family's personal account, covering the expenses they have cleared for the individual's treatment. If you have any concerns regarding this process, please don't hesitate to contact us. Your unwavering support for this fundraiser is truly appreciated!
//           </p>
//           <button className="border-2 border-teal-600 text-teal-600 px-6 py-2 rounded-full hover:bg-teal-50 transition">
//             Read More
//           </button>
//         </div>

//         <div className="bg-white rounded-2xl shadow-md p-6 w-full md:w-96 flex flex-col justify-between">
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">Top Influencers</h2>
//             <div className="flex items-center gap-4">
//               <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-lg font-medium">IG</div>
//               <div>
//                 <p className="text-gray-900 font-medium">1st Donor</p>
//                 <p className="text-gray-600">Impact Guru Donor</p>
//                 <p className="text-gray-800 font-semibold mt-1">₹ 4,000</p>
//               </div>
//             </div>
//           </div>

//           <button className="mt-6 bg-orange-500 text-white text-lg font-bold py-3 rounded-full hover:bg-orange-600 transition">
//             DONATE NOW
//             <div className="text-sm italic font-normal">
//               (INDIAN TAX BENEFITS AVAILABLE)
//             </div>
//           </button>
//         </div>
//       </div>
    

//     </div>
//   );
// }