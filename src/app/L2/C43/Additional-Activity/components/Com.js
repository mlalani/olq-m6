'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import S1 from '../assets/s1.png';
import S2 from '../assets/s2.png';

const Com = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  
  const screens = [
    {
      id: 1,
      text: "Maya from The Frosty Spot has a few more queries. Maya wants to know which ice-cream flavors are best loved so she can order more of the same.",
      image: S1,
      buttonText: "Next"
    },
    {
      id: 2,
      text: "To do this, we will use Pie Chart. ",
      image: S2,
      buttonText: "Next"
    },
    {
      id: 3,
      text: "A pie chart shows how a whole is categorised into parts, like in Maya’s example, we can see how many cones of each flavor were sold out of the total. Each slice shows a flavor’s share in the big circle! ",
      image: S2,
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
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-6xl w-full">
        {currentScreenData?.text && (
          <div className="text-center mb-8">
            <p className="text-2xl text-gray-700 leading-relaxed font-medium mb-6">
              {currentScreenData.text}
            </p>
          </div>
        )}

        {currentScreenData?.image && (
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Image
                src={currentScreenData.image}
                alt="Pie Chart Example"
                className="max-w-full h-auto rounded-2xl shadow-lg"
                width={400}
                height={400}
              />
            </div>
          </div>
        )}

        <div className="flex justify-center">
          {currentScreen < screens.length && (
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-xl"
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