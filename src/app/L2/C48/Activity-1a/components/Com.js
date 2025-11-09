'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import S1 from '../assets/s1.png';
import S2 from '../assets/s2.png';
import S3 from '../assets/s3.png';
import S4 from '../assets/s4.png';

const scenes = [
  {
    title: 'Do you know what the Space Launch System (SLS) is?',
    image: S1,
    content: 'The SLS is NASA’s most powerful rocket ever built! It’s designed to take astronauts and equipment beyond Earth,  even to the Moon and Mars',
  },
  {
    title: 'Purpose',
    image: S1,
    content:
      'SLS is a very big rocket made by NASA to carry astronauts, spacecraft, and heavy equipment far into space, for example, to the Moon and one day to Mars. It helps send people and things that are too large for smaller rockets.',
  },
  {
    title: "What makes is special:",
    image: S1,
    content: [
      "Super strong lift: SLS is one of the most powerful rockets ever built, it can carry very heavy loads deep into space.",
      "Takes people far: It is made for long trips, like missions to the Moon and beyond, so astronauts can live and work far from Earth. ",
      "Part of big plans: SLS helps with important space missions that prepare humans to explore other worlds."
    ]
  },
  {
    title: 'Let’s check out the common parts used in satellite launchers!',
    image: S1,
    content: '',
  },
  {
    title: 'Boosters (The Lifters)',
    image: S2,
    content:'These are the powerful engines that help the rocket lift off the ground. \nExample: Think of boosters like your legs when you jump, they give the first big push! ',
  },
  {
    title: 'Core Stage (The Main Body) ',
    image: S3,
    content: 'This part carries the main fuel and engines that keep the rocket moving up once it leaves the ground. \nExample: It’s like the heart of the rocket, full of power and energy! ',
  },
  {
    title: 'Payload Section (The Carrier) ',
    image: S4,
    content:
      'This is the top part that holds the satellite, spacecraft, or astronauts safely inside. \nExample: Like a backpack that carries all the important stuff to space!',
  }
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
          <Image
            src={scene.image}
            alt={scene.title}
            width={600}
            height={600}
            className="rounded-lg shadow-md flex-1"
          />
          <div className="text-2xl text-gray-700 whitespace-pre-line flex-1">
            {Array.isArray(scene.content) ? (
              <ul className="list-disc pl-6">
                {scene.content.map((point, idx) => (
                  <li key={idx} className="mb-2">{point}</li>
                ))}
              </ul>
            ) : (
              <p>{scene.content}</p>
            )}
          </div>
        </div>
      ) : (
        <>
          {scene.content && (
            Array.isArray(scene.content) ? (
              <ul className="list-disc pl-6 text-2xl text-gray-700 max-w-3xl mb-6 text-left">
                {scene.content.map((point, idx) => (
                  <li key={idx} className="mb-2">{point}</li>
                ))}
              </ul>
            ) : (
              <p className="text-2xl text-gray-700 max-w-3xl whitespace-pre-line mb-6">
                {scene.content}
              </p>
            )
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
