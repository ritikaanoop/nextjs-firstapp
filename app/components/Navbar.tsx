import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-pink-500 text-white px-8 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Navbar ^_^</div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home Page
          </Link>
          <Link href="/ritika" className="hover:text-gray-300">
            Secret Page
          </Link>
          <Link href="/dumbass" className="hover:text-gray-300">
            Counter
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
