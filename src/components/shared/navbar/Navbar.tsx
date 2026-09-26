import Image from 'next/image';
import Link from 'next/link';
import Navitem from '@/components/shared/navbar/Navitem';
import NavCounter from './NavCounter';

export default function Navbar() {
  return (
    <nav className=" bg-[#0C0D10] font-inter px-4 lg:px-0 border-b border-[#1C1F26]">
      <div className=" lg:container lg:mx-auto flex justify-between items-center h-16 text-white">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Image src="/assets/logo.png" alt="Logo" width={24} height={24} priority />
          <span className="font-oswald md:text-lg text-white font-bold">FITLOG</span>
        </Link>
        <Navitem />
        <div className="hidden md:block">
          <NavCounter></NavCounter>
        </div>
      </div>
    </nav>
  );
}
