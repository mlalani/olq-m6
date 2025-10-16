'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import S1 from '../assets/s1.png';

const Com = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);
  
  const screens = [
    {
      id: 1,
      question: "Do you know what a formula means?",
      answer: "You've already seen formulas in math! A formula is like a math sentence that helps us solve problems quickly. In Google Sheets, formulas do the same thing, but inside the computer. Just like how a calculator helps you do a variety of math calculations.",
      showRevealButton: true,
      buttonText: "Next"
    },
    {
      id: 2,
      text: "The Pizza Pals Crew known for their special pizza toppings and slices.",
      image: S1,
      additionalText: "They used billing software, which recorded every single pizza sale into their google spreadsheet. By the end of the week, their sheet was full of numbers, but a bit of a jumble!",
      problemText: "The team can't easily figure out:",
      questions: [
        "Total amount of money earned from pizza stall",
        "Maximum pizza slices were sold on which day?",
        "Minimum pizza slices were sold on which day?"
      ]
    }
  ];

  const handleRevealAnswer = () => {
    setShowAnswer(true);
  };

  const handleNext = () => {
    if (currentScreen < screens.length) {
      setCurrentScreen(currentScreen + 1);
      setShowAnswer(false);
    }
  };

  const currentScreenData = screens.find(screen => screen.id === currentScreen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-6xl w-full">
        {currentScreenData?.question && (
          <div className="text-center mb-8">
            <h1 className="text-3xl text-gray-800 font-bold mb-6">
              {currentScreenData.question}
            </h1>
          </div>
        )}

        {currentScreenData?.showRevealButton && !showAnswer && (
          <div className="flex justify-center mb-8">
            <button
              onClick={handleRevealAnswer}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-xl"
            >
              Show Answer
            </button>
          </div>
        )}

        {showAnswer && currentScreenData?.answer && (
          <div className="mb-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentScreenData.answer}
              </p>
            </div>
          </div>
        )}

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
                alt="Pizza Pals Crew"
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
            <div className="bg-orange-50 rounded-2xl p-6">
              <ol className="space-y-4">
                {currentScreenData.questions.map((question, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-lg text-gray-700 font-medium">{question}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        <div className="flex justify-center">
          {currentScreen < screens.length && currentScreenData?.buttonText && (currentScreen === 1 ? showAnswer : true) && (
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-xl"
            >
              {currentScreenData.buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Com;