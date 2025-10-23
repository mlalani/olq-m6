"use client";

import { useState } from 'react';

const Com = () => {
  const [currentChat, setCurrentChat] = useState(0);

  const chats = [
    // First chat - Customer Support
    [
      {
        user: "user1",
        message: "Hello! Welcome to Galaxy Telecom Customer Support.\nPress 1 for Billing inquiries.\nPress 2 for Internet issues.\nPress 3 for New connection requests.",
        initials: "A1",
        color: "bg-blue-500"
      },
      {
        user: "user2", 
        message: "I have an issue with my internet connection.",
        initials: "M",
        color: "bg-green-500"
      },
      {
        user: "user1",
        message: "Thank you! Please select:\nPress 1 to reset your modem.\nPress 2 to check network status.\nPress 3 to speak with a technician.",
        initials: "A1",
        color: "bg-blue-500"
      },
      {
        user: "user2",
        message: "I want to speak with a technician.",
        initials: "M",
        color: "bg-green-500"
      },
      {
        user: "user1",
        message: "Connecting you to the next available technician. Please wait…",
        initials: "A1",
        color: "bg-blue-500"
      }
    ],
    // Second chat - Homework Help
    [
      {
        user: "user1",
        message: "Hi! I need help with my homework on the solar system.",
        initials: "A2",
        color: "bg-blue-500"
      },
      {
        user: "user2",
        message: "Sure! What part are you struggling with?",
        initials: "H",
        color: "bg-green-500"
      },
      {
        user: "user1",
        message: "I don't understand why planets orbit the Sun.",
        initials: "A2",
        color: "bg-blue-500"
      },
      {
        user: "user2",
        message: "Okay, let's break it down. The Sun has a strong gravity that pulls planets toward it. But the planets are moving sideways too, so they keep orbiting instead of falling straight in.",
        initials: "H",
        color: "bg-green-500"
      },
      {
        user: "user1",
        message: "Ah, that makes sense! So it's like a balance between moving forward and being pulled inward?",
        initials: "A2",
        color: "bg-blue-500"
      },
      {
        user: "user2",
        message: "Exactly! You've got it.",
        initials: "H",
        color: "bg-green-500"
      }
    ]
  ];

  const handleNext = () => {
    setCurrentChat(prev => (prev + 1) % chats.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-lg shadow-sm border-b p-4">
          <h1 className="text-2xl font-bold text-gray-800">Chat Conversation</h1>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-b-lg shadow-sm min-h-[500px] max-h-[600px] overflow-y-auto">
          <div className="p-6 space-y-6">
            {chats[currentChat].map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.user === 'user1' ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex max-w-[80%] ${msg.user === 'user1' ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Avatar */}
                  <div className={`flex-shrink-0 ${msg.user === 'user1' ? 'mr-3' : 'ml-3'}`}>
                    <div className={`w-10 h-10 rounded-full ${msg.color} flex items-center justify-center text-white font-semibold text-sm`}>
                      {msg.initials}
                    </div>
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`px-4 py-3 rounded-2xl ${
                      msg.user === 'user1'
                        ? 'bg-blue-100 text-gray-800'
                        : 'bg-green-100 text-gray-800'
                    }`}
                  >
                    <div className="whitespace-pre-line text-base leading-relaxed">
                      {msg.message}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        {currentChat < chats.length - 1 && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Com;