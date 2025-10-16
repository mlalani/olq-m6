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
      question: "Do you know what Cryptocurrency is?",
      image: S1,
      answer: "Cryptocurrency is a type of digital money that is stored and used online. You can't hold it like coins or bills, but you can use it to buy things, trade, or save it, just like real money. The cool thing is: it's not made by banks or governments, it's created using computers and code!",
      nextQuestion: "Can you guess how cryptocurrency is created?"
    },
    {
      id: 2,
      question: "Can you guess how cryptocurrency is created?",
      answer: "Cryptocurrency is created through a process called mining, but not with shovels or digging! Instead, computers work like giant calculators solving very tricky puzzles. These puzzles help check and confirm digital money transactions made by people around the world.",
      nextQuestion: "Can anyone create a cryptocurrency?"
    },
    {
      id: 3,
      question: "Can anyone create a cryptocurrency?",
      answer: "Yes, if someone understands coding and blockchain technology, they can create their own. But just like building a new app or website, it takes a lot of skill.",
      nextQuestion: "What do you think about where people keep cryptocurrency?"
    },
    {
      id: 4,
      question: "What do you think about where people keep cryptocurrency?",
      answer: "People keep their cryptocurrency in something called a digital wallet. It's like a special app or website where all your digital money is stored safely. Here are some real apps and websites people use to store their crypto: Coinbase, MetaMask, Binance",
      nextQuestion: null
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full">


        <div className="text-center mb-8">
          <h1 className="text-3xl text-gray-800 font-bold mb-6">
            {currentScreenData?.question}
          </h1>
        </div>


        {currentScreenData?.image && (
          <div className="flex justify-center mb-8">
            <Image
              src={currentScreenData.image}
              alt="Cryptocurrency"
              className="max-w-full h-auto rounded-2xl shadow-lg"
              width={300}
              height={300}
            />
          </div>
        )}
        
        {!showAnswer && (
          <div className="flex justify-center mb-8">
            <button
              onClick={handleRevealAnswer}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-xl"
            >
              Reveal Answer
            </button>
          </div>
        )}

        {showAnswer && (
          <div className="mb-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentScreenData?.answer}
              </p>
            </div>
          </div>
        )}

        {showAnswer && currentScreenData?.nextQuestion && (
          <div className="flex justify-center">
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 text-xl"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Com;