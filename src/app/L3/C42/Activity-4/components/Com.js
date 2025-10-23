'use client';
import { useState } from 'react';
import C1 from "../assets/c1.jpeg"
import Image from 'next/image';

export default function Com() {
  const [step, setStep] = useState('intro');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [scenario, setScenario] = useState(1);

  const scenarioData = {
    1: {
      heading: 'Scenario 1: The Future City Designer',
      description:
        'Samantha’s first challenge is for her ""Future City"" project: she needs to design a unique school bus for her city.',
      options: [
        'Option A: I’ll think of my own creative ideas for a bus (maybe it flies, or it cleans the air!). Then, I might ask AI-X to help me describe my unique bus or give me some cool, futuristic names for it!',
        'Option B:  I’ll just type: ‘Design a futuristic school bus’ into AI-X and copy its entire description and design idea without adding any of my own thoughts.',
      ],
      questions: [
        'Which one lets Samantha be creative and use her own brain?',
        'What do you think could go wrong with Option B?',
        'Which option should she pick?',
      ],
      result:
        'Samantha thinks Option B is the easiest, so she copies everything AI-X wrote and turns it in.',
      followUp: [
        'Why do you think this happened? Why did the AI give the same answer to multiple students?'
      ]
    },
    2: {
      heading: 'Scenario 2: The Amazing Inventor Report',
      description:
        'Samantha has a new project: she needs to make a short presentation about the famous scientist, Isaac Newton. She needs to share three correct facts about him.',
      options: [
        'Option A: I’ll search by myself and find facts about Isaac Newton. Then, I might ask AI-X to help me organize these facts into neat, bullet points or suggest an interesting way to start my presentation.',
        'Option B: I’ll just ask AI-X to "Tell me all about Isaac Newton for a school presentation" and copy all the information it gives me without checking.'
      ],
      questions: [
        'Which one lets Samantha be creative and use her own brain?',
        'What could go wrong with Option B?',
        'Which one should Samantha choose this time?',
      ],
      result:
      'Samantha thinks Option B is still the fastest way, so she copies what AI-X wrote for her presentation. She proudly presents her facts in class. But guess what? One of her facts says: "Isaac Newton invented the internet while living in a castle!"',
      followUp: [
        'What\'s wrong with this statement?'
      ]
    }
  };

  const current = scenarioData[scenario];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6 text-gray-800 font-sans">
      {step === 'intro' && (
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur p-6 rounded-2xl shadow-xl text-center space-y-4">
          <p className="text-xl">
            Meet Samantha, a bright and curious 12-year-old. She just found a talking AI robot friend called <strong>AI-X</strong>. AI-X can help with almost everything but Samantha has to learn when to use it as a buddy, and when she's letting it be the boss!
          </p>
          <Image
            src={C1}
            alt="AI-X"
            className="w-full max-h-64 object-contain rounded-[20px]"
          />
          <button
            onClick={() => setStep('scenario')}
            className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            Start
          </button>
        </div>
      )}

      {(step === 'scenario' || step === 'followup') && (
        <div className="max-w-6xl mx-auto mt-10 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl space-y-6">
          <h2 className="text-2xl font-bold text-purple-700 text-center">{current.heading}</h2>
          {/* <img src={current.image} alt="Scenario" className="w-full max-h-64 object-contain rounded" /> */}
          <p className="text-xl">{current.description}</p>

          <ul className="space-y-2">
            {current.options.map((opt, i) => (
              <li key={i} className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded shadow text-lg">
                {opt}
              </li>
            ))}
          </ul>

          {/* Questions */}
          <div className="space-y-4">
            {current.questions.slice(0, questionIndex).map((q, idx) => (
              <div key={idx} className="bg-yellow-50 p-4 rounded-xl border-l-4 border-yellow-400 shadow text-lg">
                {q}
              </div>
            ))}

            {/* Buttons to reveal more questions or result */}
            {questionIndex < current.questions.length && (
              <button
                onClick={() => setQuestionIndex(questionIndex + 1)}
                className="bg-purple-600 text-white px-6 py-2 rounded-full shadow hover:bg-purple-700 transition"
              >
                Next
              </button>
            )}

            {questionIndex === current.questions.length && !showResult && (
              <button
                onClick={() => setShowResult(true)}
                className="bg-green-600 text-white px-6 py-2 rounded-full shadow hover:bg-green-700 transition"
              >
                Show Result
              </button>
            )}
          </div>

          {/* Result Section */}
          {(showResult || step === 'followup') && (
            <div className="bg-pink-100 p-4 rounded-xl border-l-4 border-pink-400 shadow">
              <p className='text-lg'>{current.result}</p>
              {step !== 'followup' && (
                <button
                  onClick={() => setStep('followup')}
                  className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-full shadow hover:bg-pink-700 transition"
                >
                  Next
                </button>
              )}
            </div>
          )}

          {/* Follow-up Questions */}
          {step === 'followup' && (
            <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-xl shadow">
              {/* <h3 className="text-xl font-semibold text-green-700">🔍 Follow-up Question</h3> */}
              <ul className="mt-2 space-y-2 text-lg">
                {current.followUp.map((fup, idx) => (
                  <li key={idx}>{fup}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Continue to Scenario 2 */}
          {step === 'followup' && scenario === 1 && (
            <div className="text-center">
              <button
                onClick={() => {
                  setScenario(2);
                  setStep('scenario');
                  setQuestionIndex(0);
                  setShowResult(false);
                }}
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
