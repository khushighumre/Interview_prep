import React from 'react';
import QuestionBox from './QuestionBox';
import WebcamFeed from './WebcamFeed';
import ResultBox from './ResultBox';

const InterviewScreen = ({
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
  return (
    <div className="container mx-auto px-6 py-8 max-w-7xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">AI Interview Session</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Question {questionIndex + 1} of {totalQuestions}
          </span>
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[#FF9324] to-[#e99a4b] h-2 rounded-full transition-all duration-300"
              style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <QuestionBox
            question={question}
            answer={answer}
            onAnswerChange={onAnswerChange}
            onSubmit={onSubmit}
            onNext={onNext}
            onFinish={onFinish}
            result={result}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
          />
          
          {result && (
            <div className="mt-6">
              <ResultBox result={result} />
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <WebcamFeed />
        </div>
      </div>
    </div>
  );
};

export default InterviewScreen;