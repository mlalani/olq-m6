'use client';
import React from 'react';

const Com = () => {
  const categorizedActivities = {
    canDo: [
      "Play a pet game with your friend in Roblox",
    ],
    cantDo: [
      "Smell the flowers in the game",
    ],
    shouldNotDo: [
      "Say mean or rude things to another player",
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-6xl w-full">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <th className="border border-gray-300 px-6 py-4 text-xl font-bold text-center">
                  Can Do
                </th>
                <th className="border border-gray-300 px-6 py-4 text-xl font-bold text-center">
                  Can't Do
                </th>
                <th className="border border-gray-300 px-6 py-4 text-xl font-bold text-center">
                  Should Not Do
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.max(categorizedActivities.canDo.length, categorizedActivities.cantDo.length, categorizedActivities.shouldNotDo.length) }).map((_, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="border border-gray-300 px-6 py-4 text-lg">
                    {categorizedActivities.canDo[index] || ''}
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-lg">
                    {categorizedActivities.cantDo[index] || ''}
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-lg">
                    {categorizedActivities.shouldNotDo[index] || ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Com;