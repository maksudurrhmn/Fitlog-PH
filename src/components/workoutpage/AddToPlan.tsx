'use client';

import { WorkoutContext } from '@/context/WorkoutProvider';
import type { Workout } from '@/types/workout';
import { useContext } from 'react';
import { toast } from 'react-toastify';

function AddToPlan({ workout }: { workout: Workout }) {
  const { workoutPlan, setWorkoutPlan } = useContext(WorkoutContext);

  const handleAddToPlan = (workout: Workout) => {
    if (workoutPlan.length === 5) {
      toast.warning('Cap of five lifts for today. Finish them, then load more.');
      return;
    }

    const isAlreadyAdded = workoutPlan.some((item) => item.id === workout.id);

    if (isAlreadyAdded) {
      toast.warning('Already in your plan');
      return;
    }

    setWorkoutPlan((prev) => [...prev, workout]);
    toast.success("Added to Today's plan");
  };

  return (
    <button
      type="button"
      className="flex cursor-pointer items-center gap-2 rounded-xl bg-[#CCFF00] px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#b8e600]"
      onClick={() => {
        handleAddToPlan(workout);
      }}
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
      Add to today's plan
    </button>
  );
}

export default AddToPlan;
