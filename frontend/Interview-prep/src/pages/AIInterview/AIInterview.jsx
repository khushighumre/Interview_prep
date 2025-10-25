import React, { useState } from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import StartScreen from './components/StartScreen';
import InterviewScreen from './components/InterviewScreen';

const AIInterview = () => {
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [result, setResult] = useState(null);

  const mockQuestions = [
    "Tell me about yourself and your background.",
    "What are your greatest strengths and weaknesses?",
    "Why do you want to work for our company?",
    "Describe a challenging project you've worked on.",
    "Where do you see yourself in 5 years?"
  ];

  const startInterview = () => {
    setInterviewStarted(true);
    setCurrentQuestion(mockQuestions[0]);
    setQuestionIndex(0);
  };

  const handleAnswerSubmit = () => {
    const mockResult = {
      score: Math.floor(Math.random() * 40) + 60,
      feedback: "Good answer! Consider providing more specific examples to strengthen your response."
    };
    setResult(mockResult);
  };

  const nextQuestion = () => {
    if (questionIndex < mockQuestions.length - 1) {
      const nextIndex = questionIndex + 1;
      setQuestionIndex(nextIndex);
      setCurrentQuestion(mockQuestions[nextIndex]);
      setCurrentAnswer('');
      setResult(null);
    }
  };

  const finishInterview = () => {
    setInterviewStarted(false);
    setQuestionIndex(0);
    setCurrentAnswer('');
    setResult(null);
  };

  return (
    <DashboardLayout>
      {!interviewStarted ? (
        <StartScreen onStart={startInterview} />
      ) : (
        <InterviewScreen
          question={currentQuestion}
          answer={currentAnswer}
          onAnswerChange={setCurrentAnswer}
          onSubmit={handleAnswerSubmit}
          onNext={nextQuestion}
          onFinish={finishInterview}
          result={result}
          questionIndex={questionIndex}
          totalQuestions={mockQuestions.length}
        />
      )}
    </DashboardLayout>
  );
};

export default AIInterview;