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
      answer: "Cryptocurrency is a virtual money that you can use online in certain shops, games, or websites.",
      nextQuestion: "How is it different from real currency?"
    },
    {
      id: 2,
      question: "How is it different from real currency?",
      image: S1,
      answer: "You can’t hold it in your hand or use it to buy everyday items in any store or shop. It is not saved in your wallet, bank or safe. Instead, it's stored safely using computers. You can use it to pay or trade, or even save it like real money! it’s not made by banks or governments; it's created using computers and code!",
      nextQuestion: "How is cryptocurrency created?"
    },
    {
      id: 3,
      question: "How is cryptocurrency created?",
      answer: "Cryptocurrency is created through a process called mining, but not with shovels or digging! Instead, computers work like giant calculators solving very tricky puzzles. These puzzles help check and confirm digital money transactions made by people around the world.",
      nextQuestion: "Can anyone create a cryptocurrency?"
    },
    {
      id: 4,
      question: "Can anyone create a cryptocurrency?",
      answer: "Yes, if they know coding and blockchain technology, they can create their own. But just like building a new app or website, it requires lots of skills..",
      nextQuestion: "How is cryptocurrency different from digital wallet like apple pay, gpay?"
    },
    {
      id: 5,
      question: "How is cryptocurrency different from digital wallet like apple pay, gpay?",
      answer: "Digital wallet holds your money safely and lets you send or receive it.  Just as you would open your wallet and remove cash, you access a digital wallet to make payments. Cryptocurrency uses advanced encryption techniques to verify and secure transactions. When you own cryptocurrency, you don't own a tangible coin or cash. Instead, you own a cryptographic key that gives you the ability to transfer a record of that currency from one person to another. Here are some real apps and websites people use to store their crypto: Coinbase, MetaMask, Binance",
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