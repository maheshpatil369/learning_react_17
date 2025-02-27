import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex space-x-4">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button 
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
