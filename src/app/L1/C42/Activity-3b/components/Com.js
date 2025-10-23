'use client';

import { useState } from 'react';
import Image from 'next/image';


import S1 from '../assets/s1.png';
import S2 from '../assets/s2.png';
import S3 from '../assets/s3.png';
import S4 from '../assets/s4.png';
import S5 from '../assets/s5.png';
import S6 from '../assets/s6.png';
import S7 from '../assets/s7.png';
import S8 from '../assets/s8.png';
import S9 from '../assets/s9.png';
import S10 from '../assets/s10.png';
import S11 from '../assets/s11.png';
import S12 from '../assets/s12.png';


const questions = [
  {
    title: 'The Lion King',
    image: S1,
    correctAnswer: 'For Me',
  },
  {
    title: 'Harry Potter and the Order of the Phoenix',
    image: S2,
    correctAnswer: 'Not For Me',
  },
  {
    title: 'The Gray Man',
    image: S3,
    correctAnswer: 'Not For Me',
  },
  {
    title: 'Gladiator II',
    image: S4,
    correctAnswer: 'Not For Me',
  },
  {
    title: 'Jurassic World',
    image: S5,
    correctAnswer: 'Not For Me',
  },
  {
    title: 'Home Alone',
    image: S6,
    correctAnswer: 'For Me',
  },
  {
    title: 'Avengers',
    image: S7,
    correctAnswer: 'Not For Me',
  },
  {
    title: 'Baby’s day out',
    image: S8,
    correctAnswer: 'For Me',
  },
  {
    title: 'Superman',
    image: S9,
    correctAnswer: 'Not For Me',
  },
  {
    title: 'Toy Story',
    image: S10,
    correctAnswer: 'For Me',
  },
  {
    title: 'Karate Kid',
    image: S11,
    correctAnswer: 'For Me',
  },
  {
    title: 'Smurfs',
    image: S12,
    correctAnswer: 'For Me',
  }
];

export default function Com() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);

  const current = questions[currentIndex];

  const handleClick = (choice) => {
    const isCorrect = choice === current.correctAnswer;
    setFeedback(isCorrect ? 'Correct!' : 'Oops! Incorrect');

    if (isCorrect) {
      setTimeout(() => {
        setFeedback(null);
        setCurrentIndex((prev) => prev + 1);
      }, 400); // auto move to next question if correct
    }
  };

  if (currentIndex >= questions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-blue-100">
        <h2 className="text-3xl font-bold text-purple-700">
          You’ve completed the activity!
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 flex flex-col items-center justify-center p-6">
      <h1 className='mb-[10px] font-bold text-2xl'>For Me OR Not For Me</h1>
      <div className="bg-white shadow-2xl rounded-xl p-3 max-w-6xl w-full text-center">
        <h2 className="text-xl font-bold text-indigo-700 mb-4">{current.title}</h2>
        <div className="mb-4 flex justify-center">
          <Image
            src={current.image}
            alt={current.title}
            className="rounded-lg shadow w-[100%]"
          />
        </div>

        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => handleClick('For Me')}
            className="bg-green-500 hover:bg-green-600 text-lg text-white px-5 py-2 rounded-full transition"
          >
            For Me
          </button>
          <button
            onClick={() => handleClick('Not For Me')}
            className="bg-red-500 hover:bg-red-600 text-lg text-white px-5 py-2 rounded-full transition"
          >
            Not For Me
          </button>
        </div>

        {feedback && (
          <div
            className={`text-lg font-semibold ${
              feedback.includes('Correct') ? 'text-green-700' : 'text-red-600'
            }`}
          >
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
}
