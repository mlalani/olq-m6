'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import S1 from '../assets/s1.png';

const Com = () => {
  const [currentScreen, setCurrentScreen] = useState(1);

  const screens = [
    {
      id: 1,
      text: "Leo is getting ready for his very first garage sale — he's got toys, books, clothes, and gadgets stacked everywhere!",
      image: S1,
      buttonText: "Next"
    }
  ];

  const questions = [
    "Which items can go as best deals for early birds?",
    "Which items can be grouped together?",
    "Which things have been lying unsold for a long time and can be offered for sale at a high discount?",
    "Which things have been lying unsold for a long time and can be offered for sale at a high discount?"
  ];

  const handleNext = () => {
    if (currentScreen < screens.length) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const currentScreenData = screens.find(screen => screen.id === currentScreen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Leo's Garage Sale Challenge
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
                  alt="Leo's Garage Sale"
                  className="max-w-full h-auto rounded-2xl shadow-lg"
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed font-medium mb-4">
              But there's one big problem: Leo has noted the stock in his notebook, but it is not organised.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed font-medium mb-6">
              Let's help him find:
            </p>
          </div>
        )}

        <div className="mb-8">
          {questions.map((question, index) => (
            <div key={index} className="mb-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-lg text-gray-700 font-medium">
                {index + 1}. {question}
              </p>
            </div>
          ))}
        </div>



        <div className="flex justify-center">
          {currentScreen < screens.length && (
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-xl"
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