'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className=" bg-[#0C0D10] font-inter px-4 lg:px-0 border-b border-[#1C1F26]">
      <div className=" lg:container lg:mx-auto flex justify-between items-center h-16 text-white">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Image src="/assets/logo.png" alt="Logo" width={24} height={24} priority />
          <span className="font-oswald md:text-lg text-white font-bold">FITLOG</span>
        </Link>
        <div>
          <ul className="flex gap-4">
            <li className="text-xs">
              <Link
                href="/"
                className={
                  pathname === '/' ? 'font-bold bg-amber-300 p-2 rounded-2xl ' : 'text-gray-500'
                }
              >
                Workouts
              </Link>
            </li>
            <li className="text-xs">
              <Link
                href="/myplan"
                className={
                  pathname === '/myplan'
                    ? 'font-bold bg-amber-300 p-2 rounded-2xl '
                    : 'text-gray-500'
                }
              >
                My Plans
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-4">
            <Link href="/myplan" className="text-[#D1D5DB] flex items-center gap-1 text-sm">
              Plan
              <span className="bg-[#C2F800] text-black w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">
                0
              </span>
            </Link>
            <Link href="/myplan" className="text-[#9CA3AF] flex items-center gap-1 text-sm">
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
