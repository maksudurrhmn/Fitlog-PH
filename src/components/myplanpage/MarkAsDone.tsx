'use client';
import { WorkoutContext } from '@/context/WorkoutProvider';
import { Workout } from '@/types/workout';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

function MarkAsDone({ workout }: { workout: Workout }) {
  const { workoutPlan, setWorkoutPlan } = useContext(WorkoutContext);

  const handleMarkAsDone = (workout: Workout) => {
    setWorkoutPlan(workoutPlan.filter((item) => item.id !== workout.id));
    toast.success('Done Successfully');
  };

  return (
    <button
      type="button"
      className="flex items-center gap-1.5 bg-[#CCFF00] hover:bg-[#b8e600] text-black text-xs font-bold px-4 py-2 rounded-full transition-colors cursor-pointer"
      onClick={() => handleMarkAsDone(workout)}
    >
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
      Mark as Done
    </button>
  );
}

export default MarkAsDone;
