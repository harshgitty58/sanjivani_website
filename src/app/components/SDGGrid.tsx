'use client';

import Image from 'next/image';
import React from 'react';

const goals = [
  { id: 18, title: 'SDG Goals', color: 'bg-[#19486a]', image: '/images/Popular/sdg18.jpg' },
  { id: 1, title: 'No Poverty', color: 'bg-[#e5243b]', image: '/images/Popular/sdg1.jpg' },
  { id: 2, title: 'Zero Hunger', color: 'bg-[#dda63a]', image: '/images/Popular/sdg2.jpg' },
  { id: 3, title: 'Good Health and Well-being', color: 'bg-[#4c9f38]', image: '/images/Popular/sdg3.jpg' },
  { id: 4, title: 'Quality Education', color: 'bg-[#c5192d]', image: '/images/Popular/sdg4.jpg' },
  { id: 5, title: 'Gender Equality', color: 'bg-[#ff3a21]', image: '/images/Popular/sdg5.jpg' },
  { id: 6, title: 'Clean Water and Sanitation', color: 'bg-[#26bde2]', image: '/images/Popular/sdg6.jpg' },
  { id: 7, title: 'Affordable and Clean Energy', color: 'bg-[#fcc30b]', image: '/images/Popular/sdg7.jpg' },
  { id: 8, title: 'Decent Work and Economic Growth', color: 'bg-[#a21942]', image: '/images/Popular/sdg8.jpg' },
  { id: 9, title: 'Industry, Innovation and Infrastructure', color: 'bg-[#fd6925]', image: '/images/Popular/sdg9.jpg' },
  { id: 10, title: 'Reduced Inequality', color: 'bg-[#dd1367]', image: '/images/Popular/sdg10.jpg' },
  { id: 11, title: 'Sustainable Cities and Communities', color: 'bg-[#fd9d24]', image: '/images/Popular/sdg11.jpg' },
  { id: 12, title: 'Responsible Consumption and Production', color: 'bg-[#bf8b2e]', image: '/images/Popular/sdg12.jpg' },
  { id: 13, title: 'Climate Action', color: 'bg-[#3f7e44]', image: '/images/Popular/sdg13.jpg' },
  { id: 14, title: 'Life Below Water', color: 'bg-[#0a97d9]', image: '/images/Popular/sdg14.jpg' },
  { id: 15, title: 'Life on Land', color: 'bg-[#56c02b]', image: '/images/Popular/sdg15.jpg' },
  { id: 16, title: 'Peace, Justice and Strong Institutions', color: 'bg-[#00689d]', image: '/images/Popular/sdg16.jpg' },
  { id: 17, title: 'Partnerships for the Goals', color: 'bg-[#19486a]', image: '/images/Popular/sdg17.jpg' },
  // { id: 18, title: 'SDG Goals', color: 'bg-[#19486a]', image: '/images/Popular/sdg18.jpg' },
];

export default function SDGGrid() {
  return (
    <div className="bg-[#f2f1f9] py-0 px-0 md:px-0">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 pt-1 pb-1">
        {goals.map((goal) => (
          <div 
            key={goal.id}
            className="relative overflow-hidden h-60 w-full"
          >
            <Image
              src={goal.image}
              alt={goal.title}
              fill
              className="object-cover"
            />
          </div>
        ))}

        {/* <div className="object-cover">
          <Image
            src="/images/Popular/sdg18.png"
            alt="Read More Sustainable Development Goals"
            width={200}
            height={200}
          />
        </div> */}
      </div>
    </div>
  );
}



// 'use client';

// import Image from 'next/image';
// import React from 'react';

// const goals = [
//   { id: 1, title: 'No Poverty', color: 'bg-[#e5243b]', image: '/images/Popular/sdg1.jpg' },
//   { id: 2, title: 'Zero Hunger', color: 'bg-[#dda63a]', image: '/images/Popular/sdg2.jpg' },
//   { id: 3, title: 'Good Health and Well-being', color: 'bg-[#4c9f38]', image: '/images/Popular/sdg3.jpg' },
//   { id: 4, title: 'Quality Education', color: 'bg-[#c5192d]', image: '/images/Popular/sdg4.jpg' },
//   { id: 5, title: 'Gender Equality', color: 'bg-[#ff3a21]', image: '/images/Popular/sdg5.jpg' },
//   { id: 6, title: 'Clean Water and Sanitation', color: 'bg-[#26bde2]', image: '/images/Popular/sdg6.png' },
//   { id: 7, title: 'Affordable and Clean Energy', color: 'bg-[#fcc30b]', image: '/images/Popular/sdg7.png' },
//   { id: 8, title: 'Decent Work and Economic Growth', color: 'bg-[#a21942]', image: '/images/Popular/sdg8.png' },
//   { id: 9, title: 'Industry, Innovation and Infrastructure', color: 'bg-[#fd6925]', image: '/images/Popular/sdg9.png' },
//   { id: 10, title: 'Reduced Inequality', color: 'bg-[#dd1367]', image: '/images/Popular/sdg10.png' },
//   { id: 11, title: 'Sustainable Cities and Communities', color: 'bg-[#fd9d24]', image: '/images/Popular/sdg11.png' },
//   { id: 12, title: 'Responsible Consumption and Production', color: 'bg-[#bf8b2e]', image: '/images/Popular/sdg12.png' },
//   { id: 13, title: 'Climate Action', color: 'bg-[#3f7e44]', image: '/images/Popular/sdg13.png' },
//   { id: 14, title: 'Life Below Water', color: 'bg-[#0a97d9]', image: '/images/Popular/sdg14.png' },
//   { id: 15, title: 'Life on Land', color: 'bg-[#56c02b]', image: '/images/Popular/sdg15.png' },
//   { id: 16, title: 'Peace, Justice and Strong Institutions', color: 'bg-[#00689d]', image: '/images/Popular/sdg16.png' },
//   { id: 17, title: 'Partnerships for the Goals', color: 'bg-[#19486a]', image: '/images/Popular/sdg17.png' },
// ];

// export default function SDGGrid() {
//   return (
//     <div className="bg-[#f2f1f9] py-6 px-3 md:px-6">
//       {/* <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-12">
//         United Nations 17 Sustainable Development Goals
//       </h2> */}

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0">
//         {goals.map((goal) => (
//           <div
//             key={goal.id}
//             className="relative overflow-hidden rounded-lg group cursor-pointer h-60"
//           >
//             <Image
//               src={goal.image}
//               alt={goal.title}
//               fill
//               className="object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div
//               className={`${goal.color} absolute inset-0 opacity-0 group-hover:opacity-90 flex flex-col justify-center items-center text-white text-center p-2 transition-all duration-500`}
//             >
//               <p className="text-3xl font-bold">Goal {goal.id}</p>
//               <p className="text-sm mt-1 font-medium">{goal.title}</p>
//             </div>
//           </div>
//         ))}
//               <div className="flex justify-center mt-10">
//         <Image
//           src="/images/Popular/sdg.png"
//           alt="Read More Sustainable Development Goals"
//           width={200}
//           height={200}
//         />
//       </div>
//       </div>
//     </div>
//   );
// }
