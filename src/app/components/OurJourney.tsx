'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const timelineData = [
  {          
    year: '2007',
    title: 'OUR JOURNEY',
    subtitle: 'We Started NGO',
    description:
      'After surving for 26 years in Indian Army, Shri Babu Chavan retired from Army and formed Sanjivani NGO in Pune.',
    image: '/images/babu.jpeg',
    person: 'Shri. Babu Chavan',
    designation: 'Founder of Sanjivani NGO',
  },
  {
    year: '2008',
    title: 'OUR JOURNEY',
    subtitle: 'Rahul Started helping',
    description:
      'Looking at the number of people connecting with ngo Rahul started helping father in running the daily operations.',
    image: '/images/rahul1.png',
    person: 'Adv. Rahul Chavan',
    designation: 'President of Sanjivani NGO',
  },
  {
    year: '2009',
    title: 'OUR JOURNEY',
    subtitle: 'Helping in medical emergency',
    description:
      'People starting calling in medical emergency cases to seek help. We started 24/7 operations to help in any kind of medical emergency.',
    image: '/images/commandhospital.png',
    person: 'Command Hospital, Pune',
    designation: 'Medical Portfolio Started by Sanjivani NGO',
  },
  {
    year: '2010',
    title: 'OUR JOURNEY',
    subtitle: 'Food Distribution Started',
    description:
      'We started distributing free food to needy people under the campaign sanjivani annapurna mission.',
    image: '/images/food.jpg',
    person: 'Sanjivani Annapurna Mission',
    designation: 'Zero Hunger Portfolio Started by Sanjivani NGO',
  },
  {
    year: '2011',
    title: 'OUR JOURNEY',
    subtitle: 'Old Age Support Wing',
    description:
      'Lot of old age people were living on street. We started supporting these people.',
    image: '/images/oldage.jpg',
    person: 'Old Age Support',
    designation: 'Old Age Portfolio Started by Sanjivani NGO',
  },
  {
    year: '2012',
    title: 'OUR JOURNEY',
    subtitle: 'Educational Projects Started',
    description:
      'We started educational programs under the campaign Sarva Shiksha Abhiyan.',
    image: '/images/education.jpg',
    person: 'Educational Projects Started',
    designation: 'Education Portfolio Started by Sanjivani NGO',
  },
  {
    year: '2013',
    title: 'OUR JOURNEY',
    subtitle: 'Reduce Inequality programs',
    description:
      'We started supporting differently ablied people and started conducting programs to create awareness about the rights.',
    image: '/images/differabled.jpg',
    person: 'Reduce Inequality programs',
    designation: 'Reduce Inequality Portfolio Started by Sanjivani NGO',
  },
  {
    year: '2014',
    title: 'OUR JOURNEY',
    subtitle: 'Underprivileged Children',
    description:
      'We saw children begging on streets and started supporting them.',
    image: '/images/children.jpg',
    person: 'Support Underprivileged Children',
    designation: 'Children Portfolio Started by Sanjivani NGO',
  },
  {
    year: '2015',
    title: 'OUR JOURNEY',
    subtitle: 'Clean Drinking Water',
    description:
      'Access to clean drinking water is a mojor issue in India so we started clean drinking water program.',
    image: '/images/water.jpg',
    person: 'Clean Drinking Water',
    designation: 'Clean Drinking Water Portfolio Started by Sanjivani NGO',
  },
  {
    year: '2016',
    title: 'OUR JOURNEY',
    subtitle: 'Save Environment Projects',
    description:
      'Started environemntal protection programs.',
    image: '/images/environ.jpg',
    person: 'Save Environment Programs',
    designation: 'Environment Portfolio Started by Sanjivani NGO',
  },
  {
    year: '2017',
    title: 'OUR JOURNEY',
    subtitle: 'AIDS Affected Kids',
    description:
      'AIDS Affected kids where dishoned by the relatives after parents death so we started supporting them.',
    image: '/images/aids.jpg',
    person: 'AIDS Awarenesss Programs',
    designation: 'AIDS Awareness Programs by Sanjivani NGO',
  },
  {
    year: '2018',
    title: 'OUR JOURNEY',
    subtitle: 'Women Empowerment Programs',
    description:
      'We started various Women Empowerment Programs as large number of women were looking to start some work which will help in earning.',
    image: '/images/women.jpg',
    person: 'Women Empowerment Programs',
    designation: 'Women Empowerment Portfolio Started by Sanjivani NGO',
  },
  {
    year: '2019',
    title: 'OUR JOURNEY',
    subtitle: 'Skill Development Programs',
    description:
      'We started various Skill Development Programs to support underprivileged.',
    image: '/images/skill.jpeg',
    person: 'Skill Development Programs',
    designation: 'Skill Development Portfolio Started by Sanjivani NGO',
  },
  {
    year: '2020',
    title: 'OUR JOURNEY',
    subtitle: 'Support in COVID Pandemic',
    description:
      'We started providing free food and groceries to needy people.',
    image: '/images/covid19.jpg',
    person: 'COVID Pandemic',
    designation: 'Fight against COVID Pandemic by Sanjivani NGO',
  },
  {
    year: '2021',
    title: 'OUR JOURNEY',
    subtitle: 'Infrastructure Programs',
    description:
      'We Started Infrastructure Programs to support the rural people.',
    image: '/images/infrastr.jpeg',
    person: 'Infrastructure Programs',
    designation: 'Infrastructure Portfolio Started by Sanjivani NGO',
  },
  {
    year: '2022',
    title: 'OUR JOURNEY',
    subtitle: 'MoU with college for Training',
    description:
      'Started teaching social work to college students. You learn more when you do it',
    image: '/images/intern.jpg',
    person: 'Mou with College',
    designation: 'Training programs for college Students by Sanjivani NGO',
  },
  {
    year: '2023',
    title: 'OUR JOURNEY',
    subtitle: 'Entrepreneurship Development',
    description:
      'We started various Entrepreneurship development Programs to support underprivileged.',
    image: '/images/entrepreneurship.jpeg',
    person: 'Entrepreneurship Programs',
    designation: 'Entrepreneurship Portfolio Started by Sanjivani NGO',
  },
  {
    year: '2024',
    title: 'OUR JOURNEY',
    subtitle: 'Corporate Gifting program',
    description:
      'We started Corporate Gifting programs to support underprivileged.',
    image: '/images/giftdiwali.jpg',
    person: 'Entrepreneurship Programs',
    designation: 'Corporate Gifting program by Sanjivani NGO',
  },
  {
    year: '2025',
    title: 'OUR JOURNEY',
    subtitle: 'Tree Plantation program',
    description:
      'We started Tree Plantation program to create awareness about Air Quality drop due to pollution.',
    image: '/images/plant.jpg',
    person: 'Tree Plantation program',
    designation: 'Tree Plantation program by Sanjivani NGO',
  },
];

