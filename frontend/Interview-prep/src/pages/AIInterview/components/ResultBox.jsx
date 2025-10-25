import React from 'react';

const ResultBox = ({ result }) => {
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreBg = (score) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-orange-100';
    return 'bg-red-100';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-orange-400">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-r from-[#FF9324] to-[#e99a4b] rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">AI Evaluation</h3>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">Score</span>
          <span className={`text-2xl font-bold ${getScoreColor(result.score)}`}>
            {result.score}/100
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className={`h-3 rounded-full transition-all duration-500 ${
              result.score >= 80 ? 'bg-green-500' : 
              result.score >= 60 ? 'bg-orange-500' : 'bg-red-500'
            }`}
            style={{ width: `${result.score}%` }}
          ></div>
        </div>
      </div>

      <div className={`p-4 rounded-lg ${getScoreBg(result.score)}`}>
        <h4 className="font-medium text-gray-800 mb-2">Feedback</h4>
        <p className="text-gray-700 text-sm leading-relaxed">{result.feedback}</p>
      </div>
    </div>
  );
};

export default ResultBox;