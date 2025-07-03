export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-5 py-2 rounded-xl shadow hover:shadow-md hover:from-purple-600 hover:to-indigo-600 focus:outline-none"
    >
      {children}
    </button>
  );
}
