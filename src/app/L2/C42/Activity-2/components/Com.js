'use client';
import { useState } from 'react';
import Image from 'next/image';

import C1 from "../assets/c1.png";
import C2 from "../assets/c2.png";
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";

const questions = [
  "Q1. What's one big difference you noticed between Zara's presentation and Kiaan's presentation?",
  "Q2. Jay was also in the presentation hall. How do you think Jay felt when Zara mentioned his efforts?",
  "Q3. Why do you think Zara mentioned Jay, even though it was her project?"
];

const posters = [
  {
    heading: "Poster 1: Joy made a poster about Octopuses",
    image: S1
  },
  {
    heading: "Poster 2: Maya made a poster about Ocean Wonders",
    image: S2
  }
];

export default function Com() {
  const [step, setStep] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [posterIndex, setPosterIndex] = useState(0);

  const handleNext = () => {
    if (step === 1) {
      if (questionIndex < questions.length - 1) {
        setQuestionIndex((prev) => prev + 1);
      } else {
        // Only move to next step after all questions have been shown
        setStep(2);
      }
    } else if (step === 2 && posterIndex < posters.length - 1) {
      setPosterIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6 space-y-6">
      {/* Step 1: Story + Questions */}
      {step === 1 && (
        <>
          <div className="flex flex-wrap justify-center gap-4">
            <div>
              <Image src={C1} alt="Zara" width={200} height={200} className="rounded-lg shadow" />
              <p className="text-center mt-2 text-xl font-semibold">Zara</p>
            </div>

            <div>
              <Image src={C2} alt="Kiaan" width={200} height={200} className="rounded-lg shadow" />
              <p className="text-center mt-2 text-xl font-semibold">Kiaan</p>
            </div>
          </div>

          <div className="max-w-6xl bg-white/80 backdrop-blur p-6 rounded-xl shadow-xl text-center space-y-4">
            <p className="text-lg font-medium text-gray-700">
              Zara and Kiaan, two 4th Grade students. They both worked hard on their science projects, getting a lot of help from their Grade 5 friend, Jay.
              <br />
              On presentation day, Zara went first, presenting her excellent project on polar bears. At the end, she thanked Jay for his help, impressing everyone with her presentation and her kindness.
              <br />
              Kiaan then presented his project on jellyfish, also doing a great job and impressing the audience.
            </p>

            {/* Questions Displayed So Far */}
            {questions.slice(0, questionIndex + 1).map((q, i) => (
              <div
                key={i}
                className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow text-left text-lg text-gray-800"
              >
                {q}
              </div>
            ))}

            <div className="text-center">
              <button
                onClick={handleNext}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}

      {/* Step 2: Poster Section */}
      {step === 2 && (
        <div className="max-w-6xl w-full  p-6 rounded-xl shadow-lg text-center space-y-4">
          <h2 className="text-2xl font-bold">{posters[posterIndex].heading}</h2>
          <Image
            src={posters[posterIndex].image}
            alt={posters[posterIndex].heading}
            className="rounded shadow mx-auto w-[40%]"
          />
          <p className='text-lg font-semibold mt-[12px]'>
            What do you think? Is this a perfect poster?
            <br />
            Or is something important missing?
          </p>

          {posterIndex < posters.length - 1 && (
            <button
              onClick={handleNext}
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-full shadow hover:bg-green-700 transition"
            >
              Next Poster
            </button>
          )}
        </div>
      )}
    </div>
  );
}
