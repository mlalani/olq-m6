'use client';

import { useState } from 'react';
import Image from 'next/image';

import C1 from '../assets/c1.jpeg';
import C2 from '../assets/c2.jpeg';
import C3 from '../assets/c3.jpeg';

const situations = [
  {
    id: 1,
    title: 'Roy played games on his tablet for 3 hours straight.',
    image: C1,
    correctAnswer: 'Red',
    followUps: [
      "Why do you think that's a red flag?",
      "What else could Roy do instead of playing for 3 hours straight? What's an alternative action he could take to have a more balanced day?",
    ],
  },
  {
    id: 2,
    title: 'Lily watched her favorite show for 20 minutes, then took a break and went out.',
    image: C2,
    correctAnswer: 'Green',
    followUps: [],
  },
  {
    id: 3,
    title: 'Sam always watches videos on his tablet right before he goes to bed.',
    image: C3,
    correctAnswer: 'Red',
    followUps: [
      "Why do you think that's a red flag?",
      "What's a better way for Sam to get ready for sleep instead of watching videos?",
    ],
  },
];

export default function Com() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [followUpIndex, setFollowUpIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  const current = situations[currentIndex];

  const handleSelection = (choice) => {
    setSelected(choice);
    setShowFeedback(true);
    setIsCorrect(choice === current.correctAnswer);
  };

  const handleNext = () => {
    const hasMoreFollowUps = followUpIndex < current.followUps.length - 1;

    if (hasMoreFollowUps) {
      setFollowUpIndex((prev) => prev + 1);
    } else {
      const isLast = currentIndex === situations.length - 1;
      if (isLast) {
        setCompleted(true);
      } else {
        setCurrentIndex((prev) => prev + 1);
        setSelected(null);
        setIsCorrect(false);
        setShowFeedback(false);
        setFollowUpIndex(0);
      }
    }
  };

  if (completed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <h2 className="text-3xl font-bold text-green-700">
          You've completed all the scenarios!
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 to-pink-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-4xl w-full text-center space-y-6">
        <h2 className="text-2xl font-bold text-indigo-800">{current.title}</h2>

        <div className="flex justify-center">
          <Image
            src={current.image}
            alt="situation"
            className="w-[40%] object-contain rounded-xl shadow"
          />
        </div>

        <div className="flex justify-center gap-6 mt-4">
          <button
            onClick={() => handleSelection('Green')}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold"
          >
            Green Flag 🟢
          </button>
          <button
            onClick={() => handleSelection('Red')}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold"
          >
            Red Flag 🔴
          </button>
        </div>

        {showFeedback && (
          <>
            <p
              className={`text-lg mb-2 font-semibold ${isCorrect ? 'text-green-600' : 'text-red-500'
                }`}
            >
              {isCorrect ? 'Correct!' : 'Oops! Incorrect'}
            </p>

            {isCorrect && current.followUps.length > 0 && (
              <div className="text-lg text-gray-800 mt-2">
                {current.followUps[followUpIndex]}
              </div>
            )}

            {isCorrect && (
              <button
                onClick={handleNext}
                className="mt-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full"
              >
                {followUpIndex < current.followUps.length - 1 ? 'Next' : 'Continue'}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
