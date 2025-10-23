'use client';

import { useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Image from 'next/image';

import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";
import S4 from "../assets/s4.png";
import S5 from "../assets/s5.png";
import S6 from "../assets/s6.png";
import S7 from "../assets/s7.png";
import S8 from "../assets/s8.png";
import S9 from "../assets/s9.png";

const categories = [
  { label: 'Eating', image: S1 },
  { label: 'Playing online', image: S2 },
  { label: 'Playing offline', image: S3 },
  { label: 'Watching TV', image: S8 },
  { label: 'Studying online', image: S4 },
  { label: 'Studying offline', image: S5 },
  { label: 'School', image: S6 },
  { label: 'Watching reels/short clips', image: S9 },
  { label: 'Sleeping', image: S7 },
];

const COLORS = [
  '#6366F1', // Violet
  '#34D399', // Emerald
  '#F59E0B', // Amber
  '#F87171', // Rose
  '#3B82F6', // Blue
  '#8B5CF6', // Purple
  '#60A5FA', // Sky
];

export default function Com() {
  const [values, setValues] = useState(Array(categories.length).fill(''));
  const [data, setData] = useState(null);

  const handleChange = (index, val) => {
    const updated = [...values];
    updated[index] = val;
    setValues(updated);
  };

  const handleSubmit = () => {
    const total = values.reduce((sum, val) => sum + Number(val || 0), 0);
    if (total === 0) return;
    const pieData = categories.map((cat, i) => ({
      name: cat.label,
      value: Number(((Number(values[i]) / total) * 100).toFixed(1)),
    }));
    setData(pieData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-pink-50 flex flex-col items-center justify-start p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Daily Time Pie</h1>

      {/* Table */}
      <table className="bg-white shadow-xl rounded-xl border border-gray-300 border-collapse w-auto mb-6">
        <thead>
          <tr>
            {categories.map((cat, i) => (
              <th
                key={i}
                className="border border-gray-300 px-4 py-3 text-sm text-center"
              >
                <div className="flex flex-col items-center">
                  <span className="text-gray-800 text-lg mb-1 font-medium text-center">
                    {cat.label}
                  </span>
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    className="w-[100px] h-[100px] object-cover mb-1 rounded-full shadow"
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {categories.map((_, i) => (
              <td
                key={i}
                className="border border-gray-300 px-4 py-3 text-center"
              >
                <input
                  type="number"
                  min="0"
                  placeholder="Hrs"
                  value={values[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  className="w-20 p-2 border border-gray-300 rounded-lg text-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow transition"
      >
        Submit
      </button>

      {/* Pie Chart */}
      {data && (
        <div className="mt-10 w-full max-w-[700px] h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 20, right: 20, left: 50, bottom: 20 }}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={160}
                label={({ name, value }) => `${name}: ${value}%`}
                labelLine={false}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ fontSize: '14px', fontWeight: '600' }}
              />
              <Legend
                wrapperStyle={{ fontSize: '14px', fontWeight: '600' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
