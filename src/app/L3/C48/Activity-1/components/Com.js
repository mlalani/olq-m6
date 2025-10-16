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
    content: `Meet Cyra and TaskBot. In the tech-savvy city of Codepolis, a young inventor named Cyra created a powerful robot named TaskBot.
TaskBot could move around, talk to people, carry things, and even scan objects using its built-in camera.
It was built to help with everyday tasks around the neighborhood like: delivering supplies, identifying lost pets, and more!`,
  },
  {
    title: 'Can you guess what went wrong?',
    image: null,
    content: '',
  },
  {
    title: '',
    image: S2,
    content: `TaskBot was able to see everything but failed to identify them.
It once delivered a soccer ball instead of a watermelon, put a cat into the lost-and-found box labeled "dog," and mistook a laptop for a lunchbox.`,
  },
  {
    title: 'Do you know what AI means?',
    image: null,
    content: '',
  },
  {
    title: '',
    image: null,
    content: `AI stands for Artificial Intelligence, it’s a way to make computers or robots "smart" by helping them learn and make decisions like humans do.`,
  },
  {
    title: 'Can you guess what an AI model means?',
    image: null,
    content: '',
  },
  {
    title: '',
    image: null,
    content: `An AI model is like the robot’s brain, it helps the robot learn patterns, recognize things, and make decisions. Just like the human brain gets smarter by practicing.`,
  },
  {
    title: 'Training Method 1: Supervised Learning',
    image: S3,
    content: `Showing the TaskBot examples with labels, and uploading thousands of pictures while telling TaskBot what each one is:
“This is a dog.”
“This is a soccer ball.”
“This is a backpack.”
This is called Supervised Learning.`,
  },
  {
    title: 'Training Method 2: Unsupervised Learning',
    image: S4,
    content: `A giant folder can be given to TaskBot which contains random pictures, without labels.
TaskBot has to figure things out by itself, by grouping the photos by:
- Colorful
- Shape
- Texture
This is called Unsupervised Learning.`,
  },
  {
    title:
      'So, what do you think would be the best approach to help TaskBot learn how to identify items accurately? And why?',
    image: null,
    content: '',
  },
];

export default function TaskBotScenes() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < scenes.length - 1) {
      setStep(step + 1);
    }
  };

  const scene = scenes[step];
  const isRowLayout = step >= 7 && scene.image && scene.content; // start from scene index 7

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
              alt={scene.title || 'TaskBot'}
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
                alt={scene.title || 'TaskBot'}
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
