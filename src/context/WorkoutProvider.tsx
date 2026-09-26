'use client';

import { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

import type { Workout } from '@/types/workout';

type WorkoutContextType = {
  workoutPlan: Workout[];
  setWorkoutPlan: Dispatch<SetStateAction<Workout[]>>;
  savedWorkout: Workout[];
  setSavedWorkout: Dispatch<SetStateAction<Workout[]>>;
};

type WorkoutProviderProps = {
  children: ReactNode;
};

export const WorkoutContext = createContext<WorkoutContextType>({
  workoutPlan: [],
  setWorkoutPlan: () => {},
  savedWorkout: [],
  setSavedWorkout: () => {},
});

function WorkoutProvider({ children }: WorkoutProviderProps) {
  const [workoutPlan, setWorkoutPlan] = useState<Workout[]>([]);
  const [savedWorkout, setSavedWorkout] = useState<Workout[]>([]);

  const sharedData: WorkoutContextType = {
    workoutPlan,
    setWorkoutPlan,
    savedWorkout,
    setSavedWorkout,
  };

  return <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>;
}

export default WorkoutProvider;
