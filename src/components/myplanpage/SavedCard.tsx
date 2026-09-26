import Image from 'next/image';
import { WorkoutContext } from '@/context/WorkoutProvider';
import React, { useContext } from 'react';
import EmptyCard from './EmptyCard';

function SavedCard() {
  const { savedWorkout } = useContext(WorkoutContext);
  return (
    <div className="space-y-4">
      {savedWorkout.length === 0 ? (
        <EmptyCard></EmptyCard>
      ) : (
        savedWorkout.map((workout) => (
          <div
            key={workout.id}
            className="bg-[#15171D] border border-gray-800/60 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            {/* Left Side: Thumbnail & Exercise Specs */}
            <div className="flex items-center gap-4">
              <div className="relative w-28 h-20 sm:w-32 sm:h-20 rounded-xl overflow-hidden bg-gray-900 shrink-0">
                <Image src={workout.image} alt={workout.name} fill className="object-cover" />
              </div>
              <div className="space-y-1">
                <h3 className="font-oswald text-lg font-bold tracking-wide uppercase text-white">
                  {workout.name}
                </h3>
                <p className="text-xs text-gray-400 font-medium">{workout.equipment}</p>
                <div className="flex items-center gap-3 text-xs text-gray-300 pt-1">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-3.5 h-3.5 text-[#CCFF00]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {workout.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-3.5 h-3.5 text-[#CCFF00]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      />
                    </svg>
                    {workout.caloriesBurned}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-3.5 h-3.5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {workout.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Action Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end pt-2 sm:pt-0">
              <button
                type="button"
                className="border border-gray-700 hover:bg-gray-800 text-gray-200 text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer"
              >
                View Details
              </button>
              <button
                type="button"
                className="text-gray-500 hover:text-white p-1 transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default SavedCard;
