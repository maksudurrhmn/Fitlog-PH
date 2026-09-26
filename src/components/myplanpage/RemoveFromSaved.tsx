'use client';
import { WorkoutContext } from '@/context/WorkoutProvider';
import { Workout } from '@/types/workout';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

function RemoveFromSaved({ workout }: { workout: Workout }) {
  const { savedWorkout, setSavedWorkout } = useContext(WorkoutContext);

  const handleRemoveFromSaved = (workout: Workout) => {
    setSavedWorkout(savedWorkout.filter((item) => item.id !== workout.id));
    toast.warning('Removed Successfully');
  };

  return (
    <button
      type="button"
      className="text-gray-500 hover:text-white p-1 transition-colors cursor-pointer"
      onClick={() => handleRemoveFromSaved(workout)}
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
  );
}

export default RemoveFromSaved;
