'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import S1 from '../assets/s1.png';
import S2 from '../assets/s2.png';
import S3 from '../assets/s3.png';
import S4 from '../assets/s4.png';
import S5 from '../assets/s5.png';

const Com = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  
  const screens = [
    {
      id: 1,
      text: "Lila is sitting in her room and there is a glass type device near her.",
      image: S1,
      buttonText: "Show Device",
      isDeviceButton: true
    },
    {
      id: 2,
      text: "",
      image: S2,
      buttonText: "Next",
      isDeviceButton: false
    },
    {
      id: 3,
      text: "Lila puts on the headset and… WHOOSH! She's standing in a magical candy castle!",
      image: S3,
      buttonText: "Next",
      isDeviceButton: false
    },
    {
      id: 4,
      text: "In the metaverse, Lila can meet her friends and together they explore the castles",
      image: S4,
      buttonText: "Next",
      isDeviceButton: false
    },
    {
      id: 5,
      text: "Lila's mother calls her mom for dinner, and she takes off her VR headset and goes for dinner.",
      image: S5,
      buttonText: "Next",
      isDeviceButton: false
    }
  ];

  const handleNext = () => {
    if (currentScreen < screens.length) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const currentScreenData = screens.find(screen => screen.id === currentScreen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full">
        {/* Text Content */}
        {currentScreenData?.text && (
          <div className="text-center mb-8">
            <p className="text-2xl text-gray-700 leading-relaxed font-medium">
              {currentScreenData.text}
            </p>
          </div>
        )}

        {/* Image Container */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Image
              src={currentScreenData?.image}
              alt={`Screen ${currentScreen}`}
              className="max-w-full h-auto rounded-2xl shadow-lg"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center">
          {currentScreen < screens.length && (
            <button
              onClick={handleNext}
              className={`font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-xl ${
                currentScreenData?.isDeviceButton
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
              }`}
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