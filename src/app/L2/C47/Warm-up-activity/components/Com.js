'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import S1 from '../assets/s1.png';
import S2 from '../assets/s2.png';
import S3 from '../assets/s3.png';
import S4 from '../assets/s4.png';
import S5 from '../assets/s5.png';
import S6 from '../assets/s6.png';
import S7 from '../assets/s7.png';
import S8 from '../assets/s8.png';
const Com = () => {
  const [currentScreen, setCurrentScreen] = useState(1);

  const images = [
    { id: 1, src: S1,  text: "Backpack" },
    { id: 2, src: S2,  text: "Coins in a game" },
    { id: 3, src: S3, text: "Pencil Case" },
    { id: 4, src: S4,  text: "A lava floor in an obstacle game" },
    { id: 5, src: S5,  text: "Sandwich" },
    { id: 6, src: S6,  text: "School Bus" },
    { id: 7, src: S7, text: "Flying unicorn in a game" },
    { id: 8, src: S8, text: "Avatar wearing superhero costume" },
  ];

  const handleNext = () => {
    if (currentScreen < images.length) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const currentImage = images.find(img => img.id === currentScreen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full">
        {/* Image Container */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <h1 className="text-2xl text-center text-gray-700 font-bold mb-8">{currentImage?.text}</h1>
            <Image
              src={currentImage?.src}
              alt={`Screen ${currentScreen}`}
              className="max-w-full h-auto rounded-2xl shadow-lg"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center">
          {currentScreen < images.length && (
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-xl"
            >
              Next
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default Com;