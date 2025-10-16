"use client";

import { useState } from "react";

const questions = [
  {
    scenario: "Scenario 1: The First Click",
    question:
      "You need information about climate change. You find two websites, which site would you trust and why?",
    options: [
      { label: "A", text: "www.climatefacts.gov" },
      { label: "B", text: "www.climatealert-now.xyz" },
    ],
    correctAnswer: "A",
    explanation: "It's a .gov site, likely reliable and official.",
  },
  {
    scenario: "Scenario 2: Stay On-Site",
    question:
      "You only want results from the Nasa website about space, which search will help you stay focused on that site?",
    options: [
      { label: "A", text: "Animal facts" },
      { label: "B", text: "Animal facts site:nationalgeographic.com" },
    ],
    correctAnswer: "B",
    explanation: "Using site: limits search to a specific site.",
  },
  {
    scenario: "Scenario 3: Picture Perfect?",
    question:
      "You want to add a penguin photo to your slideshow, which one can you use?",
    options: [
      { label: "A", text: "An image with a watermark across it" },
      { label: "B", text: "One that says: Photo by Jack & Co (CC BY)" },
    ],
    correctAnswer: "B",
    explanation: "CC BY means you're allowed to use it with credit.",
  },
  {
    scenario: "Scenario 4: AI Trouble or AI Talent?",
    question:
      "You ask an AI to write your entire science project and submit it, what could go wrong?",
    options: [
      { label: "A", text: "It may be inaccurate" },
      { label: "B", text: "It might not sound like you" },
      { label: "C", text: "It could be flagged as plagiarism" },
      { label: "D", text: "All of the above" },
    ],
    correctAnswer: "D",
    explanation: "All those reasons are true — use AI wisely!",
  },
];

export default function DigitalDetectiveQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const currentQuestion = questions[current];

  const handleSelect = (label) => {
    setSelected(label);
    setIsCorrect(label === currentQuestion.correctAnswer);
  };

  const handleNext = () => {
    setSelected(null);
    setIsCorrect(null);
    setCurrent((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#fefdfb] flex items-center justify-center px-4">
      <div className="max-w-3xl w-full p-8 bg-[#fff7ed] border border-orange-200 rounded-xl shadow-md">
        {current < questions.length ? (
          <>
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              {currentQuestion.scenario}
            </h2>
            <p className="mb-6 text-gray-800 text-lg">{currentQuestion.question}</p>

            <div className="space-y-3">
              {currentQuestion.options.map((option) => {
                const isSelected = selected === option.label;
                const isAnswer = option.label === currentQuestion.correctAnswer;

                let baseStyle =
                  "w-full text-left px-4 py-3 rounded-lg border font-medium transition ";

                if (selected) {
                  if (isSelected && isAnswer) {
                    baseStyle +=
                      "bg-green-100 border-green-300 text-green-800";
                  } else if (isSelected && !isAnswer) {
                    baseStyle += "bg-red-100 border-red-300 text-red-800";
                  } else {
                    baseStyle += "bg-white border-gray-300 text-gray-800";
                  }
                } else {
                  baseStyle +=
                    "bg-white hover:bg-orange-50 border-orange-200 text-gray-800";
                }

                return (
                  <button
                    key={option.label}
                    onClick={() => handleSelect(option.label)}
                    className={baseStyle}
                  >
                    <strong>{option.label}.</strong> {option.text}
                  </button>
                );
              })}
            </div>

            {selected && (
              <div className="mt-6 p-4 rounded-md border bg-[#fffef6] border-orange-100">
                <p
                  className={`font-semibold mb-2 ${
                    isCorrect ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {isCorrect ? "Correct!" : "Oops Incorrect, ry another option."}
                </p>
                <p className="text-gray-700 text-sm">
                  {/* {currentQuestion.explanation} */}
                </p>

                {isCorrect && (
                  <button
                    onClick={handleNext}
                    className="mt-4 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                  >
                    Next
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-10">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Great job, Digital Detective!
            </h2>
            <p className="text-gray-700 text-lg">
              You’ve completed your mission with smart choices and safe clicks!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
