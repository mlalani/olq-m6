'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import S1 from '../assets/s1.png';

const Com = () => {
  const [currentScreen, setCurrentScreen] = useState(1);

  const screens = [
    {
      id: 1,
      text: "Leo is getting ready for his very first garage sale, he's got toys, books, clothes, and gadgets stacked everywhere!",
      image: S1,
      buttonText: "Next"
    }
  ];

  const questions = [
    "Which items can go as best deals for early birds?",
    "Which items can be grouped together?",
    "What kind of things have been lying unsold for a long time and can be sold at a discounted rate?",
  ];

  const handleNext = () => {
    if (currentScreen < screens.length) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const currentScreenData = screens.find(screen => screen.id === currentScreen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-6xl w-full">
        <div className="text-center mb-8">
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <Image
                src={currentScreenData?.image}
                alt="Leo's Garage Sale"
                className="max-w-full h-auto rounded-2xl shadow-lg"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Right Side: Text and Questions */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {currentScreenData?.text && (
              <div className="mb-6">
                <p className="text-2xl text-gray-700 leading-relaxed font-medium mb-6">
                  {currentScreenData.text}
                </p>
                <p className="text-xl text-gray-600 leading-relaxed font-medium mb-4">
                  But there's one big problem: Leo has noted the stock in his notebook, but it is not organised.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed font-medium mb-2">
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

            <div className="flex justify-center lg:justify-start">
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
      </div>
    </div>
  );
};

export default Com;