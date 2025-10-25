import React from 'react';

const StartScreen = ({ onStart }) => {
  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          AI Interview Recruiter
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Experience a realistic interview with our AI-powered recruiter
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-[#FF9324] to-[#e99a4b] rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Ready to Begin Your Interview?
          </h2>
          
          <div className="text-left bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="font-medium text-gray-800 mb-3">Instructions:</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Make sure you're in a quiet environment</li>
              <li>• Position yourself clearly in front of the camera</li>
              <li>• Answer each question thoughtfully and completely</li>
              <li>• You'll receive feedback after each response</li>
            </ul>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-[#FF9324] to-[#e99a4b] text-white font-semibold py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:shadow-orange-300"
        >
          Start Interview
        </button>
      </div>
    </div>
  );
};

export default StartScreen;