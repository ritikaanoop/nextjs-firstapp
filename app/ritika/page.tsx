import Link from 'next/link';

export default function Ritika() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100"> 
      <div className="text-center -mt-20"> 
        <h1 className="text-4xl font-bold text-pink-400">Why are you even here?</h1>
        <Link href="/">
          <button className="mt-6 bg-pink-400 text-white px-4 py-2 rounded">
            Go Back to Ganjedi Page
          </button>
        </Link>
      </div>
    </div>
  );
}
