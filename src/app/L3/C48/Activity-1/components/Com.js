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
    content: `Meet Cyra, a young inventor from the tech-savvy city of Codepolis and her very powerful robot TaskBot. 
TaskBot can move around, talk to people, carry things, and even scan objects using its built-in camera. It was built to help with everyday tasks around the neighborhood like: delivering supplies, identifying lost creatures, and more!`,
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
It delivered a soccer ball instead of a watermelon, put a goat into the lost-and-found box labeled "dog," and mistook a laptop for a lunchbox. So Cyra figured to help TaskBot make sense; she needed to train its AI model.`,
  },
  {
    title: 'Do you know what AI means?',
    image: null,
    content: '',
  },
  {
    title: '',
    image: null,
    content: `AI stands for Artificial Intelligence. It’s a way to make computers or robots "smart" by helping them learn and make decisions like humans do.`,
  },
  {
    title: 'Can you guess what an AI model means?',
    image: null,
    content: '',
  },
  {
    title: '',
    image: null,
    content: `An AI model is like a prototype of a robot's brain allowing it to understand, recognize, and make smart decisions. Just like the human brain gets smarter by practicing.`,
  },
  {
    title: 'Training Method 1: Supervised Learning',
    image: S3,
    content: `Showing the TaskBot examples with labels and uploading thousands of pictures while telling TaskBot what each one is: 
“This is a dog.”
“This is a soccer ball.”
“This is a backpack.”
This process is called Supervised Learning. It means the AI model is trained using labeled data, where the correct answer is provided.
Think of it like a student learning from a textbook with all the pre-listed answers.`,
  },
  {
    title: 'Training Method 2: Unsupervised Learning',
    image: S4,
    content: `A giant folder can be given to TaskBot which contains random pictures, without labels.
TaskBot has to figure things out by itself, by grouping the photos by:
- Colorful
- Shape
- Texture
This is called Unsupervised Learning. It means that the AI model is trained with data without labels`,
  },
  {
    title:
      'So, what do you think would be the best approach to help TaskBot learn how to identify items accurately? And why?',
    image: null,
    content: '',
  },
  {
    title: '',
    image: null,
    content: `Supervised Learning would be the best fit because when RoboPick is trained using labeled images, i.e. when it's clearly told, "This is a soccer ball," and "This is a dog", it learns exactly what each item looks like.

This helps RoboPick recognize items more accurately with a lower probability for it to make mistakes.`,
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
