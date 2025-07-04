import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6">
      <h1 className="text-5xl font-starwars text-yellow-500">Skillify</h1>
      <p className="text-xl max-w-md">
        Trade skills, learn from peers, and grow your abilities across the galaxy.
      </p>
      <Button color="blue" onClick={() => navigate('/auth')}>Get Started</Button>
      <footer className="mt-10 text-gray-500 text-sm">
        Hidden Yoda: "Do or do not, there is no try."
      </footer>
    </div>
  );
}
