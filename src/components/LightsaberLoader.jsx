export default function LightsaberLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="relative w-1 h-40 bg-gray-800 overflow-hidden rounded-full">
        <div className="absolute bottom-0 left-0 w-full h-0 bg-green-500 animate-lightsaber"></div>
      </div>
      <p className="mt-6 text-lg font-starwars text-green-400">Loading...</p>

      <style>
        {`
          @keyframes lightsaber {
            0% { height: 0; }
            50% { height: 100%; }
            100% { height: 0; }
          }
          .animate-lightsaber {
            animation: lightsaber 2s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
