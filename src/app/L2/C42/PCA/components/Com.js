'use client';

export default function Com() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl p-8 space-y-10">
        <div>
          <p className="text-gray-800 text-2xl leading-relaxed font-bold">
            Task 1 Sample
          </p>
          <p className="text-lg">
            Track what you do and for how long on different screens for one week. For example, you could be watching/playing/studying on mobile, iPad (tablet), xbox/playstation [gaming console] and TV.
            You have to be diligent to record every minute you spend across all screens, whether you are watching/playing along or with someone else.
          </p>
        </div>

        {/* Task 1: Device-wise screen time */}
        <div>
          <table className="min-w-full border border-gray-300 text-center">
            <thead>
              <tr className="bg-indigo-100 text-indigo-800 font-semibold text-lg">
                <th className="border px-4 py-2"></th>
                <th className="border px-4 py-2">TV</th>
                <th className="border px-4 py-2">Mobile</th>
                <th className="border px-4 py-2">iPad</th>
                <th className="border px-4 py-2">xbox</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-gray-800 text-md">
                <td className="border px-4 py-3 font-semibold">Day 1</td>
                <td className="border px-4 py-3">30 mins</td>
                <td className="border px-4 py-3">20 mins</td>
                <td className="border px-4 py-3">30 mins</td>
                <td className="border px-4 py-3">40 mins</td>
              </tr>
              {Array.from({ length: 6 }, (_, i) => (
                <tr key={i} className="bg-white text-gray-800 text-md">
                  <td className="border px-4 py-3 font-semibold">Day {i + 2}</td>
                  <td className="border px-4 py-3">&nbsp;</td>
                  <td className="border px-4 py-3">&nbsp;</td>
                  <td className="border px-4 py-3">&nbsp;</td>
                  <td className="border px-4 py-3">&nbsp;</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-2">
          <p className="text-gray-800 text-2xl leading-relaxed font-bold">
            Task 2 Sample
          </p>
          <p className="text-lg">
          Track how much screen time is for learning [e.g completing school project, practising worksheet, taking online class] and for entertainment.
          </p>
        </div>

        {/* Task 2: Learning vs Entertainment */}
        <div>
          <table className="min-w-full border border-gray-300 text-center">
            <thead>
              <tr className="bg-indigo-100 text-indigo-800 font-semibold text-lg">
                <th className="border px-4 py-2"></th>
                <th className="border px-4 py-2">Learning</th>
                <th className="border px-4 py-2">Entertainment</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 7 }, (_, i) => (
                <tr key={i} className="bg-white text-gray-800 text-md">
                  <td className="border px-4 py-3 font-semibold">Day {i + 1}</td>
                  <td className="border px-4 py-3">&nbsp;</td>
                  <td className="border px-4 py-3">&nbsp;</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
