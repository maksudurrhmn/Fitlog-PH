import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className=" bg-[#0C0D10] font-inter px-4 lg:px-0 border-b border-[#1C1F26]">
      <div className=" lg:container lg:mx-auto flex justify-between items-center h-16 text-white">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Image src="/assets/logo.png" alt="Logo" width={24} height={24} priority />
          <span className="font-oswald md:text-lg text-white font-bold">FITLOG</span>
        </Link>
        <div>
          <ul className="flex gap-4">
            <li className="text-xs">Workouts</li>
            <li className="text-xs">My Plans</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-4">
            <Link href="/" className="text-[#D1D5DB] flex items-center gap-1 text-sm">
              Plan
              <span className="bg-[#C2F800] text-black w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">
                0
              </span>
            </Link>
            <Link href="/" className="text-[#9CA3AF] flex items-center gap-1 text-sm">
              Saved
              <span className="border border-[#2D313B]  text-[#D1D5DB] w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
