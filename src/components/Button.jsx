export default function Button({ children }) {
  return (
    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
      {children}
    </button>
  );
}