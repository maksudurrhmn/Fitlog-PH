import { WorkoutCardProps } from '@/types/workout';
import { Clock, Flame, Star } from 'lucide-react';
import Image from 'next/image';

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-base-300 bg-[#15171D]">
      <div className="relative h-56 w-full bg-[#15171D]">
        <Image src={workout.image} alt={workout.name} fill className="object-cover" />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold ">{workout.name}</h3>
            <h4 className="my-2">{workout.equipment}</h4>

            <div className="mt-2 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>

          <span className="shrink-0 text-sm font-semibold">{workout.difficulty}</span>
        </div>

        <p className="my-4 text-sm">{workout.description}</p>
        <div className="flex gap-8 items-center border-t border-[#20242E] pt-4">
          <p className="flex justify-center items-center gap-1 text-sm">
            <Clock className="w-4 h-4" />
            {workout.duration} min
          </p>
          <p className="flex justify-center items-center gap-1 text-sm">
            <Flame className="w-4 h-4" />
            {workout.caloriesBurned} kcal
          </p>
          <span className="flex justify-center items-center gap-1 text-sm">
            <Star className="w-4 h-4" />
            {workout.rating}
          </span>
        </div>
      </div>
    </article>
  );
}
