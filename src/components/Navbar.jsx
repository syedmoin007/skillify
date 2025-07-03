import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-yellow-300 p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-extrabold tracking-wide hover:text-yellow-400">
        Skillify ⚡
      </Link>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/skills" className="hover:text-yellow-400">Skills</Link>
        <Link to="/matches" className="hover:text-yellow-400">Matches</Link>
        <Link to="/requests" className="hover:text-yellow-400">Requests</Link>
        <Link to="/messages" className="hover:text-yellow-400">Messages</Link>
        <Link to="/auth" className="hover:text-yellow-400">Login</Link>
        <Link to="/profile" className="hover:text-yellow-400">Profile</Link>
      </div>
    </nav>
  );
}

