'use client';
import React from 'react';
import Image from 'next/image';
import S1 from '../assets/s1.png';

const Com = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-6xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl text-gray-800 font-bold mb-6">
            Brew & Bite Cafe a neighborhood spot known for its beverages and brunch bites.
          </h1>
        </div>

        <div className="flex justify-center mb-8">
          <div className="relative">
            <Image
              src={S1}
              alt="Brew & Bite Cafe"
              className="max-w-full h-auto rounded-2xl shadow-lg"
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
            For the past 7 days, the cafe team has been tracking sales and customer feedback and they need help to:
          </p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-6">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4 mt-0.5 flex-shrink-0">
                1
              </span>
              <span className="text-lg text-gray-700 font-medium">Understand what customers really think about their product.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4 mt-0.5 flex-shrink-0">
                2
              </span>
              <span className="text-lg text-gray-700 font-medium">Analyze product performance.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Com;