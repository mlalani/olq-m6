'use client';
import { useState } from 'react';
import Image from 'next/image';
import WatermarkImage from '../assets/s1.png';
import NasaImage from '../assets/s2.png';

export default function Com() {
  const [introIndex, setIntroIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [scenarioIndex, setScenarioIndex] = useState(0);

  const introSteps = [
    {
      title: 'Copyright',
      desc: "You shouldn’t use it freely without permission",
    },
    {
      title: 'Creative Commons',
      desc: "You can use it, but you must give credit to the person who actually created it.",
    },
    {
      title: 'Public Domain',
      desc: "You can use it freely, no credit needed (but it's nice to give it!)",
    },
  ];

  const scenarios = [
    {
      heading: 'Scenario A: Image with Watermark',
      image: WatermarkImage,
      question: 'Can you just copy-paste this image?',
    },
    {
      heading: 'Scenario B: Creative Commons Image',
      link:
        'https://www.europeana.eu/en/item/92023/images_billed_2010_okt_billeder_object337111',
      linkText: "link",
      question: 'Can you just copy-paste this image?',
    },
    {
      heading: 'Scenario C: NASA Image (Public Domain)',
      image: NasaImage,
      question:
        "You find this amazing picture of Mars on NASA's website. Can you use it?",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6 text-gray-800 font-sans">
      {/* 📘 Intro Section: stacked cards */}
      {!started && (
        <div className="max-w-xl mx-auto space-y-4">
          {introSteps.slice(0, introIndex + 1).map((item, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-xl text-lg leading-relaxed text-center"
            >
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className='text-xl'>{item.desc}</p>
            </div>
          ))}

          {introIndex < introSteps.length - 1 && (
            <div className="text-center">
              <button
                onClick={() => setIntroIndex(introIndex + 1)}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
              >
                Next
              </button>
            </div>
          )}

          {introIndex === introSteps.length - 1 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setStarted(true)}
                className="bg-green-600 text-white px-8 py-3 rounded-full shadow-xl hover:bg-green-700 transition text-xl"
              >
                Start
              </button>
            </div>
          )}
        </div>
      )}

      {/* 🧩 Scenario Section */}
      {started && scenarioIndex < scenarios.length && (
        <div className="max-w-3xl mx-auto mt-10 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl space-y-6 text-center">
          <h2 className="text-2xl font-bold text-purple-700">
            {scenarios[scenarioIndex].heading}
            {scenarios[scenarioIndex].link && (
              <>
                : 
                <a 
                  target='blank'
                  className='ml-[10px] text-blue-500' href={scenarios[scenarioIndex].link}>
                  {scenarios[scenarioIndex].linkText}
                </a>
              </>
            )}
          </h2>
          
          {scenarios[scenarioIndex].image && (
            <div className="flex justify-center">
              <Image
                src={scenarios[scenarioIndex].image}
                alt="Scenario"
                className="w-[500px] object-contain rounded shadow"
              />
            </div>
          )}
          
          <p className="text-xl font-medium">
            {scenarios[scenarioIndex].question}
          </p>

          {scenarioIndex < scenarios.length - 1 && (
            <button
              onClick={() => setScenarioIndex(scenarioIndex + 1)}
              className="bg-purple-600 text-white px-6 py-2 rounded-full shadow hover:bg-purple-700 transition"
            >
              Next
            </button>
          )}
        </div>
      )}

      {/* ✅ Completion Message */}
      {started && scenarioIndex === scenarios.length && (
        <div className="text-center mt-20 text-2xl font-bold text-green-700">
          {/* ✅ You're done reviewing the scenarios! */}
        </div>
      )}
    </div>
  );
}
