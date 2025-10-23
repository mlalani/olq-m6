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
      text: "The Pizza Pals Crew are back!",
      image: S1,
      additionalText: "Earlier, we helped the store understand which days were the busiest and the lowest.",
      problemText: "But now, the store owners have another question:",
      questions: [
        "Which pizzas are the most loved and selling well?",
        "And which pizzas are the least liked?"
      ],
      solutionText: "To do this, we'll use a special kind of chart called a \"pie chart.\"",
      buttonText: "Next"
    },
    {
      id: 2,
      text: "A pie chart shows how a whole is divided into parts, like how many cones of each flavor were sold out of the total.",
      additionalText: "Each slice shows a flavor's share in the big circle! Let's help Maya figure it out!",
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
            <h1 className="text-3xl text-gray-800 font-bold mb-6">
              {currentScreenData.text}
            </h1>
          </div>
        )}

        {currentScreenData?.image && (
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Image
                src={currentScreenData.image}
                alt="Color Splash Studio"
                className="max-w-full h-auto rounded-2xl shadow-lg"
                width={400}
                height={400}
              />
            </div>
          </div>
        )}

        {currentScreenData?.additionalText && (
          <div className="text-center mb-8">
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              {currentScreenData.additionalText}
            </p>
          </div>
        )}

        {currentScreenData?.problemText && (
          <div className="text-center mb-6">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              {currentScreenData.problemText}
            </p>
          </div>
        )}

        {currentScreenData?.questions && (
          <div className="mb-8">
            <div className="bg-pink-50 rounded-2xl p-6">
              <ol className="space-y-4">
                {currentScreenData.questions.map((question, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-lg text-gray-700 font-medium">{question}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {currentScreenData?.solutionText && (
          <div className="text-center mb-8">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              {currentScreenData.solutionText}
            </p>
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