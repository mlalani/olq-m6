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
    correctAnswer: [
      'It’s better for me',
      'It’s better for my older sibling or cousin, who are at least 18 years of age.',
      'It’s better for my parents and older people.',
    ],
  },
  {
    title: 'Harry Potter and the Order of the Phoenix',
    image: S2,
    correctAnswer: [
      'It’s better for my older sibling or cousin, who are at least 18 years of age.',
      'It’s better for my parents and older people.',
    ],
  },
  {
    title: 'The Gray Man',
    image: S3,
    correctAnswer: ['It’s better for my parents and older people.'],
  },
  {
    title: 'Gladiator II',
    image: S4,
    correctAnswer: ['It’s better for my parents and older people.'],
  },
  {
    title: 'Jurassic World',
    image: S5,
    correctAnswer: ['It’s better for my parents and older people.'],
  },
  {
    title: 'Home Alone',
    image: S6,
    correctAnswer: [
      'It’s better for me',
      'It’s better for my older sibling or cousin, who are at least 18 years of age.',
      'It’s better for my parents and older people.',
    ],
  },
  {
    title: 'Avengers',
    image: S7,
    correctAnswer: [
      'It’s better for my older sibling or cousin, who are at least 18 years of age.',
      'It’s better for my parents and older people.',
    ],
  },
  {
    title: 'Baby’s day out',
    image: S8,
    correctAnswer: [
      'It’s better for me',
      'It’s better for my older sibling or cousin, who are at least 18 years of age.',
      'It’s better for my parents and older people.',
    ],
  },
  {
    title: 'Superman',
    image: S9,
    correctAnswer: [
      'It’s better for my older sibling or cousin, who are at least 18 years of age.',
      'It’s better for my parents and older people.',
    ],
  },
  {
    title: 'Toy Story',
    image: S10,
    correctAnswer: [
      'It’s better for me',
      'It’s better for my older sibling or cousin, who are at least 18 years of age.',
      'It’s better for my parents and older people.',
    ],
  },
  {
    title: 'Karate Kid',
    image: S11,
    correctAnswer: [
      'It’s better for me',
      'It’s better for my older sibling or cousin, who are at least 18 years of age.',
      'It’s better for my parents and older people.',
    ],
  },
  {
    title: 'Smurfs',
    image: S12,
    correctAnswer: [
      'It’s better for me',
      'It’s better for my older sibling or cousin, who are at least 18 years of age.',
      'It’s better for my parents and older people.',
    ],
  },
];

const options = [
  'It’s better for me',
  'It’s better for my older sibling or cousin, who are at least 18 years of age.',
  'It’s better for my parents and older people.',
];

export default function Com() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);

  const current = questions[currentIndex];

  const handleClick = (choice) => {
    const isCorrect = current.correctAnswer.includes(choice);
    setFeedback(isCorrect ? 'Correct!' : 'Oops! Try again');

    if (isCorrect) {
      setTimeout(() => {
        setFeedback(null);
        setCurrentIndex((prev) => prev + 1);
      }, 500);
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
      {/* <h1 className="mb-4 font-bold text-2xl text-indigo-800">Better For Whom?</h1> */}
      <div className="bg-white shadow-2xl rounded-xl p-6 max-w-5xl w-full text-center space-y-4">
        <h2 className="text-xl font-bold text-indigo-700">{current.title}</h2>
        <div className="flex justify-center">
          <Image
            src={current.image}
            alt={current.title}
            className="rounded-lg shadow w-full h-auto"
          />
        </div>

        {feedback && (
          <div
            className={`mt-4 text-lg font-semibold ${feedback.includes('Correct') ? 'text-green-700' : 'text-red-600'
              }`}
          >
            {feedback}
          </div>
        )}

        <div className="grid gap-4 mt-4">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleClick(opt)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-[10px] transition text-md md:text-base"
            >
              {opt}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
