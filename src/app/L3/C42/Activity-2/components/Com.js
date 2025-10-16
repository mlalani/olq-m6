'use client';
import { useState } from 'react';

const techniques = [
  {
    title: 'Search 1: Clarity & Keywords',
    description: 'This technique is used to make search queries very simple and straightforward to achieve accurate search results.',
    example: null,
  },
  {
    title: 'Search 2: Using AND Connector',
    description:
      'When you are searching for two or more things that should result in the same search result, the AND connector is used.',
    example: 'Example: Lions AND tigers diet\nIt will show pages that talk about both lions and tigers.',
  },
  {
    title: 'Search 3: Using OR Connector',
    description:
      'When you are okay with either of the options showing up. You want more variety, so the OR connector is used.',
    example: 'Example: Hoverboard OR skateboard for kids \nIt will find pages with hoverboards, skateboards, or both.',
  },
  {
    title: 'Search 4: Using NOT (-) Connector',
    description:
      'When you want to remove something from the search results, the NOT (-) connector is used.',
    example: 'Example: Animal jokes -cats \nThis will give you animal jokes excluding jokes about cats.',
  },
  {
    title: 'Search 5: Using site Operator',
    description:
      'When you want search results only from a specific website, the `site:` operator is used.',
    example: 'Example: site:kids.nationalgeographic.com fun science facts',
  },
];

export default function Com() {
  const [index, setIndex] = useState(0);
  const current = techniques[index];

  const handleNext = () => {
    if (index < techniques.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-100 p-6 flex items-center justify-center text-gray-800">
      <div className="max-w-2xl w-full bg-white/80 backdrop-blur rounded-xl shadow-xl p-8 space-y-6 transition duration-500 ease-in-out">
        <h2 className="text-2xl font-bold text-blue-700">{current.title}</h2>
        <p className="text-xl">{current.description}</p>
        {current.example && (
          <div className="bg-blue-50 text-xl border-l-4 border-blue-400 p-4 rounded shadow text-sm whitespace-pre-line">
            {current.example}
          </div>
        )}
        <div className="text-right">
          {index < techniques.length - 1 ? (
            <button
              onClick={handleNext}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
            >
              Next
            </button>
          ) : (
            <p className="text-green-600 font-semibold mt-4">
              {/* 🎉 You’ve completed all techniques! */}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
