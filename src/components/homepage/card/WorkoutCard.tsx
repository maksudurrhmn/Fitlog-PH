import { WorkoutCardProps } from '@/types/workout';
import { Clock, Flame, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link href={`/workout/${workout.id}`} className="block">
      <article className="overflow-hidden rounded-2xl  border border-[#15171D] hover:border-[#C2F800]  bg-[#15171D] transition-all duration-200 ease-linear ">
        <div className="relative h-56 w-full bg-[#15171D]">
          <Image src={workout.image} alt={workout.name} fill className="object-cover" />
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold font-oswald uppercase">{workout.name}</h3>
              <h4 className="my-2 text-[#9CA3AF] text-sm font-inter">{workout.equipment}</h4>

              <div className="mt-2 flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-semibold text-black font-inter"
                  >
                    {muscle}
                  </span>
                ))}
              </div>
            </div>

            <span className="shrink-0 text-sm font-semibold text-[#9CA3AF] font-inter">
              {workout.difficulty}
            </span>
          </div>

          <p className="my-4 text-sm text-[#9CA3AF] font-inter">{workout.description}</p>
          <div className="flex gap-8 items-center border-t border-[#20242E] pt-4">
            <p className="flex justify-center items-center gap-1 text-sm text-[#9CA3AF] font-inter">
              <Clock className="w-4 h-4" />
              {workout.duration} min
            </p>
            <p className="flex justify-center items-center gap-1 text-sm text-[#9CA3AF] font-inter">
              <Flame className="w-4 h-4" />
              {workout.caloriesBurned} kcal
            </p>
            <span className="flex justify-center items-center gap-1 text-sm text-[#9CA3AF] font-inter">
              <Star className="w-4 h-4" />
              {workout.rating}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
