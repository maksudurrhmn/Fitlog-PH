import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0C0D10] text-white flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-oswald text-[#CCFF00] text-sm uppercase tracking-[0.2em] mb-3">
          404 Error
        </p>

        <h1 className="font-oswald text-6xl sm:text-8xl font-bold uppercase">Page Not Found</h1>

        <p className="font-inter text-gray-400 mt-5 max-w-md mx-auto">
          The page you are looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
