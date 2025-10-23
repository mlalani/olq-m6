'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import S1 from '../assets/s1.png';
import S2 from '../assets/s2.png';
import S3 from '../assets/s3.png';

const Com = () => {
  const [currentScreen, setCurrentScreen] = useState(1);

  const salesData = [
    { date: "June 1", sold: 34 },
    { date: "June 2", sold: 41 },
    { date: "June 3", sold: 36 },
    { date: "June 4", sold: 45 },
    { date: "June 5", sold: 60 },
    { date: "June 6", sold: 72 },
    { date: "June 7", sold: 80 },
    { date: "June 8", sold: 65 },
    { date: "June 9", sold: 50 },
    { date: "June 10", sold: 40 },
    { date: "June 11", sold: 78 },
    { date: "June 12", sold: 84 },
    { date: "June 13", sold: 90 },
    { date: "June 14", sold: 68 },
    { date: "June 15", sold: 49 },
    { date: "June 16", sold: 39 },
    { date: "June 17", sold: 53 },
    { date: "June 18", sold: 76 },
    { date: "June 19", sold: 81 },
    { date: "June 20", sold: 88 }
  ];

  const screens = [
    {
      id: 1,
      text: "Maya, the owner of The Frosty Spot, tracked her ice-cream sales for 20 days straight during summer vacation. She wants to know about the highest and the lowest sales days",
      image: S1,
      buttonText: "Next"
    },
    {
      id: 2,
      text: "Can you identify the day with the highest sales?",
      showTable: true,
      buttonText: "Next"
    },
    {
      id: 3,
      text: "Would it be easy to find the answer just by looking at all these numbers?",
      showTable: true,
      buttonText: "Next"
    },
    {
      id: 4,
      text: "Graphs are like magic pictures that turn numbers into bars, pie charts or lines, so we can understand them quickly. They help us compare datasets and make smart choices.",
      image: S2,
      buttonText: "Next"
    },
    {
      id: 5,
      text: "Do you know what a bar graph is?",
      image: S3,
      buttonText: "Next"
    },
    {
      id: 6,
      text: "It's a cool kind of chart that shows information using bars of different heights. The taller the bar, the more there is! It's a fun and easy way to compare things at a glance.",
      image: S3,
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



        {currentScreenData?.showTable && (
          <div className="mb-8">
            <h1 className="text-xl text-center text-gray-700 font-bold mb-8">Take a look at Maya's ice cream sales data</h1>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                    <th className="border border-gray-300 px-3 py-2 text-md font-bold text-center">
                      Date
                    </th>
                    <th className="border border-gray-300 px-3 py-2 text-md font-bold text-center">
                      Ice Creams Sold
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {salesData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="border border-gray-300 px-3 py-1 text-md font-medium">
                        {item.date}
                      </td>
                      <td className="border border-gray-300 px-3 py-1 text-md font-medium text-center">
                        {item.sold}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

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
                alt="Graph Example"
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