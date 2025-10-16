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
        <h2 className="text-2xl font-bold text-center text-indigo-800 mb-6">
          Example for : Screen Time Tracker
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
                <td className="border px-4 py-3">{row.time}</td>
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
