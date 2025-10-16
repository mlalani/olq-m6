'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import S1 from '../assets/s1.png';

const Com = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  
  const screens = [
    {
      id: 1,
      text: "In the Brightwood Academy Math Lab, a student Sam is working on tracking school supplies, but his calculator stopped working!",
      image: S1,
      buttonText: "Next"
    }
  ];

  const handleNext = () => {
    if (currentScreen < screens.length) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const currentScreenData = screens.find(screen => screen.id === currentScreen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full">

        {currentScreenData?.text && (
          <div className="text-center mb-8">
            <p className="text-2xl text-gray-700 leading-relaxed font-medium mb-6">
              {currentScreenData.text}
            </p>
          </div>
        )}

        <div className="flex justify-center mb-8">
          <div className="relative">
            <Image
              src={currentScreenData?.image}
              alt="Brightwood Academy Math Lab"
              className="max-w-full h-auto rounded-2xl shadow-lg"
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-600 leading-relaxed font-medium mb-4">
            He needs your help using Google Sheets formulas to solve some important puzzles. Luckily, Google Sheets is like a magic calculator.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed font-medium mb-6">
            With just a few clicks, you can find totals, see what's missing, and spot the biggest or smallest numbers. Let's solve the mystery!
          </p>
        </div>

        <div className="flex justify-center">
          {currentScreen < screens.length && (
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-xl"
            >
              {currentScreenData?.buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Com;