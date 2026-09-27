function WorkoutCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl bg-[#15171D]">
      {/* Image */}
      <div className="h-56 w-full bg-gray-800" />

      {/* Content */}
      <div className="space-y-4 p-5">
        {/* Title */}
        <div className="h-6 w-3/4 rounded bg-gray-800" />

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-gray-800" />
          <div className="h-4 w-5/6 rounded bg-gray-800" />
        </div>

        {/* Info */}
        <div className="flex gap-3">
          <div className="h-4 w-20 rounded bg-gray-800" />
          <div className="h-4 w-20 rounded bg-gray-800" />
        </div>

        {/* Button */}
        <div className="h-10 w-full rounded-xl bg-gray-800" />
      </div>
    </div>
  );
}

export default WorkoutCardSkeleton;
