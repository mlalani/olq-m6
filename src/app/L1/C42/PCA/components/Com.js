'use client';

export default function Com() {
  const data = [
    {
      date: '01/10/2025',
      time: '10 mins, 30 mins, 20 mins, 20 mins',
      totalTime: "1hr 20mins",
      breaks: 'Yes',
    },
    {
      date: '02/10/2025',
      time: '10 mins, 30 mins, 20 mins, 80 mins',
      totalTime: "2hr 20 mins",
      breaks: 'No',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">
          Screen Time Tracker
        </h1>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Instructions:</h3>
          <ul className="text-gray-700 space-y-2 text-lg">
            <li>• Track how much time you spend using your mobile, tablet, and TV for entertainment purposes like watching cartoons, shows, playing games, and similar activities.</li>
            <li>• Everytime you watch screen, remember to log the time in the table.</li>
            <li>• At the end of each day, ask your parent, elder sibling, or a guardian to help you add up the total time you spent on screens and update the table.</li>
            <li>• Mark that day with a green circle if the total time is less than 2 hours; otherwise, mark it red.</li>
            <li>• Record this data for a week's time then share the picture of the table</li>
          </ul>
        </div>

        {/* Empty Table */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-800 mb-4">Your Screen Time Tracker:</h3>
          <table className="min-w-full border border-gray-300 text-center">
            <thead>
              <tr className="bg-indigo-100 text-indigo-800 font-semibold text-lg">
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Screen Time</th>
                <th className="border px-4 py-2">Total Screen Time</th>
                <th className="border px-4 py-2">Taken breaks between screen time</th>
                <th className="border px-4 py-2">Flag</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 7 }, (_, i) => (
                <tr key={i} className="bg-white hover:bg-gray-50 text-gray-800 text-md">
                  <td className="border px-4 py-3">Day {i + 1}</td>
                  <td className="border px-4 py-3">___</td>
                  <td className="border px-4 py-3">___</td>
                  <td className="border px-4 py-3">___</td>
                  <td className="border px-4 py-3">___</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-center text-indigo-800 mb-6">
          Example
        </h2>
        <table className="min-w-full border border-gray-300 text-center">
          <thead>
            <tr className="bg-indigo-100 text-indigo-800 font-semibold text-lg">
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Screen Time</th>
              <th className="border px-4 py-2">Total Screen Time</th>
              <th className="border px-4 py-2">Taken breaks between screen time</th>
              <th className="border px-4 py-2">Flag</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className="bg-white hover:bg-gray-50 text-gray-800 text-md"
              >
                <td className="border px-4 py-3">{row.date}</td>
                <td className="border px-4 py-3">{row.time}</td>
                <td className="border px-4 py-3">{row.totalTime}</td>
                <td className="border px-4 py-3">{row.breaks}</td>
                <td className="border px-4 py-3 text-lg">
                  {row.breaks === 'Yes' ? '🟢' : '🔴'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
