import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaComments, FaSearch } from "react-icons/fa";

export default function Dashboard() {
  const navigate = useNavigate();

  const options = [
    {
      name: "Profile",
      description: "View and edit your Skillify profile",
      icon: <FaUser className="text-purple-600 text-3xl" />,
      path: "/profile",
    },
    {
      name: "Matches",
      description: "Find people to swap skills with",
      icon: <FaSearch className="text-teal-600 text-3xl" />,
      path: "/matches",
    },
    {
      name: "Messages",
      description: "Chat with your connections",
      icon: <FaComments className="text-sky-600 text-3xl" />,
      path: "/messages",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
          Welcome to Skillify
        </h1>
        <p className="text-center text-gray-500 mb-8">
          What would you like to do today?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((option) => (
            <div
              key={option.name}
              onClick={() => navigate(option.path)}
              className="bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer p-6 flex flex-col items-center transition hover:-translate-y-1 group border border-gray-100"
            >
              <div className="mb-4">{option.icon}</div>
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition">
                {option.name}
              </h2>
              <p className="text-sm text-gray-500 text-center mt-2">
                {option.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

