'use client';
import React, { useState } from 'react';

const Com = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  
  const screens = [
    {
      id: 1,
      text: "Play a pet game with your friend in Roblox",
      buttonText: "Next"
    },
    {
      id: 2,
      text: "Smell the flowers in the game",
      buttonText: "Next"
    },
    {
      id: 3,
      text: "Build a treehouse in a virtual world",
      buttonText: "Next"
    },
    {
      id: 4,
      text: "Decorate your avatar with new clothes",
      buttonText: "Next"
    },
    {
      id: 5,
      text: "Taste the ice cream in your virtual shop",
      buttonText: "Next"
    },
    {
      id: 6,
      text: "Say mean or rude things to another player",
      buttonText: "Next"
    },
    {
      id: 7,
      text: "Tell someone your home address",
      buttonText: "Next"
    },
    {
      id: 8,
      text: "Give your phone number to someone online",
      buttonText: "Next"
    },
    {
      id: 9,
      text: "Touch the grass and feel it",
      buttonText: "Next"
    },
    {
      id: 10,
      text: "Play with people online you don't know in real life without asking an adult",
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            This action Can Do, Can't Do, Should Not Do in a metaverse world:
          </h1>
         
        </div>

        {/* Text Content */}
        {currentScreenData?.text && (
          <div className="text-center mb-8">
            <p className="text-3xl text-gray-700 leading-relaxed font-medium">
              {currentScreenData.text}
            </p>
          </div>
        )}

        {/* Image Container */}
        <div className="flex justify-center mb-2">
          <div className="relative">

          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center">
          {currentScreen < screens.length && (
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-xl"
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