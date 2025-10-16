'use client';

import { useState } from 'react';
import Image from 'next/image';

import S1 from '../assets/s1.png';
import S2 from '../assets/s2.png';
import S3 from '../assets/s3.png';
import S4 from '../assets/s4.png';
import S5 from '../assets/s5.png';

const ratings = [
  {
    title: 'U (Unrestricted)',
    description: `This means it's Universal! Suitable for everyone! All ages can watch this without any worries. These shows are usually happy, friendly, and don't have anything scary or confusing for little kids.`,
    example: `Real-Life Example: Animated movies like "Finding Nemo"`,
    image: S1,
  },
  {
    title: 'UA 7+ (Unrestricted but with caution for children below 7 years old)',
    description: `This means it's Universal, but be Aware if you're under 7! It's mostly okay for everyone, but if you're younger than 7, a grown-up should watch with you. It might have a tiny bit of something that could be a little confusing or slightly exciting for very young kids.`,
    example: `Real-Life Example: Animated movies like "Kung Fu Panda"`,
    image: S2,
  },
  {
    title: 'UA 13+ (Unrestricted but with caution for children below 13 years old)',
    description: `This means it's Universal, but be Aware if you're under 13! It is really for older kids and grown-ups. It might have things that are a bit more grown-up, like some action or feelings that are harder for younger kids to understand.`,
    example: `Real-Life Example: Superhero movies or adventure films like "Spider-Man"`,
    image: S3,
  },
  {
    title: 'UA 16+ (Unrestricted but with caution for children below 16 years old)',
    description: `This means it's Universal, but be Aware if you're under 16! This is definitely for teenagers and grown-ups. If you are younger than 16, this is definitely NOT for you. It will have grown-up topics that are not for young children.`,
    example: `Real-Life Example: Action thrillers or dramas focused on complex social issues, such as "The Maze Runner"`,
    image: S4,
  },
  {
    title: 'A (Adults)',
    description: `This means it's Adults Only! This is only for grown-ups aged 18 and above. It's never for kids. Purpose: These shows have content that is only suitable for adults.`,
    example: `Example: The Big Short`,
    image: S5,
  },
];

export default function Com() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < ratings.length - 1) {
      setIndex(index + 1);
    }
  };

  const current = ratings[index];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 flex flex-col items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-3 max-w-6xl w-full text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">{current.title}</h2>
        <p className="text-gray-700 mb-3 whitespace-pre-line text-lg">{current.description}</p>
        <p className="text-green-700 font-medium mb-4">{current.example}</p>
        <div className="flex justify-center mb-4">
          <Image
            src={current.image}
            alt={current.title}
            className="rounded-lg shadow w-[100%]"
          />
        </div>
        {index < ratings.length - 1 ? (
          <button
            onClick={handleNext}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow transition"
          >
            Next
          </button>
        ) : (
          <p className="text-purple-600 font-bold text-lg">
            {/* 🎉 You've completed all ratings! */}
          </p>
        )}
      </div>
    </div>
  );
}
