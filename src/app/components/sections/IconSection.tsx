"use client"

import React, { ReactElement, useState } from 'react';
import { FaPlaneUp } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { GiVote } from "react-icons/gi";
import { GiTeacher } from "react-icons/gi";

import { PiStudentBold } from "react-icons/pi";

import { PiPlantLight } from "react-icons/pi";

import { GiBroom } from "react-icons/gi";

import { MdBabyChangingStation } from "react-icons/md";

import { MdOutlineSolarPower } from "react-icons/md";

import { FaLaptopCode } from "react-icons/fa";

import { FaPersonMilitaryRifle } from "react-icons/fa6";

import { GiShipBow } from "react-icons/gi";




interface IconData {
  title: string;
  iconPath: ReactElement;
}

export default function IconSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const IconsData: IconData[] = [
    
    { title: 'Home', iconPath: <FaPersonMilitaryRifle  fontSize={25}/> },
    { title: 'District', iconPath: <MdBabyChangingStation  fontSize={25}/>},
    { title: 'Air', iconPath: <FaPlaneUp  fontSize={25}/>},
    { title: 'water', iconPath: <GiShipBow  fontSize={25}/> },
    { title: 'Food', iconPath:<PiPlantLight  fontSize={25}/> },
    { title: 'Cloths', iconPath: <GiBroom  fontSize={25}/>},
    { title: 'Shelter', iconPath: <PiStudentBold  fontSize={25}/>},
    { title: 'Solar', iconPath: <MdOutlineSolarPower  fontSize={25}/> },
    { title: 'Education', iconPath: <GiTeacher  fontSize={25}/> },
    { title: 'Work', iconPath: <FaLaptopCode  fontSize={25}/> },
    { title: 'Medical', iconPath: <FaBriefcaseMedical fontSize={25} /> },
    { title: 'Legal', iconPath: <GoLaw  fontSize={25}/> },
    { title: 'Voting', iconPath: <GiVote  fontSize={25}/>},
    
    
    

  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap sm:flex-nowrap justify-center items-center">
        {IconsData.map((data, index) => {
          const isSelected = selectedIndex === index;
          const labelClass = isSelected
            ? 'text-xs font-medium text-blue-600'
            : 'text-xs font-medium text-gray-600';

          return (
            <div
              key={index}
              className={`
               cursor-pointer relative group
               flex flex-col items-center justify-center
               px-2 py-1
               rounded-lg
               min-h-[64px]
               basis-1/4 max-w-[25%]
               sm:basis-auto sm:min-w-[56px] sm:max-w-none sm:flex-grow-0
               transition-all duration-300 ease-in-out
               hover:bg-blue-50
               ${isSelected ? 'bg-blue-50 shadow-sm' : ''}
     
               flex-grow   
               sm:flex-grow-0 
               max-w-[100%]   
              `}
              onClick={() => setSelectedIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedIndex(index);
                }
              }}
            >
              <div className={`
          flex items-center justify-center
          p-0 rounded-full
          ${isSelected ? 'bg-black-100' : 'bg-black-50'}
          group-hover:bg-blue-50
          transition-colors duration-300
        `}>
                {/* <img
                  src={data.iconPath}
                  alt={data.title}
                  className="w-6 h-6 sm:w-5 sm:h-5"
                  draggable={false}
                /> */}
                {data.iconPath}
              </div>
              <span className={`
          ${labelClass}
          mt-1 text-center
          transition-colors duration-300
          truncate max-w-[48px] sm:max-w-[80px]
        `}>
                {data.title}
              </span>
              <span className="
          absolute left-1/2 top-full mt-1 -translate-x-1/2
          px-3 py-1.5 rounded-md bg-[rgba(0,0,0,0.5)] text-white text-xs font-medium
          opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto
          z-50 whitespace-nowrap transition-all duration-200 shadow-lg
          hidden sm:block
        ">
                {data.title}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
}
