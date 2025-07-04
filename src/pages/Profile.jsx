import React from 'react';
import { useAuth } from '../firebase/auth';
import TiltCard from '../components/TiltCard';

export default function Profile() {
  const currentUser = useAuth();

  if (!currentUser) {
    return <div className="min-h-screen flex items-center justify-center text-lg">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-100 p-8 flex items-center justify-center">
      <TiltCard>
        <div className="max-w-md bg-white rounded-2xl shadow-xl p-8 text-center space-y-4">
          <img
            src={currentUser.photoURL || `https://ui-avatars.com/api/?name=${currentUser.displayName}`}
            alt="avatar"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h1 className="text-2xl font-bold text-indigo-700">{currentUser.displayName || 'User'}</h1>
          <p className="text-gray-500">{currentUser.email}</p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-indigo-600">Skills</h2>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">React</span>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Tailwind</span>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Firebase</span>
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}

