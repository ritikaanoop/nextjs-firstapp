"use client";

import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/ritika'); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100">
      <div className="text-center -mt-20">
        <h1 className="text-4xl font-bold text-pink-400">Ritika Nair</h1>
        <button 
          onClick={handleButtonClick} 
          className="mt-6 bg-pink-400 text-white px-4 py-2 rounded">
          please press this!! very important
        </button>
      </div>
    </div>
  );
};

export default HomePage;
