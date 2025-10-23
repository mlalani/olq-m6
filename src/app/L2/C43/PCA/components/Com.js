"use client";

export default function Com() {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-md space-y-6">
      {/* Header Section */}
      <h1 className="text-2xl font-bold text-center text-blue-700">
      Data Detective Challenge
      </h1>

      {/* Intro Section */}
      <p className="text-gray-700 leading-relaxed">
        In this challenge, you’ll work with a <b>Book Fair Sales dataset</b>,
        provided in your <b>Post Class Activity 1a</b>. You have to complete the
        tasks mentioned below!
      </p>


      {/* Task List */}
      <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          📋 Tasks to Complete:
        </h2>
        <ul className="list-inside space-y-2 text-gray-800">
          <li>
            <b>Task 1:</b> Create a graph
          </li>
          <li>
            <b>Task 2:</b> Which genre sold the most books?
          </li>
          <li>
            <b>Task 3:</b> Which genre had the least number of books sold?
          </li>
          <li>
            <b>Task 4:</b> What is the total number of books sold?
          </li>
          <li>
            <b>Task 5:</b> Which genres sold less than 40 books?
          </li>
          <li>
            <b>Task 6:</b> How many genres sold more than 50 books?
          </li>
        </ul>
      </div>

    </div>
  );
}
