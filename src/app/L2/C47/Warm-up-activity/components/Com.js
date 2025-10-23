'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import S1 from '../assets/s1.png';
import S2 from '../assets/s2.png';
import S3 from '../assets/s3.png';
import S4 from '../assets/s4.png';
import S5 from '../assets/s5.png';
import S6 from '../assets/s6.png';
import S7 from '../assets/s7.png';
import S8 from '../assets/s8.png';
import S9 from '../assets/s9.png';
import S10 from '../assets/s10.png';
import S11 from '../assets/s11.png';

const Com = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const images = [
    { id: 1, src: S1, correctAnswer: "Real" },
    { id: 2, src: S2, correctAnswer: "Virtual" },
    { id: 3, src: S3, correctAnswer: "Real" },
    { id: 4, src: S4, correctAnswer: "Real" },
    { id: 5, src: S5, correctAnswer: "Virtual" },
    { id: 6, src: S6, correctAnswer: "Real" },
    { id: 7, src: S7, correctAnswer: "Virtual" },
    { id: 8, src: S8, correctAnswer: "Real" },
    { id: 9, src: S9, correctAnswer: "Virtual" },
    { id: 10, src: S10, correctAnswer: "Virtual" },
    { id: 11, src: S11, correctAnswer: "Virtual" },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFeedback(null);
    
    const currentImageData = images.find(img => img.id === currentScreen);
    const isCorrect = category === currentImageData.correctAnswer;
    
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
      setTimeout(() => {
        if (currentScreen <= images.length) {
          setCurrentScreen(currentScreen + 1);
          setSelectedCategory(null);
          setFeedback(null);
        }
      }, 500);
    }
  };

  const currentImage = images.find(img => img.id === currentScreen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
      {currentScreen > images.length ? (
        // Completion Screen
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full text-center">
          <p className="text-3xl font-bold text-green-600">
            You have completed the Real or Virtual activity!
          </p>
        </div>
      ) : (
        // Main Activity Screen
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Real or Virtual
            </h1>
            
            {/* Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4">Instructions:</h2>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Group the items as real or virtual.</strong>
              </p>
              <ul className="text-left space-y-2 text-lg">
                <li><strong>Real:</strong> Items we can touch and feel in the real world</li>
                <li><strong>Virtual:</strong> Items that stay only in the virtual world</li>
              </ul>
            </div>
          </div>

          {/* Image Container */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Image
                src={currentImage?.src}
                alt={`Screen ${currentScreen}`}
                className="max-w-full h-auto rounded-2xl shadow-lg"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Feedback Display */}
          {feedback && (
            <div className={`text-center mb-6 p-4 rounded-lg ${
              feedback === 'correct' 
                ? 'bg-green-100 border-2 border-green-300' 
                : 'bg-red-100 border-2 border-red-300'
            }`}>
              <p className={`text-xl font-bold ${
                feedback === 'correct' ? 'text-green-700' : 'text-red-700'
              }`}>
                {feedback === 'correct' ? 'Correct! Well done!' : 'Incorrect. Try again!'}
              </p>
            </div>
          )}

          {/* Selection Buttons */}
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => handleCategorySelect('Real')}
              className={`py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 ${
                selectedCategory === 'Real' 
                  ? 'bg-green-500 text-white shadow-lg scale-105' 
                  : 'bg-green-100 text-green-700 hover:bg-green-200 hover:scale-105'
              }`}
            >
              Real
            </button>
            
            <button
              onClick={() => handleCategorySelect('Virtual')}
              className={`py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 ${
                selectedCategory === 'Virtual' 
                  ? 'bg-blue-500 text-white shadow-lg scale-105' 
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200 hover:scale-105'
              }`}
            >
              Virtual
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Com;