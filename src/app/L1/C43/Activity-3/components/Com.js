'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import S1 from '../assets/s1.png';
import S2 from '../assets/s2.png';
import S3 from '../assets/s3.png';
import S4 from '../assets/s4.png';

function Com() {
  const [stage, setStage] = useState(0);


  const questions = [
    "Looking at this data can you identify which day had the most toy sales? ",
    "Would it be easy to find the answer just by looking at all these numbers?",
  ];

  const handleNext = () => {
    setStage(stage + 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className={`max-w-8xl w-full bg-white rounded-xl shadow-2xl p-6 flex ${stage === 4 ? 'flex-col' : 'flex-row'} gap-10 items-center`}>

        {/* Left Side: Image (conditionally hidden at stage 4) */}
        {stage !== 4 && (
          <div className="w-1/2 flex justify-center">
            {stage === 0 && (
              <Image src={S1} alt="The Candy Cloud Toy Shop" className="rounded-lg shadow-md w-full max-w-xs" />
            )}
            {(stage === 1 || stage === 2) && (
              <Image src={S2} alt="Toy Sales Data" className="rounded-lg shadow-md w-full max-w-xs" />
            )}
            {stage === 3 && (
              <Image src={S3} alt="Graph Example 1" className="rounded-lg shadow-md w-[700px]" />
            )}
            {stage === 5 && (
              <Image src={S4} alt="Bar Graph" className="rounded-lg shadow-md w-[600px]" />
            )}
          </div>
        )}

        {/* Right Side: Content */}
        <div
          className={`
            ${stage === 4 ? 'w-full items-center text-center justify-center' : 'w-1/2 items-start text-left'}
            flex flex-col
          `}
        >
          {stage === 0 && (
            <p className="text-xl text-gray-500 font-normal mb-6">
              Meet Tina, she owns a magical place called <strong>The Candy Cloud Toy Shop!</strong> She tracked her toy sales for 15 days but needs help making sense of it. <br /><br />
              Which days were super busy?
              <br />
              Which toys were the most popular?
              <br />
              She has all the data, but it’s a bit of a jumble!
            </p>
          )}

          {stage === 1 && (
            <p className="text-xl text-gray-700 font-medium mb-4 leading-relaxed">
              {questions[0]}
            </p>
          )}

          {stage === 2 && (
            <>
              <p className="text-xl text-gray-700 font-medium mb-4 leading-relaxed">
                {questions[0]}
              </p>
              <p className="text-xl text-gray-700 font-medium mb-4 leading-relaxed">
                {questions[1]}
              </p>
            </>
          )}

          {stage === 3 && (
            <p className="text-xl text-gray-700 font-medium mb-4 leading-relaxed">
              Graphs are like magic pictures that turn numbers into bars, pie charts or lines, so we can understand them quickly. They help us compare datasets and make smart choices.
            </p>
          )}

          {stage === 4 && (
            <p className="text-3xl text-gray-800 font-bold mb-6 leading-relaxed">
              Do you know what a bar graph is?
            </p>
          )}

          {stage === 5 && (
            <p className="text-xl text-gray-700 font-medium mb-4 leading-relaxed">
              It’s a chart that shows information using bars of different heights. The taller the bar, the more information there’s to be analysed!
            </p>
          )}

          {/* Button: only visible until stage 5 */}
          {stage < 5 && (
            <button
              onClick={handleNext}
              className={`px-6 py-2 mt-4 text-white font-bold rounded-full shadow-lg bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300`}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Com;
