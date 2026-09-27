'use client';

import { WorkoutContext } from '@/context/WorkoutProvider';
import type { Workout } from '@/types/workout';
import { Bookmark } from 'lucide-react';
import { useContext } from 'react';
import { toast } from 'react-toastify';

function AddToSaved({ workout }: { workout: Workout }) {
  const { savedWorkout, setSavedWorkout } = useContext(WorkoutContext);

  const handleAddToSaved = (workout: Workout) => {
    const isAlreadyAdded = savedWorkout.some((item) => item.id === workout.id);

    if (!isAlreadyAdded) {
      setSavedWorkout((prev) => [...prev, workout]);
      toast.success(`Added to saved`);
    } else {
      toast.warning('Already in your saved');
    }
  };
  return (
    <button
      type="button"
      className="flex items-center gap-2 bg-transparent hover:bg-gray-800/50 text-gray-300 hover:text-white border border-gray-700 px-5 py-2.5 rounded-xl text-sm transition-colors cursor-pointer font-inter"
      onClick={() => {
        handleAddToSaved(workout);
      }}
    >
      <Bookmark className="h-4 w-4" />
      Save for later
    </button>
  );
}

export default AddToSaved;
