async function getWorkout() {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');

  if (!res.ok) {
    throw new Error('Failed to fetch library');
  }

  return res.json();
}

export default getWorkout;
