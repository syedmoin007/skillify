import React from 'react';
import { useAuth } from '../firebase/auth.js';
<firebasee></firebasee>

export default function Profile() {
  const currentUser = useAuth();

  if (currentUser === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center space-x-6">
          <div className="h-24 w-24 bg-purple-500 rounded-full flex items-center justify-center text-white text-4xl">
            {currentUser?.displayName?.charAt(0) || 'U'}
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              {currentUser?.displayName || 'User'}
            </h1>
            <p className="text-gray-600">{currentUser?.email}</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">My Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-purple-100 px-3 py-1 rounded-full">React</span>
            <span className="bg-purple-100 px-3 py-1 rounded-full">Tailwind</span>
          </div>
        </div>
      </div>
    </div>
  );
}