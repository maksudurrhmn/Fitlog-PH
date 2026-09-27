import Image from 'next/image';
import EmptyCard from './EmptyCard';
import Link from 'next/link';
import RemoveFromSaved from './RemoveFromSaved';
import { Workout } from '@/types/workout';
import { Clock, Flame, Star } from 'lucide-react';

type SavedCardProps = {
  workouts: Workout[];
};

function SavedCard({ workouts }: SavedCardProps) {
  return (
    <div className="space-y-4">
      {workouts.length === 0 ? (
        <EmptyCard></EmptyCard>
      ) : (
        workouts.map((workout) => (
          <div
            key={workout.id}
            className="bg-[#15171D] border border-gray-800/60 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            {/* Left Side Thumbnail & Exercise Specs */}
            <div className="flex items-center gap-4">
              <div className="relative w-28 h-20 sm:w-32 sm:h-20 rounded-xl overflow-hidden bg-gray-900 shrink-0">
                <Image src={workout.image} alt={workout.name} fill className="object-cover" />
              </div>
              <div className="space-y-1">
                <h3 className="font-oswald text-lg font-bold tracking-wide uppercase text-white">
                  {workout.name}
                </h3>
                <p className="text-xs text-gray-400 font-medium">{workout.equipment}</p>
                <div className="flex items-center gap-3 text-xs text-gray-300 pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#CCFF00]" />
                    {workout.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Flame className="w-3 h-3 text-[#CCFF00]" />
                    {workout.caloriesBurned}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#CCFF00]" />
                    {workout.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side Action Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end pt-2 sm:pt-0">
              <Link href={`/workout/${workout.id}`}>
                <button
                  type="button"
                  className="border border-gray-700 hover:bg-gray-800 text-gray-200 text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </Link>
              <RemoveFromSaved workout={workout}></RemoveFromSaved>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default SavedCard;
