'use client';
import PlanCard from '@/components/myplanpage/PlanCard';
import SavedCard from '@/components/myplanpage/SavedCard';
import { WorkoutContext } from '@/context/WorkoutProvider';
import React, { useContext, useMemo, useState } from 'react';

function MyPlan() {
  const { workoutPlan = [], savedWorkout = [] } = useContext(WorkoutContext);

  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
  // Checking current tab
  const currentPlan = activeTab === 'today' ? workoutPlan : savedWorkout;
  // Metrics
  const totalExercises = currentPlan.length;

  const totalMinutes = currentPlan.reduce((total, workout) => total + (workout.duration || 0), 0);

  const totalCalories = currentPlan.reduce(
    (total, workout) => total + (workout.caloriesBurned || 0),
    0
  );
  // Sorting functionality
  const [sortBy, setSortBy] = useState<'duration' | 'calories' | 'rating'>('duration');

  const sortedPlan = useMemo(() => {
    return [...currentPlan].sort((a, b) => {
      if (sortBy === 'duration') {
        return b.duration - a.duration;
      }

      if (sortBy === 'calories') {
        return b.caloriesBurned - a.caloriesBurned;
      }

      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }

      return 0;
    });
  }, [currentPlan, sortBy]);

  return (
    <section className="bg-[#0C0D10] min-h-screen">
      <div className="container mx-auto space-y-10  text-white p-4 font-inter">
        <div className="mt-8">
          <h2 className="font-oswald font-semibold text-white uppercase text-2xl mb-2">My Plan</h2>
          <p className="font-inter text-sm lg:text-base text-[#8A92A0]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>
        <div className="flex justify-between items-center p-12 bg-[#13161D] rounded-2xl border border-[#232732]">
          <div className="border-r border-gray-500 w-1/3 text-center">
            <p className="font-inter text-sm text-[#8A92A0]">Exercises</p>
            <span className="font-oswald font-bold text-3xl text-[#CCFF00]">{totalExercises}</span>
          </div>
          <div className="border-r border-gray-500 w-1/3 text-center">
            <p className="font-inter text-sm  text-[#8A92A0]">Minutes</p>
            <span className="font-oswald font-bold text-3xl">{totalMinutes}</span>
          </div>
          <div className="w-1/3 text-center">
            <p className="font-inter text-sm  text-[#8A92A0]">Calories</p>
            <span className="font-oswald font-bold text-3xl">{totalCalories}</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Tab Buttons */}
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

          {/* Sorting Dropdown */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-400 font-medium">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'duration' | 'calories' | 'rating')}
              className="bg-[#15171D] text-gray-200 text-xs rounded-xl px-4 py-2 border border-gray-800/60 focus:outline-none focus:border-[#CCFF00] cursor-pointer"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
        {/* Card based on selected Tab and Sorting */}
        {activeTab === 'today' ? (
          <PlanCard workouts={sortedPlan}></PlanCard>
        ) : (
          <SavedCard workouts={sortedPlan}></SavedCard>
        )}
      </div>
    </section>
  );
}

export default MyPlan;
