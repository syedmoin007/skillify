export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition font-semibold"
    >
      {children}
    </button>
  );
}
