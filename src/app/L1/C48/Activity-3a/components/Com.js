'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import S1 from '../assets/s1.png'
import S2 from '../assets/s2.png'
import S3 from '../assets/s3.png'
import S4 from '../assets/s4.png'
import S5 from '../assets/s5.png'


const scenes = [
  {
    title: '',
    image: S1,
    imageAfterContent: true, // This flag is unique for Scene 1
    content:
      'A submarine is a special underwater vehicle that can travel far below the surface where it\'s dark and deep.',
  },
  {
    title: 'Body',
    image: S2,
    content:
      'The main outside shell that keeps everyone inside safe and dry, like how a turtle’s shell protects the turtle.',
  },
  {
    title: 'Ballasts',
    image: S3,
    content:
      'Special tanks that fill with water to help the submarine go down, and fill with air to make it come up, like when you hold your breath and sink in a pool, or blow bubbles and float up.',
  },
  {
    title: 'Hatch',
    image: S4,
    content:
      'The “door” of the submarine, where people can climb in or out, like a little lid on a jar.',
  },
  {
    title: 'Oxygen Canister',
    image: S5,
    content:
      'Big bottles filled with fresh air, so people can breathe underwater, like carrying your own backpack of air!',
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4 text-center">
      {scene.title && (
        <h1 className="text-3xl font-bold text-blue-800 mb-4">{scene.title}</h1>
      )}


      <p className="text-2xl text-gray-700 max-w-3xl mb-6">{scene.content}</p>
      {/* Show image above content unless flagged for after-content */}
      {scene.image && !scene.imageAfterContent && (
        <div className="mb-4">
          <Image
            src={scene.image}
            alt={scene.title || 'Submarine'}
            width={500}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Show image after content if flagged */}
      {scene.image && scene.imageAfterContent && (
        <div className="mt-4">
          <Image
            src={scene.image}
            alt={scene.title || 'Submarine'}
            width={500}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
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
