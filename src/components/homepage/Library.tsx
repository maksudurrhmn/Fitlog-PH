import { Workout } from '@/types/workout';
import WorkoutCard from './card/WorkoutCard';

async function getLibrary() {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');

  if (!res.ok) {
    throw new Error('Failed to fetch library');
  }

  return res.json();
}

async function Library() {
  const data = await getLibrary();

  return (
    <section id="Library" className="bg-[#0C0D10] text-white py-8 md:py-16 lg:py-24">
      <div className="container mx-auto space-y-6">
        <div>
          <h2 className="text-3xl text-white font-bold font-oswald uppercase mb-1">The Library</h2>
          <p className="text-[#9CA3AF] font-inter">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {data.map((workout: Workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Library;
