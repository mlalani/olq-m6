'use client';

import { useState } from 'react';
import Image from 'next/image';
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";
import S4 from "../assets/s4.png";
import S5 from "../assets/s5.png";
import S6 from "../assets/s6.png";
import S7 from "../assets/s7.png";
import S8 from "../assets/s8.png";
import S9 from "../assets/s9.png";

const imageScreens = [
  { id: 1, image: S1, type: 'single' },
  { id: 2, image: S2, type: 'single' },
  { id: 3, image: S3, type: 'single' },
  { id: 4, image: S4, type: 'single' },
  { id: 5, image: S5, type: 'single' },
  { id: 6, image: S6, type: 'double', secondImage: S7 },
  { id: 7, image: S8, type: 'double', secondImage: S9 },
];

const contentBlocks = [
  {
    title: 'Safety First',
    description:
      "A kids profile protects you from seeing content that may be scary, harmful, or not meant for your age. It keeps your online watching experience safe and child-friendly.",
  },
  {
    title: 'Better Recommendations',
    description:
      "When you use your own profile, the platform understands what you enjoy watching like cartoons, science videos, or space adventures and shows more of what you like.",
  },
  {
    title: 'Your Own Space',
    description:
      "Everyone in the family can have their own profile. That means your watch history stays clean and separate, and your screen won’t be filled with shows meant for adults.",
  },
];

export default function Com() {
  const [showContentBlocks, setShowContentBlocks] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  const currentImage = imageScreens[currentImageIndex];
  const currentContent = contentBlocks[currentContentIndex];
  const isLastImage = currentImageIndex === imageScreens.length - 1;
  const isLastContent = currentContentIndex === contentBlocks.length - 1;

  const handleNext = () => {
    if (!showContentBlocks) {
      // Still showing image screens
      if (!isLastImage) {
        setCurrentImageIndex((prev) => prev + 1);
      } else {
        // Move to content blocks
        setShowContentBlocks(true);
      }
    } else {
      // Showing content blocks
      if (!isLastContent) {
        setCurrentContentIndex((prev) => prev + 1);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-rose-100 flex flex-col items-center justify-start px-6 py-10">
      {!showContentBlocks ? (
        // Image Screens
        <div className="flex flex-col items-center space-y-8">

          <div className="bg-white shadow-xl rounded-3xl p-8 max-w-8xl w-full">
            {currentImage.type === 'single' ? (
              <div className="flex justify-center">
                <Image
                  src={currentImage.image}
                  alt={`Screen ${currentImage.id}`}
                  className="w-full max-w-4xl h-auto rounded-lg"
                />
              </div>
            ) : (
              <div className="flex justify-center gap-6">
                <Image
                  src={currentImage.image}
                  alt={`Screen ${currentImage.id}`}
                  className="w-full max-w-2xl h-auto rounded-lg"
                />
                <Image
                  src={currentImage.secondImage}
                  alt={`Screen ${currentImage.id + 1}`}
                  className="w-full max-w-2xl h-auto rounded-lg"
                />
              </div>
            )}
          </div>

          <button
            onClick={handleNext}
            className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg transition"
          >
            Next
          </button>
        </div>
      ) : (
        // Content Blocks
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-3xl font-bold text-purple-800 mb-10 text-center">
            Benefits
          </h1>

          <div className="bg-white shadow-xl rounded-3xl p-10 max-w-3xl w-full text-center space-y-8">
            <h2 className="text-3xl font-bold text-indigo-700">{currentContent.title}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">{currentContent.description}</p>

            {!isLastContent && (
              <button
                onClick={handleNext}
                className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg transition"
              >
                Next
              </button>
            )}

            {isLastContent && (
              <p className="text-green-600 text-xl font-semibold mt-6">
                🎉 That's why your own profile matters!
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
