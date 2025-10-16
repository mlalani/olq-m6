'use client';
import { useState } from 'react';
import Image from "next/image"
import C1 from "../assets/c1.jpeg"

export default function Com() {
  const [questionIndex, setQuestionIndex] = useState(-1);
  const [showAnswer, setShowAnswer] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);
  const [step, setStep] = useState(0); // 0 = QnA, 1 = Tips

  const questions = [
    "What do you think went wrong here?",
    "Would you have clicked that link? Why or why not?",
    "What looks fishy about the website name: scienceinfo.ora?",
    "Do you know what a domain is?"
  ];

  const tips = [
    "<b>Check the Domain Extension</b>: If you see an unusual extension like <code>.ora</code>, <code>.zip</code>, or <code>.top</code>, it's a red flag! Stick to trusted ones like <code>.com</code>, <code>.org</code>, <code>.edu</code>, <code>.gov</code>.",
    "<b>Spelling Tricks or Fake Lookalikes</b>: Sites may try g0ogle.com (zero not o) or amaz0n.com. Always look carefully!",
    "<b>HTTP vs HTTPS</b>: Make sure the link starts with <code>https://</code> and shows a padlock 🔒. No 'S'? Not safe!",
    "<b>Use Tools</b>: Sites like domaintools.com help check a website’s info. If in doubt, check it out!"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-violet-100 p-6 text-gray-800 font-sans">
      {/* Step 0: Show Story, Qs, Answer */}
      {step === 0 && (
        <>
          {/* Story Section */}
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl transition hover:shadow-2xl">
            <Image
              src={C1}
              alt="Volcano"
              className="w-[30%] rounded-xl"
            />
            <div className="md:w-1/2 text-lg space-y-4 leading-relaxed">
              <p>
                Aarav, an 11-year-old working on his volcano project, got a message from a classmate:
                <br />
                <strong>"Secret volcano info NASA won’t show you! — www.scienceinfo.ora."</strong>
              </p>
              <p>
                Curious, he clicked the link. The site looked normal, so he went on with his work.
                But the next day, his tablet froze!
              </p>
              <p>
                He took his tablet to the repair shop. The technician looked at it, ran some tests, and then said:
                <br />
                <em>"Aarav, there were viruses downloaded from a suspicious site. It looks like it came from scienceinfo.ora. This isn’t a real website – it’s pretending to be one!"</em>
              </p>
            </div>
          </div>

          {/* First Next Button */}
          {questionIndex === -1 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setQuestionIndex(0)}
                className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 hover:shadow-xl transition-all duration-200"
              >
              Next
              </button>
            </div>
          )}

          {/* Questions Section */}
          {questionIndex >= 0 && (
            <div className="mt-8 space-y-6 max-w-3xl mx-auto text-center">
              {questions.slice(0, questionIndex + 1).map((q, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur rounded-xl shadow p-4 text-xl font-semibold text-blue-800 border-l-4 border-blue-400"
                >
                  {q}
                </div>
              ))}

              {!showAnswer && questionIndex < questions.length - 1 && (
                <button
                  onClick={() => setQuestionIndex(questionIndex + 1)}
                  className="bg-blue-500 text-white px-6 py-2 rounded-full shadow hover:bg-blue-600 transition"
                >
                  Next
                </button>
              )}

              {!showAnswer && questionIndex === questions.length - 1 && (
                <button
                  onClick={() => setShowAnswer(true)}
                  className="bg-green-600 text-white px-6 py-2 rounded-full shadow hover:bg-green-700 transition"
                >
                  Show Answer
                </button>
              )}
            </div>
          )}

          {/* Domain Answer Block */}
          {showAnswer && (
            <div className="mt-8 bg-white/90 backdrop-blur p-6 rounded-xl shadow text-lg max-w-3xl mx-auto">
              <p>
                A <strong>domain name</strong> is like the unique street address for a website on the internet.
                Just like your house has an address (e.g., '123 Main Street'), every website has one too.
              </p>
              <p className="mt-4">
                It usually has two parts:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li><strong>Name</strong> — like <code>google</code> or <code>scienceinfo</code></li>
                <li><strong>Extension</strong> — like <code>.com</code> or <code>.org</code></li>
              </ul>
              <div className="mt-6 text-center">
                <button
                  onClick={() => {
                    setStep(1); // Move to Tips
                    setShowAnswer(false);
                    setQuestionIndex(-1);
                    setTipIndex(1); // Show first tip below
                  }}
                  className="bg-purple-600 text-white px-6 py-2 rounded-full shadow hover:bg-purple-700 transition"
                >
                  Show Tips
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Step 1: Tips - All Tips Stacked */}
      {step === 1 && (
        <div className="mt-8 space-y-6 max-w-2xl mx-auto">
          {tips.slice(0, tipIndex).map((tip, i) => (
            <div
              key={i}
              className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-xl shadow text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: tip }}
            />
          ))}

          {tipIndex < tips.length && (
            <div className="text-center">
              <button
                onClick={() => setTipIndex(tipIndex + 1)}
                className="bg-pink-500 text-white px-6 py-2 rounded-full shadow hover:bg-pink-600 transition"
              >
                Next Tip
              </button>
            </div>
          )}
        </div>
      )}

      {/* Final Completion */}
      {step === 1 && tipIndex === tips.length && (
        <div className="mt-10 text-center text-2xl font-bold text-green-700">
          {/* Awesome! You're now a smarter, safer web explorer! */}
        </div>
      )}
    </div>
  );
}
