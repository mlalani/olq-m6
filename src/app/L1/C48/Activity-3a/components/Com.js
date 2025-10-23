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
    title: 'Make Up',
    image: S1,
    imageAfterContent: true, // This flag is unique for Scene 1
    content:
      'A submarine is made up of a main shell on the outside to keep everyone safe. Think of how a turtle’s shell protects it from the external environment. ',
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
      'These are special tanks that fill with water to help the submarine go beneath the surface. It fills up with air to make it come up. Think of how when you hold your breath, you go deep into water. Then as you blow bubbles, you can float to come up to the surface.',
  },
  {
    title: 'Hatch',
    image: S4,
    content:
      'This is the “door” of the submarine that people can use to climb in or out, just like a little lid on a jar you can open to grab candy.',
  },
  {
    title: 'Oxygen Canister',
    image: S5,
    content:
      'These are big bottles filled with fresh air to let people breathe underwater. It’s just like carrying your own backpack full of oxygen!',
  },
];

export default function Com() {
  const [step, setStep] = useState(-1); // Start at -1 to show intro screen first
  const [started, setStarted] = useState(false);

  const handleNext = () => {
    if (step < scenes.length - 1) {
      setStep(step + 1);
    }
  };

  const handleStart = () => {
    setStarted(true);
    setStep(0);
  };

  const scene = scenes[step];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4 text-center">
      {!started ? (
        // Screen 1: Introduction
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-blue-800 mb-8">
            Let's discuss some important parts of the submarine!
          </h1>
          <button
            onClick={handleStart}
            className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 text-xl font-semibold transform hover:scale-105 transition-all duration-300"
          >
            Start
          </button>
        </div>
      ) : (
        // Scenes
        <>
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
        </>
      )}
    </div>
  );
}
