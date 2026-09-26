'use client';
import PlanCard from '@/components/myplanpage/PlanCard';
import SavedCard from '@/components/myplanpage/SavedCard';
import { WorkoutContext } from '@/context/WorkoutProvider';
import React, { useContext, useState } from 'react';

function MyPlan() {
  const { workoutPlan, savedWorkout } = useContext(WorkoutContext);
  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
  return (
    <section className="bg-[#0C0D10]">
      <div className="container mx-auto space-y-6  text-white p-4 font-sans">
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
