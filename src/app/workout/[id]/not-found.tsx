import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0C0D10] text-white flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-[#CCFF00] font-oswald text-sm uppercase tracking-widest mb-3">
          404 Error
        </p>

        <h1 className="font-oswald text-5xl sm:text-6xl font-bold uppercase">Workout Not Found</h1>

        <p className="text-gray-400 mt-4 max-w-md mx-auto">
          Sorry, we couldn't find the workout you're looking for.
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
