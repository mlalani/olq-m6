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
        "On which day and in which shift did Ice cream flavor Vanilla was sold the most?"
      ],
      buttonText: "Next"
    },
    {
      id: 4,
      text: "One day, May's big sister showed him something amazing called Google Sheets, which can help Maya to keep the data in a structured manner.",
      buttonText: "Next"
    },
    {
      id: 5,
      question: "Have you used Google Sheets before?",
      answer: "It's like a digital notebook that organizes data info into neat columns and rows.",
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
                alt="Maya's Ice Cream Shop"
                className="max-w-full h-auto rounded-2xl shadow-lg"
                width={400}
                height={400}
              />
            </div>
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
          <div className="text-center mb-8">
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
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentScreenData.answer}
              </p>
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
  );
};

export default Com;