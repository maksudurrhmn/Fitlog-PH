function WorkoutDetailsSkeleton() {
  return (
    <section className="min-h-screen bg-[#0C0D10] px-4 py-12 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left Column: Image Skeleton */}
        <div className="relative aspect-square w-full animate-pulse overflow-hidden rounded-2xl bg-[#15171D] md:aspect-auto md:h-full" />

        {/* Right Column */}
        <div className="animate-pulse space-y-6">
          {/* Title & Description */}
          <div className="space-y-3">
            {/* Title */}
            <div className="h-12 w-3/4 rounded-lg bg-gray-800 sm:h-14" />

            {/* Description */}
            <div className="space-y-2 pt-1">
              <div className="h-4 w-full rounded bg-gray-800" />
              <div className="h-4 w-11/12 rounded bg-gray-800" />
              <div className="h-4 w-3/4 rounded bg-gray-800" />
            </div>

            {/* Muscle Group Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="h-6 w-20 rounded-full bg-gray-800" />
              <div className="h-6 w-24 rounded-full bg-gray-800" />
              <div className="h-6 w-16 rounded-full bg-gray-800" />
            </div>
          </div>

          {/* Workout Information Table */}
          <div className="w-full overflow-hidden rounded-xl border border-gray-800/40 bg-[#15171D] px-5 py-2">
            <div className="divide-y divide-gray-800/60">
              {/* Row 1 */}
              <div className="flex items-center justify-between py-3">
                <div className="h-3 w-24 rounded bg-gray-800" />
                <div className="h-4 w-28 rounded bg-gray-800" />
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-between py-3">
                <div className="h-3 w-20 rounded bg-gray-800" />
                <div className="h-4 w-24 rounded bg-gray-800" />
              </div>

              {/* Row 3 */}
              <div className="flex items-center justify-between py-3">
                <div className="h-3 w-12 rounded bg-gray-800" />
                <div className="h-4 w-10 rounded bg-gray-800" />
              </div>

              {/* Row 4 */}
              <div className="flex items-center justify-between py-3">
                <div className="h-3 w-12 rounded bg-gray-800" />
                <div className="h-4 w-16 rounded bg-gray-800" />
              </div>

              {/* Row 5 */}
              <div className="flex items-center justify-between py-3">
                <div className="h-3 w-20 rounded bg-gray-800" />
                <div className="h-4 w-16 rounded bg-gray-800" />
              </div>

              {/* Row 6 */}
              <div className="flex items-center justify-between py-3">
                <div className="h-3 w-20 rounded bg-gray-800" />
                <div className="h-4 w-20 rounded bg-gray-800" />
              </div>

              {/* Row 7 */}
              <div className="flex items-center justify-between py-3">
                <div className="h-3 w-16 rounded bg-gray-800" />
                <div className="h-4 w-12 rounded bg-gray-800" />
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-4 pt-2">
            {/* Heading */}
            <div className="h-7 w-32 rounded bg-gray-800" />

            {/* Steps */}
            <div className="space-y-3">
              <div className="h-5 w-full rounded bg-gray-800" />
              <div className="h-5 w-11/12 rounded bg-gray-800" />
              <div className="h-5 w-10/12 rounded bg-gray-800" />
              <div className="h-5 w-9/12 rounded bg-gray-800" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="h-10 w-44 rounded-xl bg-gray-800" />
            <div className="h-10 w-36 rounded-xl bg-gray-800" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkoutDetailsSkeleton;
