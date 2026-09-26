'use client';
import { WorkoutContext } from '@/context/WorkoutProvider';
import Link from 'next/link';
import React, { useContext } from 'react';

function NavCounter() {
  const { workoutPlan = [], savedWorkout = [] } = useContext(WorkoutContext);

  const totalPlan = workoutPlan.length;

  const totalSaved = savedWorkout.length;

  return (
    <div className="flex gap-4">
      <Link href="/myplan" className="text-[#D1D5DB] flex items-center gap-1 text-sm">
        Plan
        <span className="bg-[#C2F800] text-black w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">
          {totalPlan}
        </span>
      </Link>
      <Link href="/myplan" className="text-[#9CA3AF] flex items-center gap-1 text-sm">
        Saved
        <span className="border border-[#2D313B]  text-[#D1D5DB] w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">
          {totalSaved}
        </span>
      </Link>
    </div>
  );
}

export default NavCounter;
