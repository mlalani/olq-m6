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
      text: "Maya, has just opened her very own ice cream shop called 'Sweet Swirls'!",
      image: S1,
      buttonText: "Next"
    },
    {
      id: 2,
      text: "Maya is super excited about selling delicious ice cream, but running a business means more than just scooping cones. She keeps a detailed log of her sales for every shift, but it's just a long list of numbers, and she's finding it hard to spot patterns.",
      buttonText: "Next"
    },
    {
      id: 3,
      text: "She needs YOUR help to figure out:",
      questions: [
        "Which days and shifts are the busiest and bring in the most money?",
        "When (day and shift) is vanilla the highest selling item?",
        "Which flavors are slow moving and fast moving items?"
      ],
      buttonText: "Next"
    },
    {
      id: 4,
      text: "One day, Maya’s elder sister showed her Google Sheets to help her keep data in a structured manner.",
      buttonText: "Next"
    },
    {
      id: 5,
      question: "What is a Google Sheets?",
      answer: "A google sheet is a digital tool that organizes data into neat columns and rows. Use spreadsheet to:",
      bulletPoints: [
        "Sort student names alphabetically: To take attendance easily, find names quickly, in A–Z order.",
        "Sort students by height: To organize the seating arrangement based on the height of each student."
      ],
      showRevealButton: true
    }
  ];

  const handleNext = () => {
    if (currentScreen < screens.length) {
      setCurrentScreen(currentScreen + 1);
      setShowAnswer(false);
    }
  };

  const handleRevealAnswer = () => {
    setShowAnswer(true);
  };

  const currentScreenData = screens.find(screen => screen.id === currentScreen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-6xl w-full">
        <div className="flex gap-8 items-start">
          {/* Left Side - Image (Always S1) */}
          <div className="flex-shrink-0">
            <div className="relative">
              <Image
                src={S1}
                alt="Maya's Ice Cream Shop"
                className="max-w-full h-auto rounded-2xl shadow-lg"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1">
            {currentScreenData?.text && (
              <div className="mb-8">
                <p className="text-2xl text-gray-700 leading-relaxed font-medium mb-6">
                  {currentScreenData.text}
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

            {currentScreenData?.question && (
              <div className="mb-8">
                <h2 className="text-2xl text-gray-800 font-bold mb-6">
                  {currentScreenData.question}
                </h2>
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
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    {currentScreenData.answer}
                  </p>
                  {currentScreenData?.bulletPoints && (
                    <ul className="list-disc list-inside space-y-2">
                      {currentScreenData.bulletPoints.map((point, index) => (
                        <li key={index} className="text-lg text-gray-700">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}

            <div className="flex justify-center">
              {currentScreen < screens.length && currentScreenData?.buttonText && (
                <button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-xl"
                >
                  {currentScreenData.buttonText}
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