'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import S1 from '../assets/s1.png';

const Com = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  
  const screens = [
    {
      id: 1,
      text: "Brightwood is a school where every student belongs to a special House, just like in some famous wizarding schools: Red House, Blue House, or Green House.",
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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Brightwood School
          </h1>
        </div>

        {currentScreenData?.text && (
          <div className="text-center mb-8">
            <p className="text-2xl text-gray-700 leading-relaxed font-medium mb-6">
              {currentScreenData.text}
            </p>
            <div className="flex justify-center mb-8">
          <div className="relative">
            <Image
              src={currentScreenData?.image}
              alt="Brightwood School Houses"
              className="max-w-full h-auto rounded-2xl shadow-lg"
              width={400}
              height={400}
            />
          </div>
        </div>
            <p className="text-xl text-gray-600 leading-relaxed font-medium mb-4">
              All the students have completed a quiz, and the results are in!
            </p>
            <p className="text-xl text-gray-600 leading-relaxed font-medium mb-6">
              But there's a problem: all the quiz scores are in a list, and they do not know how each house has performed. Let's get their data organized!
            </p>
          </div>
        )}

       

        <div className="flex justify-center">
          {currentScreen < screens.length && (
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-xl"
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