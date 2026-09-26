import AddToPlan from '@/components/workoutpage/AddToPlan';
import AddToSaved from '@/components/workoutpage/AddToSaved';
import type { Workout } from '@/types/workout';
import Image from 'next/image';

async function getWorkout(workoutId: string): Promise<Workout> {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');

  if (!res.ok) {
    throw new Error('Failed to fetch workouts');
  }

  const workouts: Workout[] = await res.json();

  const workout = workouts.find((workout) => workout.id === Number(workoutId));

  if (!workout) {
    throw new Error('Workout not found');
  }

  return workout;
}

export default async function WorkoutDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const workout = await getWorkout(id);

  return (
    <section className="bg-[#0C0D10] text-white py-12 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Column: Remote Image */}
        <div className="relative aspect-square md:aspect-auto md:h-full w-full rounded-2xl overflow-hidden bg-[#15171D]">
          <Image src={workout.image} alt={workout.name} fill className="object-cover" priority />
        </div>

        {/* Right Column: Information & Actions */}
        <div className="space-y-6">
          {/* Header Title & Description */}
          <div className="space-y-2">
            <h1 className="font-oswald text-4xl sm:text-5xl font-bold tracking-wide uppercase text-white">
              {workout.name}
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {workout.description}
            </p>

            {/* Dynamic Muscle Group Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {workout.muscleGroups.map((group, index) => (
                <span
                  key={index}
                  className="bg-[#CCFF00] text-black text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {group}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#15171D] rounded-xl px-5 py-2 border border-gray-800/40 w-full overflow-hidden">
            <table className="w-full text-left border-collapse">
              <tbody className="divide-y divide-gray-800/60">
                {/* Row 1: Equipment */}
                <tr>
                  <th
                    scope="row"
                    className="font-oswald text-gray-400 font-normal uppercase tracking-wider text-xs py-3 pr-4"
                  >
                    EQUIPMENT
                  </th>
                  <td className="font-semibold text-gray-200 text-sm py-3 text-right">
                    {workout.equipment}
                  </td>
                </tr>

                {/* Row 2: Difficulty */}
                <tr>
                  <th
                    scope="row"
                    className="font-oswald text-gray-400 font-normal uppercase tracking-wider text-xs py-3 pr-4"
                  >
                    DIFFICULTY
                  </th>
                  <td className="font-semibold text-gray-200 text-sm py-3 text-right">
                    {workout.difficulty}
                  </td>
                </tr>

                {/* Row 3: Sets */}
                <tr>
                  <th
                    scope="row"
                    className="font-oswald text-gray-400 font-normal uppercase tracking-wider text-xs py-3 pr-4"
                  >
                    SETS
                  </th>
                  <td className="font-semibold text-gray-200 text-sm py-3 text-right">
                    {workout.sets}
                  </td>
                </tr>

                {/* Row 4: Reps */}
                <tr>
                  <th
                    scope="row"
                    className="font-oswald text-gray-400 font-normal uppercase tracking-wider text-xs py-3 pr-4"
                  >
                    REPS
                  </th>
                  <td className="font-semibold text-gray-200 text-sm py-3 text-right">
                    {workout.reps}
                  </td>
                </tr>

                {/* Row 5: Duration */}
                <tr>
                  <th
                    scope="row"
                    className="font-oswald text-gray-400 font-normal uppercase tracking-wider text-xs py-3 pr-4"
                  >
                    {workout.duration}
                  </th>
                  <td className="font-semibold text-gray-200 text-sm py-3 text-right">15 min</td>
                </tr>

                {/* Row 6: Calories */}
                <tr>
                  <th
                    scope="row"
                    className="font-oswald text-gray-400 font-normal uppercase tracking-wider text-xs py-3 pr-4"
                  >
                    {workout.caloriesBurned}
                  </th>
                  <td className="font-semibold text-gray-200 text-sm py-3 text-right">120 kcal</td>
                </tr>

                {/* Row 7: Rating */}
                <tr>
                  <th
                    scope="row"
                    className="font-oswald text-gray-400 font-normal uppercase tracking-wider text-xs py-3 pr-4"
                  >
                    {workout.rating}
                  </th>
                  <td className="font-semibold text-gray-200 text-sm py-3 text-right">4.7</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Instructions Section */}
          <div className="space-y-3 pt-2">
            <h2 className="font-oswald text-xl font-bold uppercase tracking-wide">INSTRUCTIONS</h2>
            <ol className="space-y-2 text-sm sm:text-base text-gray-300">
              {workout.instructions.map((step, index) => (
                <li key={index} className="leading-relaxed">
                  <span className="font-semibold text-white mr-1.5">{index + 1}.</span> {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <AddToPlan workout={workout} />

            <AddToSaved workout={workout} />
          </div>
        </div>
      </div>
    </section>
  );
}
