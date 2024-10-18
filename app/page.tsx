import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="text-center -mt-20"> 
        <h1 className="text-4xl font-bold text-pink-400">Ritika Nair</h1>
        <Link href="/ritika">
          <button className="mt-6 bg-pink-400 text-white px-4 py-2 rounded">
            please press this!! very important
          </button>
        </Link>
      </div>
    </div>
  );
}
