'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const timelineData = [
  {
    year: '2007',
    title: 'OUR JOURNEY',
    subtitle: 'We Started NGO',
    description:
      'On 21 October 2011, Sanjivani NGO was formed in Pune with Rahul Chavan as its first President.',
    image: '/images/rahul1.png',
    person: 'Adv. Rahul Chavan',
    designation: 'Founder of Sanjivani NGO',
  },
  {
    year: '2008',
    title: 'OUR JOURNEY',
    subtitle: 'We Started NGO',
    description:
      'On 21 October 2011, Sanjivani NGO is formed in Pune with Rahul Chavan as its first President.',
    image: '/images/rahul1.png',
    person: 'Adv. Rahul Chavan',
    designation: 'Founder of Sanjivani NGO',
  },
  {
    year: '2009',
    title: 'OUR JOURNEY',
    subtitle: 'We Started NGO',
    description:
      'On 21 October 2011, Sanjivani NGO is formed in Pune with Rahul Chavan as its first President.',
    image: '/images/rahul1.png',
    person: 'Adv. Rahul Chavan',
    designation: 'Founder of Sanjivani NGO',
  },
  {
    year: '2010',
    title: 'OUR JOURNEY',
    subtitle: 'We Started NGO',
    description:
      'On 21 October 2011, Sanjivani NGO is formed in Pune with Rahul Chavan as its first President.',
    image: '/images/rahul1.png',
    person: 'Adv. Rahul Chavan',
    designation: 'Founder of Sanjivani NGO',
  },
  {
    year: '2011',
    title: 'OUR JOURNEY',
    subtitle: 'We Started NGO',
    description:
      'On 21 October 2011, Sanjivani NGO is formed in Pune with Rahul Chavan as its first President.',
    image: '/images/rahul1.png',
    person: 'Adv. Rahul Chavan',
    designation: 'Founder of Sanjivani NGO',
  },
  {
    year: '2012',
    title: 'OUR JOURNEY',
    subtitle: 'Foundation Expansion',
    description:
      'Throughout the early 1960s, the Sanjivani NGO continued to expand its influence across northern India, establishing new units and connecting with grassroots workers.',
    image: '/images/rahul1.png',
    person: 'Sanjivani NGO Workers',
    designation: 'Grassroots Organizers and Leaders',
  },
  {
    year: '2013',
    title: 'OUR JOURNEY',
    subtitle: 'First Electoral Success',
    description:
      'In 1967, the Sanjivani NGO achieved significant electoral victories by forming governments in coalition in several Indian states, marking a turning point in national politics.',
    image: '/images/rahul1.png',
    person: 'Party Leadership',
    designation: 'Leaders of the 1967 Coalition',
  },
  {
    year: '2014',
    title: 'OUR JOURNEY',
    subtitle: 'Birth of Sanjivani NGO',
    description:
      'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
    image: '/images/rahul1.png',
    person: 'Adv. Rahul Chavan',
    designation: 'Founder of the Sanjivani NGO',
  },
  {
    year: '2015',
    title: 'OUR JOURNEY',
    subtitle: 'Birth of Sanjivani NGO',
    description:
      'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
    image: '/images/rahul1.png',
    person: 'Adv. Rahul Chavan',
    designation: 'Founder of the Sanjivani NGO',
  },
  {
    year: '2016',
    title: 'OUR JOURNEY',
    subtitle: 'Birth of Sanjivani NGO',
    description:
      'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
    image: '/images/rahul1.png',
    person: 'Adv. Rahul Chavan',
    designation: 'Founder of the Sanjivani NGO',
  },
  {
    year: '2017',
    title: 'OUR JOURNEY',
    subtitle: 'Birth of Sanjivani NGO',
    description:
      'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
    image: '/images/rahul1.png',
    person: 'Adv. Rahul Chavan',
    designation: 'Founder of the Sanjivani NGO',
  },
  {
    year: '2018',
    title: 'OUR JOURNEY',
    subtitle: 'Birth of Sanjivani NGO',
    description:
      'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
    image: '/images/rahul1.png',
    person: 'Adv. Rahul Chavan',
    designation: 'Founder of the Sanjivani NGO',
  },
  {
    year: '2019',
    title: 'OUR JOURNEY',
    subtitle: 'Birth of Sanjivani NGO',
    description:
      'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
    image: '/images/rahul1.png',
    person: 'Adv. Rahul Chavan',
    designation: 'Founder of the Sanjivani NGO',
  },
  {
    year: '2020',
    title: 'OUR JOURNEY',
    subtitle: 'Birth of Sanjivani NGO',
    description:
      'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
    image: '/images/rahul1.png',
    person: 'Adv. Rahul Chavan',
    designation: 'Founder of the Sanjivani NGO',
  },
  {
    year: '2021',
    title: 'OUR JOURNEY',
    subtitle: 'Birth of Sanjivani NGO',
    description:
      'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
    image: '/images/rahul1.png',
    person: 'Adv. Rahul Chavan',
    designation: 'Founder of the Sanjivani NGO',
  },
  {
    year: '2022',
    title: 'OUR JOURNEY',
    subtitle: 'Birth of Sanjivani NGO',
    description:
      'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
    image: '/images/rahul1.png',
    person: 'Adv. Rahul Chavan',
    designation: 'Founder of the Sanjivani NGO',
  },
  {
    year: '2023',
    title: 'OUR JOURNEY',
    subtitle: 'Birth of Sanjivani NGO',
    description:
      'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
    image: '/images/rahul1.png',
    person: 'Adv. Rahul Chavan',
    designation: 'Founder of the Sanjivani NGO',
  },

  // ... rest of your data
];

