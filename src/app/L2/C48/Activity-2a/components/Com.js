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
      " Meet Dr. Zoya, inventor of a helpful robot called RoboPick, a cheerful assistant built to make everyone’s life easier. RoboPick was able to talk, walk, carry bags, and even hum while working! Its main job is to help people pick up groceries and everyday items from the local store.",
  },
  {
    title: '',
    image: S2,
    content:
      'But RoboPick was facing challenges in identifying things!\nIt couldn’t tell the difference between toothpaste and a cucumber, or broccoli and a shampoo bottle.\nSo every time someone said, “Get me some bananas,” RoboPick returned with a bar of soap!',
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
      "An AI model is like a prototype of a robot's brain allowing it to understand, recognize, and make smart decisions, like us! But instead of learning from books or schools, an AI model learns from examples: like pictures, sounds, or words we give it.",
  },
  {
    title: 'Training Method 1: Supervised Learning',
    image: S3,
    content:
      'Dr. Zoya showed RoboPick many pictures. For every image, she clearly said what it was:\n\n“This is an apple.”\n“This is broccoli.”\n“This is toothpaste.”\n\nThis process is called Supervised Learning. It means the AI model is trained using labeled data, where the correct answer is provided. "\n"Think of it like a student learning from a textbook with all the pre-listed answers. ',
  },
  {
    title: 'Training Method 2: Unsupervised Learning',
    image: S4,
    content:
    'This time, Dr. Zoya gave RoboPick a huge box of grocery items, but without giving the answers! \nRoboPick had to look at the items and group based on what they looked like:\n\n- Round green things\n- Tall thin yellow things\n- Small, square, shiny things\n\nThis is called Unsupervised Learning. It means that the AI model is trained with data without labels. \n"The Robot learns to group, organize, or detect patterns, but it doesn’t know what anything is called. It’s like sorting puzzle pieces by color or shape, without knowing what the final image will be."',
  },
  {
    title:
      'Which is the best approach to help RoboPick accurately identify items? And why?',
    image: null,
    content: '',
  },
];

export default function Com() {
  const [step, setStep] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  const handleNext = () => {
    if (step === 1) {
      // After the second scene (RoboPick's challenges), show the transition text
      setShowTransition(true);
    } else if (step < scenes.length - 1) {
      setStep(step + 1);
    } else if (step === scenes.length - 1) {
      setShowAnswer(true);
    }
  };

  const handleContinue = () => {
    setShowTransition(false);
    setStep(step + 1);
  };

  const scene = scenes[step];
  const answer = "Supervised Learning would be the best fit because when RoboPick is trained using labeled images, i.e. when it's clearly told, \"This is an apple,\" and \"This is a bottle\", it learns exactly what each item looks like. This helps RoboPick recognize items more accurately with a lower probability for it to make mistakes.";

  const isRowLayout = step >= 4 && scene.image && scene.content; // start from index 4 (Training Method 1)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
      {showTransition ? (
        <div className="max-w-4xl">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg shadow-md">
            <p className="text-2xl text-gray-700 leading-relaxed">
              Dr. Zoya realized that RoboPick needed to learn to recognize objects correctly. So she decided to train its brain, a process to create an AI model.
            </p>
          </div>
          <button
            onClick={handleContinue}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Continue
          </button>
        </div>
      ) : showAnswer ? (
        <div className="max-w-4xl">
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg shadow-md">
            <p className="text-xl text-gray-700 leading-relaxed text-left">
              {answer}
            </p>
          </div>
        </div>
      ) : (
        <>
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

          {!showAnswer && (
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
