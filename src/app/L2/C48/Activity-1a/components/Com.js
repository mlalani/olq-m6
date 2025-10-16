'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import S1 from '../assets/s1.png';
import S2 from '../assets/s2.png';
import S3 from '../assets/s3.png';
import S4 from '../assets/s4.png';
import S5 from '../assets/s5.png';

const scenes = [
  {
    title: 'Do you know what GSLV Mk III is?',
    image: S1,
    content: '',
  },
  {
    title: 'Name & Purpose',
    image: S1,
    content:
      'GSLV stands for Geosynchronous Satellite Launch Vehicle. GSLV Mk III (now called LVM-3) is a three-stage rocket made by ISRO (India’s space agency) to lift heavy satellites into space.',
  },
  {
    title: "Why It's Special:",
    image: S1,
    content:
      'It’s capable of carrying over 4 tonnes into high space, that’s like lifting 20 elephants! GSLV Mk III is the rocket that helped send missions like Chandrayaan-2 and Chandrayaan-3 to the Moon.',
  },
  {
    title: 'Let’s checkout the parts of GSLV Mk III',
    image: S1,
    content: '',
  },
  {
    title: 'C25 Core Stage (Middle Part):',
    image: S2,
    content:
      'This is like the rocket’s belly. It has powerful fuel to push the rocket really high.\nExample: Think of it like the engine of a race car, it gives the rocket its zoom!',
  },
  {
    title: 'S200 Boosters (Side Parts):',
    image: S3,
    content:
      'These are like two big sidekick arms that help the rocket blast off in the beginning.\nExample: Like having two strong friends pushing you on a swing!',
  },
  {
    title: 'L110 Liquid Stage (Upper Middle):',
    image: S4,
    content:
      'This part burns special fuel to keep the rocket going even after the boosters are done.\nExample: Like a battery that keeps your toy running after you start it!',
  },
  {
    title: 'Payload Adaptor',
    image: S5,
    content:
      'It is like the rocket’s backpack! It safely holds the satellite or spaceship that the rocket is carrying into space.',
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
  const isSideBySide = step >= 4; // from Scene 5 onwards (index 4)

  return (
    <div className="flex flex-col items-center justify-flex-start min-h-screen bg-gray-50 p-4 text-center">
      {scene.title && (
        <h1 className="text-3xl font-bold text-blue-800 mb-6">{scene.title}</h1>
      )}

      {isSideBySide ? (
        <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl text-left">
          {/* Text */}
          {/* Image */}
          <Image
            src={scene.image}
            alt={scene.title}
            width={300}
            height={400}
            className="rounded-lg shadow-md flex-1"
          />
          <p className="text-2xl text-gray-700 whitespace-pre-line flex-1">
            {scene.content}
          </p>

        </div>
      ) : (
        <>
          {scene.content && (
            <p className="text-2xl text-gray-700 max-w-3xl whitespace-pre-line mb-6">
              {scene.content}
            </p>
          )}
          {scene.image && (
            <div className="mb-4">
              <Image
                src={scene.image}
                alt={scene.title}
                width={500}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          )}
        </>
      )}

      {step < scenes.length - 1 && (
        <button
          onClick={handleNext}
          className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Next
        </button>
      )}
    </div>
  );
}
