import React from 'react';

const QuestionBox = ({
  question,
  answer,
  onAnswerChange,
  onSubmit,
  onNext,
  onFinish,
  result,
  questionIndex,
  totalQuestions
}) => {
  const isLastQuestion = questionIndex === totalQuestions - 1;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-[#FF9324] to-[#e99a4b] rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-gray-800">Interview Question</h2>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-gray-800 text-base leading-relaxed">{question}</p>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Your Answer
        </label>
        <textarea
          value={answer}
          onChange={(e) => onAnswerChange(e.target.value)}
          placeholder="Type your answer here..."
          className="w-full h-32 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-orange-300 outline-none resize-none"
        />
      </div>

      <div className="flex gap-3">
        {!result ? (
          <button
            onClick={onSubmit}
            disabled={!answer.trim()}
            className="flex-1 bg-gradient-to-r from-[#FF9324] to-[#e99a4b] text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:shadow-orange-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Answer
          </button>
        ) : (
          <>
            {!isLastQuestion ? (
              <button
                onClick={onNext}
                className="flex-1 bg-gradient-to-r from-[#FF9324] to-[#e99a4b] text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:shadow-orange-300"
              >
                Next Question
              </button>
            ) : (
              <button
                onClick={onFinish}
                className="flex-1 bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                Finish Interview
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionBox;