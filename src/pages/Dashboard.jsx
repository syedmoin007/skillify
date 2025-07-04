import React from 'react';
import { useNavigate } from 'react-router-dom';
import TiltCard from '../components/TiltCard';

const options = [
  { label: 'Find Skills', path: '/find-skills' },
  { label: 'Offer Skills', path: '/offer-skills' },
  { label: 'My Profile', path: '/profile' },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-indigo-700">
        🌟 Welcome to Skillify Galaxy
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {options.map((option) => (
          <TiltCard key={option.path}>
            <div
              onClick={() => navigate(option.path)}
              className="cursor-pointer bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl border border-indigo-200 flex flex-col items-center justify-center text-center space-y-4 hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-semibold text-indigo-600">{option.label}</h2>
              <p className="text-gray-500">Explore this section</p>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}