export default function OurJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = timelineData[activeIndex];
  const yearRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const goPrev = () =>
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : timelineData.length - 1));
  const goNext = () =>
    setActiveIndex((prev) => (prev < timelineData.length - 1 ? prev + 1 : 0));

  useEffect(() => {
    const currentButton = yearRefs.current[activeIndex];
    if (currentButton) {
      currentButton.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [activeIndex]);

  return (
    <section className="relative w-full min-h-screen bg-[#f2f1f9] text-black font-sans overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('/images/bg1.jpg')] bg-cover bg-center" />

      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-1 sm:py-1 md:py-1 gap-10 md:gap-16">
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

        <div className="flex gap-6 overflow-x-auto px-3 sm:px-4 w-full max-w-4xl mx-auto scrollbar-hide">
          {timelineData.map((item, index) => (
            <button
              key={index}
              ref={(el) => {
              yearRefs.current[index] = el;
              }}
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
//       'After surving for 26 years in Indian Army, Shri Babu Chavan retired from Army and formed Sanjivani NGO in Pune.',
//     image: '/images/babu.jpeg',
//     person: 'Shri. Babu Chavan',
//     designation: 'Founder of Sanjivani NGO',
//   },
//   {
//     year: '2008',
//     title: 'OUR JOURNEY',
//     subtitle: 'Rahul Started helping',
//     description:
//       'Looking at the number of people connecting with ngo Rahul started helping father in running the daily operations.',
//     image: '/images/rahul1.png',
//     person: 'Adv. Rahul Chavan',
//     designation: 'President of Sanjivani NGO',
//   },
//   {
//     year: '2009',
//     title: 'OUR JOURNEY',
//     subtitle: 'Helping in medical emergency',
//     description:
//       'People starting calling in medical emergency cases to seek help. We started 24/7 operations to help in any kind of medical emergency.',
//     image: '/images/commandhospital.png',
//     person: 'Command Hospital, Pune',
//     designation: 'Medical Portfolio Started by Sanjivani NGO',
//   },
//   {
//     year: '2010',
//     title: 'OUR JOURNEY',
//     subtitle: 'Food Distribution Started',
//     description:
//       'We started distributing free food to needy people under the campaign sanjivani annapurna mission.',
//     image: '/images/food.jpg',
//     person: 'Sanjivani Annapurna Mission',
//     designation: 'Zero Hunger Portfolio Started by Sanjivani NGO',
//   },
//   {
//     year: '2011',
//     title: 'OUR JOURNEY',
//     subtitle: 'Old Age Support Wing',
//     description:
//       'Lot of old age people were living on street. We started supporting these people.',
//     image: '/images/oldage.jpg',
//     person: 'Old Age Support',
//     designation: 'Old Age Portfolio Started by Sanjivani NGO',
//   },
//   {
//     year: '2012',
//     title: 'OUR JOURNEY',
//     subtitle: 'Educational Projects Started',
//     description:
//       'We started educational programs under the campaign Sarva Shiksha Abhiyan.',
//     image: '/images/education.jpg',
//     person: 'Educational Projects Started',
//     designation: 'Education Portfolio Started by Sanjivani NGO',
//   },
//   {
//     year: '2013',
//     title: 'OUR JOURNEY',
//     subtitle: 'Reduce Inequality programs',
//     description:
//       'We started supporting differently ablied people and started conducting programs to create awareness about the rights.',
//     image: '/images/differabled.jpg',
//     person: 'Reduce Inequality programs',
//     designation: 'Reduce Inequality Portfolio Started by Sanjivani NGO',
//   },
//   {
//     year: '2014',
//     title: 'OUR JOURNEY',
//     subtitle: 'Underprivileged Children',
//     description:
//       'We saw children begging on streets and started supporting them.',
//     image: '/images/children.jpg',
//     person: 'Support Underprivileged Children',
//     designation: 'Children Portfolio Started by Sanjivani NGO',
//   },
//   {
//     year: '2015',
//     title: 'OUR JOURNEY',
//     subtitle: 'Clean Drinking Water',
//     description:
//       'Access to clean drinking water is a mojor issue in India so we started clean drinking water program.',
//     image: '/images/water.jpg',
//     person: 'Clean Drinking Water',
//     designation: 'Clean Drinking Water Portfolio Started by Sanjivani NGO',
//   },
//   {
//     year: '2016',
//     title: 'OUR JOURNEY',
//     subtitle: 'Save Environment Projects',
//     description:
//       'Started environemntal protection programs.',
//     image: '/images/environ.jpg',
//     person: 'Save Environment Programs',
//     designation: 'Environment Portfolio Started by Sanjivani NGO',
//   },
//   {
//     year: '2017',
//     title: 'OUR JOURNEY',
//     subtitle: 'AIDS Affected Kids',
//     description:
//       'AIDS Affected kids where dishoned by the relatives after parents death so we started supporting them.',
//     image: '/images/aids.jpg',
//     person: 'AIDS Awarenesss Programs',
//     designation: 'AIDS Awareness Programs by Sanjivani NGO',
//   },
//   {
//     year: '2018',
//     title: 'OUR JOURNEY',
//     subtitle: 'Women Empowerment Programs',
//     description:
//       'We started various Women Empowerment Programs as large number of women were looking to start some work which will help in earning.',
//     image: '/images/women.jpg',
//     person: 'Women Empowerment Programs',
//     designation: 'Women Empowerment Portfolio Started by Sanjivani NGO',
//   },
//   {
//     year: '2019',
//     title: 'OUR JOURNEY',
//     subtitle: 'Skill Development Programs',
//     description:
//       'We started various Skill Development Programs to support underprivileged.',
//     image: '/images/skill.jpeg',
//     person: 'Skill Development Programs',
//     designation: 'Skill Development Portfolio Started by Sanjivani NGO',
//   },
//   {
//     year: '2020',
//     title: 'OUR JOURNEY',
//     subtitle: 'Support in COVID Pandemic',
//     description:
//       'We started providing free food and groceries to needy people.',
//     image: '/images/covid19.jpg',
//     person: 'COVID Pandemic',
//     designation: 'Fight against COVID Pandemic by Sanjivani NGO',
//   },
//   {
//     year: '2021',
//     title: 'OUR JOURNEY',
//     subtitle: 'Infrastructure Programs',
//     description:
//       'We Started Infrastructure Programs to support the rural people.',
//     image: '/images/infrastr.jpeg',
//     person: 'Infrastructure Programs',
//     designation: 'Infrastructure Portfolio Started by Sanjivani NGO',
//   },
//   {
//     year: '2022',
//     title: 'OUR JOURNEY',
//     subtitle: 'MoU with college for Training',
//     description:
//       'Started teaching social work to college students. You learn more when you do it',
//     image: '/images/intern.jpg',
//     person: 'Mou with College',
//     designation: 'Training programs for college Students by Sanjivani NGO',
//   },
//   {
//     year: '2023',
//     title: 'OUR JOURNEY',
//     subtitle: 'Entrepreneurship Development',
//     description:
//       'We started various Entrepreneurship development Programs to support underprivileged.',
//     image: '/images/entrepreneurship.jpeg',
//     person: 'Entrepreneurship Programs',
//     designation: 'Entrepreneurship Portfolio Started by Sanjivani NGO',
//   },
//   {
//     year: '2024',
//     title: 'OUR JOURNEY',
//     subtitle: 'Corporate Gifting program',
//     description:
//       'We started Corporate Gifting programs to support underprivileged.',
//     image: '/images/giftdiwali.jpg',
//     person: 'Entrepreneurship Programs',
//     designation: 'Corporate Gifting program by Sanjivani NGO',
//   },
//   {
//     year: '2025',
//     title: 'OUR JOURNEY',
//     subtitle: 'Tree Plantation program',
//     description:
//       'We started Tree Plantation program to create awareness about Air Quality drop due to pollution.',
//     image: '/images/plant.jpg',
//     person: 'Tree Plantation program',
//     designation: 'Tree Plantation program by Sanjivani NGO',
//   },

//   // data
// ];

// export default function OurJourney() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const current = timelineData[activeIndex];

//   const goPrev = () =>
//     setActiveIndex((prev) => (prev > 0 ? prev - 1 : timelineData.length - 1));
//   const goNext = () =>
//     setActiveIndex((prev) => (prev < timelineData.length - 1 ? prev + 1 : 0));

//   return (
//     <section className="relative w-full min-h-screen bg-[#f2f1f9] text-black font-sans overflow-hidden">
//       <div className="absolute inset-0 opacity-5 bg-[url('/images/bg1.jpg')] bg-cover bg-center" />

    
//       <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-10 sm:py-14 md:py-20 gap-10 md:gap-16">
    
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeIndex}
//             initial={{ opacity: 0, x: -80 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 80 }}
//             transition={{ duration: 0.6 }}
//             className="w-full md:w-1/2 max-w-2xl space-y-4 sm:space-y-6 text-center md:text-left"
//           >
//             <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
//               {current.title}
//             </h1>
//             <h2 className="text-lg sm:text-xl md:text-3xl text-orange-600 font-semibold">
//               {current.year} – {current.subtitle}
//             </h2>
//             <p className="text-base sm:text-lg leading-relaxed text-gray-700">
//               {current.description}
//             </p>
//           </motion.div>
//         </AnimatePresence>

      
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={`img-${activeIndex}`}
//             initial={{ opacity: 0, scale: 0.9, y: 50 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: -50 }}
//             transition={{ duration: 0.6 }}
//             className="w-full md:w-1/2 flex flex-col items-center text-center"
//           >
//             <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white w-full max-w-sm sm:max-w-md md:max-w-lg">
//               <Image
//                 src={current.image}
//                 alt={current.person}
//                 width={500}
//                 height={600}
//                 className="w-full h-auto object-cover"
//                 priority
//               />
//             </div>
//             <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
//               {current.person}
//             </h3>
//             <p className="text-sm sm:text-base text-gray-600">{current.designation}</p>
//           </motion.div>
//         </AnimatePresence>
//       </div>

    
//       <div className="absolute bottom-0 w-full flex flex-col items-center pb-6 sm:pb-8 md:pb-10 z-20">
      
//         <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
//           <button
//             onClick={goPrev}
//             aria-label="Previous timeline event"
//             className="p-2 sm:p-3 rounded-full bg-gray-200 hover:bg-orange-500 hover:text-white transition shadow-md"
//           >
//             <ChevronLeft size={20} />
//           </button>
//           <button
//             onClick={goNext}
//             aria-label="Next timeline event"
//             className="p-2 sm:p-3 rounded-full bg-gray-200 hover:bg-orange-500 hover:text-white transition shadow-md"
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>

      
//         <div className="flex gap-6 overflow-x-auto px-3 sm:px-4 w-full max-w-4xl mx-auto scrollbar-hide">
//           {timelineData.map((item, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               title={item.subtitle}
//               className={`px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full border font-medium transition whitespace-nowrap ${
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


