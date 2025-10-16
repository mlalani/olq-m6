'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import S1 from '../assets/s1.png';

function Com() {
  const [step, setStep] = useState(0);

  const contents = [
    'Sort student names alphabetically: To easily take attendance, find names quickly, in A–Z order.',
    'Sort students by height: To plan seating taller students can sit at the back.',
  ];

  const contentPara = "Welcome to the Classroom Sort-It Challenge, led by a super organized student named Zoya! Zoya and her friend Ayaan, the class monitor, were in charge of organizing important class information like which students belong to which house, who needs the tallest chair, and when everyone joined the class. <br /> But with so many details on sticky notes and whiteboards, it was hard to keep everything straight! One day, Zoya’s friend showed her something amazing called Google Sheets."

  const handleButtonClick = () => {
    if (step < contents.length) {
      setStep(step + 1);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-2xl p-6 flex flex-row gap-10 items-center">
        {/* Left Side: Image */}
        <div className="w-1/2 flex justify-center">
          <Image
            src={S1}
            alt="A placeholder image of a classroom"
            className="rounded-lg shadow-md w-full max-w-xs"
          />
        </div>

        {/* Right Side: Content + Button */}
        <div className="w-1/2 flex flex-col items-start text-left">
          <div className='text-xl text-gray-500 font-normal mb-6' dangerouslySetInnerHTML={{ __html: contentPara }} />


          {/* Loop through the content array and show up to `step` items */}
          {contents.slice(0, step).map((text, index) => (
            <p
              key={index}
              className="text-xl text-gray-500 font-medium mb-4 leading-relaxed"
            >
              {text}
            </p>
          ))}

          {/* Button: hidden after all content is revealed */}
          {step < contents.length && (
            <button
              onClick={handleButtonClick}
              className="px-6 py-2 mt-4 text-white font-bold rounded-full shadow-lg bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Com;
