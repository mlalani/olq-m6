'use client';
import React from 'react';

const Com = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Let's become young digital detectives! Explore the world of cryptocurrency.
        </h1>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-blue-800 mb-4">Instructions:</h2>
          <p className="text-lg text-gray-700 mb-4">
            Pick any one popular Cryptocurrency (Bitcoin, Ethereum, Solana, or Dogecoin) and create a presentation on it.
          </p>
          <p className="text-lg text-gray-700">
            Here are guiding questions to complete the activity:
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Slide 1:</h3>
            <p className="text-lg text-gray-600">What is the name of the cryptocurrency? Add name and a picture of the cryptocurrency logo.</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Slide 2:</h3>
            <p className="text-lg text-gray-600">When was it created, and who created it?</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Slide 3:</h3>
            <p className="text-lg text-gray-600">What makes it special or different from other cryptocurrencies?</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Slide 4:</h3>
            <p className="text-lg text-gray-600">How do people use it in the real world? Is it safe to use?</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Slide 5:</h3>
            <p className="text-lg text-gray-600">What are some fun facts about this cryptocurrency?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Com;