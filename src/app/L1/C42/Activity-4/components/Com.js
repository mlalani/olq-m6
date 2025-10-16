'use client';

import { useState } from 'react';

const contentBlocks = [
  {
    title: 'Safety First!',
    description:
      "This is the most important reason! When you have your own 'Kids' profile, the platform knows exactly how old you are. It will only show you shows and movies perfect for you so you never accidentally see something that's too scary or confusing for you.",
  },
  {
    title: 'Only Fun Stuff for You!',
    description:
      "When you use your own profile, the platform learns what you like. So, if you love animal videos and cartoons, it will show you more animal videos and cartoons! You won't get recommendations for boring news or finance videos that your parents watch.",
  },
  {
    title: 'Everyone Gets Their Own Space!',
    description:
      "Your parents can have their profile with their shows, and you can have your profile with your shows. Everyone's watch history stays separate, neat, and tidy!",
  },
];

export default function Com() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = contentBlocks[currentIndex];
  const isLast = currentIndex === contentBlocks.length - 1;

  const handleNext = () => {
    if (!isLast) setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-rose-100 flex flex-col items-center justify-start px-6 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-purple-800 mb-10 text-center">
        Purpose and Usefulness Of Personal Profile
      </h1>

      {/* Card */}
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-3xl w-full text-center space-y-8">
        <h2 className="text-3xl font-bold text-indigo-700">{current.title}</h2>
        <p className="text-gray-700 text-lg leading-relaxed">{current.description}</p>

        {!isLast && (
          <button
            onClick={handleNext}
            className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg transition"
          >
            Next
          </button>
        )}

        {isLast && (
          <p className="text-green-600 text-xl font-semibold mt-6">
            {/* 🎉 That’s why your own profile matters! */}
          </p>
        )}
      </div>
    </div>
  );
}
