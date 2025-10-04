// 'use client';

// import React from 'react';
// import Image from 'next/image';

// const cabData = [
//   { city: 'No Poverty', image: '/images/Popular/sdg1.png', destinations: ['Projects'] },
//   { city: 'Zero Hunger', image: '/images/Popular/sdg2.png', destinations: ['Projects'] },
//   { city: 'Good Health', image: '/images/Popular/sdg3.png', destinations: ['Projects'] },
//   { city: 'Quality Education', image: '/images/Popular/sdg4.png', destinations: ['Projects'] },
//   { city: 'Gender Equality', image: '/images/Popular/sdg5.png', destinations: ['Projects'] },
//   { city: 'Clean Water', image: '/images/Popular/sdg6.png', destinations: ['Projects'] },
//   { city: 'Clean Energy', image: '/images/Popular/sdg7.png', destinations: ['Projects'] },
//   { city: 'Work and Economic Growth', image: '/images/Popular/sdg8.png', destinations: ['Projects'] },
//   { city: 'Infrastruc', image: '/images/Popular/sdg9.png', destinations: ['Projects'] },
//   { city: 'Reduced Inequalities', image: '/images/Popular/sdg10.png', destinations: ['Projects'] },
//   { city: 'Sustainable Cities', image: '/images/Popular/sdg11.png', destinations: ['Projects'] },
//   { city: 'Consumption and Production', image: '/images/Popular/sdg12.png', destinations: ['Projects'] },
//   { city: 'Climate Action', image: '/images/Popular/sdg13.png', destinations: ['Projects'] },
//   { city: 'Life Below Water', image: '/images/Popular/sdg14.png', destinations: ['Projects'] },
//   { city: 'Life on Land', image: '/images/Popular/sdg15.png', destinations: ['Projects'] },
//   { city: 'Peace and Justice', image: '/images/Popular/sdg16.png', destinations: ['Projects'] },
//   { city: 'Partnerships', image: '/images/Popular/sdg17.png', destinations: ['Projects'] },
// ];

// function chunkArray(arr: any[], size: number) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// }

// export default function PopularAirportCabs() {
//   const groupedData = chunkArray(cabData, 2);

//   return (
//     <section className="bg-[#F4F2FA] py-5 px-4 md:px-16">
//       <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#1E0972] mb-10">
//         United Nations 17 Sustainable Development Goals
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {groupedData.map((pair, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between gap-8"
//           >
//             {pair.map(({ city, image, destinations }) => (
//               <div
//                 key={city}
//                 className="flex items-center gap-4 w-1/2"
//               >
//                 <Image
//                   src={image}
//                   alt={city}
//                   width={70}
//                   height={70}
//                   className="w-16 h-16 object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="text-base font-semibold text-gray-800">{city}</h3>
//                   <p className="text-sm text-gray-600">
//                     To:{' '}
//                     {destinations.map((d, i) => (
//                       <span
//                         key={i}
//                         className="text-blue-600 hover:underline cursor-pointer"
//                       >
//                         • {d}{' '}
//                       </span>
//                     ))}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

'use client';

import React from 'react';
import Image from 'next/image';
 
const cabData = [
    { city: 'No Poverty', image: '/images/Popular/sdg1.png', destinations: ['Project'] },
  { city: 'Zero Hunger', image: '/images/Popular/sdg2.png', destinations: ['Project'] },
  { city: 'Good Health', image: '/images/Popular/sdg3.png', destinations: ['Project'] },
  { city: 'Quality Education', image: '/images/Popular/sdg4.png', destinations: ['Project'] },
  { city: 'Gender Equality', image: '/images/Popular/sdg5.png', destinations: ['Project'] },
  { city: 'Clean Water', image: '/images/Popular/sdg6.png', destinations: ['Project'] },
  { city: 'Clean Energy', image: '/images/Popular/sdg7.png', destinations: ['Project'] },
  { city: 'Work and Economic Growth', image: '/images/Popular/sdg8.png', destinations: ['Project'] },
  { city: 'Infrastruc', image: '/images/Popular/sdg9.png', destinations: ['Project'] },
  { city: 'Reduced Inequalities', image: '/images/Popular/sdg10.png', destinations: ['Project'] },
  { city: 'Sustainable Cities', image: '/images/Popular/sdg11.png', destinations: ['Project'] },
  { city: 'Consump tion and Production', image: '/images/Popular/sdg12.png', destinations: ['Project'] },
  { city: 'Climate Action', image: '/images/Popular/sdg13.png', destinations: ['Project'] },
  { city: 'Life Below Water', image: '/images/Popular/sdg14.png', destinations: ['Project'] },
  { city: 'Life on Land', image: '/images/Popular/sdg15.png', destinations: ['Project'] },
  { city: 'Peace and Justice', image: '/images/Popular/sdg16.png', destinations: ['Project'] },
  { city: 'Partnerships', image: '/images/Popular/sdg17.png', destinations: ['Project'] },
];

export default function PopularAirportCabs() {
  return (
    <section className="bg-[#F4F2FA] py-5 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#1E0972] mb-10">
        We Provide Airport Pickup & Drop
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {cabData.map(({ city, image, destinations }) => (
          <div key={city} className="bg-white rounded-xl shadow-sm flex gap-4 items-center p-4">
            <Image
              src={image}
              alt={city}
              width={64}
              height={64}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <h3 className="text-base font-semibold text-gray-800">{city}</h3>
              <p className="text-sm text-gray-600">
                {' '}
                {destinations.map((d, i) => (
                  <span key={i} className="text-blue-600 hover:underline cursor-pointer">
                    • {d}{' '}
                  </span>
                ))}   
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
