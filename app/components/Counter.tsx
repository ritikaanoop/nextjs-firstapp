"use client";

import { useState } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="flex flex-col items-center justify-center -mt-20"> 
        <h1 className="text-4xl font-bold text-purple-300 mb-4">Counter</h1>
        <div className="flex items-center space-x-4 mb-4">
          <button 
            onClick={decrement} 
            className="bg-purple-300 text-white px-4 py-2 rounded">
            -
          </button>
          <span className="text-2xl font-bold text-purple-300">{count}</span> {/* Changed to text-pink-500 */}
          <button 
            onClick={increment} 
            className="bg-purple-300 text-white px-4 py-2 rounded">
            +
          </button>
        </div>
        <button 
          onClick={reset} 
          className="bg-purple-300 text-white px-4 py-2 rounded mb-4">
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;
