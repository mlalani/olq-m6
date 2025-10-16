'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Import your images
import S1 from '../assets/s1.png';
import S2 from '../assets/s2.png';
import S3 from '../assets/s3.png';
import S4 from '../assets/s4.png';

const scenes = [
  {
    title: '',
    image: S1,
    content:
      "Meet Dr. Zoya who invented a helpful robot called RoboPick, a cheerful assistant built to make everyone’s life easier. RoboPick could talk, walk, carry bags, and even hum while working!\nIts main job is to help people pick up groceries and everyday items from the local store.",
  },
  {
    title: 'Can you guess what might have gone wrong with RoboPick?',
    image: null,
    content: '',
  },
  {
    title: '',
    image: S2,
    content:
      'RoboPick was facing challenges in identifying things!\nIt couldn’t tell the difference between toothpaste and a cucumber, or broccoli and a shampoo bottle.\nSo every time someone said, “Get me some bananas,” RoboPick returned with a bar of soap!',
  },
  {
    title: 'Can you guess what an AI model means?',
    image: null,
    content: '',
  },
  {
    title: '',
    image: null,
    content:
      "An AI model is like a robot's brain that helps it understand, recognize, and make smart decisions, just like we do!\nBut instead of learning from books or school, an AI model learns from examples: like pictures, sounds, or words we give it.",
  },
  {
    title: 'Training Method 1: Supervised Learning',
    image: S3,
    content:
      'Dr. Zoya showed RoboPick many pictures. For every image, she clearly said what it was:\n“This is an apple.”\n“This is broccoli.”\n“This is toothpaste.”\nThis is called Supervised Learning.',
  },
  {
    title: 'Training Method 2: Unsupervised Learning',
    image: S4,
    content:
      'This time, Dr. Zoya gave RoboPick a huge grocery box, but didn’t tell it the names of anything!\nRoboPick had to look at the items and group them based on what they looked like:\n- Round green things\n- Tall thin yellow things\n- Small square shiny things\nThis is called Unsupervised Learning.',
  },
  {
    title:
      'So, what do you think would be the best approach to help RoboPick learn how to identify items accurately? And why?',
    image: null,
    content: '',
  },
];

export default function Com() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < scenes.length - 1) {
      setStep(step + 1);
    }
  };

  const scene = scenes[step];

  const isRowLayout = step >= 5 && scene.image && scene.content; // start from index 5

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
      {scene.title && (
        <h1 className="text-3xl font-bold text-blue-800 mb-6">{scene.title}</h1>
      )}

      {isRowLayout ? (
        <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl">
          <div className="flex-1">
            <Image
              src={scene.image}
              alt={scene.title || 'RoboPick'}
              width={400}
              height={300}
              className="rounded-lg shadow-md mx-auto"
            />
          </div>
          <div className="flex-1 text-left">
            <p className="text-2xl text-gray-700 whitespace-pre-line">
              {scene.content}
            </p>
          </div>
        </div>
      ) : (
        <>
          {scene.content && (
            <p className="text-2xl text-gray-700 max-w-3xl whitespace-pre-line mb-6">
              {scene.content}
            </p>
          )}

          {scene.image && (
            <div className="mb-6">
              <Image
                src={scene.image}
                alt={scene.title || 'RoboPick'}
                width={400}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          )}
        </>
      )}

      {step < scenes.length - 1 && (
        <button
          onClick={handleNext}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Next
        </button>
      )}
    </div>
  );
}
