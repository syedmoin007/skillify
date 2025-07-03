import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaComments } from "react-icons/fa";

export default function Matches() {
  const navigate = useNavigate();

  // Dummy data for demonstration
  const matches = [
    {
      id: 1,
      name: "Luke Skywalker",
      skillsOffered: ["React", "Node.js"],
      skillsWanted: ["Machine Learning"],
      avatar: "🧑‍🚀",
    },
    {
      id: 2,
      name: "Leia Organa",
      skillsOffered: ["UI/UX Design"],
      skillsWanted: ["React"],
      avatar: "👩‍🚀",
    },
    {
      id: 3,
      name: "Han Solo",
      skillsOffered: ["Backend", "API"],
      skillsWanted: ["Frontend"],
      avatar: "🚀",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">
        🔍 Your Matches
      </h1>
      <p className="text-gray-600 mb-6 text-center italic">
        "The Force is strong with these connections"
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {matches.map((match) => (
          <div
            key={match.id}
            className="bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transform transition"
          >
            <div className="text-5xl mb-3">{match.avatar}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-1">{match.name}</h2>
            <p className="text-sm text-gray-600 mb-2">
              <FaStar className="inline text-yellow-500 mr-1" />
              Offers: {match.skillsOffered.join(", ")}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Wants: {match.skillsWanted.join(", ")}
            </p>
            <button
              onClick={() => navigate("/messages")}
              className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition flex items-center gap-2"
            >
              <FaComments /> Message
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
