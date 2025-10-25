import React, { useState } from 'react';

const WebcamFeed = () => {
  const [webcamEnabled, setWebcamEnabled] = useState(false);
  const [postureStatus, setPostureStatus] = useState('Good');
  const [eyeContact, setEyeContact] = useState(true);

  const toggleWebcam = () => {
    setWebcamEnabled(!webcamEnabled);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 bg-gradient-to-r from-[#FF9324] to-[#e99a4b] rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">Camera Feed</h3>
      </div>

      <div className="mb-4">
        {webcamEnabled ? (
          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <p className="text-sm opacity-75">Camera Active</p>
            </div>
          </div>
        ) : (
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
              </svg>
              <p className="text-sm">Camera Disabled</p>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={toggleWebcam}
        className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 mb-4 ${
          webcamEnabled 
            ? 'bg-red-100 text-red-700 hover:bg-red-200' 
            : 'bg-green-100 text-green-700 hover:bg-green-200'
        }`}
      >
        {webcamEnabled ? 'Disable Camera' : 'Enable Camera'}
      </button>

      {webcamEnabled && (
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-600">Posture</span>
            <span className={`text-sm font-medium ${
              postureStatus === 'Good' ? 'text-green-600' : 'text-orange-600'
            }`}>
              {postureStatus}
            </span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-600">Eye Contact</span>
            <span className={`text-sm font-medium ${
              eyeContact ? 'text-green-600' : 'text-red-600'
            }`}>
              {eyeContact ? 'Good' : 'Look at Camera'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebcamFeed;