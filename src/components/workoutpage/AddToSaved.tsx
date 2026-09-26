'use client';

import { WorkoutContext } from '@/context/WorkoutProvider';
import type { Workout } from '@/types/workout';
import { useContext } from 'react';
import { toast } from 'react-toastify';

function AddToSaved({ workout }: { workout: Workout }) {
  const { savedWorkout, setSavedWorkout } = useContext(WorkoutContext);

  const handleAddToSaved = (workout: Workout) => {
    const isAlreadyAdded = savedWorkout.some((item) => item.id === workout.id);

    if (!isAlreadyAdded) {
      setSavedWorkout((prev) => [...prev, workout]);
      toast.success(`Added ${workout.name} to plan`);
    } else {
      toast.warning('Already Added');
    }
  };
  return (
    <button
      type="button"
      className="flex items-center gap-2 bg-transparent hover:bg-gray-800/50 text-gray-300 hover:text-white border border-gray-700 px-5 py-2.5 rounded-xl text-sm transition-colors cursor-pointer"
      onClick={() => {
        handleAddToSaved(workout);
      }}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
      Save for later
    </button>
  );
}

export default AddToSaved;
