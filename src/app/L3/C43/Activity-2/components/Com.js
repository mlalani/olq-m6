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
      answer: "A formula is like a sentence but in a mathematical language. It helps us solve problems. Think of how a calculator helps us do a variety of math calculations. In spreadhseet, computer applies formula to do the calculations.",
      showRevealButton: true,
      buttonText: "Next"
    },
    {
      id: 2,
      text: "Pizza Day Challenge",
      image: S1,
      additionalText: "The Pizza Pals Crew are known for their special pizza toppings and slices. They use a billing software, which records every single pizza sale into their google spreadsheet. But, by the end of the week, their sheet was full of numbers, except in a bit of a jumble! ",
      problemText: "The team is finding it challenging to figure out:",
      questions: [
        "The total amount of money earned from the pizza stall",
        "The maximum number of pizza slices sold on a particular day",
        "The minimum number of pizza slices sold on a particular day",
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
        {currentScreen === 1 ? (
          // Screen 1 - Original layout
          <>
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
          </>
        ) : (
          // Screen 2 - LHS/RHS layout
          <div className="flex gap-8 items-start">
            {/* Left Side - Title and Image */}
            <div className="flex-shrink-0">
              {currentScreenData?.text && (
                <div className="mb-6">
                  <h1 className="text-3xl text-gray-800 font-bold mb-6">
                    {currentScreenData.text}
                  </h1>
                </div>
              )}
              {currentScreenData?.image && (
                <div className="relative">
                  <Image
                    src={currentScreenData.image}
                    alt="Pizza Pals Crew"
                    className="max-w-full h-auto rounded-2xl shadow-lg"
                    width={400}
                    height={400}
                  />
                </div>
              )}
            </div>

            {/* Right Side - Content */}
            <div className="flex-1">
              {currentScreenData?.additionalText && (
                <div className="mb-8">
                  <p className="text-xl text-gray-600 leading-relaxed font-medium">
                    {currentScreenData.additionalText}
                  </p>
                </div>
              )}

              {currentScreenData?.problemText && (
                <div className="mb-6">
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
                {currentScreen < screens.length && currentScreenData?.buttonText && (
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
        )}
      </div>
    </div>
  );
};

export default Com;