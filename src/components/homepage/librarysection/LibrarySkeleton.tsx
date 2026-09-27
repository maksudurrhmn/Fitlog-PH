import WorkoutCardSkeleton from './WorkoutCardSkeleton';

function LibrarySkeleton() {
  return (
    <section className="bg-[#0C0D10] py-8 text-white md:py-16 lg:py-24">
      <div className="container mx-auto space-y-6">
        <div>
          <div className="h-9 w-40 animate-pulse rounded bg-gray-800" />

          <div className="mt-2 h-5 w-80 animate-pulse rounded bg-gray-800" />
        </div>

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <WorkoutCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LibrarySkeleton;
