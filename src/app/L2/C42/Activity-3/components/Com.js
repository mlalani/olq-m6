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
      heading: 'Scenario 1: "Design a Creature"',
      description:
      "Arya has to create a brand new creature, give it a name with some fun facts.",
      options: [
        'Option A: I’ll think of a creature that eats pizza and climbs over anything. Then I’ll ask AI-X to give me name ideas based on qualities I thought about for my creature!',
        'Option B: I’ll just type: ‘Create a new creature with name, facts, drawing, and story’ into AI-X and copy-paste everything it writes straight into my project.',
      ],
      questions: [
        'Which option lets Arya be creative and use her own brain?',
        'What do you think could go wrong with Option B?',
        'Which option should she pick?',
      ],
      result:
        'Arya thinks Option B is the easiest, so she copies everything AI-X wrote and turns it in. But guess what? Three other classmates in her class used the exact same AI tool for the same competition, and all of them had the same results.',
      followUp: [
        'Why do you think this happened? Why did the AI give the same answer to multiple students?'
      ]
    },
    2: {
      heading: 'Scenario 2: “The Dino Disaster!”',
      description:
        'Arya has to create a mini-poster about extinct creatures. She needs to gather some facts. Arya is confused about which way to go: ',
      options: [
        'Option A: I’ll research a few extinct creatures and create my notes with names, pictures and location. Then, I will ask AI-X to help organize these points into a poster.',
        'Option B: I’ll just ask AI-X to tell me everything about dinosaurs and copy it directly onto my poster.'
      ],
      questions: [
        'What might go wrong with Option B?',
        'Which option should Arya choose this time?',
      ],
      result:
        'Arya thinks Option B is still the fastest way, so she copies what AI-X wrote for her poster. She proudly presents her poster in class. But guess what? It says: "Dinosaurs like the stegosaurus lived 2,000 years ago and hunted penguins."',
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
          Arya is a bright and curious nine year old girl. She just discovered a talking AI robot friend called <strong>AI-X</strong>. AI-X can help with almost everything but Arya has to learn when to use it as a buddy, and when she's letting it be the boss!
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
