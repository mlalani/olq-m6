'use client';

import { useState } from 'react';
import Image from 'next/image';
import C1 from "../assets/c1.jpeg";
import C2 from "../assets/c2.jpeg";

const contentBlocks = [
  {
    id: 1,
    title: "Leo's Day",
    description:
      "Leo loves his tablet! He watches cartoons at breakfast, plays games after virtual class, and keeps playing, even when his mom asks him to play outside. By dinner, Leo's eyes feel tired. He's a bit grumpy because he has to stop his game. At bedtime, his mind is still busy from the screen, and it's hard for him to fall asleep. The next morning, he feels tired for school.",
    image: C1,
  },
  {
    id: 2,
    title: "Mia's Day",
    description:
      "Mia helps her family at breakfast and then plays outside, running and exploring. After her outdoor fun, she gets to have some screen time! She watches her favorite educational show for a little while and learns something new. Later, Mia draws a picture of what she saw outside. At dinner, she talks happily with her family. At bedtime, she reads a storybook, falls asleep quickly, and wakes up feeling refreshed and ready for a new day!",
    image: C2,
  },
];

const questions = [
  {
    question: "What happened to Leo's eyes because he spent too much time on his screen?",
    options: [
      { text: 'They felt super strong!', isCorrect: false },
      { text: 'They felt tired and scratchy.', isCorrect: true },
      { text: 'They turned green!', isCorrect: false },
    ],
    followUp: 'Why do you think looking at screens for a long, long time might make our eyes feel tired?',
  },
  {
    question: "Why was it hard for Leo to fall asleep?",
    options: [
      { text: 'He was too excited from his screen time.', isCorrect: true },
      { text: 'He drank too much juice.', isCorrect: false },
      { text: 'His bed was too comfy.', isCorrect: false },
    ],
    followUp: 'Why do you think he was too excited?',
  },
  {
    question: "How did Leo feel when his mom asked him to stop playing his game?",
    options: [
      { text: 'Happy and ready to play outside!', isCorrect: false },
      { text: 'A bit grumpy.', isCorrect: true },
      { text: 'Super excited for dinner!', isCorrect: false },
    ],
    followUp: 'Why do you think he felt grumpy?',
  },
  {
    question: "How did Mia feel at bedtime and the next morning?",
    options: [
      { text: 'Tired and grumpy.', isCorrect: false },
      { text: "Busy mind and couldn't sleep.", isCorrect: false },
      { text: 'Fell asleep quickly and felt refreshed.', isCorrect: true },
    ],
    followUp: 'Why do you think Mia slept better than Leo?',
  },
];

export default function Com() {
  const [showSecond, setShowSecond] = useState(false);
  const [showClue, setShowClue] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleOptionClick = (isCorrect) => {
    setSelectedAnswer(isCorrect);
  };

  const handleNextClue = () => {
    setSelectedAnswer(null);
    if (!isLastQuestion) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-sky-100 to-indigo-100 font-sans">
      {/* Left Side */}
      <div className="w-2/3 p-6 flex flex-col items-center justify-start gap-6">
        {/* Leo Block */}
        <div className="flex flex-row items-start w-full max-w-4xl bg-white rounded-2xl shadow-lg p-4 gap-6">
          <Image
            src={contentBlocks[0].image}
            alt={contentBlocks[0].title}
            className="w-[180px] h-auto rounded-xl object-cover shadow"
          />
          <div className="text-left">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">
              {contentBlocks[0].title}
            </h2>
            <p className="text-gray-700 text-[18px] leading-relaxed">
              {contentBlocks[0].description}
            </p>
          </div>
        </div>

        {!showSecond && (
          <button
            onClick={() => setShowSecond(true)}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow transition"
          >
            Next
          </button>
        )}

        {/* Mia Block */}
        {showSecond && (
          <div className="flex flex-row items-start w-full max-w-4xl bg-white rounded-2xl shadow-lg p-4 gap-6">
            <Image
              src={contentBlocks[1].image}
              alt={contentBlocks[1].title}
              className="w-[180px] h-auto rounded-xl object-cover shadow"
            />
            <div className="text-left">
              <h2 className="text-2xl font-bold text-green-700 mb-2">
                {contentBlocks[1].title}
              </h2>
              <p className="text-gray-700 text-[18px] leading-relaxed">
                {contentBlocks[1].description}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Right Side */}
      <div className="w-1/3 p-4 flex flex-col items-center justify-start">
        {!showClue && showSecond && (
          <button
            onClick={() => setShowClue(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg text-lg transition"
          >
            Show Clue
          </button>
        )}

        {showClue && (
          <div className="w-full max-w-md mt-4 bg-white rounded-3xl shadow-2xl p-8 text-center">
            {selectedAnswer !== null && (
              <div
                className={`text-lg font-semibold mb-4 ${
                  selectedAnswer ? 'text-green-600' : 'text-red-500'
                }`}
              >
                {selectedAnswer ? 'Correct!' : 'Oops Incorrect'}
              </div>
            )}

            <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
              {currentQuestion.question}
            </h3>

            <div className="flex flex-col gap-3 mb-6">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option.isCorrect)}
                  className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 border border-indigo-300 rounded-lg px-4 py-2 transition"
                >
                  {option.text}
                </button>
              ))}
            </div>

            {/* Show follow-up and Next Clue only if correct */}
            {selectedAnswer === true && (
              <div className="mt-4">
                <p className="text-gray-800 text-lg font-medium mb-6">
                  {currentQuestion.followUp}
                </p>

                {!isLastQuestion && (
                  <button
                    onClick={handleNextClue}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full shadow transition"
                  >
                    Next Clue
                  </button>
                )}

                {isLastQuestion && (
                  <p className="text-xl font-bold text-purple-600 mt-4">
                    You’ve reached the end of the challenge!
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