export default function OurJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = timelineData[activeIndex];

  const goPrev = () =>
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : timelineData.length - 1));
  const goNext = () =>
    setActiveIndex((prev) => (prev < timelineData.length - 1 ? prev + 1 : 0));

  return (
    <section className="relative w-full min-h-screen bg-[#f2f1f9] text-black font-sans overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('/images/bg1.jpg')] bg-cover bg-center" />

    
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-10 sm:py-14 md:py-20 gap-10 md:gap-16">
    
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 max-w-2xl space-y-4 sm:space-y-6 text-center md:text-left"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              {current.title}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-3xl text-orange-600 font-semibold">
              {current.year} – {current.subtitle}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              {current.description}
            </p>
          </motion.div>
        </AnimatePresence>

      
        <AnimatePresence mode="wait">
          <motion.div
            key={`img-${activeIndex}`}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -50 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex flex-col items-center text-center"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white w-full max-w-sm sm:max-w-md md:max-w-lg">
              <Image
                src={current.image}
                alt={current.person}
                width={500}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
              {current.person}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">{current.designation}</p>
          </motion.div>
        </AnimatePresence>
      </div>

    
      <div className="absolute bottom-0 w-full flex flex-col items-center pb-6 sm:pb-8 md:pb-10 z-20">
      
        <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
          <button
            onClick={goPrev}
            aria-label="Previous timeline event"
            className="p-2 sm:p-3 rounded-full bg-gray-200 hover:bg-orange-500 hover:text-white transition shadow-md"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            aria-label="Next timeline event"
            className="p-2 sm:p-3 rounded-full bg-gray-200 hover:bg-orange-500 hover:text-white transition shadow-md"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      
        <div className="flex gap-2 overflow-x-auto px-3 sm:px-4 max-w-[95%] scrollbar-hide">
          {timelineData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              title={item.subtitle}
              className={`px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full border font-medium transition whitespace-nowrap ${
                index === activeIndex
                  ? 'bg-orange-500 text-white border-orange-500 shadow-md'
                  : 'bg-white text-gray-600 hover:bg-orange-100 border-gray-300'
              }`}
            >
              {item.year}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}



// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const timelineData = [
//   {
//     year: '2007',
//     title: 'OUR JOURNEY',
//     subtitle: 'We Started NGO',
//     description:
//       'On 21 October 2011, Sanjivani NGO was formed in Pune with Rahul Chavan as its first President.',
//     image: '/images/rahul1.png',
//     person: 'Adv. Rahul Chavan',
//     designation: 'Founder of Sanjivani NGO',
//   },
//   {
//     year: '2008',
//     title: 'OUR JOURNEY',
//     subtitle: 'We Started NGO',
//     description:
//       'On 21 October 2011, Sanjivani NGO is formed in Pune with Rahul Chavan as its first President.',
//     image: '/images/rahul1.png',
//     person: 'Adv. Rahul Chavan',
//     designation: 'Founder of Sanjivani NGO',
//   },
//   {
//     year: '2009',
//     title: 'OUR JOURNEY',
//     subtitle: 'We Started NGO',
//     description:
//       'On 21 October 2011, Sanjivani NGO is formed in Pune with Rahul Chavan as its first President.',
//     image: '/images/rahul1.png',
//     person: 'Adv. Rahul Chavan',
//     designation: 'Founder of Sanjivani NGO',
//   },
//   {
//     year: '2010',
//     title: 'OUR JOURNEY',
//     subtitle: 'We Started NGO',
//     description:
//       'On 21 October 2011, Sanjivani NGO is formed in Pune with Rahul Chavan as its first President.',
//     image: '/images/rahul1.png',
//     person: 'Adv. Rahul Chavan',
//     designation: 'Founder of Sanjivani NGO',
//   },
//   {
//     year: '2011',
//     title: 'OUR JOURNEY',
//     subtitle: 'We Started NGO',
//     description:
//       'On 21 October 2011, Sanjivani NGO is formed in Pune with Rahul Chavan as its first President.',
//     image: '/images/rahul1.png',
//     person: 'Adv. Rahul Chavan',
//     designation: 'Founder of Sanjivani NGO',
//   },
//   {
//     year: '2012',
//     title: 'OUR JOURNEY',
//     subtitle: 'Foundation Expansion',
//     description:
//       'Throughout the early 1960s, the Sanjivani NGO continued to expand its influence across northern India, establishing new units and connecting with grassroots workers.',
//     image: '/images/rahul1.png',
//     person: 'Sanjivani NGO Workers',
//     designation: 'Grassroots Organizers and Leaders',
//   },
//   {
//     year: '2013',
//     title: 'OUR JOURNEY',
//     subtitle: 'First Electoral Success',
//     description:
//       'In 1967, the Sanjivani NGO achieved significant electoral victories by forming governments in coalition in several Indian states, marking a turning point in national politics.',
//     image: '/images/rahul1.png',
//     person: 'Party Leadership',
//     designation: 'Leaders of the 1967 Coalition',
//   },
//   {
//     year: '2014',
//     title: 'OUR JOURNEY',
//     subtitle: 'Birth of Sanjivani NGO',
//     description:
//       'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
//     image: '/images/rahul1.png',
//     person: 'Adv. Rahul Chavan',
//     designation: 'Founder of the Sanjivani NGO',
//   },
//   {
//     year: '2015',
//     title: 'OUR JOURNEY',
//     subtitle: 'Birth of Sanjivani NGO',
//     description:
//       'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
//     image: '/images/rahul1.png',
//     person: 'Adv. Rahul Chavan',
//     designation: 'Founder of the Sanjivani NGO',
//   },
//   {
//     year: '2016',
//     title: 'OUR JOURNEY',
//     subtitle: 'Birth of Sanjivani NGO',
//     description:
//       'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
//     image: '/images/rahul1.png',
//     person: 'Adv. Rahul Chavan',
//     designation: 'Founder of the Sanjivani NGO',
//   },
//   {
//     year: '2017',
//     title: 'OUR JOURNEY',
//     subtitle: 'Birth of Sanjivani NGO',
//     description:
//       'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
//     image: '/images/rahul1.png',
//     person: 'Adv. Rahul Chavan',
//     designation: 'Founder of the Sanjivani NGO',
//   },
//   {
//     year: '2018',
//     title: 'OUR JOURNEY',
//     subtitle: 'Birth of Sanjivani NGO',
//     description:
//       'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
//     image: '/images/rahul1.png',
//     person: 'Adv. Rahul Chavan',
//     designation: 'Founder of the Sanjivani NGO',
//   },
//   {
//     year: '2019',
//     title: 'OUR JOURNEY',
//     subtitle: 'Birth of Sanjivani NGO',
//     description:
//       'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
//     image: '/images/rahul1.png',
//     person: 'Adv. Rahul Chavan',
//     designation: 'Founder of the Sanjivani NGO',
//   },
//   {
//     year: '2020',
//     title: 'OUR JOURNEY',
//     subtitle: 'Birth of Sanjivani NGO',
//     description:
//       'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
//     image: '/images/rahul1.png',
//     person: 'Adv. Rahul Chavan',
//     designation: 'Founder of the Sanjivani NGO',
//   },
//   {
//     year: '2021',
//     title: 'OUR JOURNEY',
//     subtitle: 'Birth of Sanjivani NGO',
//     description:
//       'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
//     image: '/images/rahul1.png',
//     person: 'Adv. Rahul Chavan',
//     designation: 'Founder of the Sanjivani NGO',
//   },
//   {
//     year: '2022',
//     title: 'OUR JOURNEY',
//     subtitle: 'Birth of Sanjivani NGO',
//     description:
//       'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
//     image: '/images/rahul1.png',
//     person: 'Adv. Rahul Chavan',
//     designation: 'Founder of the Sanjivani NGO',
//   },
//   {
//     year: '2023',
//     title: 'OUR JOURNEY',
//     subtitle: 'Birth of Sanjivani NGO',
//     description:
//       'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
//     image: '/images/rahul1.png',
//     person: 'Adv. Rahul Chavan',
//     designation: 'Founder of the Sanjivani NGO',
//   },
//   {
//     year: '2024',
//     title: 'OUR JOURNEY',
//     subtitle: 'Birth of Sanjivani NGO',
//     description:
//       'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
//     image: '/images/rahul1.png',
//     person: 'Adv. Rahul Chavan',
//     designation: 'Founder of the Sanjivani NGO',
//   },
//   {
//     year: '2025',
//     title: 'OUR JOURNEY',
//     subtitle: 'Birth of Sanjivani NGO',
//     description:
//       'On 21 October 1951, Sanjivani NGO is formed in Raghomal Girls High School, Delhi with Adv. Rahul Chavan as its first President.',
//     image: '/images/rahul1.png',
//     person: 'Adv. Rahul Chavan',
//     designation: 'Founder of the Sanjivani NGO',
//   },
// ];

// export default function OurJourney() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const current = timelineData[activeIndex];

//   const goPrev = () =>
//     setActiveIndex((prev) => (prev > 0 ? prev - 1 : timelineData.length - 1));
//   const goNext = () =>
//     setActiveIndex((prev) => (prev < timelineData.length - 1 ? prev + 1 : 0));

//   return (
//     <section className="relative w-full min-h-screen bg-[#f2f1f9] from-white via-gray-50 to-white text-black font-sans overflow-hidden">
//       {/* Background Overlay */}
//       <div className="absolute inset-0 opacity-5 bg-[url('/images/bg1.jpg')] bg-cover bg-center" />

//       {/* Main Content */}
//       <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-12">
//         {/* Left Section - Text */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeIndex}
//             initial={{ opacity: 0, x: -80 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 80 }}
//             transition={{ duration: 0.6 }}
//             className="md:w-1/2 max-w-2xl space-y-6"
//           >
//             <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
//               {current.title}
//             </h1>
//             <h2 className="text-xl md:text-3xl text-orange-600 font-semibold">
//               {current.year} – {current.subtitle}
//             </h2>
//             <p className="text-lg leading-relaxed text-gray-700">{current.description}</p>
//           </motion.div>
//         </AnimatePresence>

//         {/* Right Section - Image */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={`img-${activeIndex}`}
//             initial={{ opacity: 0, scale: 0.9, y: 50 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: -50 }}
//             transition={{ duration: 0.6 }}
//             className="md:w-1/2 flex flex-col items-center text-center"
//           >
//             <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
//               <Image
//                 src={current.image}
//                 alt={current.person}
//                 width={380}
//                 height={460}
//                 className="object-cover"
//                 priority
//               />
//             </div>
//             <h3 className="mt-6 text-2xl font-semibold text-gray-900">{current.person}</h3>
//             <p className="text-sm text-gray-600">{current.designation}</p>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Controls */}
//       <div className="absolute bottom-0 w-full flex flex-col items-center pb-10 z-20">
//         {/* Prev / Next */}
//         <div className="flex gap-4 mb-4">
//           <button
//             onClick={goPrev}
//             aria-label="Previous timeline event"
//             className="p-3 rounded-full bg-gray-200 hover:bg-orange-500 hover:text-white transition shadow-md"
//           >
//             <ChevronLeft size={22} />
//           </button>
//           <button
//             onClick={goNext}
//             aria-label="Next timeline event"
//             className="p-3 rounded-full bg-gray-200 hover:bg-orange-500 hover:text-white transition shadow-md"
//           >
//             <ChevronRight size={22} />
//           </button>
//         </div>

//         {/* Year Pills */}
//         <div className="flex gap-2 overflow-x-auto px-4 max-w-[95%] scrollbar-hide">
//           {timelineData.map((item, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               title={item.subtitle}
//               className={`px-4 py-1.5 text-sm rounded-full border font-medium transition ${
//                 index === activeIndex
//                   ? 'bg-orange-500 text-white border-orange-500 shadow-md'
//                   : 'bg-white text-gray-600 hover:bg-orange-100 border-gray-300'
//               }`}
//             >
//               {item.year}
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
