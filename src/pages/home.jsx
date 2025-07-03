import Button from '../components/Button';

export default function home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-yellow-300 p-8">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center">
        Welcome to Skillify 🚀
      </h1>
      <p className="text-center text-lg mb-8 max-w-xl">
        The galaxy’s first peer-to-peer skill swap platform. Train in React, Tailwind, or the ways of the Force.
      </p>
      <Button>
        <a href="/auth">Get Started</a>
      </Button>
    </div>
  );
}
