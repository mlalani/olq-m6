'use client';
import React from 'react';

const Com = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Let's become a young digital detective! You need to explore the world of cryptocurrency and create your own simple case study using Google Docs.
        </h1>
        
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          What You Need to Do:
        </h2>
        
        <ol className="text-lg text-gray-600 space-y-2">
          <li>Pick a Popular Cryptocurrency:</li>
          <li>Examples: Bitcoin, Ethereum, Solana, or Dogecoin</li>
          <li>Answer these questions:</li>
          <li>1. What is the name of the cryptocurrency?</li>
          <li>2. When was it created, and who created it?</li>
          <li>3. What makes it special or different from other cryptocurrencies?</li>
          <li>4. How do people use it in the real world? Is it safe to use?</li>
          <li>5. What are some fun facts about this crypto?</li>
          <li>6. Add a picture of the cryptocurrency logo</li>
        </ol>
      </div>
    </div>
  );
};

export default Com;