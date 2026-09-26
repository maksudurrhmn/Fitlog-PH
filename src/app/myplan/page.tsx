'use client';
import PlanCard from '@/components/myplanpage/PlanCard';
import SavedCard from '@/components/myplanpage/SavedCard';
import { WorkoutContext } from '@/context/WorkoutProvider';
import React, { useContext, useMemo, useState } from 'react';

function MyPlan() {
  const { workoutPlan = [], savedWorkout = [] } = useContext(WorkoutContext);

  // Calculate top banner stats dynamically for Today's Plan
  const totalExercises = workoutPlan.length;
  const totalMinutes = useMemo(() => {
    return workoutPlan.reduce((acc: number, item: any) => acc + (item.duration || 0), 0);
  }, [workoutPlan]);
  const totalCalories = useMemo(() => {
    return workoutPlan.reduce((acc: number, item: any) => acc + (item.caloriesBurned || 0), 0);
  }, [workoutPlan]);

  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');

  return (
    <section className="bg-[#0C0D10]">
      <div className="container mx-auto space-y-12  text-white p-4 font-inter">
        <div>
          <h2>My Plan</h2>
          <p>Cap of five lifts for today. Finish them, then load more.</p>
        </div>
        <div className="flex justify-between items-center p-12 bg-[#13161D] rounded-2xl border border-[#232732]">
          <div className="border-r border-gray-500 w-1/3 text-center">
            <p>Exercises</p>
            <span>{totalExercises}</span>
          </div>
          <div className="border-r border-gray-500 w-1/3 text-center">
            <p>Minutes</p>
            <span>{totalMinutes}</span>
          </div>
          <div className="w-1/3 text-center">
            <p>Calories</p>
            <span>{totalCalories}</span>
          </div>
        </div>
        {/* Tab Controls Header & Sort Dropdown */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Tab Buttons Box */}
          <div className="bg-[#15171D] p-1 rounded-xl border border-gray-800/60 flex items-center space-x-1">
            <button
              type="button"
              onClick={() => setActiveTab('today')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'today'
                  ? 'bg-[#1C1F26] text-[#CCFF00]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Today's Plan
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('saved')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'saved'
                  ? 'bg-[#1C1F26] text-[#CCFF00]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Saved
            </button>
          </div>

          {/* Hard-Coded Sort Dropdown */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-400 font-medium">Sort By</span>
            <select
              defaultValue="Duration"
              className="bg-[#15171D] text-gray-200 text-xs rounded-xl px-4 py-2 border border-gray-800/60 focus:outline-none focus:border-[#CCFF00] cursor-pointer"
            >
              <option value="Duration">Duration</option>
              <option value="Calories">Calories</option>
              <option value="Rating">Rating</option>
            </select>
          </div>
        </div>
        {activeTab === 'today' ? <PlanCard></PlanCard> : <SavedCard></SavedCard>}
      </div>
    </section>
  );
}

export default MyPlan;
