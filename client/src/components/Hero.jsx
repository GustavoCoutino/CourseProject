import React from "react";

function Hero() {
  return (
    <div className="bg-gray-50 py-12 px-6 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Quizzer</h1>
      <p className="text-lg text-gray-700 mb-8">Create and fill out quizzes!</p>

      <div className="max-w-lg mx-auto mb-10">
        <input
          type="text"
          placeholder="Search templates..."
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></input>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Latest Templates
        </h2>
      </div>
    </div>
  );
}

export default Hero;
