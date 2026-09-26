'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navitem() {
  const pathname = usePathname();
  return (
    <div>
      <ul className="flex gap-4">
        <li className="text-sm">
          <Link
            href="/"
            className={
              pathname === '/'
                ? 'font-semibold bg-[#1A2312] text-[#C2F800] p-2 rounded-2xl '
                : 'text-[#9CA3AF]'
            }
          >
            Workouts
          </Link>
        </li>
        <li className="text-sm">
          <Link
            href="/myplan"
            className={
              pathname === '/myplan'
                ? 'font-semibold bg-[#1A2312] text-[#C2F800] p-2 rounded-2xl '
                : 'text-[#9CA3AF]'
            }
          >
            My Plans
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navitem;
