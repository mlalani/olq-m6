'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import S1 from '../assets/s1.png';
import S2 from '../assets/s2.png';

const Com = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  
  const salesData = [
    { date: "July 10", item: "Margherita", units: 14 },
    { date: "July 10", item: "Veggie Blast", units: 10 },
    { date: "July 11", item: "Cheese Burst", units: 16 },
    { date: "July 11", item: "Margherita", units: 7 },
    { date: "July 12", item: "Paneer Fiesta", units: 12 },
    { date: "July 12", item: "Veggie Blast", units: 8 },
    { date: "July 13", item: "Margherita", units: 11 },
    { date: "July 14", item: "Cheese Burst", units: 9 },
    { date: "July 14", item: "Paneer Fiesta", units: 6 },
    { date: "July 15", item: "Veggie Blast", units: 18 }
  ];

  const screens = [
    {
      id: 1,
      text: "Let’s look at how graphs can help a real business like The Pizza Pals Crew!",
      image: S1,
      buttonText: "Next"
    },
    {
      id: 2,
      text: "After analyzing their weekly pizza sales, they want to see their performance more clearly, yet the owner finds it challenging to identify:",
      questions: [
        "Which day was the busiest?",
        "When were sales the lowest?"
      ],
      additionalText: "They’ve been keeping track of everything in a Google Sheet, but it's not properly managed.",
      buttonText: "Next"
    },
    {
      id: 3,
      text: "",
      showTable: true,
      additionalText: "Let’s create a bar graph using this data and try to answer some questions of The Pizza Pals Crew!",
      buttonText: "Next"
    },
    {
      id: 4,
      text: "Graphs are like magic pictures that turn numbers into bars, pie charts or lines, so we can understand them quickly. They help us compare datasets and make smart choices.",
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

        {currentScreenData?.additionalText && (
          <div className="text-center mb-8">
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              {currentScreenData.additionalText}
            </p>
          </div>
        )}

        {currentScreenData?.showTable && (
          <div className="mb-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                    <th className="border border-gray-300 px-4 py-3 text-lg font-bold text-center">
                      Date
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-lg font-bold text-center">
                      Item Sold
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-lg font-bold text-center">
                      Units Sold
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="border border-gray-300 px-4 py-2 text-lg font-medium">
                        {item.date}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-lg font-medium">
                        {item.item}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-lg font-medium text-center">
                        {item.units}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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