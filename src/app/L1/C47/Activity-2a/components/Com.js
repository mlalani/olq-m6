'use client';
import React, { useState } from 'react';

const Com = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [feedback, setFeedback] = useState(null);
  
  const screens = [
    {
      id: 1,
      text: "Play a pet game with your friend in Roblox",
      correctAnswer: "Can Do"
    },
    {
      id: 2,
      text: "Smell the flowers in the game",
      correctAnswer: "Can't Do"
    },
    {
      id: 3,
      text: "Build a treehouse in a virtual world",
      correctAnswer: "Can Do"
    },
    {
      id: 4,
      text: "Change how you Avataar looks",
      correctAnswer: "Can Do"
    },
    {
      id: 5,
      text: "Taste the ice cream in your virtual shop",
      correctAnswer: "Can't Do"
    },
    {
      id: 6,
      text: "Say mean or rude things to another player",
      correctAnswer: "Should Not Do"
    },
    {
      id: 7,
      text: "Tell someone your home address",
      correctAnswer: "Should Not Do"
    },
    {
      id: 8,
      text: "Give your phone number to someone online",
      correctAnswer: "Should Not Do"
    },
    {
      id: 9,
      text: "Touch the grass and feel it",
      correctAnswer: "Can't Do"
    },
    {
      id: 10,
      text: "Play with people online you don't know in real life without asking an adult",
      correctAnswer: "Should Not Do"
    }
  ];

  const handleNext = () => {
    if (currentScreen < screens.length) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFeedback(null); // Reset feedback when new selection is made
    
    const currentScreenData = screens.find(screen => screen.id === currentScreen);
    const isCorrect = category === currentScreenData.correctAnswer;
    
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    
    // Only move to next screen if correct
    if (isCorrect) {
      setTimeout(() => {
        if (currentScreen <= screens.length) {
          setCurrentScreen(currentScreen + 1);
          setSelectedCategory(null);
          setFeedback(null);
        }
      }, 1500);
    }
  };

  const currentScreenData = screens.find(screen => screen.id === currentScreen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center p-4">
      {currentScreen > screens.length ? (
        // Completion Screen - Only show completion message
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full text-center">
          <p className="text-3xl font-bold text-green-600">
            You have completed the Metaverse Safety activity!
          </p>
        </div>
      ) : (
        // Main Activity Screen
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Can Do, Can't Do, Should Not Do!
            </h1>
            
            {/* Instructions */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4">Instructions:</h2>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Classify each action into one of the 3 ways:</strong>
              </p>
              <ul className="text-left space-y-2 text-lg">
                <li><strong>Can Do:</strong> Actions that are physically possible and okay to do in a virtual world.</li>
                <li><strong>Can't Do:</strong> Actions that aren't physically possible in a virtual world.</li>
                <li><strong>Should Not Do:</strong> Actions that are not safe to do in the virtual world</li>
              </ul>
            </div>
          </div>

          {/* Text Content */}
          {currentScreenData?.text && (
            <div className="text-center mb-8">
              <p className="text-3xl text-gray-700 leading-relaxed font-medium">
                {currentScreenData.text}
              </p>
            </div>
          )}

          {/* Image Container */}
          <div className="flex justify-center mb-2">
            <div className="relative">

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

          {/* Category Selection Buttons */}
          <div className="flex flex-col space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => handleCategorySelect('Can Do')}
                className={`py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                  selectedCategory === 'Can Do' 
                    ? 'bg-green-500 text-white shadow-lg scale-105' 
                    : 'bg-green-100 text-green-700 hover:bg-green-200 hover:scale-105'
                }`}
              >
                Can Do
              </button>
              
              <button
                onClick={() => handleCategorySelect('Can\'t Do')}
                className={`py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                  selectedCategory === 'Can\'t Do' 
                    ? 'bg-yellow-500 text-white shadow-lg scale-105' 
                    : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200 hover:scale-105'
                }`}
              >
                Can't Do
              </button>
              
              <button
                onClick={() => handleCategorySelect('Should Not Do')}
                className={`py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 ${
                  selectedCategory === 'Should Not Do' 
                    ? 'bg-red-500 text-white shadow-lg scale-105' 
                    : 'bg-red-100 text-red-700 hover:bg-red-200 hover:scale-105'
                }`}
              >
                Should Not Do
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Com;