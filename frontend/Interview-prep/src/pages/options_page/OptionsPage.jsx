import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layouts/DashboardLayout';

const OptionsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabType) => {
    setActiveTab(tabType);
    
    if (tabType === 'practice-questions') {
      navigate('/dashboard');
    } else if (tabType === 'ai-recruiter') {
      navigate('/ai-interview');
    }
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Choose Your Interview Preparation Method
          </h1>
          <p className="text-gray-600 text-lg">
            Select the option that best suits your preparation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Practice Questions Tab */}
          <div
            onClick={() => handleTabClick('practice-questions')}
            className={`group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-orange-300 ${
              activeTab === 'practice-questions' ? 'border-orange-400 shadow-2xl' : 'border-gray-100'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#FF9324] to-[#e99a4b] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Practice Questions for Interview
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Access curated interview questions, create custom sessions, and practice at your own pace with detailed feedback.
              </p>
              
              <div className="flex items-center justify-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors">
                <span>Get Started</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* AI Recruiter Tab */}
          <div
            onClick={() => handleTabClick('ai-recruiter')}
            className={`group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:border-orange-300 ${
              activeTab === 'ai-recruiter' ? 'border-orange-400 shadow-2xl' : 'border-gray-100'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#FF9324] to-[#e99a4b] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Practice for Interview with AI Recruiter
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Experience realistic interview scenarios with our AI-powered recruiter for immersive practice sessions.
              </p>
              
              <div className="flex items-center justify-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors">
                <span>Coming Soon</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OptionsPage;